import { styled } from 'styled-components';
import TextField from '../TextField/TextField';
import { TYPO } from '../../../styles/typo';
import { semantic } from '../../../styles/semantic';

interface TextFieldProps {
  label: string;
  placeholder: string;
  type: string;
  helperText: string;
  extraText: string;
  value?: string;
  maxLetterCount: number;
  readonly?: boolean;
  disabled?: boolean;
  getFn?: (value: string) => void;
  changeFn?: (value: string) => void;
}

function FormInput({
  label,
  placeholder,
  helperText,
  maxLetterCount,
  readonly,
  disabled,
  extraText,
  type,
  value,
  changeFn,
}: TextFieldProps) {
  return (
    <StyledFormInput>
      <TextField
        label={label}
        placeholder={placeholder}
        helperText={helperText}
        maxLetterCount={maxLetterCount}
        readonly={readonly}
        disabled={disabled}
        type={type}
        changeFn={changeFn}
        value={value}
      ></TextField>
      <StyledText>{extraText}</StyledText>
    </StyledFormInput>
  );
}

const StyledFormInput = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StyledText = styled.span`
  color: ${semantic.light.object.transparent.alternative};
  ${TYPO.title1};
`;

export default FormInput;
