"use client";
import React from "react";
import { links } from "@/lib/data";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <div className="z-[999] relative  flex justify-center">
      <motion.div
        className="   fixed top-10   border-white border-opacity-40 
       bg-white bg-opacity-80 shadow-lg shadow-black/[0.3] backdrop-blur-[0.5rem] 
       lg:h-[3.5rem] lg:w-[60%] lg:rounded-full md:h-[3.25rem] md:w-[50%] md:rounded-full sm:w-full sm:h-[3rem] 
       sm:rounded-none "
        initial={{ y: -100, x: -100, opacity: 0 }}
        animate={{ y: 0, x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        {links.map(({ name, hash }) => (
          <a href={hash}>{name}</a>
        ))}
      </motion.div>
    </div>
  );
}
