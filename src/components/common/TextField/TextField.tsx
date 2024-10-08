import { useState } from 'react';
import { css, styled } from 'styled-components';
import { TYPO } from '../../../styles/typo';
import { semantic } from '../../../styles/semantic';
import { ReactComponent as DeleteAllIcon } from '../../../../public/assets/icon/textfield/delete-back-2-fill.svg';

interface TextFieldProps {
  label: string;
  placeholder: string;
  helperText: string;
  value?: string;
  type: string;
  maxLetterCount: number;
  readonly?: boolean;
  disabled?: boolean;
  changeFn?: (value: string) => void;
}

function TextField({
  label,
  placeholder,
  helperText,
  maxLetterCount,
  readonly = false,
  disabled = false,
  type,
  changeFn,
}: TextFieldProps) {
  // const [letterCount, setLetterCount] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   setLetterCount(type.length);
  // }, []);

  const handleClickDeleteAll = () => {
    if (changeFn) changeFn('');
    // setLetterCount(0);
    setIsTyping(false);
    setIsError(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCurrentValue = event.currentTarget.value;
    if (changeFn) changeFn(inputCurrentValue);

    if (inputCurrentValue.length === 0) setIsTyping(false);
    else setIsTyping(true);

    if (inputCurrentValue.length >= maxLetterCount) setIsError(true);
    else setIsError(false);

    // setLetterCount(inputCurrentValue.length);
  };

  return (
    <TextFiledContainer>
      <InputWrapper $isError={isError} $isTyping={isTyping}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput
          readOnly={readonly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleInputChange}
          value={type}
        ></StyledInput>
        {isTyping && (
          <IconWrapper onClick={handleClickDeleteAll}>
            <DeleteAllIcon></DeleteAllIcon>
          </IconWrapper>
        )}
      </InputWrapper>
      <HelpContainer>
        <HelperText $isError={isError}>{helperText}</HelperText>
        {/* <LetterCount>
          {letterCount}/{maxLetterCount}
        </LetterCount> */}
      </HelpContainer>
    </TextFiledContainer>
  );
}

const TextFiledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  flex: 1;
`;

const InputWrapper = styled.div<{ $isTyping: boolean; $isError: boolean }>`
  position: relative;
  display: flex;
  align-items: center;

  width: 100%;

  gap: 1rem;
  padding: 0.625rem 0.25rem;

  border-bottom: 0.063rem solid
    ${({ $isTyping, $isError }) => {
      if ($isTyping && !$isError)
        return `${semantic.light.accent.solid.normal}`;
      if (!$isTyping) return `${semantic.light.border.transparent.neutral}`;
      if ($isError) return `${semantic.light.feedback.solid.negative}`;
    }};
`;

const StyledLabel = styled.label`
  display: -webkit-box;

  flex-shrink: 0;
  ${TYPO.label2}
  color: ${semantic.light.object.transparent.alternative};
`;

const StyledInput = styled.input<{ disabled: boolean; readOnly: boolean }>`
  display: flex;
  align-items: center;

  width: 80%;

  padding-left: 0.625rem;

  font-size: 1.125rem;
  line-height: 2rem;
  border-radius: 0.5rem;

  border: none;
  outline: none;
  background: none;

  ${TYPO.body3}
  color: ${semantic.light.object.solid.hero};
  caret-color: ${semantic.light.accent.solid.normal};

  &::placeholder {
    color: ${semantic.light.object.transparent.assistive};
  }

  ${({ disabled, readOnly }) => {
    if (disabled === true || readOnly === true) return `background: #eeeeeb`;
    else
      return css`
        &:hover {
          background: #e8e8e6;
        }
      `;
  }}
`;

const HelpContainer = styled.div`
  display: flex;
  padding: 0.375rem 0.25rem;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1rem;
`;

const HelperText = styled.p<{ $isError: boolean }>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;
  overflow: hidden;
  color: ${({ $isError }) =>
    $isError
      ? `${semantic.light.feedback.solid.negative}`
      : `${semantic.light.object.transparent.assistive}`};
  text-overflow: ellipsis;

  ${TYPO.caption2}
`;

// const LetterCount = styled.p`
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 1;
//   overflow: hidden;
//   color: ${semantic.light.object.transparent.assistive};
//   text-overflow: ellipsis;

//   ${TYPO.caption2}
// `;

const IconWrapper = styled.button`
  background: none;
  cursor: pointer;
`;

export default TextField;
