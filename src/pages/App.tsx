import styled from 'styled-components';
import SearchField from '../components/common/SearchField';


const App = () => {
  return (
    <Container>

      <FormInput
        label='레이블'
        placeholder='플레이스 홀더 텍스트'
        helperText='헬퍼 텍스트'
        maxLetterCount={20}
        extraText='에서'
      />
      <BottomSheet
        type='edit'
        title='쿠션 만들기'
        bannerTitle={`푹신해진 쿠션을\r\n전달받는 상대방은 누구인가요?`}
        bannerDescription='아래의 항목을 모두 입력 및 선택해주세요.'
        buttonText='쿠션만들기'
      ></BottomSheet>
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
