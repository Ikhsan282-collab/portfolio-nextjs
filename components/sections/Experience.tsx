import { experience } from "@/lib/data/experience";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function Experience() {
  return (
    <section id="experience" className="bg-canvas py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-sm font-bold tracking-[1.5px] text-m-blue-dark mb-4">
            WORK EXPERIENCE
          </p>
          <h2 className="text-4xl md:text-5xl mb-16">
            <TextReveal text="PENGALAMAN KERJA" delay={0.1} />
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-hairline p-8 md:p-12 transition-colors duration-300 hover:border-m-blue-dark">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center justify-center w-12 h-12 border border-hairline text-sm font-bold tracking-[1px] text-m-blue-dark shrink-0">
                {getInitials(experience.company)}
              </div>
              <h3 className="text-2xl font-bold">{experience.company}</h3>
            </div>

            <div className="relative">
              {/* Garis timeline vertikal */}
              <div
                className="absolute left-[5px] top-2 bottom-2 w-px bg-hairline"
                aria-hidden="true"
              />

              <div className="space-y-10">
                {experience.roles.map((role, index) => (
                  <Reveal key={role.title} delay={0.1 + index * 0.1}>
                    <div className="relative pl-8 group/role">
                      {/* Titik penanda timeline */}
                      <span
                        className="absolute left-0 top-1.5 w-[11px] h-[11px] border-2 border-m-blue-dark bg-canvas transition-transform duration-300 group-hover/role:scale-125"
                        aria-hidden="true"
                      />

                      <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1 mb-3">
                        <h4 className="text-lg font-bold transition-colors duration-300 group-hover/role:text-m-blue-dark">
                          {role.title}
                        </h4>
                        <span className="text-xs font-bold tracking-[1.5px] text-m-blue-dark shrink-0">
                          {role.period}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {role.description.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-body font-light leading-relaxed"
                          >
                            <span className="text-m-blue-dark shrink-0" aria-hidden="true">
                              —
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}