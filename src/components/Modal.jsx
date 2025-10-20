import React from 'react'
import { motion } from 'framer-motion'

const Modal = ({ title, desc, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-zinc-900 p-8 rounded-lg max-w-md w-full text-center"
    >
      <h3 className="text-2xl font-bold text-red-600 mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{desc}</p>
      <button onClick={onClose} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white">Close</button>
    </motion.div>
  </div>
)

export default Modal
