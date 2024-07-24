import styled, { keyframes } from 'styled-components';
import { semantic } from '../../../styles/semantic';

const DimmedScreen = ({ children }: IChildren) => {
  return <Screen>{children}</Screen>;
};

export default DimmedScreen;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Screen = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 32.5rem;
  height: 64rem;

  padding: 0rem 2rem;

  background: ${semantic.light.bg.transparent.dimmed};
  animation: ${fadeIn} 0.3s ease-in-out;
`;
