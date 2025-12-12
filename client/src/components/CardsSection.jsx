import React from "react";

const cards = [
  {
    title: "AI Mission Control",
    desc: "Machine learning systems that monitor, predict, and support mission decisions.",
  },
  {
    title: "Mars Rover Analytics",
    desc: "Real-time data visualization and performance tracking for robotic explorers.",
  },
  {
    title: "Space Data Cloud",
    desc: "Secure and scalable cloud storage for mission-critical operations.",
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-[#1c1a1a] py-16 px-8 grid md:grid-cols-3 gap-8">
      {cards.map((card, i) => (
        <div
          key={i}
          className="bg-[#242121] border border-gray-800 p-6 rounded-2xl hover:shadow-lg hover:shadow-blue-600/20 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
          <p className="text-gray-400">{card.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default FeatureCards;
