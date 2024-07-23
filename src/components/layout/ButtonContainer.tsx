import styled from 'styled-components';
import { semantic } from '../../styles/semantic';

const ButtonContainer = ({ children }: IChildren) => {
  return <WrapButton>{children}</WrapButton>;
};

export default ButtonContainer;

const WrapButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  align-self: stretch;

  gap: 0.75rem;
  padding: 1.5rem 1rem;

  border-top: 1px solid ${semantic.light.border.transparent.alternative};
  background: ${semantic.light.bg.solid.normal};
`;
