import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/motion/Marquee";
import { techStack } from "@/lib/data/tech";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee speed={25}>
      {techStack.map((tech) => (
        <span
          key={tech.name}
          className="flex items-center gap-2 text-sm font-bold tracking-[1.5px] text-body/60 whitespace-nowrap"
        >
          <tech.icon className="w-5 h-5" aria-hidden="true" />
          {tech.name.toUpperCase()}
        </span>
      ))}
    </Marquee>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}