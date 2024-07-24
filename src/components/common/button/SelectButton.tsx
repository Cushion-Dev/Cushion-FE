import { ReactNode, useState } from 'react';
import { styled } from 'styled-components';

import { semantic } from '../../../styles/semantic';
import { size, type } from './type';

import { ReactComponent as SelectIcon } from '../../../../public/assets/icon/button/check-line.svg';

import ButtonInteraction from './interaction/ButtonInteraction';
// import { ICONS } from '../../../styles/common/icons';

interface SelectButtonProps {
  size?: size;
  type?: type;
  children: ReactNode;
  disabled?: boolean;
  checkFn?: (value: boolean) => void;
}

function SelectButton({
  size = 'lg',
  type = 'chip',
  disabled = false,
  children,
  checkFn,
}: SelectButtonProps) {
  const [selected, setSelected] = useState(false);
  const iconColor = iconColorHandler(disabled);

  const handleClickButton = () => {
    setSelected((prev) => !prev);

    if (checkFn) checkFn(!selected);
  };
  return (
    <SelectButtonWrapper disabled={disabled} onClick={handleClickButton}>
      <ButtonInteraction
        size={size}
        type={type}
        disabled={disabled}
        selected={selected}
      ></ButtonInteraction>
      <StyledSelectButton selected={selected} disabled={disabled}>
        {children}
        {selected && <SelectIcon fill={iconColor}></SelectIcon>}
      </StyledSelectButton>
    </SelectButtonWrapper>
  );
}

const iconColorHandler = (disabled: SelectButtonProps['disabled']) => {
  return disabled
    ? semantic.light.object.transparent.disabled
    : semantic.light.accent.solid.hero;
};

const SelectButtonWrapper = styled.div<{ disabled: boolean }>`
  position: relative;
  ${({ disabled }) => (disabled ? 'cursor: not-allowed' : 'cursor: pointer')}
`;

const StyledSelectButton = styled.button<{ selected: boolean }>`
  padding: 0.625rem 1rem 0.625rem 1rem;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
        padding: 0.625rem 0.75rem 0.625rem 1rem;
        gap: 6px;

        `
      : `background: ${semantic.light.fill.transparent.alternative};
       opacity: 1;
        color: ${semantic.light.object.transparent.alternative};
        border: 1px solid ${semantic.light.fill.transparent.alternative};

        `}
`;

export default SelectButton;

// const CheckIcon = styled.img`
//   width: 1.5rem;
//   height: 1.5rem;
// `;
