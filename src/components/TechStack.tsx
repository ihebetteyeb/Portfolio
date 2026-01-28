import { Card, CardContent } from "@/components/ui/card";
import Angular from "@/assets/Angular.svg";
import Flutter from "@/assets/pngwing.com.png";
import NestJS from "@/assets/NestJS.png";
import DotNet from "@/assets/DotNet.png";
import RubyOnRails from "@/assets/Ruby_on_Rails-Logo.wine.png";
import { GiAtom } from "react-icons/gi";
import { SiJavascript, SiTypescript, SiReact } from "react-icons/si";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const techStack = [
  { label: "React", icon: SiReact, color: "#61DAFB" },
  { label: "Angular", src: Angular },
  { label: "Flutter", src: Flutter },
  { label: "NestJS", src: NestJS },
  { label: ".NET", src: DotNet },
  { label: "Rails", src: RubyOnRails },
  { label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
];

export default function TechStack() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full mt-20"
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.5, rotate: 45 },
            visible: { opacity: 1, scale: 1, rotate: 0 },
          }}
          transition={{ duration: 1.5 }}
        >
          <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <GiAtom className="w-6 h-6 text-blue-400" />
          </div>
        </motion.div>
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
          TECH STACK
        </h2>
      </div>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent origin-left mb-10"
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
        variants={containerVariants}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <Card className="group relative overflow-hidden transition-all duration-300 bg-slate-900/40 hover:bg-slate-900/60 border border-white/5 hover:border-blue-500/30 shadow-lg hover:shadow-blue-500/10">
              <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                <div className="relative h-12 w-12 flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {tech.icon ? (
                    <tech.icon
                      className="h-8 w-8 relative z-10 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: tech.color || "white" }}
                    />
                  ) : (
                    <img
                      src={tech.src}
                      alt={tech.label}
                      className="h-10 w-10 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                </div>
                <p className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors">
                  {tech.label}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
