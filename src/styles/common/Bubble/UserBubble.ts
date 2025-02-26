import styled from 'styled-components';
import { semantic } from '../../../styles/semantic';
import { TYPO } from '../../../styles/typo';

const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  align-self: stretch;

  gap: 0.5rem;
`;

const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  max-width: 19.75rem;

  gap: 1rem;
  padding: 0.625rem 1rem;

  border-radius: 1rem 0 1rem 1rem;
  border: 1px solid ${semantic.light.accent.solid.hero};
  background: ${semantic.light.bg.solid.light};

  box-shadow:
    0px 1.2px 0.8px 0px rgba(12, 10, 9, 0.04),
    0px 2.1px 1.6px 0px rgba(12, 10, 9, 0.03),
    0px 0px 5.6px 0px rgba(12, 10, 9, 0.06);
`;

const BodyText = styled.div`
  max-width: 17.75rem;

  ${TYPO.body2}
  color: ${semantic.light.object.solid.normal};
`;

export { MessageContainer, BubbleContainer, BodyText };
