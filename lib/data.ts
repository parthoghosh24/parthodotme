import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { DiGrails } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { SiRubyonrails } from "react-icons/si";


import forexratesImg from "@/public/forexrates.png";
import stormguardImg from "@/public/stormguard.png";
import jobberImg from "@/public/jobber.jpeg";

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
      "Led the AI exploration initiative where I had cross-team collaboartion with the inhouse ML team to figure out how we can leverage AI for our team's use cases. Later, explored AI further in hackathons where me & my team created multiple features based on AI; A simple linear regression based prediction system for line items value for a service and then a LLM based implementation for parsing of service quotations images via OpenAI's vision API and the data extracted to be stored as our own data model. Collaborated and contributed to multiple experiments as well as features which helped us gain insight with respect to user retention on platform. Led multiple projects where we experimented (as well as rolled out features) with various kind of onboarding and visual delight in both desktop as well as mobile app. Did pair programming with fellow engineers to help them get unblocked. Coordinated with a third-party vendor to narrow down on a bug for the deeplinking system. Cross-team collaboration to solve issues related to push notifcation and graphql. Did a Ruby on Rails presentation to impart deep knowledge around the some Rails concepts. Technology I worked with here are Ruby on Rails, ReactJS, React Native, Postgresql, Sidekiq, Graphql, Split, Datadog and AWS.",
    icon: React.createElement(SiRubyonrails),
    date: "Mar 2023 - Apr 2024",
  },
  {
    title: "Professional Certificate in ML & AI",
    location: "University of California, Berkeley, Haas School of Business",
    description:
      "Earned the certicate with a 90% plus score where I learned ML concepts like Clustering, PCA, Linear & Multiple Regression, Feature engineering & overfitting, Regularization, Time Series Analysis, Classification, K-Nearest Neighbors, Logistic Regression, Decision Trees, Gradient Descent, SVM, NLP, Ensemble techniques, Deep Neural Networks. Worked on real world problems as part of the course's Capstone projects using Python, Pandas, SciKit, Anaconda and other ML libraries /tools.",
    icon: React.createElement(LuGraduationCap),
    date: "Nov 2022 - Jun 2023",
  },
  {
    title: "Software Engineer (intermediate)",
    location: "Careteam - Vancouver, BC, CA",
    description:
      "Wrote a framework for dynamic form parsing and export as FHIR support which made form parsing simpler for future cases. Wrote multiple POCs as part of our research day initiatives. Collaborated with team to contribute in the core product development by ensuring quality and timely delivery. Tech I worked with here are Ruby on Rails, ReactJS, Postgresql, FHIR and Azure.",
    icon: React.createElement(SiRubyonrails),
    date: "Apr 2021 - Mar 2023",
  },
  {
    title: "Staff Software Engineer",
    location: "Enphase Energy - Bangalore, IN",
    description:
      "Led the implementation of the microservice for the weather alerting system which was one of the key contributers in the $22 million revenue generation for one of the flagship hardware products from the company. Led the implementation of inhouse SAML service which saved lot of cost to the company. Led cross-team microservices initiatives with team of 4 engineers. Wrote POCs. Worked with Ruby on Rails, ReactJS, MongoDB, Mysql, Spring Boot, AWS.",
    icon: React.createElement(SiRubyonrails),
    date: "Jan 2019 - Mar 2021",
  },
  {
    title: "Senior Software Engineer",
    location: "Ericsson India Global Services Pvt. Ltd. (R&D) - Bangalore, IN",
    description:
      "Contributed in full-stack development of the admin app ensuring it met the quality standards. Fixed a performance bug (N+1 issue) which resulted in 3X increase in the speed. Supported QA by leading the Cucumber suite fixing. Mentored Junior engineers and helped them ramping up in Ruby on Rails. I also had a chance to be part of a fun hackathon where my team built a smart conference room system and won award for the same, Tech stack I worked with were Ruby on Rails, Android, and Mongodb.",
    icon: React.createElement(SiRubyonrails),
    date: "Jan 2017 - Sep 2018",
  },
  {
    title: "Lead Engineer",
    location: "Yourstory Media Pvt. Ltd. - Bangalore, IN",
    description:
      "Led the initiative for one of the flagship products (was in backlog from 7 years) which was similar to crunchbase. Built, delivered the version one, co-led a team of 3 devs to maintain and enhance that. Along with that, I was one of the individual contributors for the core platform. Worked on range of tech ranging from Ruby on Rails, Wordpress, Node.js, Neo4j, AngularJS, Mysql, AWS.",
    icon: React.createElement(SiRubyonrails),
    date: "Nov 2015 - Dec 2016",
  },
  {
    title: "Member of Technical Staff",
    location: "Redcarpet Tech Pvt. Ltd. - Gurugram, IN",
    description:
      "Being one of the first founding employees, built the first version of their gamification based restaurant loyalty web app which served 10K customers & near 40 restaurants per month. Post that, led that product along with their android app. Mentored junior engineers & interns. I started, learned and used Ruby on Rails along with MySQL, AWS and Android over here. Left the company after we made it to YC combinator.",
    icon: React.createElement(SiRubyonrails),
    date: "Apr 2014 - Jun 2015",
  },
  {
    title: "Founder & CTO",
    location: "Gamealoon (Eboie digital solutions pvt. ltd.) - Ghaziabad, IN",
    description:
      "Built a platform for crowd-sourced game reviews with gamification. Used Play framework (java), Python (web-py), lighttpd, Mongodb and hosted it on ipage(Bluehost now). https://wellfound.com/company/gamealoon",
    icon: React.createElement(FaJava),
    date: "Dec 2012 - Jun 2014",
  },
  {
    title: "Associate Software Engineer",
    location: "FirstRain inc. - Gurugram, IN",
    description:
      "Worked on internal tool development for analytics and content management. I used groovy and grails here.",
    icon: React.createElement(DiGrails),
    date: "Aug 2012 - Apr 2013",
  },
  {
    title: "Jr. Game Programmer",
    location: "Gameloft - Hyderabad, IN",
    description:
      "Had the opporuntity to work on some popular 2D Gameloft titles. Main tech I learned and used over here was J2ME.",
    icon: React.createElement(FaJava),
    date: "Jul 2011 - Dec 2011",
  },
  {
    title: "Software Engineer Trainee",
    location: "Intelligrape Software - Noida, IN",
    description:
      "I worked as a software engineer in training where I had the opportunity to work on intuitive PDF parsing project. I learned and used Groovy and Grails over here.",
    icon: React.createElement(DiGrails),
    date: "Jan 2011 - Jun 2011",
  },
  {
    title: "Masters of Computer Application",
    location: "GGSIPU - Delhi, IN",
    description:
      "Earned my Masters with 77% score where I had the opportuntity to learn various computer science fundamentals like DS, Algorithm, OS, Computer networks, Databases, Programming Lanugages and more.",
    icon: React.createElement(LuGraduationCap),
    date: "Jul 2008 - Aug 2011",
  },
] as const;

export const projectsData = [
  {
    title: "Jobber",
    description:
      "Worked as a full-stack developer on many user facing features as well as experiments targeting user retention on the platform.",
    tags: ["Ruby on Rails", "ReactJS", "React Native", "PostgresQL", "Split", "Graphql", "AWS"],
    imageUrl: jobberImg,
  },
  {
    title: "Stormguard",
    description:
      "Headed the backend development of the first version and then led the team for the service powering this feature during my tenure in Enphase. ",
    tags: ["Spring Boot (java)", "Mongodb", "AWS"],
    imageUrl: stormguardImg,
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
