import React from "react";
import Image from "next/image";
import IMG from "../../../public/img1.jpg";

export default function () {
  return (
    <section>
      <div className="flex justify-center items-center w-full">
        <div className=" ">
          <Image
            src={IMG}
            alt=""
            width={200}
            height={50}
            priority={true}
            quality={100}
            className="w-24 h-24 rounded-full border-white border-[3px] object-cover shadow-xl "
          />
          <span>👌</span>
        </div>
      </div>
    </section>
  );
}
