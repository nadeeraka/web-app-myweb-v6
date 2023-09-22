import Image from "next/image";
import Nav from "../components/nav";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className=" ">
      <Nav />
      <div className="flex justify-center items-center px-4">
        <Hero />
      </div>
    </main>
  );
}
