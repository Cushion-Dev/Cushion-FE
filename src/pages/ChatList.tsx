import { styled } from 'styled-components';

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
  DimmedScreen,
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
import {
  useAffiliationStore,
  useJobStore,
  useNameStore,
} from '../stores/useTextFieldStore';
import useEditProfileInfo from '../hooks/useEditPorfileMutation';

const ChatList = () => {
  const { mutate: editProfile } = useEditProfileInfo();

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

  const { name } = useNameStore();
  const { job } = useJobStore();
  const { affiliation } = useAffiliationStore();

  const handleClickEditProfile = () => {
    editProfile({ affiliation: affiliation, job: job, realName: name });
  };

  return (
    <Container>
      <AppScreen>
        <Navbar type='global' />
        <SearchContainer>
          <SearchField placeholderText='상대방 이름을 검색해보세요...' />
        </SearchContainer>
        <Viewport>
          <ListContainer>
            <ListItem
              userName='홍길동'
              relation='상사'
              timeStamp='오늘'
              content='오전에 주신 업무 다 완료 했습니다 ! 혹시 오늘 몸 상태가 조금 좋지 않아서 그런데 가능하다면 조금 일찍 들어가도 될지 여쭤봅니다 !'
            />
          </ListContainer>
          <FabButton clickFn={makeOpen} />
        </Viewport>
        {isMakeOpen && (
          <Modal type='bottomSheet' onClose={makeClose}>
            <BottomSheet type='make' messageType='makeCushion'></BottomSheet>
          </Modal>
        )}
        {isEditProfileOpen && (
          <Modal type='bottomSheet' onClose={editProfileClose}>
            <BottomSheet
              type='edit'
              messageType='editProfile'
              buttonFn={handleClickEditProfile}
            ></BottomSheet>
          </Modal>
        )}
        {isOpenLogoutDialog && (
          <DimmedScreen>
            <Dialog
              variant='cta'
              titleText={MESSAGES.dialog.logout.title}
              subText={MESSAGES.dialog.logout.sub}
              cancelText={MESSAGES.dialog.logout.cancel}
              eventText={MESSAGES.dialog.logout.logout}
              onCancel={CloseLogoutDialog}
            />
          </DimmedScreen>
        )}
        {isOpenWithdrawDialog && (
          <DimmedScreen>
            <Dialog
              variant='negative'
              titleText={MESSAGES.dialog.withdraw.title}
              subText={MESSAGES.dialog.withdraw.sub}
              cancelText={MESSAGES.dialog.withdraw.cancel}
              eventText={MESSAGES.dialog.withdraw.withdraw}
              onCancel={CloseWithdrawDialog}
            />
          </DimmedScreen>
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
