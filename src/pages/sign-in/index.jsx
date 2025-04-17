import { Link } from 'react-router-dom'
import { useState } from 'react'
import './style.scss'
import Button from '../../components/button';

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <main className="sign-in">
            <div className="sign-in__content">
                <i className="fa fa-user-circle sign-in-icon"></i> 
                <h1>Sign In</h1>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text" 
                    id="username" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <Link to='/user'>
                    <Button className='sign-in__button'>Sign In</Button>
                </Link>
            </div>
            
        </main>
    )
}

export default SignIn