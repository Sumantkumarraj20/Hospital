import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import axios from 'axios';
import {FaGoogle} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import style from '../assets/styles/Login.module.css'
import FormLayout from "../hocs/FormLayout";

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, username, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(first_name, last_name, username, password, re_password);
            setAccountCreated(true);
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
        return <Navigate to='/' />
    }
    if (accountCreated) {
        return <Navigate to='/login' />
    }

    return (
        <FormLayout>
            <h3 className={style.formh3}>Sign Up</h3>
            <p>Create your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                    <input
                        className={style.forminput}
                        type='text'
                        placeholder='First Name*'
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required
                    />
                    <input
                        className={style.forminput}
                        type='text'
                        placeholder='Last Name*'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                     <input
                        className={style.forminput}
                        type='username'
                        placeholder='username* or Username'
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
                        minLength='6'
                        required
                    />
                    <input
                        className={style.forminput}
                        type='password'
                        placeholder='Confirm Password*'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
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
    isAuthenticated: state.auth?.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);