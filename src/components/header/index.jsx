import { NavLink } from 'react-router-dom'
import './style.scss'

function Header() {
    return (
        <div className='navbar'>
            <NavLink to="/">
                <img src="/images/argentBankLogo.png" className='Logo' alt="Logo" />
            </NavLink>
            <div className="navbar__icons">
                <NavLink to="/sign-in" className='navbar_icons--log'>
                    <i className="fa fa-user-circle"></i>
                    {/* <label className=''></label>{({ unlogged }) => unlogged ? "active" : ""}*/
                        <p>Sign In</p> }
                </NavLink>
                {/* <NavLink to="/" className={({ logged }) => logged ? "active" : ""}>
                    <i class="fa fa-sign-out"></i>
                    <p>Singn Out</p>
                </NavLink> */}
            </div>
        </div>
    )
}

export default Header