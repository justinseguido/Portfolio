import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">Modern design, clean UI, built with React + TailwindCSS</p>
        <a
          href="#contact"
          className="px-6 py-3 bg-white text-indigo-700 rounded-xl font-semibold shadow hover:bg-gray-200"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}
