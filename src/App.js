import React from 'react';
import style from'./assets/styles/App.module.css'
import Home from './pages/Home';
import Dashboad from './pages/Dashboad';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import Activate from './pages/Activate';
import { Routes, Route } from "react-router-dom";


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
      </Routes>
    </div>      
)
}

export default App