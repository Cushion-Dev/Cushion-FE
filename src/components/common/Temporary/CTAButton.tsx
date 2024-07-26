import styled from 'styled-components';
import { TYPO } from '../../../styles/typo';
import { semantic } from '../../../styles/semantic';

interface ICTAButtonProps {
  buttonText: string;
  onClick: () => void;
}

const CTAButton = ({ buttonText, onClick }: ICTAButtonProps) => {
  return <ButtonContainer onClick={onClick}>{buttonText}</ButtonContainer>;
};

export default CTAButton;

const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 11.25rem;

  gap: 0.5rem;
  flex: 1 0 0;
  padding: 1rem 1rem 1rem 1.25rem;

  border-radius: 0.75rem;
  border: 1px solid ${semantic.light.accent.solid.normal};
  background: ${semantic.light.accent.transparent.normal};

  cursor: pointer;
  text-align: center;

  ${TYPO.label4}
  color: ${semantic.light.accent.solid.normal};

  &:hover {
    background: #eaddc6;
  }
`;
