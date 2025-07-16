import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import LenisProvider from './components/LenisProvider.jsx'

import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      {/* <LenisProvider> */}
        <App />
      {/* </LenisProvider> */}
    </Router>
  </StrictMode>,
)
