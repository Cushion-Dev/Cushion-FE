import styled from 'styled-components';
import SearchField from '../components/common/SearchField';
import ListItem from '../components/common/ListItem/ListItem';
import TextField from '../components/common/TextField/TextField';
import FormInput from '../components/common/Form/FormInput';

const App = () => {
  return (
    <Container>
      <FormInput
        label='레이블'
        placeholder='플레이스 홀더 텍스트'
        helperText='헬퍼 텍스트'
        maxLetterCount={15}
        extraText='을(를) 하고있는'
      ></FormInput>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
