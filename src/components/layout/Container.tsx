import styled from 'styled-components';
import { semantic } from '../../styles/semantic';

const Container = ({ children }: IChildren) => {
  return <AllContainer>{children}</AllContainer>;
};

export default Container;

const AllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100vw;
  height: 100vh;
  min-width: 20rem;

  background: ${semantic.light.bg.solid.heavier};
`;
