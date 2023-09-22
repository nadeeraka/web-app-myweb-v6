"use client";
import React from "react";
import Heading from "@/app/helpers/sectionHeding";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  return (
    <section>
      <div className=" flex justify-center items-center">
        <Heading text="Projects" />
      </div>
      <div className="mb-10">
        {projectsData.map((data, i) => (
          <Project key={i} data={data} />
        ))}
      </div>
    </section>
  );
}
