import { BrowserRouter, Routes, Route } from "react-router-dom"//importation des outils de routage 
import Home from "./pages/Home"
import About from "./pages/About"
import Logement from "./pages/Logement"
import Error404 from "./pages/Error404"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {/*acive le systeme de navigation*/
  return (
    <BrowserRouter>
      <Header />
  
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />   
        </Routes>
      </main>

      <Footer />
    </BrowserRouter> /*Définit les différentes routes */
  )
}


/*point d'entrée de l'application*/