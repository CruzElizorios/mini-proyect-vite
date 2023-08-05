import React from 'react'
import ReactDOM from 'react-dom/client'
import Lista from './lista'
import './style.css'
import UserApp from './UserApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Lista/>
    <UserApp/>
  </React.StrictMode>,
)
