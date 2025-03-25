import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import TaskContext from './context/TaskContext.jsx'

// localStorage.clear() //used to empty the storage of browser , only need to run once
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthContext>

      <TaskContext>

        <App />

      </TaskContext>


    </AuthContext>

  </StrictMode>,
)
