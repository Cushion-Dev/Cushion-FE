import { styled } from 'styled-components';
import { semantic } from '../../semantic';

export const AttachContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 488px;
  padding: 48px 24px;
  border: 1px solid ${semantic.light.border.transparent.neutral};
  background: ${semantic.light.bg.solid.heavy};
  border-radius: 4px;
  box-shadow:
    0px 1.3px 1.1px 0px rgba(12, 10, 9, 0.07),
    0px 2.1px 3.8px 0px rgba(12, 10, 9, 0.05),
    0px 4px 9.3px 0px rgba(12, 10, 9, 0.05),
    0px 0px 6.1px 0px rgba(12, 10, 9, 0.07);
`;
