"use client";
import React from "react";
import Hading from "@/app/helpers/sectionHeding";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      className="flex justify-center items-center scroll-mt-24"
    >
      <div className="container w-[800px] mr-10 ml-10 sm:mr-56 sm:ml-56 p-4">
        <div className="text-lg leading-8 text-center">
          <Hading text="About Me" />
          <p className=" mb-2">
            Experienced Software Engineer with a passion for web application
            development and a strong drive to leverage technology to create
            innovative solutions.{" "}
            <span className="font-bold">
              {" "}
              With over four years of hands-on experience in the field,
            </span>{" "}
            I have successfully delivered high-quality projects, collaborating
            with cross-functional teams to meet client requirements and exceed
            expectations.
          </p>

          <p className=" mb-2">
            My technical expertise includes proficiency in languages such as
            <span className="italic">
              {" "}
              JavaScript, Python, and Java, along with in-depth knowledge of
              frameworks like React.js, Node.js, and Django. I am also
              well-versed in HTML, CSS, and SQL,{" "}
            </span>
            ensuring that I can tackle various aspects of the development
            process with ease. I stay up-to-date with the latest industry trends
            and continuously explore new tools and technologies to enhance my
            skills and stay at the forefront of innovation.
          </p>

          <p className="">
            If you are looking for a{" "}
            <span className="font-extrabold underline ">
              results-driven Software Engineer who is eager to contribute to the
              development of innovative web applications,
            </span>{" "}
            I would welcome the chance to connect and discuss how my skills and
            expertise align with your organization's goals. Let's collaborate to
            create impactful solutions that drive business success and deliver
            exceptional user experiences.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
