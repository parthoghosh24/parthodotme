import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { DiGrails } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";


import forexratesImg from "@/public/forexrates.png";
import stormguardImg from "@/public/stormguard.png";
import jobberImg from "@/public/jobber.jpeg";
import gamealoonImg from "@/public/gamealoon.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "Jobber - Calgary, AB, CA",
    description:
      "Led the AI exploration initiative where I had cross-team collaboration with the in-house ML team to figure out how we can leverage AI for our team's use cases. Later, explored AI further in hackathons where my team and I created multiple features based on AI: a simple linear regression-based prediction system for line items value for a service, and then an LLM-based implementation for parsing service quotations images via OpenAI's vision API, with the data extracted to be stored as our own data model (we won this one). Collaborated and contributed to multiple experiments, as well as features, which helped us gain insight with respect to user retention on the platform. Led multiple projects where we experimented (as well as rolled out features) with various kinds of onboarding and visual delight in both the desktop and mobile app. Engaged in pair programming with fellow engineers to help them overcome obstacles. Coordinated with a third-party vendor to narrow down a bug in the deeplinking system. Engaged in cross-team collaboration to solve issues related to push notifications and GraphQL. Conducted a Ruby on Rails presentation to impart deep knowledge of some Rails concepts. Acted as an interim scrum-master for the team. Technologies I worked with here include Ruby on Rails, ReactJS, React Native, PostgreSQL, Sidekiq, GraphQL, Split, Datadog, and AWS.",
    icon: React.createElement(SiRubyonrails),
    date: "Mar 2023 - Apr 2024",
  },
  {
    title: "Professional Certificate in ML & AI",
    location: "University of California, Berkeley, Haas School of Business",
    description:
      "Earned the certificate with a score of 90% plus, where I learned ML concepts such as Clustering, PCA, Linear & Multiple Regression, Feature Engineering & Overfitting, Regularization, Time Series Analysis, Classification, K-Nearest Neighbors, Logistic Regression, Decision Trees, Gradient Descent, SVM, NLP, and Ensemble Techniques, as well as Deep Neural Networks. Worked on real-world problems as part of the course's Capstone projects using Python, Pandas, SciKit, Anaconda, and other ML libraries/tools.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2022 - Jun 2023",
  },
  {
    title: "Software Engineer (intermediate)",
    location: "Careteam - Vancouver, BC, CA",
    description:
      "Wrote a framework for dynamic form parsing and export with FHIR support, which simplified form parsing for future cases. Developed multiple proofs of concept (POCs) as part of our research day initiatives. Collaborated with the team to contribute to core product development by ensuring quality and timely delivery. Technologies I worked with here include Ruby on Rails, ReactJS, PostgreSQL, FHIR, and AzureWrote a framework for dynamic form parsing and export as FHIR support which made form parsing simpler for future cases. Wrote multiple POCs as part of our research day initiatives. Collaborated with team to contribute in the core product development by ensuring quality and timely delivery. Tech I worked with here are Ruby on Rails, ReactJS, Postgresql, FHIR and Azure.",
    icon: React.createElement(SiRubyonrails),
    date: "Apr 2021 - Mar 2023",
  },
  {
    title: "Staff Software Engineer",
    location: "Enphase Energy - Bangalore, IN",
    description:
      "Led the implementation of the microservice for the weather alerting system, which was one of the key contributors to the $22 million revenue generation for one of the flagship hardware products from the company. Also, led the implementation of an in-house SAML service, which saved a lot of costs for the company. Led cross-team microservices initiatives with a team of 4 engineers, including writing POCs. Worked with Ruby on Rails, ReactJS, MongoDB, MySQL, Spring Boot, and AWS.",
    icon: React.createElement(SiRubyonrails),
    date: "Jan 2019 - Mar 2021",
  },
  {
    title: "Senior Software Engineer",
    location: "Ericsson India Global Services Pvt. Ltd. (R&D) - Bangalore, IN",
    description:
      "Contributed to the full-stack development of the admin app, ensuring it met quality standards. Fixed a performance bug (N+1 issue) which resulted in a 3X increase in speed. Supported QA by leading the Cucumber suite fixing. Mentored junior engineers and helped them ramp up in Ruby on Rails. Additionally, participated in a fun hackathon where my team built a smart conference room system and won an award for the same. Technologies I worked with included Ruby on Rails, Android, and MongoDB",
    icon: React.createElement(SiRubyonrails),
    date: "Jan 2017 - Sep 2018",
  },
  {
    title: "Lead Engineer",
    location: "Yourstory Media Pvt. Ltd. - Bangalore, IN",
    description:
      "Led the initiative for one of the flagship products (which had been in the backlog for 7 years) similar to Crunchbase. Built and delivered version one, co-led a team of 3 developers to maintain and enhance it. Additionally, I was one of the individual contributors to the core platform. Worked with a range of technologies including Ruby on Rails, WordPress, Node.js, Neo4j, AngularJS, MySQL, and AWS.",
    icon: React.createElement(SiRubyonrails),
    date: "Nov 2015 - Dec 2016",
  },
  {
    title: "Member of Technical Staff",
    location: "Redcarpet Tech Pvt. Ltd. - Gurugram, IN",
    description:
      "Being one of the first founding employees, I built the first version of their gamification-based restaurant loyalty web app, which served 3000 customers and nearly 40 restaurants per month. After that, I led that product along with their Android app. I also mentored junior engineers and interns. During my time there, I started, learned, and used Ruby on Rails along with MySQL, AWS, and Android. I left the company after we made it to Y Combinator.",
    icon: React.createElement(SiRubyonrails),
    date: "Apr 2014 - Jun 2015",
  },
  {
    title: "Founder & CTO",
    location: "Gamealoon (Eboie digital solutions pvt. ltd.) - Ghaziabad, IN",
    description:
      "Built a platform for crowd-sourced game reviews with gamification. Utilized the Play framework (Java), Python (web-py), lighttpd, MongoDB, and hosted it on iPage (now Bluehost). You can find more information about the company and the platform at https://wellfound.com/company/gamealoon.",
    icon: React.createElement(FaJava),
    date: "Dec 2012 - Jun 2014",
  },
  {
    title: "Associate Software Engineer",
    location: "FirstRain inc. - Gurugram, IN",
    description:
      "Worked on internal tool development for analytics. Acted as an individual contributor, reporting to the VP of Engineering at the California headquarters, in building a CMS for Salesforce data ingestion. I worked with Groovy and Grails here.",
    icon: React.createElement(DiGrails),
    date: "Aug 2012 - Apr 2013",
  },
  {
    title: "Jr. Game Programmer",
    location: "Gameloft - Hyderabad, IN",
    description:
      "Had the opportunity to work on some popular 2D Gameloft titles such as Diamond Twister, Asphalt, Prince of persia and more. Collaborated with my Game producer and one QA to port a game on 90+ devices as a stretch project. The main technology I learned and used here was J2ME.",
    icon: React.createElement(FaJava),
    date: "Jul 2011 - Dec 2011",
  },
  {
    title: "Software Engineer Trainee",
    location: "Intelligrape Software - Noida, IN",
    description:
      "I worked as a software engineer in training, where I had the opportunity to work on an intuitive PDF parsing project in a team. I learned and used Groovy and Grails during this time.",
    icon: React.createElement(DiGrails),
    date: "Jan 2011 - Jun 2011",
  },
  {
    title: "Masters of Computer Application",
    location: "GGSIPU - Delhi, IN",
    description:
      "Earned my Master's degree with a 77% score, where I had the opportunity to learn various computer science fundamentals such as Data Structures, Algorithms, Operating Systems, Computer Networks, Databases, Programming Languages, and more.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2008 - Aug 2011",
  },
] as const;

