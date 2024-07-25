import Image from "next/image";
import React from "react";

import img from "@/assets/hero.png";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-svh w-full">
      <div className="h-svh">
        <Image src={img} className="h-svh" alt="hero-img" />
      </div>
      <div className="absolute top-0 flex h-svh w-full flex-col items-center justify-center space-y-4">
        <p className="w-[50%] text-center text-lg text-background">
          SOVA, where luxury meets elegance and timeless fashion. We have a rich
          palette of classical colors that are never out of style… With SOVA
          stay warm.
        </p>
        <Button variant="secondary">Splash</Button>
      </div>
    </div>
  );
};

export default Hero;
