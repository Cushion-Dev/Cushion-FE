import { css, styled } from 'styled-components';
import { semantic } from '../../../styles/semantic';
import { size, type } from './type';

interface InteractionProps {
  size: size;
  type: type;
  disabled: boolean;
}

function InteractionContainer({ size, type, disabled }: InteractionProps) {
  return (
    <StyledInteraction
      size={size}
      type={type}
      disabled={disabled}
    ></StyledInteraction>
  );
}

const sizeHandler = (size: InteractionProps['size']) => {
  switch (size) {
    case 'lg':
      return `
            border-radius: 12px;
        `;
    case 'md':
      return `
            border-radius: 12px;
        `;
    case 'sm':
      return `
            border-radius: 8px;
        `;
  }
};

const StyledInteraction = styled.div<InteractionProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.05;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      background: ${semantic.light.object.solid.hero};
    `}

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

  ${({ disabled, type }) => {
    if (disabled && type === 'label')
      return css`
        background: none;
      `;
  }}

  ${({ size }) => sizeHandler(size)}
`;

export default InteractionContainer;
