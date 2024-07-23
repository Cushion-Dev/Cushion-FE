import styled from 'styled-components';
import SearchField from '../components/common/SearchField';

const App = () => {
  return (
    <Container>
      <SearchField placeholderText="플레이스 홀더 텍스트" />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
