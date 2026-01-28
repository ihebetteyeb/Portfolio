import { motion } from "framer-motion";
import { MdOutlineWorkOutline } from "react-icons/md";
import ProjectCard from "./ui/ProjectCard";
import SmartParkThumbnail from "@/assets/1.jpg";
import EShopThumbnail from "@/assets/e-s-1.png";
import CRMThumbnail from "@/assets/nr_1.png";
import ReactJS from "@/assets/react.svg";
import NestJS from "@/assets/NestJS.png";
import Angular from "@/assets/Angular.svg";
import DotNet from "@/assets/DotNet.png";
import SmartPark from "@/assets/SP-1.png";
import SP2 from "@/assets/SP-2.png";
import SP3 from "@/assets/SP-3.png";
import SP4 from "@/assets/SP-4.png";
import NR1 from "@/assets/nr_1.png";
import NR2 from "@/assets/nr_2.png";
import NR3 from "@/assets/nr_3.png";
import NR4 from "@/assets/nr_4.png";
import NR5 from "@/assets/nr_5.png";
import NR6 from "@/assets/nr_6.png";
import NR7 from "@/assets/nr_7.png";
import NR8 from "@/assets/nr_8.png";
import NR9 from "@/assets/nr_9.png";
import Flutter from "@/assets/pngwing.com.png";
import type { ProjectDetails } from "@/types";
import { AiOutlineCode } from "react-icons/ai";

const Projects: ProjectDetails[] = [
  {
    thumbnail: SmartParkThumbnail,
    title: "Smart Park",
    techs: [Flutter, DotNet],
    description: `SmartPark is a mobile application that simplifies vehicle parking
          management. It integrates Google Maps for real-time navigation and
          geolocation, along with Paymee for secure online payments. The app
          features background services, push notifications, QR code scanning,
          and automated email notifications. These capabilities help users
          quickly locate parking spots and manage their parking activities with
          high accuracy.`,
    demo: {
      type: "carousel",
      images: [SmartPark, SP2, SP3, SP4],
    },
  },
  {
    thumbnail: EShopThumbnail,
    title: "e-shop",
    techs: [ReactJS, NestJS],
    description: `e-shop is a modern web application for fashion clothing. 
          Built with a robust full-stack architecture, it offers a seamless shopping 
          experience. The frontend is crafted with ReactJS and Tailwind CSS for 
          styling, while Framer Motion provides smooth, premium animations. 
          The backend is powered by NestJS, ensuring high performance and 
          reliability for all e-commerce operations.`,
    demo: {
      type: "live",
      url: "https://e-shop-frontend-drab.vercel.app",
    },
    githubUrl: "https://github.com/ihebetteyeb/e-shop-frontend",
  },
  {
    thumbnail: CRMThumbnail,
    title: "CRM for staff management",
    techs: [Angular, DotNet],
    description: `Migrated and optimized NetRoster, a cloud-based solution for remote workforce management and scheduling.
      • Designed a JWT-based authentication system with role-based access control for 3 access levels.
      • Conducted a system for workers to receive email notifications, view assigned shifts, and use a drag-and-drop calendar for vacation requests, improving engagement by 20%.
      • Enhanced the system with a dashboard featuring analytical charts and exportable reports in formats like Excel and PDF, offering comprehensive insights and statistics.`,
    demo: {
      type: "carousel",
      images: [NR1, NR2, NR3, NR4, NR5, NR6, NR7, NR8, NR9],
    },
  },
];

const Project = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full mt-10"
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          variants={{
            hidden: {
              opacity: 0.2,
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
            <AiOutlineCode className="w-6 h-6 text-blue-400" />
          </div>
        </motion.div>
        <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100  to-cyan-300 bg-clip-text text-transparent">
          FEATURED PROJECTS
        </h2>
      </div>
      <motion.div
        className="h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent origin-left mb-10"
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {Projects?.length &&
          Projects?.map((proj) => <ProjectCard data={proj} />)}
      </motion.div>
    </motion.section>
  );
};

export default Project;
