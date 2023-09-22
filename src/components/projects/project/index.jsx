import { title } from "process";
import React from "react";
import Image from "next/image";

export default function Project({
  data: { title, description, tags, imageUrl },
}) {
  return (
    <section className="bg-gray-200 w-[800px] h-[600px] mb-10">
      <div className="">
        <h2>{title}</h2>
        <p>{description}</p>
        {tags.map((tag) => (
          <li>{tag}</li>
        ))}
        <Image src={imageUrl} quality={95} alt={title} />
      </div>
    </section>
  );
}
