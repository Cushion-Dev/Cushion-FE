import Navbar from '../components';

const App = () => {
  return (
    <>
      <Navbar variant="global" />
      <Navbar variant="local" title="로컬 페이지 명" />
    </>
  );
};

export default App;
