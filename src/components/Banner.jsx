export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="banner" className="banner__img" />

      {text && (
        <div className="banner__content">
          <p className="banner__text">{text}</p>
        </div>
      )}
    </div>
  )
}
