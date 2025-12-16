import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { MosaicHero } from "@/components/sections/portfolio/MosaicHero";
import { WorkSlider } from "@/components/sections/portfolio/WorkSlider";
import { projects } from "@/components/sections/portfolio/types";

import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen snap-start">
          <Hero />
        </section>
        <section className="min-h-screen snap-start">
          <About />
        </section>
        <section className="min-h-screen snap-start flex flex-col justify-center">
          <Services />
        </section>
        <section className="min-h-screen snap-start">
          <MosaicHero projects={projects} />
        </section>
        <section className="min-h-screen snap-start flex flex-col justify-center">
          <WorkSlider projects={projects} />
        </section>
        <section className="min-h-screen snap-start">
          <Contact />
        </section>
      </main>
      <div className="snap-start">
        <Footer />
      </div>
    </>
  );
}
