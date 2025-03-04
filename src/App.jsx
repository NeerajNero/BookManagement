import Navbar from "./components/Navbar"
import BookContextProvider from "./contexts/BookContextProvider"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <Router>
        <BookContextProvider >
          <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />}/>
        </Routes>
        </BookContextProvider>
      </Router>
    </>
  )
}

export default App
