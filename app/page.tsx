import React from "react";
import Hero from "@/components/sections/Hero";
import Concept from "@/components/sections/Concept";
import Menu from "@/components/sections/Menu";
import Owner from "@/components/sections/Owner";
import LatestNews from "@/components/sections/LatestNews";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import HowToOrder from "@/components/sections/HowToOrder";
import Faq from "@/components/sections/Faq";
import ShopInfo from "@/components/sections/ShopInfo";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <Concept />
      <Menu />
      <Owner />
      <LatestNews />
      <Gallery />
      <Testimonials />
      <HowToOrder />
      <Faq />
      <ShopInfo />
      <FinalCta />
    </div>
  );
}
