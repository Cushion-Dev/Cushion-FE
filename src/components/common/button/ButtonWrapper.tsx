import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ButtonWrapperProps {
  disabled?: boolean;
  children: ReactNode;
  clickFn?: () => void;
}

function ButtonWrapper({ disabled, children, clickFn }: ButtonWrapperProps) {
  return (
    <StyledButtonWrapper onClick={clickFn} disabled={disabled}>
      {children}
    </StyledButtonWrapper>
  );
}

const StyledButtonWrapper = styled.div<ButtonWrapperProps>`
  position: relative;
  display: inline-block;
  ${({ disabled }) => (disabled ? 'cursor: not-allowed' : 'cursor: pointer')}
`;

export default ButtonWrapper;
