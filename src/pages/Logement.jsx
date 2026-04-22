import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Carousel from "../components/Carousel.jsx"
import Tag from "../components/Tag"
import Host from "../components/Host"
import Rating from "../components/Rating"
import Collapse from "../components/Collapse"

export default function Logement() {
  const { id } = useParams()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === id)
        setLogement(found)
      })
  }, [id])

  if (!logement) return <p>Chargement...</p>

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
