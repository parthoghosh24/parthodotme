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
      I am a seasoned <span className="font-medium">Full-Stack Software Engineer with over 12 years of hands-on experience</span>. Throughout my career, I've had the privilege of working across a diverse range of industries, including Gaming, SAAS, Healthcare, Renewable energy, and Media.

      <br/>
      <br/>

      My journey in software engineering has been a thrilling adventure marked by continuous learning and growth. I've had the opportunity to work with companies of various sizes, from innovative startups to established multinational corporations. These experiences have not only honed my technical skills but have also equipped me with a deep understanding of the unique challenges and opportunities within different organizational structures.

            <br/>
            <br/>

      My technical expertise spans a wide array of technologies, with my primary tech-stack revolving around <span className="font-medium">Ruby on Rails, ReactJs, React Native, PostgreSQL, and AWS</span>. However, my journey in software engineering has been characterized by versatility, and I've had the pleasure of working with diverse tech stacks, including <span className="font-medium">Java (Spring Boot), Groovy and Grails, Node.js, and Python</span>. And oh yeah, recently started playing around with <span className="font-medium">Next.js (this website is built with it)</span>. Along with the above tools, aspects like scale, performance and computer science fundamentals always intrigue me. Outside my primary job, I have a deep passion in machine learning, game development and open source. 
            <br/>
            <br/>

      One of the most rewarding aspects of my career has been my involvement in driving initiatives to ensure the successful delivery of features and products. I thrive in collaborative environments, where I can leverage my experience to coordinate with cross-functional teams, support, and get things done.
      <br/>
      <br/>
      In addition to my professional endeavors, I'm also an entrepreneur at heart and have embarked on the exciting journey of launching my own <Link className="underline font-medium" target="_blank" href="https://youtu.be/jt3ePDl_d-0?si=yTaY9gUt4P-8HpZt">startup</Link> back in 2014. This experience has provided me with invaluable insights into the entrepreneurial landscape, further enriching my skill set and broadening my perspective.

      <br/>
      <br/>
      Whether it's building robust software solutions, collaboarting with teams to achieve ambitious goals, or exploring new frontiers in technology, I'm passionate about leveraging my expertise to drive meaningful impact and empower organizations to thrive.
      </p>

      <p>
        <span className="italic font-medium">When I'm not coding for work</span>, I enjoy playing
        video games, work on personal coding projects, watching movies, cooking, driving, and learn about things I am interested in.
      </p>
    </motion.section>
  );
}
