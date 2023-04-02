import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Auth from './context/Auth'
import CarInformation from './context/CarInformation'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth>
      <CarInformation>
        <App />
      </CarInformation>
    </Auth>
  </BrowserRouter>
)
