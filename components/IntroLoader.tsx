"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";

interface IntroLoaderProps {
  onComplete: () => void;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  // FIXED: Added "as const" to explicitly cast this as a fixed cubic-bezier tuple type
  const luxuryEase = [0.16, 1, 0.3, 1] as const;

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(10px)",
        transition: { duration: 1, ease: luxuryEase } 
      }}
      className="fixed inset-0 bg-[#0A0D14] z-[9999] flex flex-col items-center justify-center select-none overflow-hidden"
    >
      {/* Editorial Vignette + Subtle Radiance Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.04)_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0D14]/50 to-[#0A0D14]" />

      {/* Structural Mask Layer */}
      <div className="relative flex flex-col items-center justify-center tracking-[0.2em]">
        
        {/* Luxury Mask Reveal Container */}
        <div className="overflow-hidden flex items-center relative py-4 px-8">
          
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] font-sans text-[#F8FAFC] antialiased flex items-center tracking-[0.25em] uppercase">
            
            {/* "VOLT" - Slow Elegant Fade-in and Letter Spacing Stretch */}
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.1em", filter: "blur(6px)" }}
              animate={{ opacity: 0.85, letterSpacing: "0.25em", filter: "blur(0px)" }}
              transition={{ duration: 1.8, ease: luxuryEase, delay: 0.2 }}
              className="font-extralight text-[#E2E8F0]"
            >
              VOLT
            </motion.span>

            {/* "X" - The Premium Signature Node */}
            <span className="relative inline-flex items-center justify-center mx-3">
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: luxuryEase, delay: 0.5 }}
                className="font-semibold text-[#059669] drop-shadow-[0_0_30px_rgba(5,150,105,0.25)] relative z-10"
              >
                X
              </motion.span>
              {/* Micro Ambient Glow Behind X */}
              <motion.span 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.15, scale: 1.8 }}
                transition={{ duration: 2, ease: luxuryEase, delay: 0.6 }}
                className="absolute inset-0 bg-[#059669] rounded-full filter blur-xl"
              />
            </span>

            {/* "SOLAR" - Balanced Weights */}
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.1em", filter: "blur(6px)" }}
              animate={{ opacity: 0.95, letterSpacing: "0.25em", filter: "blur(0px)" }}
              transition={{ duration: 1.8, ease: luxuryEase, delay: 0.3 }}
              className="font-medium text-white"
            >
              SOLAR
            </motion.span>

          </h1>
        </div>

        {/* Minimalist Premium Accent Border System */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60px] h-[1px] overflow-hidden">
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{ duration: 1.4, ease: luxuryEase, delay: 0.8 }}
            className="h-full bg-gradient-to-r from-transparent via-[#059669]/60 to-transparent"
          />
        </div>

      </div>

      {/* Luxury Subtitle Signature */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.35, y: 0 }}
        transition={{ duration: 1.2, ease: luxuryEase, delay: 1.2 }}
        className="absolute bottom-12 font-sans text-[9px] font-medium tracking-[0.4em] uppercase text-[#94A3B8]"
      >
        Developed by Idea2Site
      </motion.p>
    </motion.div>
  );
}