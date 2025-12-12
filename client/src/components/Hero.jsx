// import React from 'react'
// import { motion } from 'framer-motion'

// const Hero = ({ onGetStarted }) => {
//   return (
//     <section className="relative h-screen flex flex-col justify-center items-center text-center">
//       <div className="absolute inset-0 bg-gradient-to-b from-red-700/40 to-black"></div>
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-5xl md:text-6xl font-extrabold text-white relative z-10"
//       >
//         Empowering Businesses Through Software Innovation
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6 }}
//         className="mt-6 text-lg text-gray-300 max-w-2xl relative z-10"
//       >
//         We design, develop, and deliver software solutions that drive results and redefine success.
//       </motion.p>
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={onGetStarted}
//         className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold relative z-10 transition"
//       >
//         Get Started
//       </motion.button>
//     </section>
//   )
// }

// export default Hero

import React from 'react'
import { motion } from 'framer-motion'

const Hero = ({ onGetStarted }) => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/bannervideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔹 Foreground Content */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-white relative z-10"
      >
        Software Solutions That Make Life Easier
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-lg text-gray-300 max-w-2xl relative z-10"
      >
        Design, develop, and deliver software solutions that make lasting impact.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onGetStarted}
        className="mt-10 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold relative z-10 transition"
      >
        Get Started
      </motion.button>
    </section>
  )
}

export default Hero
