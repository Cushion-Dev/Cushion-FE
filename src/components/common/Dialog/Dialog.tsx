import { useRef } from 'react';
import {
  DialogContainer,
  WrapText,
  TitleText,
  SubText,
  ButtonContainer,
  Button,
} from '../../../styles/common/Dialog/Dialog';
import Divider from '../Divider';
import { styled } from 'styled-components';
import useOcrMutation from '../../../hooks/useOcrMutation';
import { useOcrLoading } from '../../../stores/Modal/useModalStore';
import useLoadingModalStore from '../../../stores/Modal/useLoadingModalStore';

interface IDialogProps {
  variant?: ButtonVariant;
  titleText: string;
  subText: string;
  cancelText: string;
  eventText: string;
  roomId?: number;
  onCancel: () => void;
  onEvent?: () => void;
}

const Dialog = ({
  variant,
  titleText,
  subText,
  cancelText,
  eventText,
  roomId,
  onCancel,
  onEvent,
}: IDialogProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { mutate: postOcr } = useOcrMutation(roomId || 0);
  const { open: openOcrLoading } = useOcrLoading();
  const { setMessage } = useLoadingModalStore();

  const onUploadImageButtonClick = () => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  };

  const upLoadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    if (event.target.files.length > 3) return;

    const formData = new FormData();
    for (let i = 0; i < event.target.files.length; i++) {
      formData.append('file', event.target.files[i]);
    }

    postOcr({ formData: formData, roomId: roomId });
    onCancel();
    setMessage('첨부된 이미지의 대화 내용을 읽고 있어요');
    openOcrLoading();
  };

  return (
    <DialogContainer>
      <WrapText>
        <TitleText>{titleText}</TitleText>
        <SubText>{subText}</SubText>
      </WrapText>
      <Divider variant='dialog' />
      <ButtonContainer>
        <Button onClick={onCancel}>{cancelText}</Button>
        {eventText === '이미지 첨부하기' && (
          <UploadImageInput
            type='file'
            accept='image/*'
            ref={inputRef}
            onChange={upLoadImage}
            multiple
          />
        )}
        <Button
          onClick={
            eventText === '이미지 첨부하기' ? onUploadImageButtonClick : onEvent
          }
          $variant={variant}
        >
          {eventText}
        </Button>
      </ButtonContainer>
    </DialogContainer>
  );
};

const UploadImageInput = styled.input`
  display: none;
`;

export default Dialog;
