import { motion, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MdOutlineWorkOutline } from "react-icons/md";

const experiences = [
  {
    period: "Sap 2023 - Jan 2025",
    company: "Cynoia",
    location: "Tunis, Tunisia",
    title: "Full Stack Developer ( Part Time )",
    description:
      "Cynoia is a startup that offers a SaaS plateform for team collaboration and team communication. It contains many modules ( Calendar, Chat, Project management, Notes ). My full responsibilities included:",
    responsibilities: [
      "Contributed to building the company’s reusable frontend component library",
      "Implemented a project management platform featuring a Kanban board with multiple status-based columns, enabling drag-and-drop task management, public/private project visibility, and role-based access control for team members",
      "Developed a dashboard interface displaying real-time project analytics and performance graphs.",
      "Integrated a custom voice recorder using WaveSurfer.js and Lexical, and implemented Google SSO with Keycloak to enhance authentication and communication.",
      "Improved application performance and responsiveness while enhancing multi-language support through optimization and localization features.",
    ],
    skills: [
      "React",
      "NestJS",
      "Tailwind CSS",
      "Redux Toolkit",
      "Keycloak",
      "Lexical",
      "Jest",
      "Recharts",
    ],
  },
  {
    period: "Jul 2022 - Apr 2023",
    company: "Electronic Workplace",
    location: "Tunis, Tunisia",
    title: "Software Engineer ( Freelance Project ) ",
    description:
      "Conceived and developed SmartPark, a mobile application for efficient vehicle parking management.",
    responsibilities: [
      "Integrated Google Maps and Paymee APIs.",
      "Enhanced user experience with background tasks, push notifications, QR code functionality, and email notifications.",
      "Implemented geolocation services and map directions, helping users locate parking spots with high accuracy.",
      "Developed an agent-facing interface to monitor all parked vehicles, view remaining parking time, and search cars by their current status.",
    ],
    skills: [
      "Flutter",
      "ASP .NET",
      "SQL Server",
      "Bootstrap",
      "Google Maps API",
      "Paymee API",
      "Push Notifications",
      "QR Code",
      "Geolocation",
    ],
  },
];

const Work = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const responsibilityVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
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
            hidden: { opacity: 0, scale: 0.5, rotate: -45 },
            visible: { opacity: 1, scale: 1, rotate: 0 },
          }}
          transition={{ duration: 1.5 }}
        >
          <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <MdOutlineWorkOutline className="w-6 h-6 text-blue-400" />
          </div>
        </motion.div>
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
          WORK EXPERIENCE
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
      <motion.div variants={containerVariants} className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 rounded-2xl transition-all duration-500 hover:bg-white/5 border border-transparent hover:border-white/10"
          >
            <div className="md:col-span-1">
              <span className="text-sm font-mono text-blue-400/80 mb-2 block">
                {exp.period}
              </span>
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {exp.company}
              </h3>
              <p className="text-gray-400 text-sm">{exp.location}</p>
            </div>

            <div className="md:col-span-2 flex flex-col gap-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {exp.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((item, idx) => (
                  <motion.li
                    key={idx}
                    variants={responsibilityVariants}
                    className="flex items-start gap-3 text-gray-400 text-sm group/item"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                    <span className="group-hover/item:text-gray-200 transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    variants={badgeVariants}
                    whileHover={{ y: -2 }}
                  >
                    <Badge
                      variant="outline"
                      className="bg-blue-500/5 hover:bg-blue-500/20 text-blue-300/90 border-blue-500/20 transition-all text-[10px] py-0 px-2 uppercase tracking-wider"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Work;
