import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userBody, userLogin } from '../../redux/userSlice'
import Form from '../../components/form'
import './style.scss'

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { loading, error } = useSelector((state) => state.user)

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
                if (rememberMe) {
                    console.log("salvando token no local storage", result.payload.token);
                    localStorage.setItem("token", result.payload.token)
                }
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
                    rememberMe={rememberMe}
                    setRememberMe={setRememberMe}
                />
            </section>
        </main>
    )
}

export default SignIn