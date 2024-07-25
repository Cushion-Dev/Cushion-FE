import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { TYPO } from '../styles/typo';
import { semantic } from '../styles/semantic';
import { MESSAGES } from '../constants/messages';

import { useEditUserModal, useMakeModal } from '../stores/Modal/useModalStore';
import {
  Container,
  AppScreen,
  Navbar,
  Viewport,
  Divider,
  Textarea,
  SystemBubble,
  UserBubble,
  Popover,
  DimmedScreen,
  Dialog,
  OverlayScreen,
  LoadingBanner,
  Modal,
  BottomSheet,
} from '../components';
import { getCookie } from '../utils/cookies';
import useAuthStore from '../stores/useAuthStore';
import { useNavigate, useParams } from 'react-router-dom';
import useUserInfoMutation from '../hooks/useUserInfoMutation';

interface UserInfo {
  affiliation: string;
  job: string;
  realName: string;
}

const CreateCushion = () => {
  const {
    isOpen: isMakeOpen,
    open: makeOpen,
    close: makeClose,
  } = useMakeModal();
  const { isOpen: isEditUserOpen, close: editUserClose } = useEditUserModal();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { mutate: postInfo } = useUserInfoMutation();

  const { logIn } = useAuthStore();

  const handleAddImageClick = () => setIsDialogOpen(true);
  const handleDialogCancel = () => setIsDialogOpen(false);
  const handleLoadingAnimation = () => setIsLoading(true);

  const userInfo: UserInfo = {
    affiliation: localStorage.getItem('affiliation') || '',
    job: localStorage.getItem('job') || '',
    realName: localStorage.getItem('name') || '',
  };

  if (!id) {
    const accessToken = getCookie('accessToken');

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      logIn();
      postInfo(userInfo);
    } else {
      navigate('/');
    }
  }

  useEffect(() => {
    const delay = setTimeout(() => {
      makeOpen();
    }, 300);

    return () => clearTimeout(delay);
  }, []);

  return (
    <Container>
      <AppScreen>
        <Navbar type='local' title='홍길동(상사)님과의 쿠션' />
        <Viewport>
          <ChatInfoContainer>
            <DateStamp>2024.7.19.금</DateStamp>
            <IntroText>{MESSAGES.introText}</IntroText>
          </ChatInfoContainer>
          <Divider variant='chat' />
          <SystemBubble
            bubblePage='greeting'
            bodyText={MESSAGES.systemMessage.startMessage('홍길동(상사)')}
          />
          <UserBubble bodyText={MESSAGES.systemMessage.exampleMessage} />
          <SystemBubble bodyText={MESSAGES.systemMessage.systemExample} />
        </Viewport>
        <TextFieldContainer>
          <Popover
            title='상대방 맞춤 쿠션'
            bodyText='상대방과의 대화 내역이 있으신가요? 캡처 이미지를 첨부하면, 맞춤형 쿠션을 받을 수 있어요.'
          />
          <Textarea onAddImageClick={handleAddImageClick} />
        </TextFieldContainer>
        {isMakeOpen && (
          <Modal type='bottomSheet' onClose={makeClose}>
            <BottomSheet type='make' messageType='makeCushion'></BottomSheet>
          </Modal>
        )}
        {isEditUserOpen && (
          <Modal type='bottomSheet' onClose={editUserClose}>
            <BottomSheet type='make' messageType='editUser'></BottomSheet>
          </Modal>
        )}
        {isDialogOpen && (
          <DimmedScreen>
            <Dialog
              variant='cta'
              titleText={MESSAGES.dialog.ocr.title}
              subText={MESSAGES.dialog.ocr.sub}
              cancelText={MESSAGES.dialog.ocr.cancel}
              eventText={MESSAGES.dialog.ocr.attach}
              onCancel={handleDialogCancel}
              onEvent={handleLoadingAnimation}
            />
          </DimmedScreen>
        )}
        {isLoading && (
          <OverlayScreen>
            <LoadingBanner />
          </OverlayScreen>
        )}
      </AppScreen>
    </Container>
  );
};

export default CreateCushion;

const ChatInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  gap: 1rem;
  padding: 1rem 0;
`;

const DateStamp = styled.span`
  text-align: center;

  ${TYPO.caption2}
  color: ${semantic.light.object.transparent.alternative};
`;

const IntroText = styled.span`
  text-align: center;
  color: ${semantic.light.object.transparent.alternative};

  ${TYPO.caption2}
`;

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  position: relative;

  padding: 1rem 1rem 1.5rem 1rem;

  border-top: 1px solid ${semantic.light.border.transparent.neutral};
  background: ${semantic.light.bg.solid.heavy};
`;
