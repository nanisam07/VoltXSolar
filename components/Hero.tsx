"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  // FIXED: Explicitly declared as a fixed tuple to pass Framer Motion's ease type validator
  const appleEase = [0.25, 1, 0.5, 1] as const;
  
  const heroImages = [
    "/image/hero1.webp",              
    "/image/hero3.webp",
    "/image/hero4.webp",
    "/image/hero5.webp",      
    "/image/hero1.webp",
  ];

  const dynamicWords = ["Home", "Business", "Future", "Enterprise", "Innovation"];
  const dynamicSubtexts = [
    "homes, businesses, and industries across Telangana.",
    "commercial setups, high-scale enterprises, and offices.",
    "the next generation of clean, smart infrastructure energy.",
    "large industrial complexes and scalable power systems.",
    "forward-thinking modern sustainable architecture solutions."
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.02 }
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.04, staggerDirection: -1 }
    }
  };

  const itemVariants: Variants = {
    initial: { opacity: 0, y: 24 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: appleEase }
    },
    exit: {
      opacity: 0,
      y: -16,
      transition: { duration: 0.8, ease: appleEase }
    }
  };

  return (
    <section className="group/hero relative h-screen w-full bg-[#FAFAFA] flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden select-none">
      
      {/* RIGHT SIDE ASSET PANEL - IMAGE LOOP ENGINE */}
      <div className="absolute right-0 top-0 w-full lg:w-[52%] h-full pointer-events-none overflow-hidden z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: appleEase }}
            className="w-full h-full relative origin-right transition-transform duration-[1400ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/hero:scale-[1.015]"
          >
            <Image
              src={heroImages[index]}
              alt={`Voltex premium infrastructure integration - ${dynamicWords[index] || 'Solar'}`}
              fill
              priority
              quality={100}
              sizes="52vw"
              className="object-cover object-center filter brightness-[0.96] contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent lg:block hidden w-[35%]" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FAFAFA]/20 to-[#FAFAFA]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CORE FRAMEWORK INTERFACE LAYER */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 h-full">
        
        <motion.div 
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="lg:col-span-6 flex flex-col justify-center h-full space-y-12 pt-12"
        >
          {/* Typography Matrix with Premium Slide-and-Fade Typography Loop */}
          <div className="space-y-5">
            <motion.h1 
              variants={itemVariants}
              className="text-[42px] sm:text-[54px] lg:text-[64px] xl:text-[76px] font-semibold tracking-[-0.035em] leading-[1.06] text-[#0F172A] font-sans antialiased"
            >
              Power your{" "}
              <div className="inline-flex relative h-[1.15em] overflow-hidden align-top min-w-[320px] sm:min-w-[360px] md:min-w-[420px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: "60%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-60%", opacity: 0 }}
                    transition={{ duration: 0.65, ease: appleEase }}
                    className="text-[#059669] font-bold tracking-[-0.04em] whitespace-nowrap"
                  >
                    {dynamicWords[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <br />
              <span className="text-[#0F172A]/80">Own your Energy</span>
            </motion.h1>

            {/* Paragraph Loop Container */}
            <div className="h-[4.5em] sm:h-[3.5em] md:h-[3em] relative overflow-hidden max-w-md">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: appleEase }}
                  className="absolute inset-0 text-[14px] lg:text-[15px] font-normal text-[#64748B] leading-relaxed antialiased font-sans"
                >
                  Reduce your electricity bills with premium rooftop solar systems for {dynamicSubtexts[index]} From consultation to installation, we take care of everything.
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Action Systems with Premium Emerald Palette Configuration */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#survey"
              className="group/btn relative flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#059669] hover:bg-[#047857] text-white font-medium text-[13px] tracking-tight rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_4px_12px_rgba(5,150,105,0.15)] hover:shadow-[0_6px_20px_rgba(5,150,105,0.25)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="font-sans">Book Free Site Survey</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FFF] opacity-90 transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>

            <a
              href="#savings"
              className="group/link flex items-center justify-center gap-1 px-5 py-3.5 text-[#059669] font-medium text-[13px] tracking-tight rounded-full transition-colors duration-200"
            >
              <span className="font-sans group-hover/link:underline decoration-2 underline-offset-4">Calculate Your Savings</span>
              <span className="transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover/link:translate-x-0.5">&rarr;</span>
            </a>
          </motion.div>

          {/* Industrial Trust Metrics - Sealed Subtext Elements */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-[#0F172A]/10 grid grid-cols-3 gap-8 text-[#0F172A] font-sans"
          >
            <div className="space-y-1">
              <p className="text-[24px] lg:text-[28px] font-semibold tracking-tight text-[#0F172A] leading-none">500+</p>
              <p className="text-[12px] text-[#64748B] leading-tight">Home powered</p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#64748B]">Projects</p>
            </div>

            <div className="space-y-1">
              <p className="text-[24px] lg:text-[28px] font-semibold tracking-tight text-[#0F172A] leading-none">25-Year</p>
              <p className="text-[12px] text-[#64748B] leading-tight">Performance Quality</p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#64748B]">Warranty</p>
            </div>

            <div className="space-y-1">
              <p className="text-[24px] lg:text-[28px] font-semibold tracking-tight text-[#0F172A] leading-none">MNRE</p>
              <p className="text-[12px] text-[#64748B] leading-tight">Government</p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#64748B]">Approved</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Structural balance column mapping behind background mask */}
        <div className="hidden lg:block lg:col-span-6 pointer-events-none" />

      </div>
    </section>
  );
}