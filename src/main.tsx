import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { CurrencyContextProvider } from './context/CurrencyContext.tsx'
import { FavoritesContextProvider } from './context/FavoritesContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CurrencyContextProvider>
      <FavoritesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FavoritesContextProvider>
    </CurrencyContextProvider>
  </React.StrictMode>
)