export const projectsData = [
  {
    title: "Jobber",
    description:
      "Worked as a full-stack developer on numerous user-facing features as well as experiments aimed at enhancing user retention on the platform.",
    tags: ["Ruby on Rails", "ReactJS", "React Native", "PostgresQL", "Split", "Graphql", "AWS"],
    imageUrl: jobberImg,
  },
  {
    title: "Stormguard",
    description:
      "Headed the backend development of the first version and then led the team for the service powering this feature during my tenure in Enphase.",
    tags: ["Spring Boot (java)", "Mongodb", "AWS"],
    imageUrl: stormguardImg,
  },
  {
    title: "Gamealoon",
    description:
      "Built Gamealoon which was a crowd-sourced game reviews platform similar to IMDB, with a built-in gamification system for rewarding user content creation.",
    tags: ["Play Framework (java)", "Mongodb", "web.py(python)", "lighttpd", "AWS", "Bluehost"],
    imageUrl: gamealoonImg,
  },
  {
    title: "Forex rates",
    description:
      "Developed this open source gem for easy forex integration. It is built on top of https://exchangeratesapi.io/ with caching support. ",
    tags: ["Ruby", "Faraday"],
    imageUrl: forexratesImg,
  },
] as const;

export const skillsData = [
  "Ruby",
  "Ruby on Rails",
  "Typescript",
  "Javasctipt",
  "React",
  "React Native",
  "HTML",
  "CSS",
  "Git",
  "AWS",
  "Postgresql",
  "GraphQL",
  "NextJS",
  "Prisma",
  "Java"
] as const;
