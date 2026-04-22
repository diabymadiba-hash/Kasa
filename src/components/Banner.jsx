export default function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="banner" className="banner__img" />
      {text && <p className="banner__text">{text}</p>}
    </div>
  )
}
