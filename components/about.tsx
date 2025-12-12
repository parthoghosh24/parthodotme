"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
       I am a seasoned <span className="font-medium">Full-Stack Software Engineer with over 12 years of hands-on experience</span>, now deliberately steering my career back toward my original passion:<span className="font-medium">Game Development</span>. My path has taken me through industries such as Gaming, SaaS, Healthcare, Renewable Energy, and Media, but games have always been at the center of why I became a developer in the first place.

      <br/>
      <br/>

      Across my career—from fast-paced startups to large enterprise environments—I’ve built scalable systems, collaborated with cross-functional teams, and delivered high-impact features. These experiences sharpened my engineering fundamentals and gave me a strong foundation in performance, distributed systems, and high-quality software design—all of which directly fuel my interest in building responsive, efficient game systems.

            <br/>
            <br/>

      While my primary professional tech stack includes Ruby on Rails, React/React Native, PostgreSQL, and AWS, I’ve also worked across ecosystems like Java (Spring Boot), Groovy/Grails, Node.js, and Python. In parallel, I’ve been deeply involved in game development using Unity, Unreal Engine, and Godot, where I’ve built prototypes, gameplay systems, and experimented with physics. I’m actively expanding my skills in video game programming. 
            <br/>
            <br/>

      One of the most fulfilling parts of my career has been taking ownership of complex initiatives—coordinating with teams, driving delivery, and ensuring products not only ship but excel. Earlier in my journey, I founded a startup in 2014, which gave me a deep appreciation for product vision, creative risk-taking, and building from zero.
      <br/>
      <br/>
      In addition to my professional endeavors, I'm also an entrepreneur at heart and have embarked on the exciting journey of launching my own <Link className="underline font-medium" target="_blank" href="https://youtu.be/jt3ePDl_d-0?si=yTaY9gUt4P-8HpZt">startup</Link> back in 2014. This experience has provided me with invaluable insights into the entrepreneurial landscape, further enriching my skill set and broadening my perspective.

      <br/>
      <br/>
      Today, whether I’m designing scalable web applications or prototyping gameplay mechanics, my core motivation remains the same: <span className="italic font-medium">to build meaningful, immersive, and technically ambitious interactive experiences</span>.
      </p>

      <p>
        <span className="italic font-medium">When I'm not coding for work</span>, you’ll usually find me playing games, experimenting with personal game prototypes, cooking, driving, or diving into subjects that spark my curiosity.
      </p>
    </motion.section>
  );
}
