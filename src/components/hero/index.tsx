"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IMG from "../../../public/img1.jpg";
import Link from "next/link";
import { BsArrowRight, BsDownload, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function () {
  return (
    <section
      className="text-center w-[50rem] mb-10  scroll-m-[100rem] "
      id="home"
    >
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
        <span className="font-bold">Hello, I'm Nadeeraka.</span> I'm a{" "}
        <span className="font-bold">software engineer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">
          front end web development{" "}
          <span className="font-semibold  !no-underline">React Next.js</span>
        </span>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row sm:justify-center items-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          className="group w-[250px] h-[50px] bg-slate-900 rounded-full flex items-center 
          justify-center text-xl p-4 mb-4 outline-none focus:scale-110 hover:scale-110
          active:scale-105 hover:bg-slate-950 transition sm:mr-1"
          href={"contact#"}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition ml-2" />
        </Link>
        <a
          className="group w-[250px] h-[50px] opacity-40 text-black  bg-slate-50 fill-transparent mb-4
         font-extrabold rounded-full flex items-center justify-evenly text-xl outline-none 
         focus:scale-110 hover:scale-110  active:scale-105 hover:opacity-100 transition cursor-pointer
          border-black/10 border
      "
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <BsDownload className="opacity-70 group-hover:translate-x-1 transition text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/nimantha-nadeeraka-b5811b278/"
          className="w-[50px] h-[50px]  text-black bg-slate-50 fill-transparent mb-4 opacity-40
           font-bold rounded-full flex items-center justify-evenly  text-2xl sm:mr-4 sm:ml-4 outline-none 
           focus:scale-110 hover:scale-110 active:scale-105 hover:opacity-100 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nadeeraka"
          className="w-[50px] h-[50px]  text-black bg-slate-50 fill-transparent opacity-40
          mb-4 font-bold rounded-full flex items-center justify-evenly text-2xl sm:mr-4 outline-none 
          focus:scale-110 hover:scale-110 active:scale-105 hover:opacity-100 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
