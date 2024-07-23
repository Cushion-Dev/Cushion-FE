import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import CreateCushion from './pages/CreateCushion';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Onboarding />,
  },
  {
    path: '/cushion/:id',
    element: <CreateCushion />,
  },
]);

export default router;
