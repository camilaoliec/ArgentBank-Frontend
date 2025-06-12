import { BrowserRouter as Router } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setToken, userBody } from "./redux/userSlice"

import Header from './components/header'
import AppRoutes from './Routes'
import Footer from "./components/footer"
import { useEffect, useState } from "react"

function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      dispatch(setToken(savedToken));
      dispatch(userBody());
    }
    setIsloading(false);
  }, [dispatch]);

  if (isLoading) {
    return <div>Chargement...</div>
  }

  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App
