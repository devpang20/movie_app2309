import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Moive from "./Pages/Movie"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie" element={<Moive />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
