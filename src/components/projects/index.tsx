"use client";
import React from "react";
import Heading from "@/app/helpers/sectionHeding";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
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
