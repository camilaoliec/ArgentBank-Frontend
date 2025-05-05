import { BrowserRouter as Router } from "react-router-dom"
import Header from './components/header'
import AppRoutes from './Routes'
import Footer from "./components/footer"

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App
