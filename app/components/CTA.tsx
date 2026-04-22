export default function CTA() {
  return (
    <section id="cta" className="py-28 px-6 text-center relative">

      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold">
          Ready to Fix Your Business for Good?
        </h2>

        <p className="mt-6 text-neutral-400 text-lg">
          Book a free strategy call and get a clear, actionable plan for your restaurant or business.
        </p>

        <a
          href="mailto:consulting@yourdomain.com"
          className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
        >
          Book Free Strategy Call
        </a>
      </div>
    </section>
  )
}