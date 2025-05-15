import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../../components/form'
import './style.scss'
import { userBody, userLogin } from '../../redux/userSlice'


const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { loading, error } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
            let userData = {
                email,
                password,
            }
        dispatch(userLogin(userData)).then((result) => {
            if (result.payload?.token) {
                dispatch(userBody());
                setEmail("");
                setPassword("");
                navigate("/user");
            }
        })
    }
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Form 
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    onSubmit={handleLogin}
                    loading={loading}
                    error={error}
                />
            </section>
        </main>
    )
}

export default SignIn