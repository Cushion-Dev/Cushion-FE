import { ReactNode, useState } from 'react';
import { styled } from 'styled-components';

import { semantic } from '../../../styles/semantic';
import { size, type } from './type';

import { ReactComponent as SelectIcon } from '../../../../public/assets/icon/button/check-line.svg';

import ButtonInteraction from './interaction/ButtonInteraction';
import { useSelectedStore } from '../../../stores/useSelectButtonStore';

interface SelectButtonProps {
  value: string;
  size?: size;
  type?: type;
  children: ReactNode;
  disabled?: boolean;
}

function SelectButton({
  value,
  size = 'lg',
  type = 'chip',
  disabled = false,
  children,
}: SelectButtonProps) {
  const [selected, setSelected] = useState(false);
  const {
    selectedCount,
    addSelectedCount,
    subSelectedCount,
    addSelectedName,
    subSelectedName,
  } = useSelectedStore();
  const iconColor = iconColorHandler(disabled);

  const handleClickButton = () => {
    if (!selected) {
      addSelectedCount();
      addSelectedName(value);
    } else {
      subSelectedCount();
      subSelectedName(value);
    }
    setSelected((prev) => !prev);
  };
  return (
    <SelectButtonWrapper disabled={disabled} onClick={handleClickButton}>
      <ButtonInteraction
        size={size}
        type={type}
        disabled={disabled}
        selected={selected}
      ></ButtonInteraction>
      <StyledSelectButton
        selected={selected}
        $selectedCount={selectedCount}
        disabled={disabled}
      >
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

const StyledSelectButton = styled.button<{
  selected: boolean;
  $selectedCount: number;
}>`
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

  ${({ selected, $selectedCount }) => {
    if (selected)
      return `background: ${semantic.light.accent.transparent.normal};
        border: 1px solid ${$selectedCount > 1 ? semantic.light.feedback.solid.negative : semantic.light.accent.solid.normal};
        color: ${$selectedCount > 1 ? semantic.light.feedback.solid.negative : semantic.light.accent.solid.normal};
        padding: 0.625rem 0.75rem 0.625rem 1rem;
        gap: 6px;
        `;
    return `background: ${semantic.light.fill.transparent.alternative};
       opacity: 1;
        color: ${semantic.light.object.transparent.alternative};
        border: 1px solid ${semantic.light.fill.transparent.alternative};

        `;
  }}
`;

export default SelectButton;

// const CheckIcon = styled.img`
//   width: 1.5rem;
//   height: 1.5rem;
// `;
