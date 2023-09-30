import React from "react";
import Heading from "@/app/helpers/sectionHeding";
import { skillsData } from "@/lib/data";
export default function Skills() {
  return (
    <section>
      <Heading text={"Skills"} />
      <div className="flex justify-center items-center">
        {skillsData.map((tag, i) => (
          <div className="" key={i}>
            {tag}
          </div>
        ))}
      </div>
    </section>
  );
}
