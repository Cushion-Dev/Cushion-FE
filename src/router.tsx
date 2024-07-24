import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import UserSetting from './pages/UserSetting';
import Test from './pages/Test';
import App from './pages/App';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Test />,
  },
]);

export default router;
