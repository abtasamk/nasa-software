import React from "react";
import provider from "../assets/provider.png";

const teamMembers = [
  {
    name: "Abtasam",
    role: "Software Engineer",
    // description: "Full Stack Developer ",
    image: provider,
  },
];

const OurTeam = () => {
  return (
    <section className="bg-[#111010] py-24 px-6 text-center">
      {/* Title */}
      <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#f8f8f8] to-[#b8b8b8] bg-clip-text text-transparent tracking-wide">
        Provider
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-lg mb-16 max-w-3xl mx-auto leading-relaxed">
       A provider committed to excellence, delivering seamless digital experiences with precision, innovation, and professional development expertise
      </p>

      {/* Centered Card */}
      <div className="flex justify-center">
        <div className="grid gap-12 max-w-7xl mx-auto place-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-[#1b1b1b] border border-gray-800 rounded-2xl overflow-hidden shadow-xl
                hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-2 w-80"
            >
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 pointer-events-none
                bg-gradient-to-br from-[#ffffff1a] to-[#00000000]"></div>

              {/* IMAGE (No grayscale now) */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover transition-all duration-500"
              />

              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-1 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
