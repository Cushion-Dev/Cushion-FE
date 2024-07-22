import { createBrowserRouter } from 'react-router-dom';
import App from './pages/App';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

export default router;
