import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import './style.scss'
import { logout } from "../../redux/userSlice";


function Header() {
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.user.userInfos)
  const isLogged = useSelector((state) => state.user.userInfos !== null)
  const token = useSelector((state) => state.user.token);
  console.log("token header", token);


  const handleLogout = () => {
    console.log("logout clicado");
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"/>
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {isLogged ? (
          <>
          <NavLink to="/user" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {userInfos?.firstName}
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