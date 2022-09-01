import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import axios from "axios";
import style from "../assets/styles/Login.module.css";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import FormLayout from "../hocs/FormLayout";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(username, password);
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?Navigate_uri=${process.env.REACT_APP_API_URL}/google`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  const continueWithGithub = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/github/?Navigate_uri=${process.env.REACT_APP_API_URL}/github`
      );

      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <FormLayout>
      <h3 className={style.formh3}>Signin Here! </h3>
      <form action="post" onSubmit={(e) => onSubmit(e)}>
        <label className={style.formlabel} htmlFor="username">
          Username
        </label>
        <input
          className={style.forminput}
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(e) => onChange(e)}
          required
        />

        <label className={style.formlabel} htmlFor="password">
          Password
        </label>
        <input
          className={style.forminput}
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          minLength='6'
          required
        />

        <button className={style.loginbtn} type="submit">
          Sign In
        </button>
      </form>
      <div className={style.social}>
        <div className={style.go} onClick={continueWithGoogle}>
          <span className={style.icon}>
            <FaGoogle />
          </span>
          <span className={style.item}>Continue with google</span>
        </div>
        <div className={style.ap} onClick={continueWithGithub}>
          <span className={style.icon}>
            <FaGithub />
          </span>
          <span className={style.item}>Continue with Github</span>
        </div>
      </div>
      <div className={style.footer}>
        <p>
          Don't have and account?{" "}
          <Link to="/signup" className={style.link}>
            Sign Up
          </Link>
        </p>
        <p>
          Fogot your Password?{" "}
          <Link to="/reset-password" className={style.link}>
            Reset Password
          </Link>
        </p>
      </div>
    </FormLayout>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth?.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
