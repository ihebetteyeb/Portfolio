import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { ProjectDetails } from "@/types";
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectCardProps {
  data: ProjectDetails;
}
const ProjectCard = ({ data }: ProjectCardProps) => {
  const [carouselOpen, setOpen] = useState(false);
  const techsContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerDirection: -1,
      },
    },
  };
  const techItem: Variants = {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <div className="group relative rounded-2xl overflow-hidden border border-blue-500/30 bg-slate-900/50 backdrop-blur-sm hover:border-blue-500/60 transition-all duration-500 h-[480px] w-full">
        
        
        <div className="absolute inset-0">
          <img
            src={data.thumbnail}
            alt={data.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        </div>

        
        <div className="relative h-full flex flex-col justify-end p-6 z-10">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{data.title}</h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={techsContainer}
              className="flex items-center gap-2"
            >
              {data.techs.map((tech, index) => (
                <motion.img
                  key={index}
                  src={tech}
                  alt="tech"
                  variants={techItem}
                  className="h-8 w-8 object-contain bg-white/10 backdrop-blur-md rounded-full p-1.5 border border-white/20"
                />
              ))}
            </motion.div>
          </div>

          <p className="text-gray-100 mb-6 leading-relaxed line-clamp-3 text-sm font-medium drop-shadow-md">
            {data.description}
          </p>

          <div className="flex items-center gap-4">
            {data.demo?.type === "live" && (
              <a
                href={data.demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg"
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}

            {data.demo?.type === "carousel" && (
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg cursor-pointer"
              >
                <FiExternalLink className="w-4 h-4" />
                View Gallery
              </button>
            )}

            {data.githubUrl && (
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all backdrop-blur-sm border border-white/10"
              >
                <FiGithub className="w-4 h-4" />
                Source
              </a>
            )}
          </div>
        </div>
      </div>

      <Dialog open={carouselOpen} onOpenChange={setOpen}>
        <DialogContent className="max-w-[90vw] md:max-w-[75vw] lg:max-w-[66vw] w-full bg-slate-900 border-blue-500/30 text-white p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-2xl font-bold text-white">
              {data.title} - Project Demo
            </DialogTitle>
          </DialogHeader>
          <div className="relative p-6 pt-2">
            <Carousel className="w-full">
              <CarouselContent>
                {data.demo?.type === "carousel" &&
                  data.demo.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden rounded-lg border border-blue-500/20">
                        <img
                          src={image}
                          alt={`Demo ${index + 1}`}
                          className="w-full h-full object-contain bg-slate-950"
                        />
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious className="left-4 bg-slate-800/80 border-blue-500/30 hover:bg-slate-700 text-white h-12 w-12" />
                <CarouselNext className="right-4 bg-slate-800/80 border-blue-500/30 hover:bg-slate-700 text-white h-12 w-12" />
              </div>
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
