"use client";
import React from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <div className="z-[999] relative  flex justify-center">
      {/* <motion.div
        className="   fixed top-10   border-white border-opacity-40 
       bg-white bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem] 
       lg:h-[3.5rem] lg:w-[70%] lg:rounded-full md:h-[3.25rem] md:w-[50%] md:rounded-full sm:w-full sm:h-[3rem] 
       sm:rounded-none "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // transition={{ ease: "easeOut", duration: 1 }}
      >
        <div
          className="lg:h-[3.5rem] lg:w-[60%]  md:h-[3.25rem] md:w-[40%]  sm:w-[80%] sm:h-[3rem] 
       "
        >
          {links.map(({ name, hash }) => (
            <a
              href={hash}
              key={hash}
              className="w-[20px] bg-slate-950 items-center  p-5 rounded-full m-2"
          >
              {name}
            </a>
          ))}
        </div>
      </motion.div> */}
      <div
        className="fixed top-0  h-[4.5rem] w-full rounded-none border border-white border-opacity-40
       bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
        sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      >
        {/* lg:h-[5.7%] lg:min-w-[64%] lg:max-w-[62%] lg:rounded-full md:h-[5%] md:w-[85%] md:min-w-[43.7%] 
       md:rounded-full   */}
        {links.map(({ name, hash }) => (
          <a
            href={hash}
            key={hash}
            className="w-[10px] max-h-[8px]   relative top-[13px] left-[4.5rem] p-2  hover:rounded-full gap-y-1  "
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}
