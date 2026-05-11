import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-purple-700 rounded-full blur-[140px] opacity-30 top-10 left-10"></div>
      <div className="absolute w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[140px] opacity-20 bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10"
      >
        <h2 className="text-5xl md:text-7xl font-black leading-tight">
          Hi, I'm <span className="gradient-text">Sima Khanal</span>
        </h2>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          Full Stack Developer passionate about creating modern,
          responsive and user-friendly web applications.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  )
}