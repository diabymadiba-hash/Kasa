import { StrictMode } from 'react'/*problème potentiel dans l'application*/
import { createRoot } from 'react-dom/client' /*importe les outils de react*/
import './index.css'
import App from './App.jsx'
import './styles/main.scss';


createRoot(document.getElementById('root')).render(/*React trouve la div vide */
  <StrictMode>
    <App />
  </StrictMode>,
)
/*mode sécurité avec strictMode*/