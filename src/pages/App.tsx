import styled from 'styled-components';
import { Textarea } from '../components';

const App = () => {
  return (
    <Container>
      <Textarea />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
