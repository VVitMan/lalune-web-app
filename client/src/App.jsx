import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import FortuneStick from "./components/FortuneStick"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fortune-stick" element={<FortuneStick />} />
      </Routes>
    </>
    
  )
}

export default App
