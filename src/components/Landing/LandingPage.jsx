import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="min-h-screen w-full bg-gradient-to-br from-[#18230F] via-[#27391C] to-[#255F38] flex items-center justify-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none animate-pulse"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl text-center max-w-3xl w-full z-10"
                >
                    <motion.h1
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.4, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
                    >
                        Discover <span className="text-[#FF6B6B]">Pick Flick</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
                    >
                        A space where your stories shine, your choices matter, and your memories are made.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => navigate('/signup')}
                            className="bg-[#FF6B6B] hover:bg-[#ff4c4c] text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 hover:scale-105"
                        >
                            Get Started
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-white/20 border border-white/30 text-white font-semibold py-3 px-8 rounded-full text-lg backdrop-blur-md hover:bg-white/30 transition duration-300 hover:scale-105"
                        >
                            Log In
                        </button>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default LandingPage