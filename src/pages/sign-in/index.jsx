import './style.scss'

function SignIn() {
    return (
        <main className="sign-in">
            <div className="sign-in__content">
                <i className="fa fa-user-circle sign-in-icon"></i> 
                <h1>Sign In</h1>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <button className='sign-in__button'><a href='./user'></a>Sign In</button>
            </div>
            
        </main>
    )
}

export default SignIn