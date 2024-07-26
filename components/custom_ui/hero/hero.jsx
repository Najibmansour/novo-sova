import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

const Hero = ({ img, desc, button }) => {
  return (
    <div className="relative w-full">
      <div className="">
        <Image src={img} className="" alt="hero-img" />
      </div>
      <div className="absolute top-0 flex h-full w-full flex-col items-center justify-center space-y-4">
        <p className="w-[80%] text-center text-lg text-background md:w-[50%]">
          {desc}
        </p>
        {button && <Button variant="secondary">{button}</Button>}
      </div>
    </div>
  );
};

export default Hero;
