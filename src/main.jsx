import App from './App.jsx';
import store from './app/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.scss';
import Home from './pages/Home/Home.jsx';
import Actions from './pages/Actions/Actions.jsx';
import Creators from './pages/Creators/Creators.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
