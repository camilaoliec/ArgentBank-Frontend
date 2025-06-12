import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import SignIn from '../pages/sign-in'
import User from '../pages/user'
import ProtectedRoutes from '../components/protectedRoutes'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/sign-in" element= {<SignIn />} />
            <Route path="/user" element={
                <ProtectedRoutes> 
                    <User />
                </ProtectedRoutes>
            } />
        </Routes>
    )
}

export default AppRoutes