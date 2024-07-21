//https://console.cloud.google.com/apis/credentials?project=twitter-2024

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ContextProviders } from './context/ContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ContextProviders>
        <App />
      </ContextProviders>
  </React.StrictMode>,
)
