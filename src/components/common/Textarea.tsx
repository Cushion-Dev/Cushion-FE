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

const Textarea = () => {
  const textareaRef = useRef<HTMLDivElement>(null);

  const [isActive, setIsActive] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');

  const handleDocumentClick = useCallback((event: MouseEvent) => {
    if (
      textareaRef.current &&
      !textareaRef.current.contains(event.target as Node)
    ) {
      setIsActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [handleDocumentClick]);

  const handleTextAreaClick = () => {
    setIsActive(true);
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextareaValue(event.target.value);
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
          <AddImage src={ICONS.textarea.addImage} />
          <Send
            src={
              textareaValue.trim().length > 0
                ? ICONS.textarea.sendTrue
                : ICONS.textarea.sendFalse
            }
          />
        </ButtonContainer>
      </WrapTextArea>
    </TextareaContainer>
  );
};

export default Textarea;
