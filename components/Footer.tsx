"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, MotionProps } from "framer-motion";

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/moveto_solar" },
  { name: "LinkedIn", href: "#" }, // TODO: replace with your LinkedIn URL
  { name: "WhatsApp", href: "https://wa.me/918790650918" },
];

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.05 });
  
  // Custom states for tracking elegant fluid interactive logo coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    const target = containerRef.current;
    if (target) {
      target.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (target) {
        target.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  // Explicitly typing this as MotionProps fixes the spread operator errors
  const getFadeUpAnimation = (delayIndex: number): MotionProps => ({
    initial: { opacity: 0, y: 16 },
    animate: isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    transition: {
      duration: 0.85,
      ease: [0.16, 1, 0.3, 1],
      delay: delayIndex * 0.06,
    },
  });

  return (
    <footer
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full bg-[#FAFAFA] text-[#111111] selection:bg-[#111111] selection:text-white antialiased overflow-hidden flex flex-col pt-20 pb-10"
      aria-labelledby="footer-core-heading"
    >
      {/* Luxury Typographic Liquid Core — Fills structural layout space interactively */}
      <div 
        className="absolute pointer-events-none font-bold tracking-[-0.05em] leading-none text-black/[0.03] select-none text-center w-full uppercase transition-colors duration-700 ease-out z-0"
        style={{
          fontSize: "13.5vw",
          left: isHovered ? `${mousePos.x}px` : "50%",
          top: isHovered ? `${mousePos.y}px` : "48%",
          transform: "translate(-50%, -50%)",
          color: isHovered ? "rgba(17, 17, 17, 0.14)" : "rgba(17, 17, 17, 0.03)",
          transition: isHovered 
            ? "left 0.25s cubic-bezier(0.25, 1, 0.5, 1), top 0.25s cubic-bezier(0.25, 1, 0.5, 1), color 0.5s ease" 
            : "left 0.8s ease, top 0.8s ease, color 0.8s ease"
        }}
        aria-hidden="true"
      >
        MovetoSolar
      </div>

      {/* Structural Minimal Grid Lines */}
      <div className="absolute top-0 left-8 md:left-24 w-[1px] h-full bg-black/[0.015] pointer-events-none" />
      <div className="absolute top-0 right-8 md:right-24 w-[1px] h-full bg-black/[0.015] pointer-events-none" />

      {/* Main Container Core */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col relative z-10">
        
        {/* =====================================================
            SECTION 2 & 3: Master Asymmetrical Technical Ledger
            ===================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 gap-x-12 items-start">
          
          {/* Left Master Branding Cluster */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.h2
              id="footer-core-heading"
              {...getFadeUpAnimation(0)}
              className="text-[44px] sm:text-[54px] md:text-[64px] font-bold tracking-[-0.04em] leading-none text-black select-none"
            >
              MovetoSolar
            </motion.h2>
            <motion.div
              {...getFadeUpAnimation(1)}
              className="mt-3 text-[14px] text-black/40 font-medium tracking-wide"
            >
              <p>Building cleaner energy for tomorrow.</p>
            </motion.div>
          </div>

          {/* Right Operational Directory Grid Node */}
          <motion.div 
            {...getFadeUpAnimation(2)}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[13px] font-medium text-black/60"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-bold tracking-[0.2em] text-black/30 uppercase mb-0.5">Contact</span>
              <a href="tel:+918790650918" className="hover:text-black transition-colors duration-200">+91 8790650918</a>
              <a href="tel:+917799322357" className="hover:text-black transition-colors duration-200">+91 7799322357</a>
              <a href="mailto:movetosolar@gmail.com" className="hover:text-black transition-colors duration-200">movetosolar@gmail.com</a>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-bold tracking-[0.2em] text-black/30 uppercase mb-0.5">Location & Desk</span>
              <span className="text-black/50">Medchal, Hyderabad, Telangana</span>
              <span className="text-black/50">Banjara hills road Number 11, BRK News</span>
              <span className="text-black/40 font-normal text-[11px]">Mon–Sat — 9:00 AM – 6:00 PM</span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            SECTION 4: Pure Technical Line Divider (Spaced for Logo Fluidity)
            ===================================================== */}
        <div className="w-full h-[1px] bg-black/[0.08] mt-36 mb-6" />

        {/* =====================================================
            SECTION 5 & 6: Premium Navigation Hub & Typographic Socials
            ===================================================== */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-y-6 gap-x-12">
          
          {/* Minimal Horizon Links Nav Row */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer Navigation">
            {["Home", "About", "Services", "Projects", "Testimonials", "Contact"].map((link, idx) => (
              <motion.div key={link} {...getFadeUpAnimation(3 + idx)}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="group relative inline-flex items-center text-[13px] font-bold text-black/50 transition-colors duration-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                    {link}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-black origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Clean Typography Only Social Hub Matrix */}
          <div className="flex items-center gap-x-6 gap-y-2 flex-wrap text-[12px] font-bold">
            {socialLinks.map((social, idx) => (
              <motion.div
                key={social.name}
                {...getFadeUpAnimation(9 + idx)}
                className="inline-block"
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center text-black/40 hover:text-black transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#111111]"
                >
                  <span className="inline-block transition-transform duration-300 group-hover:-translate-y-[1px]">
                    {social.name}<span className="inline-block font-sans ml-0.5 text-[9px] text-black/30 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            SECTION 7: Pure Metadata Baseline Matrix
            ===================================================== */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-semibold tracking-wider text-black/30 uppercase pt-6 mt-4 border-t border-black/[0.03]">
          <motion.span {...getFadeUpAnimation(13)}>
            © 2026 Move to Solar. All rights reserved.
          </motion.span>
          <motion.span {...getFadeUpAnimation(14)} className="font-mono tracking-tight lowercase text-black/[0.25]">
            Designed with precision by <a href="https://idea2site.com" target="_blank" rel="noopener noreferrer" className="hover:text-black/50 transition-colors duration-200">Idea2Site</a>.
          </motion.span>
        </div>

      </div>
    </footer>
  );
}