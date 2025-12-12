import React from "react";
import wsscblogo from "../assets/wsscblogo.png";
import othia from "../assets/othia.jpg";
import wsscswat from "../assets/wsscswat.png";
import logo from "../assets/logo.jpg";
import Adversity from "../assets/Adversity.jpg";

export default function Industries() {
  const industries = [
    {
      name: "FG School Management Systems",
      img: logo,
      desc: "Comprehensive solutions for educational institutions.",
      link: "https://fgdcbkohat.edu.pk/",
    },
    {
      name: "WSSC Bannu Website",
      img: wsscblogo,
      desc: "Water & Sanitation Services Company Bannu",
      link: "https://wssb.com.pk/",
    },
    {
      name: "Adversity",
      img: Adversity,
      desc: "Share about life anonymously",
      link: "https://play.google.com/store/apps/details?id=com.taillz&hl=en",
    },
    {
      name: "WSSCSwat Mobile App",
      img: wsscswat,
      desc: "Water & Sanitation Services Company Swat",
      link: "https://play.google.com/store/apps/details?id=potal.wsscswat.org.pk.twa&hl=en",
    },
    {
      name: "Othia Events",
      img: othia,
      desc: "Event management platform for seamless event planning.",
      link: "https://www.appbrain.com/app/othia/de.othia.othia",
    },
  ];

  return (
    <section className="bg-zinc-900 text-white py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Industries We Serve
      </h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {industries.map((i, idx) => (
          <a
            key={idx}
            href={i.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg overflow-hidden bg-zinc-800 block hover:scale-105 transform transition duration-300 hover:ring-2 hover:ring-red-600"
          >
            <img
              src={i.img}
              alt={i.name}
              className="h-40 w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="font-bold mb-2">{i.name}</h3>
              <p className="text-sm text-zinc-400">{i.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
