import { useEffect, useState } from "react"/*useState stoker des donnéees,userEffect executer du code au chargement*/
import Banner from "../components/Banner"
import Card from "../components/Card"

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {/*recupere*/
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())/*Récupère les données de l'API et les convertit en JSON*/
      .then((json) => {
        console.log(json)
        setData(json)/*met à jour le state avec les logements*/
      })
  }, [])

  return (
    <div className="home">
      <Banner
        image="/images/home-banner2.jpg"
        text="Chez vous, partout et ailleurs"
      />



      <div className="cards-container">
        {data.map((logement) => (/*Affiche une carte pour chaque logement récupéré de l'API en utilisant le composant Card*/
          <Card
            key={logement.id}/*clé unique pour chaque carte*/
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}
