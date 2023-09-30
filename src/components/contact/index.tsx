"use client";
import React from "react";
import SectionHeading from "../../app/helpers/sectionHeding";
import { useSectionInView } from "@/lib/hooks";
import { FaPaperPlane } from "react-icons/fa";
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <section id="Contact" ref={ref} className="scroll-mt-28 ">
      <SectionHeading text={"Contact Me"} />
      <div className="m-10">
        <p>
          Please contact me directly at{" "}
          <a
            href="mailto:info.nadeeraka@gmail.com"
            className="underline font-semibold"
          >
            info.nadeeraka@gmail.com
          </a>{" "}
          or through this form.
        </p>
        <div className="block mt-4 mb-5">
          <input
            type="email"
            className=" w-[min(100%,32rem)] sm:h-[3rem] h-[2.5rem] mb-4 rounded-lg text-left p-4
             bg-white/70 text-black active:bg-white focus:bg-white border-none outline-none"
            placeholder="Your Email"
          />
          <textarea
            className=" w-[min(100%,32rem)] sm:h-[12rem] h-[8rem] mb-4 rounded-lg text-left p-4  bg-white/70 text-black active:bg-white focus:bg-white border-none outline-none"
            placeholder="Your message"
            id=""
          />
        </div>
        <button className="w-[50rem h-[3rem] bg-black px-6 text-center rounded-full focus:bg-gray-600 active:bg-gray-600 hover:bg-gray-600  ">
          <div className="flex justify-center text-lg">
            Submit
            <FaPaperPlane className="ml-3" />{" "}
          </div>
        </button>
      </div>
    </section>
  );
}
