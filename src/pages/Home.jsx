import { useEffect, useState } from "react"
import Banner from "../components/Banner"
import Card from "../components/Card";

export default function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setData(json)
      })
  }, [])

  return (
    <div className="home">
      <Banner
        image="/images/home-banner2.jpg"
        text="Chez vous, partout et ailleurs"
      />


      

      <div className="cards-container">
        {data.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}
