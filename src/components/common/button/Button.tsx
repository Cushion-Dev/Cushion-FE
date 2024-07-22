import { styled } from 'styled-components';
import { ReactNode } from 'react';
import { semantic } from '../../../styles/semantic';
import InteractionContainer from './InteractionContainer';
import { ReactComponent as ArrowIcon } from '../../../../public/assets/icon/arrow-right-s-line.svg';
import { size, type } from './type';
import { buttonSize, buttonType } from '../../../styles/common/Button';

interface ButtonProps {
  type: type;
  size: size;
  disabled?: boolean;
  children: ReactNode;
}

function Button({ type, size, disabled = false, children }: ButtonProps) {
  return (
    <ButtonWrapper>
      <InteractionContainer
        size={size}
        disabled={disabled}
        type={type}
      ></InteractionContainer>
      <StyledButton type={type} size={size} disabled={disabled}>
        {children}
        <ArrowIcon type={type}></ArrowIcon>
      </StyledButton>
    </ButtonWrapper>
  );
}

const typeHandler = (type: ButtonProps['type']) => {
  switch (type) {
    case 'cta':
      return buttonType.cta;
    case 'neutral':
      return buttonType.neutral;
    case 'empty':
      return buttonType.empty;
    case 'label':
      return buttonType.label;
  }
};

const sizeHandler = (size: ButtonProps['size']) => {
  switch (size) {
    case 'lg':
      return buttonSize.lg;
    case 'md':
      return buttonSize.md;
    case 'sm':
      return buttonSize.sm;
  }
};

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  background: none;

  &:disabled {
    background: none;
    color: ${semantic.light.object.transparent.disabled};
    cursor: not-allowed;
  }

  ${({ size }) => sizeHandler(size)}
  ${({ type }) => typeHandler(type)}
`;

export default Button;
