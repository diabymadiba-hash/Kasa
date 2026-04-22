import { useState } from "react"

export default function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  if (!pictures || pictures.length === 0) {
    return null
  }

  return (
    <div className="carousel">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />

      {pictures.length > 1 && (
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
