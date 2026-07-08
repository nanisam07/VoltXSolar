"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import IntroLoader from "@/components/IntroLoader";
import Hero from "@/components/Hero";
import WhyChooseVoltex from "@/components/Whyvoltex";
import TrustedBy from "@/components/Trusted";
import Statisctics from "@/components/Statisctics";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // Optional but highly recommended: Stops the user from scrolling while loading
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showIntro]);

  return (
    <>
      {/* AnimatePresence makes sure the slide-up animation works before destroying the loader component */}
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroLoader key="intro" onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Your website content mounts completely ONLY when the loader finishes */}
      {!showIntro && (
        <main className="w-full min-h-screen bg-[#FAFAFA]">
          <Navbar />
          <Hero />
          <TrustedBy/>
          <Statisctics/>
          <WhyChooseVoltex/>
          <Services/>
          <Testimonials/>
          <CTA />
          <Footer />

        </main>
      )}
    </>
  );
}