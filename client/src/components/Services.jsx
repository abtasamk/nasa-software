import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'

const Services = () => {
  const [selected, setSelected] = useState(null)
  const services = [
    { title: 'Smart Home Solutions', desc: 'Integrating IoT devices for a connected living experience.' },
    { title: 'Custom Software', desc: 'Tailored solutions to meet unique business needs.' },
    { title: 'Web Development', desc: 'Building responsive, high-performance web apps.' },
    { title: 'Mobile Apps', desc: 'iOS and Android apps that engage users effectively.' },
    { title: 'Cloud Solutions', desc: 'Scalable, secure, cloud-native infrastructure.' },
    { title: 'AI Integration', desc: 'Empowering software with smart automation and insights.' },

  ]

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold text-red-600 mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(s)}
            className="bg-zinc-900 p-6 rounded-lg cursor-pointer hover:border-red-600 border border-transparent transition"
          >
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      {selected && <Modal title={selected.title} desc={selected.desc} onClose={() => setSelected(null)} />}
    </section>
  )
}

export default Services
