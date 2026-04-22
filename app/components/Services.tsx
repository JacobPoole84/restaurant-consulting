export default function Services() {
  const services = [
    {
      title: "Restaurant Consulting",
      desc: "Menu engineering, pricing, kitchen efficiency, and customer flow."
    },
    {
      title: "Business Growth",
      desc: "Marketing systems, automation, and revenue scaling strategies."
    },
    {
      title: "Turnaround Strategy",
      desc: "Rapid 30–90 day plans to fix underperforming businesses."
    }
  ]

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="glass p-8 rounded-2xl hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-neutral-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}