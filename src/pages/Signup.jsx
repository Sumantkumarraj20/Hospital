import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import axios from 'axios';
import {FaGoogle} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import style from '../assets/styles/Login.module.css'
import FormLayout from "../hocs/authForm";

const Signup = ({ signup, isAuthenticated, err_msg }) => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        re_password: ''
    });

    const { email, username, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(email, username, password, re_password);
        }
    };

    const continueWithGoogle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?Navigate_uri=${process.env.REACT_APP_API_URL}/google`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    const continueWithGithub = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/github/?Navigate_uri=${process.env.REACT_APP_API_URL}/github`)

            window.location.replace(res.data.authorization_url);
        } catch (err) {

        }
    };

    if (isAuthenticated) {
        return <Navigate to='/dashboard' />
    }

    return (
        <FormLayout>
            <h3 className={style.formh3}>Sign Up</h3>
            <p>Create your Account</p>
            {err_msg && <div className={style.err}>{err_msg}</div> }
            <form onSubmit={e => onSubmit(e)}>
                    <input
                        className={style.forminput}
                        type='email'
                        placeholder='Email address*'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                     <input
                        className={style.forminput}
                        type='username'
                        placeholder='username*'
                        name='username'
                        value={username}
                        onChange={e => onChange(e)}
                        required
                    />
                    <input
                        className={style.forminput}
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='8'
                        required
                    />
                    <input
                        className={style.forminput}
                        type='password'
                        placeholder='Confirm Password*'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='8'
                        required
                    />
                <button className={style.loginbtn} type='submit'>Register</button>
            </form>
            <div className={style.social}>
              <div className={style.go} onClick={continueWithGoogle}>
                <span className={style.icon}>
                  <FaGoogle/>
                </span>
                <span className={style.item}>Google</span>
              </div>
              <div className={style.ap} onClick={continueWithGithub}>
                <span className={style.icon}><FaGithub/></span>
                <span className={style.item}>continueWithGithub</span>
              </div>
            </div>
            <div className={style.footer}>
            <p>
              If you already have an account.<Link to='/login' className={style.link}>Sign In</Link>
            </p>
            </div>
        </FormLayout>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.rootReducer.auth.isAuthenticated,
    err_msg: state.rootReducer.auth.err_msg
});

export default connect(mapStateToProps, { signup })(Signup);