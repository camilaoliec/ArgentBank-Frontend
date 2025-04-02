import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import SignIn from './pages/sign-in'
import EditUserName from './pages/edit-username'
import Transactions from './pages/transactions'
import User from './pages/user'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <SignIn />
    <EditUserName />
    <Transactions />
    <User />
  </StrictMode>,
)
