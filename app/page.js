import { CarrouselImages } from "@/components/custom_ui/caroussel/caroussel";
import CategoryGroup from "@/components/custom_ui/category_group/category_group";
import Hero from "@/components/custom_ui/hero/hero";
import HotDeals from "@/components/custom_ui/hot_deals/hot_deals";
import Footer from "@/components/custom_ui/layout/footer/footer";
import Image from "next/image";

import img from "@/assets/hero.png";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col gap-y-10 bg-gradient-to-t from-stone-900 to-transparent to-[20%] text-secondary md:to-[20%]">
      <Hero img={img}>
        <p className="w-[80%] text-center text-2xl text-background md:w-[50%] md:text-2xl">
          SOVA, where luxury meets elegance and timeless fashion. We have a rich
          palette of classical colors that are never out of style… With SOVA
          stay warm.
        </p>
        <Button variant="secondary">Splash</Button>
      </Hero>
      <CategoryGroup />
      <HotDeals />
      <CarrouselImages />
      <Footer />
    </main>
  );
}
