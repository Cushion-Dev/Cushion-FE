import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import UserSetting from './pages/UserSetting';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <UserSetting />,
  },
]);

export default router;
