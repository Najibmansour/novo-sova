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
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex aspect-video w-full items-center justify-center border-2 bg-secondary text-background">
                {current}
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
