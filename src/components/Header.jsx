import { NavLink } from "react-router-dom"/*il ajoute automatiquement une classe active quand la page correspond à l’URL.*/

export default function Header() {
  return (
    <header className="header">
    <img src="/images/logo.png" alt="Kasa" className="logo" />


      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A Propos</NavLink>
      </nav>
    </header>
  )
}
