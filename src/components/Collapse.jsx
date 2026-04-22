import { useState } from "react"
import arrow from "../assets/arrow.png"


export default function Collapse({ title, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="collapse">
      
      {/* HEADER — on clique ici */}
      <div className="collapse__header" onClick={() => setOpen(!open)}>
        <span>{title}</span>

        {/* 👉 LA FLÈCHE DOIT ÊTRE ICI */}
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
