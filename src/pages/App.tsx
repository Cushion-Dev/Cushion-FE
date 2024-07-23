import styled from 'styled-components';
import SpeechExample from '../components/common/Bubble/SpeechExample';

const App = () => {
  return (
    <Container>
      <SpeechExample />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
