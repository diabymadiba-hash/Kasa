import Banner from "../components/Banner"
import Collapse from "../components/Collapse"

export default function About() {
  return (
    <div className="about-page">
      <Banner image="/images/home-banner1.jpg" />

      <div className="about-collapses">
        <Collapse title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées.
          </p>
        </Collapse>

        <Collapse title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur entraînera une exclusion de la plateforme.
          </p>
        </Collapse>

        <Collapse title="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter.
          </p>
        </Collapse>

        <Collapse title="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Pour nos hôtes comme pour les voyageurs, chaque logement respecte les normes de sécurité établies.
          </p>
        </Collapse>
      </div>
    </div>
  )
}
