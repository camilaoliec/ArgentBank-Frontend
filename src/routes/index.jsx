
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import EditUserName from '../pages/edit-username'
import Error from '../pages/error'
import SignIn from '../pages/sign-in'
import Transactions from '../pages/transactions'
import User from '../pages/user'

const AppRoutes = () => {
    return (
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/editusername" element={<EditUserName />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/user" element={<User />} />
                </Routes>
    )
}
export default AppRoutes