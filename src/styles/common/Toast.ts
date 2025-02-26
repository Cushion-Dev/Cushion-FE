import styled from 'styled-components';
import { semantic } from '../../styles/semantic';
import { TYPO } from '../../styles/typo';

const ToastContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0.625rem 1.25rem;

  border-radius: 0.75rem;
  border: 1px solid ${semantic.light.border.transparent.neutral};
  background: ${semantic.light.inversed.solid.background};

  box-shadow:
    0px 1.6px 5px 0px rgba(12, 10, 9, 0.1),
    0px 4.2px 13.3px 0px rgba(12, 10, 9, 0.08),
    0px 8px 24px 0px rgba(12, 10, 9, 0.06),
    0px 24px 36px 0px rgba(12, 10, 9, 0.05),
    0px 0px 8.6px 0px rgba(12, 10, 9, 0.09);
`;

const BodyText = styled.span`
  text-align: center;

  ${TYPO.body2}
  color: ${semantic.light.inversed.solid.primary};
`;

export { ToastContainer, BodyText };
