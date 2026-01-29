import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AnalyticaFlow } from './AnalyticaFlow'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnalyticaFlow />
    <Toaster richColors />
  </StrictMode>,
)
