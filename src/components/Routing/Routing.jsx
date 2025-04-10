import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from '../Signup'
import LandingPage from '../Landing/LandingPage'

const Routing = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<LandingPage/>} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing