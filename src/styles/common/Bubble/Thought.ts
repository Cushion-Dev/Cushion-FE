import styled from 'styled-components';
import { TYPO } from '../../../styles/typo';
import { semantic } from '../../../styles/semantic';

const ThoughtTextContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  padding: 0 1rem;
`;

const ThoughtText = styled.span`
  ${TYPO.caption2};
  color: ${semantic.light.object.transparent.alternative};
`;

export { ThoughtTextContainer, ThoughtText };
