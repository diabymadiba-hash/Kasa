export default function Banner({ image, text }) {// Composant pour afficher une bannière 
  return (
    <div className="banner">
      <img src={image} alt="banner" className="banner__img" />

      {text && (/*props*/
        <div className="banner__content">
          <p className="banner__text">{text}</p>
        </div>
      )}
    </div>
  )
}
