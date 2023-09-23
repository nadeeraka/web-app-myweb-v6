import { title } from "process";
import React from "react";
import Image from "next/image";

export default function Project({
  data: { title, description, tags, imageUrl },
}) {
  return (
    <section className="flex flex-col justify-center items-center mb-20 mt-20 border-black/5  ">
      <div className="flex justify-between w-[90%] h-[40%] bg-gray-800  leading-relaxed rounded-2xl shadow-blue-50/5 shadow-lg sm:max-w-[800px] ">
        <div className="p-4 m-3">
          <h2 className="text-center text-lg mb-4 font-bold">{title}</h2>
          <p className="">{description}</p>
          <div className="flex no-underline rounded-full flex-shrink-0 justify-normal  flex-wrap mt-4  ">
            {tags.map((tag) => (
              <li className="  rounded-full  bg-slate-900 list-none text-white text-sm py-1 px-3 m-2 ">
                {tag}
              </li>
            ))}
          </div>
        </div>
        <div className="hidden sm:inline">
          <Image src={imageUrl} quality={95} alt={title} />
        </div>
      </div>
    </section>
  );
}
