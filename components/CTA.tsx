"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, MotionProps } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  
  // Custom interactive magnetic/fluid micro-coordinates for background glow
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate coordinates relative to the CTA section bounds
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  // Explicitly typing the return block with MotionProps handles the TypeScript motion.div error
  const getFramerConfig = (index: number): MotionProps => ({
    initial: { opacity: 0, y: 24 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // Apple/Porsche cinematic signature ease-out curve
      delay: index * 0.12,
    }
  });

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[680px] max-h-[960px] bg-[#FAFAFA] text-[#111111] selection:bg-[#111111] selection:text-white antialiased overflow-hidden flex flex-col justify-between group/section"
      aria-labelledby="cta-heading"
    >
      {/* Top Border Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/[0.06]" />

      {/* Luxury Minimal Editorial Canvas Lines */}
      <div className="absolute top-0 left-8 md:left-24 w-[1px] h-full bg-black/[0.015] pointer-events-none" />
      <div className="absolute top-0 right-8 md:right-24 w-[1px] h-full bg-black/[0.015] pointer-events-none" />

      {/* Premium Architecture Light Grid Canvas */}
      <div 
        className="absolute inset-0 opacity-[0.45] pointer-events-none mix-blend-multiply transition-opacity duration-1000" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(circle at 50% 50%, white, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, white, transparent 80%)"
        }}
        aria-hidden="true"
      />

      {/* Fluid Interactive Luxury Radial Aura */}
      <div 
        className="absolute pointer-events-none mix-blend-multiply blur-[120px] rounded-full transition-opacity duration-700 ease-out"
        style={{
          width: "600px",
          height: "600px",
          backgroundColor: "rgba(255, 213, 74, 0.14)",
          left: isHovered ? `${mousePos.x}px` : "50%",
          top: isHovered ? `${mousePos.y}px` : "50%",
          transform: "translate(-50%, -50%)",
          opacity: isHovered ? 0.95 : 0.65,
          transition: isHovered ? "left 0.15s cubic-bezier(0.25, 1, 0.5, 1), top 0.15s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.7s ease" : "left 0.8s ease, top 0.8s ease, opacity 0.8s ease"
        }}
        aria-hidden="true"
      />

      {/* Central Interactive Content Core */}
      <div className="my-auto mx-auto w-full max-w-[900px] px-6 flex flex-col items-center text-center relative z-10">
        
        {/* Floating Architectural Badge */}
        <motion.div 
          {...getFramerConfig(0)}
          className="inline-flex items-center gap-2.5 px-3.5 py-1 border border-black/[0.06] bg-white/70 backdrop-blur-md rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFD54A] animate-pulse" style={{ animationDuration: '2.5s' }} />
          <span className="text-[10px] font-semibold tracking-[0.28em] text-black/50 uppercase">
            Ready to get started
          </span>
        </motion.div>

        {/* Display Monolithic Typography */}
        <motion.h2
          id="cta-heading"
          {...getFramerConfig(1)}
          className="text-[44px] sm:text-[62px] md:text-[78px] font-normal tracking-[-0.035em] leading-[1.04] text-black max-w-[20ch]"
        >
          Let’s build your<br />
          <span className="font-serif italic tracking-tight text-black/85 relative inline-block group/text">
            energy future
            <span className="absolute bottom-2 left-0 w-full h-[2px] bg-black/[0.12] origin-left scale-x-0 transition-transform duration-700 ease-out group-hover/text:scale-x-100" />
          </span>.
        </motion.h2>

        {/* Editorial Subtext Context */}
        <motion.p
          {...getFramerConfig(2)}
          className="mt-6 md:mt-8 text-base md:text-[19px] text-black/50 font-normal leading-relaxed max-w-[50ch] tracking-wide"
        >
          Whether you’re planning a residential, commercial or industrial solar project, our team is ready to help you find the right solar solution.
        </motion.p>

        {/* Frictionless Interactions Hub */}
        <motion.div
          {...getFramerConfig(3)}
          className="mt-10 md:mt-12 w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* High-Tier Primary Magnetic Button */}
          <a
            href="#site-survey"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 h-14 bg-[#111111] text-white font-medium text-[15px] rounded-full overflow-hidden shadow-xs transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
          >
            {/* Glossy overlay slide animation */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/5 skew-x-[-25deg] -translate-x-full transition-transform duration-1000 ease-out group-hover:translate-x-[300%]" />
            <span className="relative z-10">Book Free Site Survey</span>
            <ArrowRight className="w-4 h-4 text-white/80 transition-transform duration-300 ease-out transform group-hover:translate-x-1" />
          </a>

          {/* Luxury Floating Secondary Button */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 h-14 bg-white/40 backdrop-blur-xs border border-black/10 text-[#111111] font-medium text-[15px] rounded-full transition-all duration-300 ease-out hover:border-black/30 hover:bg-white/80 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
          >
            <Phone className="w-4 h-4 text-black/30 transition-transform duration-500 ease-out group-hover:rotate-12" />
            <span>Call +91 XXXXX XXXXX</span>
          </a>
        </motion.div>
      </div>

      {/* Docked Premium Status & Validation Grid Foot */}
      <motion.div
        {...getFramerConfig(4)}
        className="w-full max-w-[900px] mx-auto px-6 pb-8 md:pb-12 flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-14 border-t border-black/[0.05] pt-8"
      >
        {[
          "Free Consultation",
          "Customized Design",
          "Professional Installation"
        ].map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 text-xs md:text-[13px] font-medium text-black/45 tracking-wide group/item"
          >
            {/* Subtle interactive accent marker */}
            <span className="w-1.5 h-1.5 rounded-full bg-black/15 transition-all duration-300 group-hover/item:bg-[#FFD54A] group-hover/item:scale-125" aria-hidden="true" />
            <span className="transition-colors duration-300 group-hover/item:text-black">{item}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}