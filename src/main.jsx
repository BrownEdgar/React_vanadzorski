import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import App from './App'
import './index.css'
import About, { fetchData } from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Contactus from "./pages/ContactUs/Contact"
import ErrorPage from './pages/404/ErrorPage';
import Post from './pages/Post/Post';
import SignIn from './pages/SignIn/SignIn';

const checkLogin = () => {

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'posts', element: <About />, loader: fetchData },
      { path: 'posts/:id', element: <Post />, loader: checkLogin },
      { path: 'blog', element: <Blog /> },
      { path: 'contact-us', element: <Contactus /> },
      { path: 'sign-in', element: <SignIn /> },
      { path: '*', element: <ErrorPage /> },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
