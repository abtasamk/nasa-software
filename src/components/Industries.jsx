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
    },
    {
      name: "WSSC Bannu Website",
      img: wsscblogo,
      desc: "Water & Sanitation Services Company Bannu",
    },
      {
      name: "Adversity",
      img: Adversity,
      desc: "share about life anonymously",
    },
    {
      name: "WSSCSwat Mobile App",
      img: wsscswat,
      desc: "Water & Sanitation Services Company Swat",
    },
    {
      name: "Othia Events",
      img: othia,
      desc: "Event management platform for seamless event planning.",
    },
  ];

  return (
    <section className="bg-zinc-900 text-white py-20 px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Industries We Serve
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {industries.map((i, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden bg-zinc-800">
            <img src={i.img} alt={i.name} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold mb-2">{i.name}</h3>
              <p className="text-sm text-zinc-400">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
