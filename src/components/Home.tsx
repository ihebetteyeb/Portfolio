import ProfileImage from "@/assets/cv3.png";
import { motion, type Variants } from "framer-motion";

import { FaGithub, FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

const Home = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mb-16 pt-6 md:pt-10"
    >
      <motion.div 
        variants={imageVariants}
        className="flex flex-col lg:items-start items-center justify-center gap-4"
      >
        <div className="relative aspect-square w-40 h-40 md:w-44 md:h-44 rounded-full p-[4px] bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center">
          <div className="rounded-full overflow-hidden w-full h-full bg-neutral-900">
            <img
              src={ProfileImage}
              alt="@ihebetteyeb"
              className="w-full h-full object-cover transition-transform transform hover:scale-110 duration-500 rounded-full border-4 border-slate-900"
            />
          </div>
        </div>
        
        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start gap-3 w-full">
          <a
            href="https://www.linkedin.com/in/iheb-etteyeb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm md:text-base hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            🏠 Tunis, Tunisia
          </a>
          
          <div className="flex items-center gap-5 pt-1">
            <a
              href="https://www.linkedin.com/in/ihebetteyeb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-120 active:scale-95"
            >
              <BsLinkedin size={26} />
            </a>

            <a
              href="https://github.com/ihebetteyeb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-120 active:scale-95"
            >
              <FaGithub size={26} />
            </a>

            <a
              href="https://www.instagram.com/ihebetteyeb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-all duration-300 hover:scale-120 active:scale-95"
            >
              <FaInstagram size={26} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex-1 text-center lg:text-left">
        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start items-center mb-6">
          <a
            href="mailto:ihebetteyeb13@gmail.com"
            className="flex items-center gap-2 border border-blue-400/50 bg-blue-500/5 hover:bg-blue-500/15 text-blue-400 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group"
          >
            <FaRegCalendarAlt className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            Schedule a call
          </a>
        </motion.div>
        
        <motion.div variants={itemVariants} className="space-y-4">
          <h3 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Iheb Etteyeb
          </h3>
          <p className="text-lg md:text-xl text-blue-400/90 font-semibold">
            Full stack developer | React, NestJS, .NET
          </p>
          <div className="max-w-2xl mx-auto lg:mx-0">
            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I’m a Software Engineer with a Master’s degree in Software
              Engineering and a Bachelor’s in Computer Science. I specialize in
              full-stack web development, with strong experience in React, NestJS,
              and modern JavaScript frameworks. Passionate about clean code,
              testing, and UI/UX, I enjoy building reliable, impactful digital
              products.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
