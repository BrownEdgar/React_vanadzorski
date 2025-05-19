import App from './App.jsx';
import store from './app/store';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.scss';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
