// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);

//   // Load old messages from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem("alnesa_messages");
//     if (!saved) localStorage.setItem("alnesa_messages", JSON.stringify([]));
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const oldData = JSON.parse(localStorage.getItem("alnesa_messages")) || [];
//     oldData.push(formData);
//     localStorage.setItem("alnesa_messages", JSON.stringify(oldData));
//     setSubmitted(true);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <section className="py-20 px-6 text-center bg-zinc-950">
//       <motion.h2
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl font-bold text-red-600 mb-10"
//       >
//         Contact Us
//       </motion.h2>

//       {submitted && <p className="text-green-400 mb-6">Message saved! Thank you for reaching out.</p>}

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-lg mx-auto flex flex-col gap-4 text-left"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 outline-none"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 outline-none"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="4"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="p-3 rounded bg-zinc-800 text-white border border-zinc-700 focus:border-red-600 outline-none"
//         />
//         <button
//           type="submit"
//           className="mt-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded font-semibold transition"
//         >
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;


import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 text-center bg-zinc-950 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-red-600 mb-12"
      >
        Contact Us
      </motion.h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-red-600 transition"
        >
          <Mail className="text-red-600 mb-3" size={28} />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-zinc-400">alnesasoft@gmail.com</p>
          {/* <p className="text-zinc-400">ak@alnesasoftwareprovider.tech</p> */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-red-600 transition"
        >
          <Phone className="text-red-600 mb-3" size={28} />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-zinc-400">+923245567385 (PK)</p>
      
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-red-600 transition"
        >
          <MapPin className="text-red-600 mb-3" size={28} />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-zinc-400">Bannu Khyber Pakhtunkhwa</p>
          <p className="text-zinc-400">Pakistan</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-zinc-500"
      >
        <Clock className="inline-block text-red-600 mr-2" size={18} />
        <span>Available Monday – Friday | 9:00 AM – 5:00 PM</span>
      </motion.div>
    </section>
  );
};

export default Contact;
