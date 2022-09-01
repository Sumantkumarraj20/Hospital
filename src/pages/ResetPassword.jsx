import React,{useState} from "react";
import style from'../assets/styles/Login.module.css';
import FormLayout from '../hocs/FormLayout';
import { reset_password } from '../actions/auth';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const ResetPassword = ({ reset_password }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
      username: ''
  });

  const { username } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
      e.preventDefault();

      reset_password(username);
      setRequestSent(true);
  };

  if (requestSent) {
      return <Navigate to='/' />
  }
  return (
    <FormLayout>
      <h3 className={style.h3}>Request Password Reset:</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <label className={style.formlabel} htmlFor="username">username</label>
        <input
          className={style.forminput} 
          type="username"
          placeholder="username"
          name="username"
          value={username}
          onChange={(e) => onChange(e)}
          required
        />
        <button className={style.loginbtn} type="submit">
          Reset Password
        </button>
      </form>
    </FormLayout>
  );
};

export default connect(null, { reset_password })(ResetPassword);
