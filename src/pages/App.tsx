import styled from 'styled-components';
import { TYPO } from '../styles/typo';
import ListItem from '../components/common/ListItem/ListItem';
import { Textarea } from '../components';

const App = () => {
  return (
    <Container>
      <ListItem
        userName='홍길동'
        relation='상사'
        timeStamp='5일전'
        content='오전에 주신 업무 다 완료했습니다! 혹시 오늘 몸 상태가 조금 좋지 않아서 그런데 가능하다면 조금 일찍 들어가도 될지 여쭤봅니다!'
        isEditing={true}
      />
      <ListItem
        userName='홍길동'
        relation='상사'
        timeStamp='5일전'
        content='오전에 주신 업무 다 완료했습니다! 혹시 오늘 몸 상태가 조금 좋지 않아서 그런데 가능하다면 조금 일찍 들어가도 될지 여쭤봅니다!'
        isEditing={true}
        disabled
      />
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
