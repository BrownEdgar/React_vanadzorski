import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App'
import './index.css'
import { Blog, ContactUs, ErrorPage, Home, Post, Posts, SignIn } from './pages';
import ROUTES from './routes';



const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.POSTS, element: <Posts />, },
      { path: ROUTES.SPECIAL_POST, element: <Post />, },
      { path: ROUTES.BLOG, element: <Blog /> },
      { path: ROUTES.CONTACT_US, element: <ContactUs /> },
      { path: ROUTES.SIGNIN, element: <SignIn /> },
      { path: '*', element: <ErrorPage /> },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
