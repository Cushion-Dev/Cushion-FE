import { Popover } from '../components';
import styled from 'styled-components';

const App = () => {
  return (
    <Container>
      <Popover title="팝오버 타이틀" bodyText="팝오버 문장은 최대 3줄까지 입력 가능합니다." />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
