import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import { MainRouteApp } from './MainRouteApp.jsx'
import { ControlEscolarApp } from './ControlEscolarApp.jsx'
import { store  } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ControlEscolarApp />
    </Provider>
  </React.StrictMode>,
)
