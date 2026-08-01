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
  const [showIntro, setShowIntro] = useState(true); // Disabled intro loader while holding page is active

  return (
    <main className="w-full min-h-screen bg-[#FAFAFA]">
     
        <AnimatePresence mode="wait">
          {showIntro && (
            <IntroLoader key="intro" onComplete={() => setShowIntro(false)} />
          )}
        </AnimatePresence>
        {!showIntro && (
          <div className="w-full">
            <Navbar />
            <Hero />
            <TrustedBy />
            <Statisctics />
            <WhyChooseVoltex />
            <Services />
            <Testimonials />
            <CTA />
            <Footer />
          </div>
        )}
     
    </main>
  );
}