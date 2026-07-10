import { education } from "@/lib/data/education";
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

export function Education() {
  return (
    <section id="education" className="bg-canvas py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-sm font-bold tracking-[1.5px] text-m-blue-text mb-4">
            EDUCATION
          </p>
          <h2 className="text-4xl md:text-5xl mb-16">
            <TextReveal text="PENDIDIKAN" delay={0.1} />
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-hairline p-8 md:p-12 transition-colors duration-300 hover:border-m-blue-dark">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 border border-hairline text-sm font-bold tracking-[1px] text-m-blue-text shrink-0">
                {getInitials(education.institution)}
              </div>
              <div className="flex flex-col md:flex-row md:flex-1 md:justify-between md:items-baseline gap-1">
                <h3 className="text-2xl font-bold">{education.institution}</h3>
                <span className="text-xs font-bold tracking-[1.5px] text-m-blue-text shrink-0">
                  {education.period}
                </span>
              </div>
            </div>

            <div className="pl-16">
              <p className="text-lg font-light mb-3">{education.degree}</p>
              <p className="text-body font-light">{education.status}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}