import styled from 'styled-components';
import { semantic } from '../../../styles/semantic';

const OverlayScreen = ({ children }: IChildren) => {
  return <Screen>{children}</Screen>;
};

export default OverlayScreen;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;

  width: 32.5rem;
  height: 64rem;

  gap: 3rem;
  padding: 3rem;

  background: ${semantic.light.bg.transparent.overlay};
  backdrop-filter: blur(4px);
`;
