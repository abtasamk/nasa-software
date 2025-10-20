export default function Clients() {
  const clients = [
    "FG Degree College Kohat For Boys",
    "Water & Sanitation Services Company Bannu(Website)",
    "Adversity Mobile(Share about life anonymously)",
    "Water & Sanitation Services Company Swat(Mobile App)",
    "Othia events Mobile App(Event Management Platform)",
  ];

  return (
    <section className="bg-zinc-900 text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-12">Our Clients</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
        {clients.map((c, i) => (
          <div
            key={i}
            className="bg-zinc-800 p-6 rounded-lg text-sm font-medium hover:bg-zinc-700 transition"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
