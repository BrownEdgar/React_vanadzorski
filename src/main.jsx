import { createRoot } from 'react-dom/client'
import './index.css'
import App from './test/Test'
import { Provider } from 'react-redux'
import store from './app/store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>

)
