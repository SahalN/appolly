/** @format */

import HighlightsSection from "@/components/HighlightsSection";
import Hero from "@/components/Hero";

import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <AboutSection />
      <HighlightsSection className=' px-[8.5rem] bg-[url(/bg-feature.svg)] bg-no-repeat bg-center bg-cover' />
    </>
  );
}
