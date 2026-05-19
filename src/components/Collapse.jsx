import { useState } from "react"/*importation de useState pour gérer l'état du composant*/
import arrow from "../assets/arrow.png"/*importation de l'image de la flèche pour le toggle*/


export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false)/*état pour savoir si le collapse est ouvert ou fermé*/

  return (
    <div className="collapse">
      
      {/*Toggle : inverse l’état open (ouvre/ferme le collapse*/}
      <div className="collapse__header" onClick={() => setOpen(!open)}>
        <span>{title}</span>

        {/*la flèche change en fonction de l'état pour faire la rotation */}
        <img
          src={arrow}
          alt="toggle"
          className={open ? "arrow arrow--open" : "arrow"}
        />
      </div>

      {/* CONTENU — visible seulement si open = true */}
      {open && (
        <div className="collapse__content">
          {children}
        </div>
      )}
    </div>
  )
}
