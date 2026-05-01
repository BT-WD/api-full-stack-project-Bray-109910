import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')
console.log('client main loaded, rootEl=', rootEl)
if (!rootEl) throw new Error('root element not found — public/index.html must contain <div id="root"></div>')

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
)