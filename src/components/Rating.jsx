export default function Rating({ rating }) {
  const maxStars = 5

  return (
    <div className="rating">
      {[...Array(maxStars)].map((_, index) => {/*crée un tableau de 5 éléments pour afficher les étoiles*/
        const starValue = index + 1/*valeur de l'étoile (1 à 5)*/
        return (
          <span
            key={index}
            className={starValue <= rating ? "star filled" : "star"}
          >
            ★
          </span>
        )
      })}
    </div>
  )
}
