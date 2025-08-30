import './main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Toaster } from 'sonner'
import React from 'react'
import { QueryProvider } from './components/providers/query-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
        <App />
        <Toaster richColors position='bottom-right' />
    </QueryProvider>
  </StrictMode>
)
