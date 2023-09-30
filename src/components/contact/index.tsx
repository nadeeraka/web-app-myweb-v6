"use client";
import React from "react";
import SectionHeading from "../../app/helpers/sectionHeding";
import { useSectionInView } from "@/lib/hooks";
export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <section id="Contact" ref={ref}>
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
            className=" w-[min(100%,32rem)] h-[min(10%,15rem)] mb-4"
            placeholder="Your Email"
          />
          <textarea name="" id="" cols="30" rows="10" className="block">
            Your message
          </textarea>
        </div>
      </div>
    </section>
  );
}
