import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function ContactPage() {
  const socials = [
    {
      name: "Instagram",
      icon: FaInstagram,
      username: "@re.faaaa",
      link: "https://www.instagram.com/re.faaaa?igsh=a2ExbWFkaG9obXM4",
      gradient: "from-pink-500 to-purple-500",
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      username: "+62 81930575897",
      link: "https://wa.me/6281930575897",
      gradient: "from-green-400 to-green-600",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      username: "linkedin.com/in/Refarahmawati",
      link: "https://www.linkedin.com/in/refarahmawati",
      gradient: "from-blue-500 to-sky-600",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      username: "github.com/refarahmawati555699-pixel",
      link: "https://github.com/refarahmawati555699-pixel",
      gradient: "from-gray-700 to-black",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6">

      {/* HEADER */}
      <div className="text-center mb-12">
        <p className="text-sm bg-white/40 backdrop-blur-md border border-white/30 inline-block px-4 py-2 rounded-full mb-4">
          Let’s Connect
        </p>

        <h1 className="text-5xl font-bold mb-4">Contact Me</h1>

        <p className="text-gray-600 max-w-lg mx-auto">
          Feel free to reach out through my social media platforms.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">

        {socials.map((s, i) => {
          const Icon = s.icon;

          return (
            <a
              key={i}
              href={s.link}
              target="_blank"
              className="group relative p-6 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >

              {/* glow background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 bg-gradient-to-br ${s.gradient}`} />

              {/* ICON */}
              <div
                className={`relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-lg group-hover:scale-110 transition`}
              >
                <Icon className="text-2xl" />
              </div>

              {/* TEXT */}
              <h3 className="text-xl font-bold mt-4">{s.name}</h3>

              <p className="text-gray-600 mt-1 text-sm">
                {s.username}
              </p>

              {/* hover line animation */}
              <div className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-black/30 mt-4 rounded-full" />
            </a>
          );
        })}

      </div>
    </section>
  );
}