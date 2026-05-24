import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss
} from "react-icons/si";

export default function TechStack() {

  const techs = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
  ];

  return (
    <section className="section">

      <h2 className="text-4xl font-bold mb-12">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

        {techs.map((tech, index) => (
          <div
            key={index}
            className="glass rounded-3xl p-8 flex flex-col items-center gap-4 hover:-translate-y-2 transition duration-300"
          >
            <div className="text-4xl">
              {tech.icon}
            </div>

            <p>{tech.name}</p>
          </div>
        ))}

      </div>

    </section>
  );
}