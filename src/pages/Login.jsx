import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../assets/style/Login.css';

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
    <div className="loginform">
        <h3>SignIn</h3>
        <form action="post" onSubmit={e => onSubmit(e)}>
          <input type="text" placeholder='Username' name='username' value={username} onChange={e => onChange(e)} required/>
          <input type="password" placeholder='Password' name='password' value={password} onChange={e => onChange(e)} required/>
          <button className='loginbtn' type='submit'>Sign In</button>
        </form>
        <p className="footer">
          Don't have and account? <Link to='/signup'>Sign Up</Link>
        </p>
        <p className="footer">
          Fogot your Password? <Link to='/reset-password'>Reset Password</Link>
        </p>
    </div>
  )
}

// const mapStateToProps = state =>({
//   //is authenticated?
// })

export default connect(null, { }) (Login);