
function Form({ email, setEmail, password, setPassword, onSubmit, loading, error }) {
    return (
        <form onSubmit={onSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
                <button  type="submit" className="sign-in-button">
                    {loading ? "Loading..." : "Sign In"}
                </button>
                {error && <div className="Error">{error}</div>}
            </form>
    )
}

export default Form