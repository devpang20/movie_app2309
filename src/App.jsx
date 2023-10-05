import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import MoiveList from "./Pages/MovieList"
import Header from "./Components/Header"
import MovieDetail from "./Pages/MovieDetail"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<MovieDetail />} />        
        <Route path="movies/:type" element={<MoiveList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
