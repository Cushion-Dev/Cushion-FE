import { styled, css } from 'styled-components';
import { semantic } from '../../../../styles/semantic';

interface FabInteractionProps {
  disabled?: boolean;
}

function FabInteraction({ disabled = false }: FabInteractionProps) {
  return <StyledInteraction disabled={disabled}></StyledInteraction>;
}

const StyledInteraction = styled.div<FabInteractionProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  border-radius: 9999px;
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        background: ${semantic.light.object.solid.hero};
      }
      &:active {
        background: ${semantic.light.object.solid.hero};
      }
    `};
`;

export default FabInteraction;
