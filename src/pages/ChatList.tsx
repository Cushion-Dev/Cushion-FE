import { styled } from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import {
  useEditProfileModal,
  useLogoutDialog,
  useMakeModal,
  useWithdrawDialog,
} from '../stores/Modal/useModalStore';
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
import { ListContainer } from '../styles/common/ListItem/ListItem';
import { API } from '../services/api';
import { formatDate } from '../utils/formatDate';

interface IRoom {
  lastMessage: string;
  lastUsedAt: string;
  partnerName: string;
  relationship: string;
  roomId: number;
}

const ChatList = () => {
  const {
    isOpen: isMakeOpen,
    open: makeOpen,
    close: makeClose,
  } = useMakeModal();

  const { isOpen: isEditProfileOpen, close: editProfileClose } =
    useEditProfileModal();

  const { isOpen: isOpenLogoutDialog, close: CloseLogoutDialog } =
    useLogoutDialog();

  const { isOpen: isOpenWithdrawDialog, close: CloseWithdrawDialog } =
    useWithdrawDialog();

  const { data: chatRoomList } = useQuery({
    queryKey: ['chatRoomList'],
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

  return (
    <Container>
      <AppScreen>
        <Navbar type="global" />
        <SearchContainer>
          <SearchField placeholderText="상대방 이름을 검색해보세요..." />
        </SearchContainer>
        <Viewport>
          <ListContainer>
            {chatRoomList &&
              chatRoomList.map((room: IRoom) => (
                <ListItem
                  key={room.roomId}
                  userName={room.partnerName}
                  relation={room.relationship}
                  timeStamp={formatDate(room.lastUsedAt)}
                  content={room.lastMessage}
                />
              ))}
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
