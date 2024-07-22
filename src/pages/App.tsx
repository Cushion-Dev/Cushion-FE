import styled from 'styled-components';
import { TYPO } from '../styles/typo';
import Button from '../components/common/button/Button';

const App = () => {
  return (
    <>
      <Button size='sm' type='cta'>
        CTA 버튼
      </Button>
      <Button size='sm' disabled={true} type='cta'>
        CTA 버튼
      </Button>
      <Button size='sm' type='neutral'>
        CTA 버튼
      </Button>
      <Button size='sm' disabled={true} type='neutral'>
        CTA 버튼
      </Button>
      <Button size='sm' type='empty'>
        CTA 버튼
      </Button>
      <Button size='sm' disabled={true} type='empty'>
        CTA 버튼
      </Button>
      <Button size='sm' type='label'>
        CTA 버튼
      </Button>
      <Button size='sm' disabled={true} type='label'>
        CTA 버튼
      </Button>
    </>
  );
};

export default App;

const Font = styled.h2`
  ${TYPO.display1}
`;
