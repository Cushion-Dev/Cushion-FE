import { ReactNode, useState } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as CheckIcon } from '../../../public/assets/icon/check-line.svg';
import { semantic } from '../../styles/semantic';
import InteractionContainer from './button/InteractionContainer';
import { size, type } from './button/type';

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

  const handleClickButton = () => {
    setSelected((prev) => !prev);
  };
  return (
    <ButtonWrapper onClick={handleClickButton}>
      <InteractionContainer
        size={size}
        type={type}
        disabled={disabled}
        selected={selected}
      ></InteractionContainer>
      <StyledSelectButton selected={selected}>
        {children}
        {selected && <CheckIcon></CheckIcon>}
      </StyledSelectButton>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const StyledSelectButton = styled.button<{ selected: boolean }>`
  padding: 10px 16px 10px 16px;
  border-radius: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  &:hover {
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
