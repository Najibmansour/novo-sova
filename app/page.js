import { CarrouselImages } from "@/components/custom_ui/caroussel/caroussel";
import CategoryGroup from "@/components/custom_ui/category_group/category_group";
import Hero from "@/components/custom_ui/hero/hero";
import HotDeals from "@/components/custom_ui/hot_deals/hot_deals";
import Footer from "@/components/custom_ui/layout/footer/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col gap-y-10 bg-gradient-to-t from-stone-900 to-transparent to-[20%] text-secondary">
      <Hero />
      <CategoryGroup />
      <HotDeals />
      <CarrouselImages />
      <Footer />
    </main>
  );
}
