import { useState, useEffect, useRef, useCallback } from 'react';

import { ICONS } from '../../styles/common/icons';
import { MESSAGES } from '../../constants/messages';
import {
  TextareaContainer,
  WrapTextArea,
  TextArea,
  ButtonContainer,
  AddImage,
  Send,
} from '../../styles/common/Textarea';
import useMessage from '../../hooks/useMessageMutation';
import { usePersonalityStore } from '../../stores/usePersonalityStore';
import { useMessageLoading } from '../../stores/Modal/useModalStore';

const Textarea = ({ onAddImageClick, roomId }: any) => {
  const textareaRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');

  const { mutate: postMessage } = useMessage();
  const { personality } = usePersonalityStore();
  const { open: openMessageLoading } = useMessageLoading();
  console.log('text', personality);

  const handleDocumentClick = useCallback((event: MouseEvent) => {
    if (textareaRef.current && !textareaRef.current.contains(event.target as Node)) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [handleDocumentClick]);

  const handleTextAreaClick = () => setIsActive(true);

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleClickSend = () => {
    postMessage({
      message: textareaValue,
      personality: personality,
      roomId: roomId,
    });
    setTextareaValue('');
    openMessageLoading();
  };

  return (
    <TextareaContainer $isActive={isActive} ref={textareaRef}>
      <WrapTextArea>
        <TextArea
          placeholder={MESSAGES.textarea.placeholder}
          onClick={handleTextAreaClick}
          value={textareaValue}
          onChange={handleTextareaChange}
        />
        <ButtonContainer>
          <AddImage src={ICONS.textarea.addImage} onClick={onAddImageClick} />
          <Send
            onClick={handleClickSend}
            src={
              textareaValue.trim().length > 0 ? ICONS.textarea.sendTrue : ICONS.textarea.sendFalse
            }
          />
        </ButtonContainer>
      </WrapTextArea>
    </TextareaContainer>
  );
};

export default Textarea;
