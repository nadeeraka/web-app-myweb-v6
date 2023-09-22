"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IMG from "../../../public/img1.jpg";

export default function () {
  return (
    <section className="text-center w-[50rem] mb-0 ">
      <div className="flex justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=" "
        >
          <Image
            src={IMG}
            alt=""
            width={200}
            height={50}
            priority={true}
            quality={100}
            className="w-24 h-24 rounded-full border-white border-[3px] object-cover shadow-xl "
          />
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ricardo.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
    </section>
  );
}
