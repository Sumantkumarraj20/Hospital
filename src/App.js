import React from 'react';
import style from'./App.module.css'
import Home from './pages/Home/Home';
import Dashboad from './pages/Dashboard/Dashboad';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ResetPassword from './pages/Resetpassword/ResetPassword';
import ResetPasswordConfirm from './pages/ResetpasswordConfirm/ResetPasswordConfirm';
import Activate from './pages/Activate/Activate';
import { Routes, Route } from "react-router-dom";
import Profile from './pages/Profile/Profile';


const App = () => {
  return (
    <div className={style.div}>  
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/reset-password' element={<ResetPassword/>} />
        <Route path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>} />
        <Route path='/activate/:uid/:token' element={<Activate/>} />
        <Route path='/dashboard' element={<Dashboad/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>      
)
}

export default (App);