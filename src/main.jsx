import App from './App.jsx';
import store from './app/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { lazy, Suspense } from 'react';
import './index.scss';
import Product from './pages/Product/Product.jsx';


const Home = lazy(() => import('@/pages/Home/Home.jsx'));
const Actions = lazy(() => import('@/pages/Actions/Actions.jsx'));
const Creators = lazy(() => import('@/pages/Creators/Creators.jsx'));



const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/actions',
        element: <Actions />,
      },
      {
        path: '/actions/:id',
        element: <Product />,
      },
      {
        path: '/creators',
        element: <Creators />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
