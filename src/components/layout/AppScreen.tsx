import styled from 'styled-components';

const AppScreen = ({ children }: IChildren) => {
  return <HomeContainer>{children}</HomeContainer>;
};

export default AppScreen;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;

  flex: 1 0 0;
  max-width: 32.5rem;
`;
