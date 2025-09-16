import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/poppins"; // defaults to weight 400
import "@fontsource/poppins/600.css"; 
import "@fontsource/poppins/700.css"; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
