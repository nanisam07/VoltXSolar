"use client";
import Image from "next/image";


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

// --- Navigation Layout Configurations ---
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Government Subsidy", href: "#subsidy" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();

  // Fine-tuned spring physics matching Apple UI metrics
  const springConfig = { stiffness: 280, damping: 30, mass: 0.8 };

  // Scroll Dependent Transform Mechanics
  const rawHeight = useTransform(scrollY, [0, 120], [76, 60]);
  const rawY = useTransform(scrollY, [0, 120], [28, 14]);
  const rawWidth = useTransform(scrollY, [0, 120], [92, 86]);
  const rawBgOpacity = useTransform(scrollY, [0, 120], [0.72, 0.88]);
  const rawShadow = useTransform(
    scrollY,
    [0, 120],
    [
      "0 4px 24px -1px rgba(11, 31, 58, 0.02), 0 1px 0 0 rgba(255, 255, 255, 0.65) inset",
      "0 16px 36px -4px rgba(11, 31, 58, 0.07), 0 1px 0 0 rgba(255, 255, 255, 0.85) inset",
    ]
  );

  // Apply fluid springs over transforms to eradicate jagged scroll steps
  const height = useSpring(rawHeight, springConfig);
  const y = useSpring(rawY, springConfig);
  const widthPercent = useSpring(rawWidth, springConfig);
  const bgOpacity = useSpring(rawBgOpacity, springConfig);
  const boxShadow = rawShadow; // Handled directly via CSS transformation layering

  // Prevent back-page layout shifts during mobile menu overlays
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        style={{
          height,
          y,
          width: useTransform(widthPercent, (v) => `${v}%`),
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(255, 255, 255, ${v})`),
          boxShadow,
        }}
        className="fixed top-0 left-0 right-0 mx-auto z-50 flex items-center justify-between px-8 border border-white/40 backdrop-blur-2xl rounded-full max-w-7xl"
      >
        {/* LEFT CONTAINER: Logo */}
        <div className="flex-1 flex justify-start">
          <a
            href="#home"
            className="flex items-center gap-3 group relative z-50 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1F3A]/20"
            aria-label="Voltex Solar Homepage"
          >
            <div className="relative flex items-center justify-center w-14 h-14">
  

  <Image
    src="/image/logo.png"
    alt="Logo"
    width={80}
    height={80}
    className="relative z-10 transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:rotate-12"
  />
</div>
            <span className="font-semibold text-[17px] tracking-tight text-[#0B1F3A] antialiased">
              Volt X <span className="font-light text-[#0B1F3A]/60">Solar</span>
            </span>
          </a>
        </div>

        {/* CENTER CONTAINER: Apple Style Pill Navigation */}
        <nav 
          className="hidden lg:flex items-center justify-center relative bg-[#0B1F3A]/[0.03] p-1.5 rounded-full border border-[#0B1F3A]/[0.02]"
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label="Desktop Navigation"
        >
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              className="relative px-4 py-1.5 text-[13.5px] font-medium text-[#0B1F3A]/75 hover:text-[#0B1F3A] transition-colors duration-300 whitespace-nowrap rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1F3A]/30"
            >
              {/* Slidemeister background effect */}
              {hoveredIndex === idx && (
                <motion.span
                  layoutId="nav_pill_hover"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  className="absolute inset-0 bg-white shadow-[0_2px_8px_rgba(11,31,58,0.04)] rounded-full z-0 border border-[#0B1F3A]/[0.02]"
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </nav>

        {/* RIGHT CONTAINER: Action Utilities */}
        <div className="flex-1 flex justify-end items-center">
          <div className="hidden lg:block">
            <a
              href="#survey"
              className="group relative flex items-center gap-2 px-5 py-2.5 bg-[#0B1F3A] hover:bg-[#122e54] text-white font-medium text-[13.5px] rounded-full transition-all duration-300 overflow-hidden whitespace-nowrap shadow-[0_4px_12px_rgba(11,31,58,0.15)] hover:shadow-[0_6px_20px_rgba(11,31,58,0.25)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="relative z-10 transition-colors group-hover:text-[#FFD54A]">Book Free Survey</span>
              <ArrowRight className="w-4 h-4 text-[#FFD54A] relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              
              {/* Internal Apple Liquid Shimmer Glow */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out" />
            </a>
          </div>

          {/* Micro-animated Fluid Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full text-[#0B1F3A] hover:bg-[#0B1F3A]/5 transition-colors relative z-50 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* MOBILE FULLSCREEN EXPANSION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#F8FAFC]/96 z-40 lg:hidden flex flex-col justify-between pt-36 pb-14 px-10"
          >
            {/* Apple Luxury Radial ambient light injections */}
            <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] bg-[#FFD54A]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[350px] h-[350px] bg-[#0B1F3A]/5 rounded-full blur-[80px] pointer-events-none" />

            <nav className="flex flex-col gap-6 relative z-10" aria-label="Mobile Navigation Drawer">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{
                    delay: index * 0.04,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="inline-block text-[32px] font-semibold tracking-tight text-[#0B1F3A] hover:opacity-60 active:opacity-40 transition-opacity duration-200"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ delay: navItems.length * 0.04 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative z-10"
            >
              <a
                href="#survey"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#FFD54A] text-[#0B1F3A] font-bold text-[16px] rounded-2xl shadow-[0_8px_24px_rgba(255,213,74,0.25)] active:scale-[0.98] transition-transform duration-200"
              >
                <span>Book Free Survey</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}