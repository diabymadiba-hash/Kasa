export default function Rating({ rating }) {
  const maxStars = 5

  return (
    <div className="rating">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1
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
