import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';
import style from'../assets/styles/Login.module.css';
import {FaGoogle} from 'react-icons/fa'
import {FaApple} from 'react-icons/fa'
import logo from '../assets/images/logo.png';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  
  const{ username, password} = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();

    // login(username,password)
  };

  // Is the user authenticated?
  // Redirect them to Dashboard

  return (
    <div className={style.main}>
      <div className={style.background}>
        <div className={style.shape}></div>
        <div className={style.shape}></div>
      </div>
      <div className={style.loginform}>
          <div className={style.logo}>
            <img src={logo} alt="logo"/>
          </div>
          <h3 className={style.formh3}>Signin Here! </h3>
          <form action="post" onSubmit={e => onSubmit(e)}>
            <label className={style.formlabel} htmlFor="username">Username</label>
            <input className={style.forminput} type="text" placeholder='Username' name='username' value={username} onChange={e => onChange(e)} required/>
      
            <label className={style.formlabel} htmlFor="password">Password</label>
            <input className={style.forminput} type="password" placeholder='Password' name='password' value={password} onChange={e => onChange(e)} required/>
      
            <button className={style.loginbtn} type='submit'>Sign In</button>
          </form>
          <div className={style.social}>
            <div className={style.go}>
              <span className={style.icon}>
                <FaGoogle/>
              </span>
              <span className={style.item}>Google</span>
            </div>
            <div className={style.ap}>
              <span className={style.icon}><FaApple/></span>
              <span className={style.item}>Apple</span>
            </div>
          </div>
          <div className={style.footer}>
          <p>
            Don't have and account? <Link to='/signup' className={style.link}>Sign Up</Link>
          </p>
          <p>
            Fogot your Password? <Link to='/reset-password' className={style.link}>Reset Password</Link>
          </p>
          </div>
      </div>
    </div>
  )
}

// const mapStateToProps = state =>({
//   //is authenticated?
// })

export default Login;