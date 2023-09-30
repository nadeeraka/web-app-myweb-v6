import Image from "next/image";
import Nav from "../components/nav";
import Hero from "@/components/hero";
import Divider from "@/components/devider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import ActiveSectionContextProvider from "@/context/active-section-context";
export default function Home() {
  return (
    <main className=" ">
      {/* <Nav /> */}
      <div className="flex justify-center items-center px-4">
        <Hero />
      </div>
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Divider />
      <Skills />
      {/* </ActiveSectionContextProvider> */}
    </main>
  );
}
