import { NavLink } from "react-router-dom"

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
