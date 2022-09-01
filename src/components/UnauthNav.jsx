import style from '../assets/styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import Searchbox from './Searchbox';

const UnauthNav = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={style.middle}>
        <Searchbox/>
      </div>
      <div className={style.profile}>
        <div className={style.auth}>
          <Link to="/login" className={style.button}>
            Signin
          </Link>
          <Link to="/signup" className={style.button}>
            Resister
          </Link>
        </div>        
      </div>
    </div>
  )
}

export default UnauthNav