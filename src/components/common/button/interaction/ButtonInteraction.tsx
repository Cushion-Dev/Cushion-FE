import { css, styled } from 'styled-components';
import { semantic } from '../../../../styles/semantic';
import { size, type } from '../type';

interface InteractionProps {
  size: size;
  type: type;
  selected?: boolean;
  disabled: boolean;
}

function ButtonInteraction({
  size,
  type,
  disabled,
  selected,
}: InteractionProps) {
  return (
    <StyledInteraction
      size={size}
      type={type}
      selected={selected}
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
    `pointer-events: none;
      background: ${semantic.light.object.solid.hero};`}

  ${({ disabled, type, selected }) =>
    !disabled &&
    css`
      &:hover {
        ${type === 'chip' && selected === true
          ? `background: ${semantic.light.accent.solid.hero}`
          : `background: ${semantic.light.object.solid.hero};`}
      }
      &:active {
        ${type === 'chip' && selected === true
          ? `background: ${semantic.light.accent.solid.hero}`
          : `background: ${semantic.light.object.solid.hero};`}
      }
    `}

  ${({ disabled, type }) => {
    if (disabled && type === 'label')
      return `
        background: none;
      `;
  }}

  

  ${({ size }) => sizeHandler(size)}
`;

export default ButtonInteraction;
