export default function Projects() {

  const activities = [
  {
    title: "Mangrove Volunteer – Pantai Baros",
    role: "Volunteer",
    image: "/mangrove.jpeg",
    desc: "Participated in mangrove planting activities to support coastal ecosystem conservation and environmental sustainability.",
    
  },

  {
    title: "Open House Capstone DTETI",
    role: "Participant / Contributor",
    image: "/capstone.jpeg",
    desc: "Joined capstone open house event showcasing final-year engineering projects and innovation presentations.",
  },

  {
    title: "NESCO Web Development Event",
    role: "Committee – Web Development",
    image: "/nesco.jpeg",
    desc: "Handled web development activities and supported technical implementation for event needs.",
  },

   {
    title: "SOSMAS KMTETI",
    role: "Social Community Staff",
    image: "/sosmas.jpeg",
    desc: "Involved in social community activities under KMTETI, contributing to outreach and social impact programs.",
  },

  {
    title: "Pelita Gadjah Mada",
    role: "Participant",
    image: "/pelita.jpeg",
    desc: "Participated in social impact program focused on community empowerment and educational support.",
  },

  {
    title: "Pemandu Pionir Kesatria 2026",
    role: "Event Guide / Mentor",
    image: "/temp.jpeg",
    desc: "Acted as guide and mentor for new students during orientation activities, supporting adaptation to campus life.",
  },
];

  return (
    <section className="section py-24">

      <div className="text-center mb-14">
        <p className="text-sm bg-[#DDE5D3] inline-block px-4 py-2 rounded-full mb-4">
          My Journey
        </p>

        <h2 className="text-5xl font-bold">
          Campus Activities
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {activities.map((item, index) => (
          <div
            key={index}
            className="glass rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">

              <p className="text-sm text-[#7C9D96] mb-2">
                {item.role}
              </p>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}