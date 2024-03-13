"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabSwitch from "./TabSwitch";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML, CSS</li>
        <li>Javascript</li>
        <li>NodeJS</li>
        <li>React, NodeJS, NextJS</li>
        <li>MYSQL, NOSQL</li>
        <li>Docker and Cloud</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Masters of Computer Application (2018-2021) - Ramaiah Institute of Technology, Bangalore</li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Accenture (2021-Present) - Software Enginnering Analyst</li>
      </ul>
    )
  }
]

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabSwitch = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/wall.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Hello! I'm Navdeep, a software engineer based in Gurugram, India who
            enjoys learning new things. I develop websites and web apps. After
            post graduating from Ramaiah Institute of Technology, Bangalore, I
            joined the Accenture where I work on a wide variety of interesting
            and meaningful projects on a daily basis.
          </p>
          <div className="flex flex-row mt-8">
            <TabSwitch
              selectTab={() => handleTabSwitch("skills")}
              active={tab == "skills"}
            >
              {" "}
              Skills{" "}
            </TabSwitch>
            <TabSwitch
              selectTab={() => handleTabSwitch("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabSwitch>
            <TabSwitch
              selectTab={() => handleTabSwitch("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabSwitch>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
