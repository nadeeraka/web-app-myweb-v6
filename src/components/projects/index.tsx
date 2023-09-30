"use client";
import React from "react";
import Heading from "@/app/helpers/sectionHeding";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Skills");
  return (
    <section className="mt-20">
      <div className=" flex justify-center items-center">
        <Heading text="My Projects" />
      </div>
      <div className="mb-10">
        {projectsData.map((data, i) => (
          <Project key={i} data={data} number={i} />
        ))}
      </div>
    </section>
  );
}
