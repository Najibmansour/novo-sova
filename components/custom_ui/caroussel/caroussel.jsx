"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

import img1 from "@/assets/caroussel.png";
import img2 from "@/assets/caroussel.png";
import img3 from "@/assets/caroussel.png";
import img4 from "@/assets/caroussel.png";
import img5 from "@/assets/caroussel.png";
import Image from "next/image";

const imgs = [img1, img2, img3, img4, img5];

export function CarrouselImages() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex w-full items-center justify-center">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        setApi={setApi}
        className="w-full shadow-2xl"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {imgs.map((img, index) => (
            <CarouselItem key={index} className="group relative">
              <div className="flex w-full items-center justify-center border-y-2 text-background">
                <Image
                  src={img}
                  alt="carousel-image"
                  className="w-full transition-all duration-500 group-hover:opacity-35"
                />
              </div>
              <div className="group-hover: absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 text-3xl tracking-widest text-background opacity-100 transition-all group-hover:opacity-0">
                History
              </div>
              <div className="group-hover: absolute right-1/2 top-1/2 w-[70%] -translate-y-1/2 translate-x-1/2 text-xl tracking-widest text-background opacity-0 transition-all group-hover:opacity-100">
                SOVA began in the heart of cold, Moscow, where a group of
                artisans and designers came together with a vision to redefine
                fur fashion. The brands name, derived from the Russian word for
                “owl”, which symbolizes wisdom, mystery, and a connection to
                nature. Innovation has always been at the cor e of SOVAs
                success. The brand continuously pushes the boundaries of fur
                fashion, experimenting with new techniques, patterns, and
                styles. Whether its a sleek mink coat, or luxurious sable cape,
                each piece is a testament to SOVA s dedication to excellence and
                creativity. Today, SOVA remains a leader in the world of
                high-end fur fashion, celebrated for its unparalleled
                craftsmanship, innovative designs, and unwavering commitment to
                ethics and sustainability.
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-[10%] right-1/2 flex translate-x-1/2 flex-row gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Circle
              key={index}
              className={
                (cn("white h-7 w-7"),
                current === index + 1 && "fill-background")
              }
              color="#efdac2"
            ></Circle>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
