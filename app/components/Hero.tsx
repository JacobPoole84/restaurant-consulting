"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full top-[-100px]" />

      <div className="max-w-4xl relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold leading-tight gradient-text"
        >
          Do you know your true food cost?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-neutral-400"
        >
          Most restaurants think they are running a 30% food cost. Most restaurants are wrong.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex gap-4 justify-center"
        >
          <a
            href="#cta"
            className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Book Free Strategy Call
          </a>

          <a
            href="#services"
            className="border border-white/20 px-7 py-3 rounded-xl hover:bg-white/10 transition"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}