import { styled } from 'styled-components';

import { semantic } from '../styles/semantic';
import {
  useEditProfileModal,
  useMakeModal,
} from '../stores/Modal/useModalStore';

import FabButton from '../components/common/Button/FabButton';
import SearchField from '../components/common/SearchField';
import ListItem from '../components/common/ListItem/ListItem';
import { AppScreen, Container, Navbar, Viewport } from '../components';
import Modal from '../components/common/Modal/Modal';
import BottomSheet from '../components/common/BottomSheet/BottomSheet';
import { ListContainer } from '../styles/common/ListItem/ListItem';

function ChatList() {
  const { isOpen: isEditProfileOpen, close: editProfileClose } =
    useEditProfileModal();
  const {
    isOpen: isMakeOpen,
    open: makeOpen,
    close: makeClose,
  } = useMakeModal();

  return (
    <Container>
      <AppScreen>
        <Navbar type='global'></Navbar>
        <SearchContainer>
          <SearchField placeholderText='상대방 이름을 검색해보세요...'></SearchField>
        </SearchContainer>
        <Viewport>
          <ListContainer>
            <ListItem
              userName='홍길동'
              relation='상사'
              timeStamp='오늘'
              content='오전에 주신 업무 다 완료 했습니다 ! 혹시 오늘 몸 상태가 조금 좋지 않아서 그런데 가능하다면 조금 일찍 들어가도 될지 여쭤봅니다 !'
            ></ListItem>
          </ListContainer>
          <FabButton clickFn={makeOpen}></FabButton>
        </Viewport>
        {isMakeOpen && (
          <Modal type='bottomSheet' onClose={makeClose}>
            <BottomSheet type='make' messageType='makeCushion'></BottomSheet>
          </Modal>
        )}
        {isEditProfileOpen && (
          <Modal type='bottomSheet' onClose={editProfileClose}>
            <BottomSheet type='edit' messageType='editProfile'></BottomSheet>
          </Modal>
        )}
      </AppScreen>
    </Container>
  );
}

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
