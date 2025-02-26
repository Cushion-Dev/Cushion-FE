import styled from 'styled-components';
import { semantic } from '../../semantic';
import { TYPO } from '../../typo';

const WrapCallout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 1rem;
`;

const CCallout = styled.div`
  display: flex;
  align-items: center;

  gap: 0.625rem;
  padding: 0.5rem 0.75rem;

  border-radius: 0.5rem;
  border: 1px solid ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.fill.transparent.assistive};
`;

const InfoIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

const CalloutText = styled.span`
  ${TYPO.caption2}
  color: ${semantic.light.object.transparent.alternative};
`;

const Terms = styled.a`
  ${TYPO.caption2}
  color: ${semantic.light.object.transparent.alternative};
  text-decoration: underline;
`;

export { WrapCallout, CCallout, InfoIcon, CalloutText, Terms };
