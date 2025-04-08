
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import EditUserName from '../pages/edit-username'
import SignIn from '../pages/sign-in'
import Transactions from '../pages/transactions'
import User from '../pages/user'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/edit-username" element={<EditUserName />} />
                <Route path="*" element={<Error />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/user" element={<User />} />
                </Routes>
        </Router>

    )
}
export default AppRoutes