import { css, styled } from 'styled-components';
import { semantic } from '../../../../styles/semantic';

interface IconProps {
  disabled?: boolean;
}

function IconInteraction({ disabled = false }: IconProps) {
  return <StyledInteraction disabled={disabled}></StyledInteraction>;
}

const StyledInteraction = styled.div<IconProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.05;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        background: ${semantic.light.object.solid.hero};
      }
      &:active {
        background: ${semantic.light.object.solid.hero};
      }
    `}

  ${({ disabled }) => disabled && `pointer-events: none;`}
`;

export default IconInteraction;
