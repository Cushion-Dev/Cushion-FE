import styled from 'styled-components';
import { TYPO } from '../styles/typo';
import Button from '../components/common/button/Button';
import SelectButton from '../components/common/button/SelectButton';
import IconButton from '../components/common/button/IconButton';
import FabButton from '../components/common/button/FabButton';

const App = () => {
  return (
    <>
      <Button size='lg' type='cta' clickFn={() => console.log('click')}>
        CTA 버튼
      </Button>
      <Button size='md' type='cta' clickFn={() => console.log('click')}>
        CTA 버튼
      </Button>
      <Button size='sm' type='cta' clickFn={() => console.log('click')}>
        CTA 버튼
      </Button>
      <Button
        size='sm'
        type='cta'
        disabled
        clickFn={() => console.log('click')}
      >
        CTA 버튼
      </Button>
      <Button size='lg' type='neutral' clickFn={() => console.log('click')}>
        CTA 버튼
      </Button>
      <Button size='md' type='neutral' clickFn={() => console.log('click')}>
        CTA 버튼
      </Button>
      <Button size='sm' type='neutral' clickFn={() => console.log('click')}>
        CTA 버튼
      </Button>
      <Button
        size='sm'
        type='neutral'
        disabled
        clickFn={() => console.log('click')}
      >
        CTA 버튼
      </Button>
      <SelectButton disabled={false}>셀럭터블 칩</SelectButton>
      <SelectButton disabled={false}>셀럭터블 칩</SelectButton>
      <IconButton type='default' size='lg'></IconButton>
      <IconButton type='cta' size='lg'></IconButton>
      <IconButton type='default' size='lg' disabled></IconButton>
      <FabButton disabled={false}></FabButton>
      <FabButton disabled={true}></FabButton>
    </>
  );
};

export default App;

const Font = styled.h2`
  ${TYPO.display1}
`;
