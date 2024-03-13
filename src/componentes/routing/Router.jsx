import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Privacy from '../privacy/privacy';
import LandingPage from '../Home/langing/LandingPage';
import FilterPosts from '../../pratice/FilterPosts';
import FilterPostWithUseState from '../../pratice/FilterPostWithUseState';

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
      {
        path: "/posts",
        element: <FilterPosts />
      },
      {
        path: "/filter-posts",
        element: <FilterPostWithUseState />
      },
    ]
  },
  
], {basename: "/iPrepQ"});

export default router;