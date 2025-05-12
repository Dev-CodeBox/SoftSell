import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
    return (
        <section className="bg-gradient-to-r from-cyan-700 to-blue-700 text-white py-20 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold leading-tight"
                >
                    Turn Unused Software Into Cash
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mt-4 text-lg md:text-xl text-cyan-100"
                >
                    SoftSell helps you resell software licenses legally and effortlessly with maximum value.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-white text-cyan-700 font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
                >
                    Sell My License
                </motion.button>
            </div>
        </section>
    )
}

export default Hero