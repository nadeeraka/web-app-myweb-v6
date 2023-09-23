"use client";
import { title } from "process";
import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Project({
  data: { title, description, tags, imageUrl },
  number,
}) {
  const ref = React.useRef;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section
      //   ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group flex flex-col justify-center items-center mb-20 mt-20
     border-black/5   active:scale-105 hover:scale-105  transition scroll-mt-64 sm:scroll-mt-72"
      id="projects"
    >
      <div
        className={clsx(
          "flex justify-between w-[90%] h-[40%] bg-gray-600  leading-relaxed rounded-2xl shadow-blue-50/5 shadow-lg sm:max-w-[800px] active:bg-gray-800 hover:bg-gray-800 transition",
          { "flex-row-reverse": number % 2 }
        )}
      >
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
        <motion.div
          className="hidden sm:inline  w-[700px] h-[250px] overflow-hidden object-fill rounded-lg 
         border-sky-200 border-2 bg-white/80 shadow-2xl
          "
          //   initial={{ opacity: 0, rotate: 0, scale: 0.5 }}
          //   animate={{ opacity: 1, scale: 0.95, rotate: 350 }}
          //   transition={{ delay: 1 }}

          //   initial="offscreen"
          //   whileInView="onscreen"
          //   viewport={{ once: true, amount: 0.8 }}
          initial={{ rotate: 0, scale: 0.5 }}
          whileInView={{ rotate: 350, scale: 0.95 }}
        >
          <Image
            src={imageUrl}
            quality={95}
            alt={title}
            className="w-full scale-105    transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
    
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
    
            group-even:right-[initial] group-even:-left-40"
          />
        </motion.div>
      </div>
    </section>
  );
}
