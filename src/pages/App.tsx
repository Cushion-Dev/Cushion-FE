import styled from 'styled-components';
import SpeechExample from '../components/common/Bubble/SpeechExample';
import Attach from '../components/common/Attach/Attach';

const App = () => {
  return (
    <Container>
      <Attach>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
      </Attach>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
