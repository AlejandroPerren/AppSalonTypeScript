import { createBrowserRouter } from 'react-router-dom';
import SignUp from '../pages/auth/SignUp';
import Login from '../pages/auth/Login';
import Home from '../pages/general/Home';


const router = createBrowserRouter([
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element:<Home />,
  },
]);

export default router;
