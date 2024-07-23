import styled, { css } from 'styled-components';
import { semantic } from '../../styles/semantic';

export type DividerVariant = 'chat' | 'dialog';

interface IDividerProps {
  variant: DividerVariant;
}

const Divider = ({ variant }: IDividerProps) => {
  return (
    <WrapDivider>
      <DividerLine $variant={variant} />
    </WrapDivider>
  );
};

export default Divider;

const WrapDivider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  height: 0.0625rem;
  padding-top: 0.0625rem;
`;

const DividerLine = styled.div<{ $variant: DividerVariant }>`
  width: 25.5rem;
  height: 0.0625rem;
  background: ${semantic.light.border.transparent.neutral};

  ${({ $variant }) => {
    if ($variant === 'chat')
      return css`
        width: 30.5rem;
        height: 0.0625rem;
      `;
  }}
`;
