import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full mt-20 mb-20"
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              scale: 0.3,
              rotate: -180,
            },
            visible: {
              opacity: 1,
              scale: 1,
              rotate: 0,
            },
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
            <FaRocket className="w-6 h-6 text-blue-400" />
          </div>
        </motion.div>
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100  to-cyan-300 bg-clip-text text-transparent uppercase tracking-tight">
          LET'S BUILD SOMETHING AMAZING
        </h2>
      </div>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent origin-left mb-10"
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      <div className="flex flex-col items-center justify-center space-y-8 mt-16">
        <p className="max-w-2xl text-center text-gray-400 text-lg md:text-xl leading-relaxed">
          Ready to bring your ideas to life? I'm always excited to collaborate on
          innovative projects and help transform your vision into reality.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5 w-full">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:ihebetteyeb@gmail.com"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-300 shadow-xl shadow-blue-500/5"
          >
            <FiMail className="w-5 h-5 text-blue-400" />
            <span className="text-blue-100 font-semibold tracking-wide">ihebetteyeb13@gmail.com</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/ihebetteyeb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-xl"
          >
            <FiArrowRight className="w-5 h-5 text-gray-400" />
            <span className="text-gray-200 font-semibold tracking-wide">Source code on GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
