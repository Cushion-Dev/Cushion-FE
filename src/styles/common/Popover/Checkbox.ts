import styled from 'styled-components';
import { TYPO } from '../../typo';
import { semantic } from '../../semantic';

const CheckboxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
`;

const CheckboxIcon = styled.img`
  display: flex;
  align-items: center;
  padding: 0.125rem;

  cursor: pointer;
`;

const CheckboxCaption = styled.span`
  ${TYPO.caption2}
  color: ${semantic.light.inversed.solid.secondary};
`;

export { CheckboxContainer, CheckboxIcon, CheckboxCaption };
