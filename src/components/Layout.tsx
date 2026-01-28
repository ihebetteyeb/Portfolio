import { useRef } from "react";
import CompactNavbar from "./CompactNavbar";
import Home from "./Home";
import TechStack from "./TechStack";
import Work from "./Work";
import Project from "./Project";
import Contact from "./Contact";

export default function Layout() {
  const workExperienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[oklch(4%_0_0)] h-full w-full mx-auto flex flex-col items-center text-gray-400">
      <CompactNavbar />
      <div className="max-w-[47.5rem] h-full w-full p-6">
        <main className="w-full min-h-screen h-full flex flex-col justify-center gap-5">
          <section>
            <Home />
          </section>
          <section>
            <TechStack />
          </section>
          <section ref={workExperienceRef}>
            <Work />
          </section>
          <section ref={projectsRef}>
            <Project />
          </section>
          <Contact />
        </main>
      </div>
    </div>
  );
}
