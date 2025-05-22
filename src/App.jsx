import { BrowserRouter as Router } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setToken, userBody } from "./redux/userSlice"

import Header from './components/header'
import AppRoutes from './Routes'
import Footer from "./components/footer"
import { useEffect } from "react"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    console.log("token from localstorage", savedToken);
    if (savedToken) {
      dispatch(setToken(savedToken));
      dispatch(userBody());
    }
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  )
}

export default App
