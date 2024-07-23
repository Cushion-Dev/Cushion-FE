import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Onboarding />,
  },
]);

export default router;
