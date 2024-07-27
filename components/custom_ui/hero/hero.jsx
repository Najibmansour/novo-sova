import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

const Hero = ({ img, children }) => {
  return (
    <div className="relative h-svh w-full md:h-auto">
      <div className="h-svh md:h-auto">
        <Image
          src={img}
          className="h-svh object-cover object-[42%] md:h-auto"
          alt="hero-img"
        />
      </div>
      <div className="absolute top-0 flex h-full w-full translate-y-14 flex-col items-center justify-center space-y-4 md:translate-y-0">
        {children}
      </div>
    </div>
  );
};

export default Hero;
