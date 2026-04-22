"use client"
import { motion } from "framer-motion"

function scrollToCta() {
  document.getElementById("cta")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full z-50 px-6 py-4 flex justify-between items-center bg-black/40 backdrop-blur-lg"
    >
      <div className="font-semibold text-lg">Consulting Group</div>

      <button
        type="button"
        onClick={scrollToCta}
        className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:scale-105 transition"
      >
        Book Call
      </button>
    </motion.nav>
  )
}