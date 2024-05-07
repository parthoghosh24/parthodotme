import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { DiGrails } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";



import forexratesImg from "@/public/forexrates.png";
import stormguardImg from "@/public/stormguard.png";
import jobberImg from "@/public/jobber.jpeg";
import gamealoonImg from "@/public/gamealoon.jpg";
import codehugoImg from "@/public/codehugo1.png";
import fakenewsdetectionImg from "@/public/fakenewsdetection.png";
import bankmarketingImg from "@/public/bankmarketing.png";

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
    title: "Co-Founder",
    location: "Codehugo - Calgary, AB, CA",
    description:
      `Conceptualized the platform after evaluating the capabilities of LLM.
       Built the architecture and coded the existing version.
       Researched existing code judge platforms like LeetCode, Hackerrank to establish the differentiators.
       Ramped up on a new JS web framework (NextJS) as I was working on a low-key Windows machined and the Ruby on Rails
       ecosystem is a little hard to work with on the Windows platform. Ramped up on Vercel IAAS, OpenAI and Stripe.
       Pitched the product to my co-founder and convinced him to work on it. Worked with my co-founder to tweak the product;
       learned aspects around product development like 3-click strategy, product messaging, launch strategy, etc.
       Post launch we received 1k+ page views, 300+ visitors (600+ in total) and 10 organic signups in a week. `,
    icon: React.createElement(RiOpenaiFill),
    date: "Apr 2024 - Current",
  },
  {
    title: "Senior Software Engineer",
    location: "Jobber - Calgary, AB, CA",
    description:
      `Worked on Growth Retention team, built and shipped user retention experiments, features and AI MVPs for over 200K businesses.
      Led team of 3 to build an OCR based service as part of a departmental hackathon to make user data import during onboarding simpler using Rails, ReactJS, Graphql, OpenAI’s Vision API which we won.
      Led a team of 3 to build a simple Linear regression based prediction system for Line item prices for a job to reduce job creation friction for users using Python Pandas, Sklearn, Anaconda and reactjs.
      Led a project with a stringent deadline to build a dynamic celebration banner to be rendered based on the number of Google reviews received with 4+ ratings using Rails, Split, Graphql, ReactJS. It was delivered before the due date and  impacted over 10k users.
      Led multiple projects to build multiple experiments around user onboarding in the mobile app to improve user retention using React Native, Split, Rails, Graphql. One aspect of an experiment got converted into a feature after seeing a positive response to it      
      Supported the team as an interim Scrum master running all Sprint rituals and ensuring the momentum.
      Supported and mentored team members via pair programming and code reviews.
      `,
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
      `Worked on core product team, built and shipped features impacting 40+ health orgs. 
       Led implementation of a framework for dynamic patient data form parsing and export as FHIR format using Rails and Ruby metaprogramming which made adding new forms simple and improved team productivity.
       Took ownership and re-wrote an UI feature using a new lib (react-select) because the old lib (react-tab-input) was deprecated and breaking the build. This improved code quality.
       Conducted AI learning session for team which helped improving team's AI knowledge base.`,
    icon: React.createElement(SiRubyonrails),
    date: "Apr 2021 - Mar 2023",
  },
  {
    title: "Staff Software Engineer",
    location: "Enphase Energy - Bangalore, IN",
    description:
      `Worked on the core Software R&D team, built, enhanced, and shipped various microservices as well as contributed to the monolith app for solar devices powering over 100K homes and 3k partner companies.
      Led implementation of a backend service as an IC for a weather alerting system which became a key contributor in a product offering generating $22 million in revenue using Java (Spring Boot), MongoDb, MySQL, Docker, AWS. Built a tool for the QA team to mimic real weather alerts for testing.
      Led a team of 3 to implement new microservices as well as enhance an inhouse SAML service which I wrote as an IC to save 1000’s of $s for the company.
      Made changes to the telemetry service to support 20K users who bought new battery devices.`,
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
    title: "Codehugo",
    description:
      "Codehugo is your personal AI code mentor.",
    tags: ["NextJS", "Typescript", "React", "PostgresQL", "Prisma", "OpenAI", "Vercel"],
    imageUrl: codehugoImg,
    url: "https://www.codehugo.com",
  },
  {
    title: "Fake News Detection",
    description:
      "Fake news detection using Passive Aggressive Classifier (PAC).",
    tags: ["Python", "Pandas", "Seaborn", "Numpy", "Nltk", "Sklearn", "Google Colab"],
    imageUrl: fakenewsdetectionImg,
    url: "https://github.com/parthoghosh24/fake_news_detection",
  },
  {
    title: "Banking marketing campaign analysis",
    description:
      "Determine whether a client will subscribe to term deposit or not using classification",
    tags: ["Python", "Pandas", "Seaborn", "Numpy", "Sklearn", "Google Colab"],
    imageUrl: bankmarketingImg,
    url: "https://github.com/parthoghosh24/banking_marketing_campaign",
  },
  {
    title: "Jobber",
    description:
      "Worked as a full-stack developer on numerous user-facing features as well as experiments aimed at enhancing user retention on the platform.",
    tags: ["Ruby on Rails", "ReactJS", "React Native", "PostgresQL", "Split", "Graphql", "AWS"],
    imageUrl: jobberImg,
    url: "https://www.getjobber.com",
  },
  {
    title: "Stormguard",
    description:
      "Headed the backend development of the first version and then led the team for the service powering this feature during my tenure in Enphase.",
    tags: ["Spring Boot (java)", "Mongodb", "AWS"],
    imageUrl: stormguardImg,
    url: "https://support.enphase.com/s/article/what-is-storm-guard",
  },
  {
    title: "Gamealoon",
    description:
      "Built Gamealoon which was a crowd-sourced game reviews platform similar to IMDB, with a built-in gamification system for rewarding user content creation.",
    tags: ["Play Framework (java)", "Mongodb", "web.py(python)", "lighttpd", "AWS", "Bluehost"],
    imageUrl: gamealoonImg,
    url: "https://wellfound.com/company/gamealoon",
  },
  {
    title: "Forex rates",
    description:
      "Developed this open source gem for easy forex integration. It is built on top of https://exchangeratesapi.io/ with caching support. ",
    tags: ["Ruby", "Faraday"],
    imageUrl: forexratesImg,
    url: "https://rubygems.org/gems/forex_rates",
  },
] as const;

export const skillsData = [
  "Ruby",
  "Ruby on Rails",
  "Typescript",
  "Javasctipt",
  "React",
  "React Native",
  "Python",
  "Machine Learning",
  "OpenAI",
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
