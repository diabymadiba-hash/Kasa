import { useState } from "react"/*importation de useState pour gérer l'état du composant*/

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)/*stock l'index de l'image*/

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1/*Passe a l'image suivante ,boucle infinie*/
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1/*Passe à l'image précédent boucle infinie inverse*/
    )
  }

  if (!pictures || pictures.length === 0) {
    return null /*si aucune image on afiche rien*/
  }

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}/*affiche l image correspondant*/
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      {pictures.length > 1 && (/*affichage conditionnel(flèche)*/
        <>
          <button className="carousel-prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="carousel-next" onClick={nextSlide}>
            ❯
          </button>

          <p className="carousel-counter">
            {currentIndex + 1} / {pictures.length}
          </p>
        </>
      )}
    </div>
  )
}
