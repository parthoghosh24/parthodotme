"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { gamesData } from "@/lib/data";
import Game from "./game";
import { useSectionInView } from "@/lib/hooks";

export default function Games() {
  const { ref } = useSectionInView("Games", 0.5);

  return (
    <section ref={ref} id="games" className="scroll-mt-28 mb-28">
      <SectionHeading>My games</SectionHeading>
      <div>
        {gamesData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
