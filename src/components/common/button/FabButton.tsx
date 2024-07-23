import { styled } from 'styled-components';

import { ReactComponent as AddIcon } from '../../../../public/assets/icon/add-line.svg';
import { semantic } from '../../../styles/semantic';

import FabInteraction from './interaction/FabInteraction';
import ButtonWrapper from './ButtonWrapper';

interface FabButtonProps {
  disabled?: boolean;
}

function FabButton({ disabled = false }: FabButtonProps) {
  const iconColor = disabled
    ? semantic.light.object.transparent.disabled
    : semantic.light.base.solid.white;
  return (
    <ButtonWrapper disabled={disabled}>
      <FabInteraction disabled={disabled}></FabInteraction>
      <StyledFabButton disabled={disabled}>
        <AddIcon fill={iconColor}></AddIcon>
      </StyledFabButton>
    </ButtonWrapper>
  );
}

const StyledFabButton = styled.button<FabButtonProps>`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  background: ${({ disabled }) =>
    disabled
      ? semantic.light.object.transparent.disabled
      : semantic.light.accent.solid.normal};

  padding: 8px;
  box-shadow:
    0px 1.6px 5px 0px rgba(12, 10, 9, 0.1),
    0px 4.2px 13.3px 0px rgba(12, 10, 9, 0.08),
    0px 8px 24px 0px rgba(12, 10, 9, 0.06),
    0px 24px 36px 0px rgba(12, 10, 9, 0.05),
    0px 0px 8.6px 0px rgba(12, 10, 9, 0.09);
`;

export default FabButton;
