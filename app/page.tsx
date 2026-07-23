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
  const [showIntro, setShowIntro] = useState(false); // Disabled intro loader while holding page is active

  return (
    <main className="w-full min-h-screen bg-[#FAFAFA] flex items-center justify-center p-6 text-center">
      <div className="max-w-md mx-auto space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
          !
        </div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Website Temporarily Unavailable
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          This website has been temporarily suspended. Please contact your developer or web administrator to restore services.
        </p>
      </div>

      {/* 
        -------------------------------------------------------------
        ORIGINAL WEBSITE CONTENT (Commented out until ready to restore)
        -------------------------------------------------------------
        
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
      */}
    </main>
  );
}