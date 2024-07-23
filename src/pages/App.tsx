import { Popover, Toast } from '../components';
import styled from 'styled-components';
import { TYPO } from '../styles/typo';


const App = () => {
  return (
    <Container>
      <Toast bodyText="토스트 메시지 내용" />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
