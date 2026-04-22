export default function Problem() {
  const problems = [
    "Inconsistent revenue and cash flow",
    "High labor costs and inefficiency",
    "Weak marketing and low traffic",
    "Everything depends on the owner",
    "Low repeat customer rates"
  ]

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          What’s Slowing Your Growth?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div key={i} className="glass p-6 rounded-2xl">
              <p className="text-neutral-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}