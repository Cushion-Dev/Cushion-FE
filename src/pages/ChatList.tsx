import { styled } from 'styled-components';
import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';

import {
  useEditProfileModal,
  useLogoutDialog,
  useMakeModal,
  useWithdrawDialog,
} from '../stores/Modal/useModalStore';
import {
  ListContainer,
  EmptyIcon,
  EmptyState,
  EmptyText,
} from '../styles/common/ListItem/ListItem';
import {
  AppScreen,
  Container,
  Dialog,
  Navbar,
  Viewport,
  BottomSheet,
  Modal,
  FabButton,
  SearchField,
  ListItem,
} from '../components';

import { MESSAGES } from '../constants/messages';
import { semantic } from '../styles/semantic';
import { useAffiliationStore, useJobStore, useNameStore } from '../stores/useTextFieldStore';
import useEditProfileInfo from '../hooks/useEditPorfileMutation';
import useCreateRoomMutation from '../hooks/useCreateRoomMutation';
import { useSelectedStore } from '../stores/useSelectButtonStore';
import useTranslateName from '../hooks/useTranslateName';
import { API } from '../services/api';
import { formatDate } from '../utils/formatDate';
import { ICONS } from '../styles/common/icons';

interface IRoom {
  lastMessage: string;
  lastUsedAt: string;
  partnerName: string;
  relationship: string;
  roomId: number;
}

const ChatList = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const { mutate: editProfile } = useEditProfileInfo();
  const { mutate: makeCushion } = useCreateRoomMutation();
  const { translateToEng } = useTranslateName();

  const { isOpen: isMakeOpen, open: makeOpen, close: makeClose } = useMakeModal();
  const { isOpen: isEditProfileOpen, close: editProfileClose } = useEditProfileModal();
  const { isOpen: isOpenLogoutDialog, close: CloseLogoutDialog } = useLogoutDialog();
  const { isOpen: isOpenWithdrawDialog, close: CloseWithdrawDialog } = useWithdrawDialog();

  const { name } = useNameStore();
  const { job } = useJobStore();
  const { affiliation } = useAffiliationStore();
  const { selectedName } = useSelectedStore();

  const handleClickEditProfile = () => {
    editProfile({ affiliation: affiliation, job: job, realName: name });
  };

  const handleClickMakeCushion = () => {
    makeCushion({
      partnerName: name,
      partnerRel: translateToEng(selectedName[0]) || '',
    });

  };

  const { data: chatList = [], refetch } = useQuery({
    queryKey: ['chatList'],
    queryFn: () => API.get('/chat/rooms').then(({ data }) => data),
  });

  const handleLogout = async () => {
    try {
      await API.post('/members/logout', null, {
        withCredentials: true,
      });
    } catch (error) {
      console.error(`로그아웃 실패 ${error}`);
    }
  };

    const handleWithdraw = async () => {
      try {
        await API.delete('/members', {
          withCredentials: true,
        });
      } catch (error) {
        console.log(`회원 탈퇴 실패 ${error}`);
      }
    };
      
  const hasCheckedItems = checkedItems.length > 0;

  const handleCheckItem = (roomId: number) => {
    setCheckedItems((prev) =>
      prev.includes(roomId) ? prev.filter((id) => id !== roomId) : [...prev, roomId]
    );
  };

  const handleOpenContextMenu = () => setIsEditing(true);

  const deleteChatRoomsMutation = useMutation({
    mutationFn: (chatRoomIds: number[]) =>
      API.post('/chat/rooms/delete', { chatRoomIds }, { withCredentials: true }),
    onSuccess: () => refetch(),
    onError: (error) => console.error(`채팅방 삭제 실패: ${error}`),
  });

  const handleDelete = () => {
    if (checkedItems.length > 0) {
      deleteChatRoomsMutation.mutate(checkedItems);
      setCheckedItems([]);
    }
  };

  return (
    <Container>
      <AppScreen>
        <Navbar
          type="global"
          onClickMenu={handleOpenContextMenu}
          isEditing={isEditing}
          hasCheckedItems={hasCheckedItems}
          onDelete={handleDelete}
        />
        <SearchContainer>
          <SearchField placeholderText="상대방 이름을 검색해보세요..." />
        </SearchContainer>
        <Viewport>
          <ListContainer $variant={chatList.length === 0 ? 'empty' : 'list'}>
            {chatList.length > 0 ? (
              chatList.map((room: IRoom) => (
                <ListItem
                  key={room.roomId}
                  userName={room.partnerName}
                  relation={room.relationship}
                  timeStamp={formatDate(room.lastUsedAt)}
                  content={room.lastMessage}
                  roomId={room.roomId}
                  isEditing={isEditing}
                  onCheck={handleCheckItem}
                  disabled={false}
                />
              ))
            ) : (
              <EmptyState>
                <EmptyIcon src={ICONS.loading.loading2} />
                <EmptyText>{MESSAGES.emptyMessage}</EmptyText>
              </EmptyState>
            )}
          </ListContainer>
          <FabButton clickFn={makeOpen} />
        </Viewport>
        {isMakeOpen && (
          <Modal type="bottomSheet" onClose={makeClose}>
            <BottomSheet type="make" messageType="makeCushion"></BottomSheet>
          </Modal>
        )}
        {isEditProfileOpen && (
          <Modal type="bottomSheet" onClose={editProfileClose}>
            <BottomSheet type="edit" messageType="editProfile"></BottomSheet>
          </Modal>
        )}
        {isOpenLogoutDialog && (
          <Modal type="modal" onClose={makeClose}>
            <Dialog
              variant="cta"
              titleText={MESSAGES.dialog.logout.title}
              subText={MESSAGES.dialog.logout.sub}
              cancelText={MESSAGES.dialog.logout.cancel}
              eventText={MESSAGES.dialog.logout.logout}
              onCancel={CloseLogoutDialog}
              onEvent={handleLogout}
            />
          </Modal>
        )}
        {isOpenWithdrawDialog && (
          <Modal type="modal" onClose={makeClose}>
            <Dialog
              variant="negative"
              titleText={MESSAGES.dialog.withdraw.title}
              subText={MESSAGES.dialog.withdraw.sub}
              cancelText={MESSAGES.dialog.withdraw.cancel}
              eventText={MESSAGES.dialog.withdraw.withdraw}
              onCancel={CloseWithdrawDialog}
              onEvent={handleWithdraw}
            />
          </Modal>
        )}
      </AppScreen>
    </Container>
  );
};

const SearchContainer = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  border-bottom: 1px solid ${semantic.light.border.transparent.neutral};
  opacity: 1;
  background: ${semantic.light.bg.solid.light};
`;

export default ChatList;
