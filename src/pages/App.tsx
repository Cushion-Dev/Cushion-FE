import styled from 'styled-components';
import { TYPO } from '../styles/typo';
import Button from '../components/common/button/Button';
import SelectButton from '../components/common/button/SelectButton';
import IconButton from '../components/common/button/IconButton';

const App = () => {
  return (
    <>
      <Button size='sm' type='cta'>
        CTA 버튼
      </Button>
      <Button size='sm' disabled={true} type='label'>
        CTA 버튼
      </Button>
      <SelectButton disabled={true}>셀럭터블 칩</SelectButton>
      <IconButton type='default' size='lg'></IconButton>
    </>
  );
};

export default App;

const Font = styled.h2`
  ${TYPO.display1}
`;
