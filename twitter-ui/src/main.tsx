import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ContextProviders } from './context/ContextProvider.tsx'
import { ApolloProvider } from '@apollo/client'
import client from './utils/ApolloClient.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ContextProviders>
        <App />
      </ContextProviders>
    </ApolloProvider>
  </React.StrictMode>,
)
