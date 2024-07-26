import styled from 'styled-components';
import { TYPO } from '../../../styles/typo';
import { semantic } from '../../../styles/semantic';
import { ICONS } from '../../../styles/common/icons';

interface IMainButtonProps {
  buttonText: string;
  onClick: () => void;
}

const MainButton = ({ buttonText, onClick }: IMainButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      {buttonText}
      <ArrowIcon src={ICONS.button.rightArrow} />
    </ButtonContainer>
  );
};

export default MainButton;

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
  background: ${semantic.light.accent.solid.normal};

  cursor: pointer;
  text-align: center;

  ${TYPO.label4}
  color: ${semantic.light.base.solid.white};

  &:hover {
    background: #dc850b;
  }
`;

const ArrowIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
