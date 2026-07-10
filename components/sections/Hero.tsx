import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { HeroTerminal } from "@/components/motion/HeroTerminal";
import { CV_PATH, CV_FILENAME } from "@/lib/constants";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-canvas pt-16">
      <div className="max-w-[1440px] mx-auto px-6 py-16 w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal direction="left" immediate duration={0.3}>
            <p className="text-sm font-bold tracking-[1.5px] text-m-blue-text mb-4">
              WEB DEVELOPER
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-[72px] leading-none mb-6">
              <TextReveal text="MUHAMMAD" delay={0.02} staggerDelay={0.02} duration={0.2} immediate />
              <br />
              <TextReveal text="NUR IKHSAN" delay={0.1} staggerDelay={0.02} duration={0.2} immediate />
            </h1>

            <p className="text-base font-light text-body max-w-xl mb-10 leading-relaxed">
              Fresh Graduate Teknik Informatika dari STMIK Mardira Indonesia, berpengalaman membangun website dengan Laravel, PHP, MySQL, JavaScript, dan REST API.
            </p>
          </Reveal>

          <Reveal direction="left" delay={0.2} duration={0.3} immediate>
            <div className="flex flex-col sm:flex-row gap-4">
              
              <a  href="#projects"
                className="border border-on-dark px-8 py-4 text-sm font-bold tracking-[1.5px] text-center transition-all duration-300 hover:bg-on-dark hover:text-canvas hover:scale-[1.02]"
              >
                LIHAT PROJECT
              </a>
              
              <a  href={CV_PATH}
                download={CV_FILENAME}
                className="px-8 py-4 text-sm font-bold tracking-[1.5px] text-body text-center transition-colors duration-300 hover:text-on-dark"
              >
                DOWNLOAD CV
              </a>
            </div>
          </Reveal>

          <div className="m-stripe-divider w-24 mt-16" />
        </div>

        <Reveal direction="right" delay={0.15} duration={0.3} immediate>
          <HeroTerminal />
        </Reveal>
      </div>
    </section>
  );
}