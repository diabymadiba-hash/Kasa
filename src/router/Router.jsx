import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Logement from "../pages/Logement"
import Error404 from "../pages/Error404"
import About from "../pages/About"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}


/*route dynamique pour e logement*/