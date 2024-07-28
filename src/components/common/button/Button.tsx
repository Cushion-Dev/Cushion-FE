import { styled } from 'styled-components';
import { ReactNode } from 'react';

import { semantic } from '../../../styles/semantic';
import { buttonSize, buttonType } from '../../../styles/common/Button';
import { ReactComponent as ArrowIcon } from '../../../../public/assets/icon/button/arrow-right-s-line.svg';
import { size, type } from './type';

import ButtonInteraction from './interaction/ButtonInteraction';
import ButtonWrapper from './ButtonWrapper';

interface ButtonProps {
  type: type;
  size: size;
  disabled?: boolean;
  children: ReactNode;
  clickFn?: () => void;
}

function Button({
  type,
  size,
  disabled = false,
  children,
  clickFn,
}: ButtonProps) {
  const iconColor = iconColorHandler(type, disabled);
  return (
    <ButtonWrapper clickFn={clickFn} disabled={disabled}>
      <ButtonInteraction
        size={size}
        disabled={disabled}
        type={type}
      ></ButtonInteraction>
      <StyledButton type={type} size={size} disabled={disabled}>
        {children}
        {type !== 'label' && <ArrowIcon fill={iconColor}></ArrowIcon>}
      </StyledButton>
    </ButtonWrapper>
  );
}

const iconColorHandler = (type: type, disabled: boolean) => {
  if (disabled) return semantic.light.object.transparent.disabled;
  return type === 'cta'
    ? semantic.light.base.solid.white
    : semantic.light.object.transparent.alternative;
};

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

type StyledButtonProps = Omit<ButtonProps, 'clickFn'>;

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-style: none;
  background: none;
  gap: 0.5rem;
  width: 100%;
  flex: 1;

  &:disabled {
    background: none;
    color: ${semantic.light.object.transparent.disabled};
    cursor: not-allowed;
  }

  ${({ size }) => sizeHandler(size)}
  ${({ type }) => typeHandler(type)}
`;

export default Button;
