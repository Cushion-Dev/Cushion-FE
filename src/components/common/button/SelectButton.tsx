import { ReactNode, useState } from 'react';
import { styled } from 'styled-components';

import { semantic } from '../../../styles/semantic';
import { size, type } from './type';

import ButtonInteraction from './interaction/ButtonInteraction';
import ButtonWrapper from './ButtonWrapper';
import { ICONS } from '../../../styles/common/icons';

interface SelectButtonProps {
  size?: size;
  type?: type;
  children: ReactNode;
  disabled?: boolean;
}

function SelectButton({
  size = 'lg',
  type = 'chip',
  disabled = false,
  children,
}: SelectButtonProps) {
  const [selected, setSelected] = useState(false);
  const iconColor = iconColorHandler(disabled);

  const handleClickButton = () => {
    setSelected((prev) => !prev);
  };
  return (
    <ButtonWrapper disabled={disabled} clickFn={handleClickButton}>
      <ButtonInteraction
        size={size}
        type={type}
        disabled={disabled}
        selected={selected}></ButtonInteraction>
      <StyledSelectButton selected={selected} disabled={disabled}>
        {children}
        {selected && <CheckIcon src={ICONS.button.check}></CheckIcon>}
      </StyledSelectButton>
    </ButtonWrapper>
  );
}

const iconColorHandler = (disabled: SelectButtonProps['disabled']) => {
  return disabled
    ? semantic.light.object.transparent.disabled
    : semantic.light.accent.solid.hero;
};

const StyledSelectButton = styled.button<{ selected: boolean }>`
  padding: 10px 16px 10px 16px;
  border-radius: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  line-height: 20px;

  &:disabled {
    background: none;
    color: ${semantic.light.object.transparent.disabled};
    border: 1px solid ${semantic.light.border.transparent.neutral};
    cursor: not-allowed;
  }

  ${({ selected }) =>
    selected
      ? `background: ${semantic.light.accent.transparent.normal};
        border: 1px solid ${semantic.light.accent.solid.normal};
        color: ${semantic.light.accent.solid.normal};
        padding: 10px 12px 10px 16px;
        `
      : `background: ${semantic.light.fill.transparent.alternative} opacity: 0.08;
        color: ${semantic.light.object.transparent.alternative};
        `}
`;

export default SelectButton;

const CheckIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
