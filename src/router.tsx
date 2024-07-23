import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import CreateCushion from './pages/CreateCushion';
import UserSetting from './pages/UserSetting';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/intro',
    element: <Onboarding />,
  },
  {
    path: '/',
    element: <UserSetting />,
  },
  {
    path: '/cushion/:id',
    element: <CreateCushion />,
  },
]);

export default router;
