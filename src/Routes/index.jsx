import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import SignIn from '../pages/sign-in'
import User from '../pages/user'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/sign-in" element= {<SignIn />} />
            <Route path="/user" element={<User />} />
        </Routes>
    )
}

export default AppRoutes