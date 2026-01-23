import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AnalyticaFlow } from './AnalyticaFlow'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnalyticaFlow />
  </StrictMode>,
)
