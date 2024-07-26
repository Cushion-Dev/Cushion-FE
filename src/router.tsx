import { createBrowserRouter } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import CreateCushion from './pages/CreateCushion';
import UserSetting from './pages/UserSetting';
import ChatList from './pages/ChatList';

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Onboarding />,
  },
  {
    path: '/cushion/:id',
    element: <CreateCushion />,
  },
  {
    path: '/cushion',
    element: <CreateCushion />,
  },
  {
    path: '/chat-list/:id',
    element: <ChatList></ChatList>,
  },
  {
    path: '/user-setting',
    element: <UserSetting></UserSetting>,
  },
]);

export default router;
