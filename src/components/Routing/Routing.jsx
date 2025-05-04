import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from '../Signup'
import LandingPage from '../Landing/LandingPage'
import { Otp_generate } from '../OTP/Otp_generate'
import Otp_verification from '../OTP/Otp_verification'
import SetPassword from '../auth/SetPassword'
import Login from '../auth/Login'
import Home from '../../Home/Home'

const Routing = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                    <Route path='/signup' element={<Signup/>} />
                    <Route path='/generate_otp' element={<Otp_generate/>} />
                    <Route path='/verify_otp' element={<Otp_verification/>} />
                    <Route path='/set_password' element={<SetPassword/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/home' element={<Home/>} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing