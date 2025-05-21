import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/userSlice";
import logo from "../../assets/img/argentBankLogo.webp"
import './style.scss'


function Header() {
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.user.userInfos)
  const isLogged = userInfos !== null

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isLogged ? (
          <>
          <NavLink to="/user" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {userInfos?.userName}
        </NavLink>
        <NavLink to="/sign-in" className="main-nav-item" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
           Sign Out
        </NavLink>
          </>
        ) : (
          <NavLink to="/sign-in" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
        )}
      </div>
    </nav>
  )
}
export default Header