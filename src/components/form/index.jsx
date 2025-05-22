import Button from "../button"


function Form({ email, setEmail, password, setPassword, rememberMe, setRememberMe, onSubmit, loading, error }) {
    return (
        <form onSubmit={onSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                autoComplete="username"
                />
                
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                 />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
                <Button type="submit" className="sign-in-button" disabled={!email || !password}>
                    {loading ? "Loading..." : "Sign In"}
                </Button>
                {error && <div className="Error">{error}</div>}
            </form>
    )
}

export default Form