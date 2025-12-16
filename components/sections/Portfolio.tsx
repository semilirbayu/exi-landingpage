"use client";

import { MosaicHero } from "./portfolio/MosaicHero";
import { WorkSlider } from "./portfolio/WorkSlider";
import { projects } from "./portfolio/types";

export function Portfolio() {
  return (
    <section id="works">
      <MosaicHero projects={projects} />
      <WorkSlider projects={projects} />
    </section>
  );
}
