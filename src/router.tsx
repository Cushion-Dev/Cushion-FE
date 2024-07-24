import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import CreateCushion from './pages/CreateCushion';
import UserSetting from './pages/UserSetting';
import Test from './pages/Test';
import App from './pages/App';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/intro',
    element: <Onboarding />,
  },
  {
    path: '/',
    element: <Test />,
  },
  {
    path: '/cushion/:id',
    element: <CreateCushion />,
  },
]);

export default router;
