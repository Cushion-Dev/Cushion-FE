import { styled } from 'styled-components';
import { semantic } from '../../semantic';

const AttachContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  width: 30.5rem;

  gap: 1.5rem;
  padding: 3rem 1rem;

  border-radius: 0.25rem;
  border: 0.06rem solid ${semantic.light.border.transparent.neutral};
  background: ${semantic.light.bg.solid.heavier};

  box-shadow:
    0px 1.3px 1.1px 0px rgba(12, 10, 9, 0.07),
    0px 2.1px 3.8px 0px rgba(12, 10, 9, 0.05),
    0px 4px 9.3px 0px rgba(12, 10, 9, 0.05),
    0px 0px 6.1px 0px rgba(12, 10, 9, 0.07);
`;

const AttachIcon = styled.img`
  position: absolute;
`;

export { AttachContainer, AttachIcon };
