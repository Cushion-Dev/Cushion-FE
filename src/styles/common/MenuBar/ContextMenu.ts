import styled from 'styled-components';
import { semantic } from '../../../styles/semantic';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 12.5rem;

  gap: 0.5rem;
  padding: 0.5rem;

  border-radius: 1rem;
  border: 1px solid ${semantic.light.border.transparent.neutral};
  background: ${semantic.light.bg.solid.light};

  box-shadow:
    0px 1.6px 5px 0px rgba(12, 10, 9, 0.1),
    0px 4.2px 13.3px 0px rgba(12, 10, 9, 0.08),
    0px 8px 24px 0px rgba(12, 10, 9, 0.06),
    0px 24px 36px 0px rgba(12, 10, 9, 0.05),
    0px 0px 8.6px 0px rgba(12, 10, 9, 0.09);
`;

const Divider = styled.img`
  height: 0.0625rem;
  align-self: stretch;
`;

export { MenuContainer, Divider };
