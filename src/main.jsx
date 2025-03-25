import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'

// localStorage.clear() //used to empty the storage of browser , only need to run once
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

        <App />

    </AuthProvider>

  </StrictMode>,
)
