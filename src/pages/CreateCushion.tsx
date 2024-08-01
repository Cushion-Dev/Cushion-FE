import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { TYPO } from '../styles/typo';
import { semantic } from '../styles/semantic';
import { MESSAGES } from '../constants/messages';

import {
  useEditUserModal,
  useMakeModal,
  useMessageLoading,
  useOcrLoading,
  useCharacteristicsLoading,
} from '../stores/Modal/useModalStore';

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
import { useNameStore } from '../stores/useTextFieldStore';
import { useSelectedStore } from '../stores/useSelectButtonStore';
import useCreateRoomMutation from '../hooks/useCreateRoomMutation';
import useTranslateName from '../hooks/useTranslateName';
import useChatRoomQuery from '../hooks/useChatRoomQuery';
import { usePartnerStore } from '../stores/usePartnerStore';
import useEditPartnerInfo from '../hooks/useEditPartnerMutation';
import OcrLoadingBanner from '../components/common/Screen/OcrLoadingBanner';

interface UserInfo {
  affiliation: string;
  job: string;
  realName: string;
}

interface PartnerInfo {
  partnerName: string;
  partnerRel: string;
}

interface Message {
  messageId: number;
  senderType: 'BOT' | 'USER';
  content: string;
}

const CreateCushion = () => {
  const { isOpen: isMakeOpen, open: makeOpen, close: makeClose } = useMakeModal();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { mutate: postInfo } = useUserInfoMutation();
  const { mutate: createRoom } = useCreateRoomMutation();
  const { mutate: editPartner } = useEditPartnerInfo();
  const { translateToEng } = useTranslateName();
  const { data: roomData, isError } = useChatRoomQuery(id);

  const { isLogIn, logIn } = useAuthStore();
  const { name } = useNameStore();
  const { selectedName, addSelectedName } = useSelectedStore();
  const { setPartnerName, setPartnerRel } = usePartnerStore();

  const handleAddImageClick = () => setIsDialogOpen(true);
  const handleDialogCancel = () => setIsDialogOpen(false);

  const { isOpen: isEditUserOpen, close: editUserClose } = useEditUserModal();
  const { isOpen: isMessageLooadingOpen } = useMessageLoading();
  const { isOpen: isOcrLoadingOpen } = useOcrLoading();
  const { isOpen: isCharacteristicsLoadingOpen } = useCharacteristicsLoading();

  if (isError) console.error('get room error');

  useEffect(() => {
    if (roomData) {
      setPartnerName(roomData.partnerName);
      setPartnerRel(roomData.relationship);
      addSelectedName(roomData.relationship);
    }
  }, [roomData?.partnerName, roomData?.relationship]);

  useEffect(() => {
    if (!id) {
      const delay = setTimeout(() => {
        makeOpen();
      }, 300);
      localStorage.setItem('memberId', getCookie('memberId'));
      return () => clearTimeout(delay);
    }
  }, [id]);

  useEffect(() => {
    if (!id) {
      const accessToken = getCookie('accessToken');

      if (accessToken && !isLogIn) {
        logIn();

        const userInfo: UserInfo = {
          affiliation: localStorage.getItem('affiliation') || '',
          job: localStorage.getItem('job') || '',
          realName: localStorage.getItem('name') || '',
        };

        if (
          !localStorage.getItem('affiliation') ||
          !localStorage.getItem('job') ||
          !localStorage.getItem('name')
        ) {
          localStorage.setItem('affiliation', userInfo.affiliation);
          localStorage.setItem('job', userInfo.job);
          localStorage.setItem('name', userInfo.realName);
        }

        postInfo(userInfo);
      }
    }
  }, [id, isLogIn]);

  const partnerInfo: PartnerInfo = {
    partnerName: name,
    partnerRel: translateToEng(selectedName[0]) ?? '',
  };

  const handleClickCreateRoom = () => {
    createRoom(partnerInfo);
  };

  const handleClickEditUser = () => {
    editPartner(partnerInfo);
  };

  const handleClickBackButton = () => {
    const roomId = localStorage.getItem('memberId');
    navigate(`/chat-list/${roomId}`);
  };

  return (
    <Container>
      <AppScreen>
        <Navbar
          type="local"
          title={`${id ? `${roomData?.partnerName}(${roomData?.relationship})` : '-'}님과의 쿠션`}
          onClickBackButton={handleClickBackButton}
        />
        <Viewport type={'chat'}>
          <ChatInfoContainer>
            <DateStamp>{roomData?.createdAt}</DateStamp>
            <IntroText>{MESSAGES.introText}</IntroText>
          </ChatInfoContainer>
          <Divider variant="chat" />
          {roomData &&
            roomData?.messages.map((message: Message) =>
              message.senderType === 'BOT' ? (
                <SystemBubble key={message.messageId} bodyText={message.content} />
              ) : (
                <UserBubble key={message.messageId} bodyText={message.content} />
              )
            )}
        </Viewport>
        <TextFieldContainer>
          {localStorage.getItem('isChecked') === 'false' && (
            <Popover
              title="상대방 맞춤 쿠션"
              bodyText="상대방과의 대화 내역이 있으신가요? 캡처 이미지를 첨부하면, 맞춤형 쿠션을 받을 수 있어요."
            />
          )}
          <Textarea roomId={Number(id)} onAddImageClick={handleAddImageClick} />
        </TextFieldContainer>
        {isMakeOpen && (
          <Modal type="bottomSheet" onClose={makeClose}>
            <BottomSheet
              type="make"
              messageType="makeCushion"
              buttonFn={handleClickCreateRoom}></BottomSheet>
          </Modal>
        )}
        {isEditUserOpen && (
          <Modal type="bottomSheet" onClose={editUserClose}>
            <BottomSheet
              type="make"
              messageType="editUser"
              buttonFn={handleClickEditUser}></BottomSheet>
          </Modal>
        )}
        {isDialogOpen && (
          <DimmedScreen>
            <Dialog
              variant="cta"
              titleText={MESSAGES.dialog.ocr.title}
              subText={MESSAGES.dialog.ocr.sub}
              cancelText={MESSAGES.dialog.ocr.cancel}
              eventText={MESSAGES.dialog.ocr.attach}
              onCancel={handleDialogCancel}
              roomId={Number(id)}
            />
          </DimmedScreen>
        )}
        {isMessageLooadingOpen && (
          <OverlayScreen>
            <LoadingBanner />
          </OverlayScreen>
        )}
        {isOcrLoadingOpen && (
          <OverlayScreen>
            <OcrLoadingBanner />
          </OverlayScreen>
        )}
        {isCharacteristicsLoadingOpen && (
          <OverlayScreen>
            <OcrLoadingBanner />
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
