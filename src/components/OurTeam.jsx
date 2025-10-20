import React from "react";
import ceo from "../assets/CEO.jpeg";
import cto from "../assets/CTO.jpg";
import webdev from "../assets/webdev.jpg";
import timur from "../assets/timur.jpeg";

const teamMembers = [
  {
    name: "Abtasam",
    role: "CEO (Software Engineer)",
    description: "Software Engineer (Full Stack Dev)",
    image: ceo,
  },
  {
    name: "Hussam Khan",
    role: "CTO Co-founder",
    description: "Expert in Machine Learning and Data Analysis",
    image: cto,
  },
  {
    name: "Muhammad Ashan",
    role: "Computer Scientist (Web Dev)",
    description: "Passionate about building responsive and accessible web applications.",
    image: webdev,
  },
  {
    name: "Muhammad Timur",
    role: "Graphic & Video Designer",
    image: timur,
  },
];

const OurTeam = () => {
  return (
    <section className="bg-[#1c1a1a] py-20 px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
        Meet the brilliant minds driving innovation and excellence behind our Alnesa Software projects.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#242121] border border-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
