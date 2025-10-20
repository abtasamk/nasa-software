import React from "react";
import medical from "../assets/medical.jpg";
import fintech from "../assets/fintech.jpg";
import enterprise from "../assets/enterprise.jpg";
import smarthome from "../assets/smarthome.png";

export default function CaseStudies() {
  const studies = [
    {
      title: "Healthcare System Revamp",
      desc: "We modernized hospital management software for faster operations.",
      img: medical,
    },
    {
      title: "Fintech Platform Upgrade",
      desc: "Built a scalable fintech app for seamless transactions.",
      img: fintech,
    },
    {
      title: "Manufacturing ERP Automation",
      desc: "Implemented digital transformation across multiple plants.",
      img: enterprise,
    },
    {
      title: "Smart Home Solutions",
      desc: "Developed an integrated system for managing IoT devices in homes.",
      img: smarthome,
    }
  ];

  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Our Key Domains
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {studies.map((s, i) => (
          <div key={i} className="bg-zinc-800 rounded-lg overflow-hidden">
            <img src={s.img} alt={s.title} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-400">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
