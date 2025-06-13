import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/Test/Test'
import { ErrorBoundary } from 'react-error-boundary'

import Fallback from './components/ErrorBoundary/Fallback'

createRoot(document.getElementById('root')).render(
  <ErrorBoundary FallbackComponent={Fallback}>
    <App />
  </ErrorBoundary>
)
