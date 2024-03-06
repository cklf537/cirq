import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Privacy from '../privacy/privacy';
import LandingPage from '../Home/langing/LandingPage';

const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <LandingPage />
      },
      {
        path: "/privacy",
        element: <Privacy />
      },
    ]
  },
  
]);

export default router;