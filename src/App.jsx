import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Moive from "./Pages/Movie"
import Header from "./Components/Header"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie" element={<Moive />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
