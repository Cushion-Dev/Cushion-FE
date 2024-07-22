import { css, styled } from 'styled-components';
import { semantic } from '../../../../styles/semantic';
import { type } from '../type';

interface ArrowProps {
  type: type;
}

function ArrowIcon({ type }: ArrowProps) {
  return <StyledArrowIcon type={type} />;
}

const getArrowColor = (type: ArrowProps['type']) => {
  return type === 'cta'
    ? css`
        color: ${semantic.light.base.solid.white};
      `
    : css`
        color: ${semantic.light.object.transparent.alternative};
      `;
};

const StyledArrowIcon = styled.svg<ArrowProps>`
  ${({ type }) => getArrowColor(type)}
`;

export default ArrowIcon;
