import styled, { css } from 'styled-components';
import { TYPO } from '../../../styles/typo';
import { semantic } from '../../../styles/semantic';

const MenuContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  align-self: stretch;

  gap: 0.5rem;
  padding: 0.75rem 0.75rem 0.75rem 1rem;

  &:hover {
    border-radius: 0.75rem;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${semantic.light.object.solid.hero};
      opacity: 0.05;
      border-radius: 0.75rem;
    }
  }
`;

const MenuName = styled.span<{ $variant?: FontColor }>`
  position: relative;
  flex: 1 0 0;
  ${TYPO.label3};

  color: ${semantic.light.object.transparent.alternative};

  ${({ $variant }) => {
    if ($variant === 'withdraw') {
      return css`
        color: ${semantic.light.feedback.solid.negative};
      `;
    }
  }}
`;

const MenuIcon = styled.img`
  width: 1.375rem;
  height: 1.375rem;
`;

export { MenuContainer, MenuName, MenuIcon };
