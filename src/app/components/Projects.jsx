"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Fitbuff - PHP Application",
    description: "A end to end solution platform for fitness which includes calorie calculator, shopping page, admin panel",
    image: "/images/projects/common.png",
    gitUrl: "https://github.com/navdeep-rajpurohit/fitbuff",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "SoapCustoms",
    description: "A customized application for home grown soap brand to make the recipes and calculate its costs and manage inventory",
    image: "/images/projects/common.png",
    gitUrl: "https://github.com/navdeep-rajpurohit/soapcustoms",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "courseKaro - Course Selling App",
    description: "A react app for selling online courses. (In progress)",
    image: "/images/projects/common.png",
    gitUrl: "https://github.com/navdeep-rajpurohit/courseKaro",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;