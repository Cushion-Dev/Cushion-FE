import { styled } from 'styled-components';
import TextField from '../TextField/TextField';
import { TYPO } from '../../../styles/typo';

interface TextFieldProps {
  label: string;
  placeholder: string;
  helperText: string;
  maxLetterCount: number;
  readonly?: boolean;
  disabled?: boolean;
  extraText: string;
  getFn?: (value: string) => void;
}

function FormInput({
  label,
  placeholder,
  helperText,
  maxLetterCount,
  readonly,
  disabled,
  extraText,
  getFn,
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
        getFn={getFn}
      ></TextField>
      <StyledText>{extraText}</StyledText>
    </StyledFormInput>
  );
}

const StyledFormInput = styled.div`
  display: flex;
  padding: 0.5rem 1rem 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 1rem;
  align-self: stretch;
  flex-wrap: wrap;
`;

const StyledText = styled.span`
  ${TYPO.title1}
`;

export default FormInput;
