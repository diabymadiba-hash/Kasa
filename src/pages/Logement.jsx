import { useParams, Navigate } from "react-router-dom"//useParams pour récupérer l'ID de l'URL
import { useEffect, useState } from "react"/*useState pour stocker les données du logement, useEffect pour charger les données au chargement du composant*/
import Carousel from "../components/Carousel.jsx"
import Tag from "../components/Tag"
import Host from "../components/Host"
import Rating from "../components/Rating"
import Collapse from "../components/Collapse"

export default function Logement() {
  const { id } = useParams()/*Récupère l'ID du logement à partir de l'URL*/
  const [logement, setLogement] = useState(undefined) // undefined = pas encore chargé

  useEffect(() => {
    fetch("http://localhost:8080/api/properties") 
      .then(res => res.json())
      .then(data => {/*chercher le logement correspondant*/
        const found = data.find(item => item.id === id)
        setLogement(found || null) // null = ID inconnu
      })
  }, [id])/*signifie : relance le fetch si l’ID change*/

  //  Pendant le chargement
  if (logement === undefined) {
    return <p>Chargement...</p>/* État de chargement : les données ne sont pas encore disponibles*/

  }

  //  Si ID inconnu → redirection 404
  if (logement === null) {
    return <Navigate to="/404" replace />
  }

  // Si logement trouvé → affichage normal
  return (
    <div className="logement-page">

      <Carousel pictures={logement.pictures} />

      <div className="logement-header">
        <div className="left">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>

          <div className="tags-container">
            {logement.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
        </div>

        <div className="right">
          <Host host={logement.host} />
          <Rating rating={parseInt(logement.rating)} />
        </div>
      </div>

      <div className="collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Collapse>
      </div>

    </div>
  )
}
