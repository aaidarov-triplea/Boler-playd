import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout"
import { HomePage } from "./pages/home"
import { AboutPage } from "./pages/about"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index path="/" element={<HomePage />}/>
        <Route  path="/about" element={<AboutPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
