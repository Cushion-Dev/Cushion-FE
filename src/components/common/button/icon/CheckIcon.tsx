import { css, styled } from 'styled-components';
import { semantic } from '../../../styles/semantic';

interface CheckProps {
  disabled: string;
}

function CheckIcon({ disabled }: CheckProps) {
  return <StyledArrowIcon disabled={disabled} />;
}

const getCheckColor = (disabled: CheckProps['disabled']) => {
  return disabled === 'true'
    ? css`
        color: ${semantic.light.base.solid.white};
      `
    : css`
        color: ${semantic.light.accent.solid.hero};
      `;
};

const StyledArrowIcon = styled.svg<CheckProps>`
  ${({ disabled }) => getCheckColor(disabled)}
`;

export default CheckIcon;
