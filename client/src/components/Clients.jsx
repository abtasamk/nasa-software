export default function Clients() {
  const clients = [
    {
      name: "FG Degree College Kohat For Boys",
      link: "https://fgdcbkohat.edu.pk/", // replace with real URL
    },
    {
      name: "Water & Sanitation Services Company Bannu (Website)",
      link: "https://wssb.com.pk/",// example
    },
    {
      name: "Adversity Mobile (Share about life anonymously)",
      link: "https://play.google.com/store/apps/details?id=com.taillz&hl=en", // example
    },
    {
      name: "Water & Sanitation Services Company Swat (Mobile App)",
      link: "https://play.google.com/store/apps/details?id=potal.wsscswat.org.pk.twa&hl=en",
    },
    {
      name: "Othia Events Mobile App (Event Management Platform)",
      link: "https://www.appbrain.com/app/othia/de.othia.othia",// example
    },
  ];

  return (
    <section className="bg-zinc-900 text-white py-20 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-12">Our Clients</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {clients.map((c, i) => (
          <a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-800 p-6 rounded-lg text-sm font-medium hover:bg-zinc-700 transition block"
          >
            {c.name}
          </a>
        ))}
      </div>
    </section>
  );
}
