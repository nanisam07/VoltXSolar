"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- Premium Apple-Inspired Animation Profiles ---
const fvTextReveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }
};

const fvStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.2 },
  },
  exit: { opacity: 0 }
};

// Premium Card Entrance and Exit Controls
const fvCardSection: Variants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.96 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 1.4, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
  exit: {
    opacity: 0,
    y: -40,
    scale: 0.98,
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  }
};

// MODIFIED: Reduced the inset clipping for mobile so it reveals the photo perfectly
const fvImageMaskReveal: Variants = {
  hidden: { clipPath: "inset(2% 2% 2% 2% rounded 16px)", opacity: 0, scale: 1.05 },
  visible: {
    clipPath: "inset(0% 0% 0% 0% rounded 16px)",
    opacity: 1,
    scale: 1,
    transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
  },
};

export default function FounderPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const MotionLink = motion.create(Link);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "hover" | "interactive">("default");

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scaleParallax = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  const team = [
    {
      name: "Mosin",
      role: "Principal Founder",
      desc: "Driving the core architectural blueprint and modern clean energy accessibility frameworks behind MoveToSolar.",
      image: "/image/founder.jpeg",
    },
    {
      name: "Madgum Pathan",
      role: "Managing Director",
      desc: "Steering operational engineering scales backed by over 20 years of robust experience in complex electrical grids.",
      image: "/image/director.jpeg",
    },
    {
      name: "Konala Vamsibabu",
      role: "Chief Solar Design & Systems Expert",
      desc: "Architecting high-yield physical solar schematics and micro-grid spatial system integrity.",
      image: "/image/konala.jpeg",
    },
  ];

  const principles = [
    {
      num: "01",
      title: "Intelligent Innovation",
      desc: "Every solar blueprint should integrate seamlessly into modern structural architecture rather than compromising it.",
    },
    {
      num: "02",
      title: "Uncompromising Quality",
      desc: "We curate only premium Tier-1 components built to withstand extreme climatic cycles over multiple decades.",
    },
    {
      num: "03",
      title: "Radical Transparency",
      desc: "Honest consulting frameworks, open analytics, and precise baseline reporting without artificial padding.",
    },
  ];

  const timelineSteps = [
    { year: "The Genesis", title: "The Beginning", desc: "Observing standard grid constraints and discovering the design voids in conventional residential layouts." },
    { year: "The Framework", title: "Deep Learning", desc: "Analyzing spatial micro-grid mechanics, clean generational yield formulas, and architectural load-bearing vectors." },
    { year: "The Ecosystem", title: "Building the Company", desc: "Assembling an elite collective of structural engineers and deploying transparent procurement networks under MoveToSolar." },
    { year: "The Impact", title: "Helping Customers", desc: "Transforming high-overhead real estate footprints into independent, clean-yielding environmental assets." },
    { year: "The Future", title: "Growing Sustainably", desc: "Scaling micro-inverter architectural installations designed to run with absolute biomorphic integration over generations." },
  ];

  return (
    <AnimatePresence mode="wait">
      {isMounted && (
        <div 
          ref={containerRef} 
          className="relative bg-[#FAFAFA] text-[#111111] antialiased font-sans selection:bg-[#111111] selection:text-[#FAFAFA] min-h-screen overflow-x-hidden md:cursor-none"
        >
          {/* INTRO LOAD SCREEN MASK */}
          <motion.div 
            initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(100% 0% 0% 0%)" }}
            transition={{ duration: 1.4, ease: [0.85, 0, 0.15, 1], delay: 0.2 }}
            className="fixed inset-0 bg-white z-50 pointer-events-none border-b border-neutral-200/50"
          />
          
          {/* APPLE INTERACTIVE FLUID CURSOR */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
            animate={{
              x: mousePos.x - 16,
              y: mousePos.y - 16,
              scale: cursorType === "hover" ? 2.5 : cursorType === "interactive" ? 2.0 : 1,
              backgroundColor: "rgba(255, 255, 255, 1)",
            }}
            transition={{ type: "spring", stiffness: 600, damping: 38, mass: 0.3 }}
          />

          {/* SWISS ARCHITECTURAL GRID BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div 
              className="absolute inset-0 fixed" 
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(17, 17, 17, 0.012) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(17, 17, 17, 0.012) 1px, transparent 1px)
                `,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          {/* SECTION 1: LUXURY BOLD TYPOGRAPHIC HERO & LEADERSHIP GRID */}
          <section className="relative min-h-screen w-full flex flex-col justify-between pt-36 pb-16 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto z-10">
            <div className="w-full space-y-16 my-auto">
              
              {/* Top Intro Header */}
              <div className="max-w-4xl space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center space-x-2 bg-neutral-900/[0.04] border border-neutral-900/5 px-3 py-1 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">Leadership Portfolio</span>
                </motion.div>
                
                <h1 className="text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] text-neutral-900">
                  The Minds Behind <br />
                  <motion.span 
                    animate={{ color: ["#a3a3a3", "#171717", "#a3a3a3"] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="font-serif font-light italic text-neutral-400"
                  >
                    MoveToSolar.
                  </motion.span>
                </h1>

                <motion.p 
                  initial="hidden"
                  animate="visible"
                  variants={fvTextReveal}
                  className="text-lg sm:text-xl font-light text-neutral-500 max-w-2xl leading-relaxed border-l-2 border-neutral-900 pl-6"
                >
                  {"Our leadership collective is built on a shared belief — clean energy should be architectural, uncompromisingly precise, and engineered to last generations."}
                </motion.p>
              </div>

              {/* Alternating Row Layout */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                variants={fvStaggerContainer}
                className="flex flex-col space-y-16 md:space-y-24 w-full pt-4"
              >
                {team.map((member, index) => {
                  const isEven = index % 2 === 1;
                  return (
                    <motion.div 
                      key={index}
                      variants={fvCardSection}
                      className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center bg-white/50 backdrop-blur-md border border-neutral-200/50 p-6 md:p-12 rounded-2xl transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-neutral-200/40"
                      onMouseEnter={() => setCursorType("hover")}
                      onMouseLeave={() => setCursorType("default")}
                    >
                      {/* Typography Metadata */}
                      <div className={`space-y-4 md:col-span-7 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                        <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-400">
                          // 0{index + 1} // {member.role}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-neutral-500">
                          {member.name}
                        </h2>
                        <p className="text-base font-light text-neutral-500 leading-relaxed pt-2 max-w-xl">
                          {member.desc}
                        </p>
                      </div>

                      {/* MODIFIED: Changed height rules and object-fit layout style to preserve full photo visibility */}
                      <div className={`w-full relative aspect-[4/5] sm:aspect-[1/1] md:aspect-[4/5] md:col-span-5 overflow-hidden rounded-xl bg-neutral-50 border border-neutral-200/40 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                        <motion.div 
                          variants={fvImageMaskReveal} 
                          className="w-full h-full relative"
                        >
                          <Image 
                            src={member.image} 
                            alt={member.name} 
                            fill 
                            priority={index === 0}
                            className="object-contain md:object-cover contrast-[1.01] brightness-[0.99] transition-transform duration-700 group-hover:scale-102"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

            </div>

            {/* Minimal Bottom Label */}
            <div className="w-full pt-12 border-t border-neutral-200/40 flex justify-between items-center font-mono text-[10px] text-neutral-400 uppercase tracking-widest mt-16">
              <span>01 // Core Executive Collective</span>
              <span>© 2026</span>
            </div>
          </section>

          {/* SECTION 2: THE VISION */}
          <section ref={parallaxRef} className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto z-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              
              {/* MODIFIED: Changed layout rules for secondary hero panel */}
              <div 
                className="lg:col-span-5 relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full overflow-hidden bg-neutral-100 rounded-2xl border border-neutral-200/40 shadow-xl shadow-neutral-200/30"
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("default")}
              >
                <motion.div style={{ y: yParallax, scale: scaleParallax }} className="absolute -inset-y-24 inset-x-0">
                  <Image 
                    src="/image/hero1.webp" 
                    alt="MoveToSolar clean structural workspace blueprint" 
                    fill 
                    className="object-contain lg:object-cover opacity-95 transition-all duration-1000 filter grayscale contrast-105 hover:grayscale-0"
                  />
                </motion.div>
              </div>

              {/* Large Minimal Bold Copy Block */}
              <div className="lg:col-span-7 space-y-8">
                <span className="block text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase">Statement of Purpose</span>
                <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05]">
                  Building More Than <br />
                  <span className="font-serif font-light italic text-neutral-400">Solar Systems.</span>
                </h2>
                <div className="space-y-6 text-lg font-light text-neutral-500 leading-relaxed max-w-xl">
                  <p>
                    MoveToSolar was founded with the goal of helping people reduce electricity costs while creating a cleaner and more sustainable future.
                  </p>
                  <p className="text-neutral-900 font-medium">
                    Every project is approached with professionalism, transparency and long-term thinking.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 3: LEADERSHIP PHILOSOPHY */}
          <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto z-10 border-t border-neutral-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
              <div className="lg:col-span-6 space-y-4">
                <span className="block text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase">Execution Framework</span>
                <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900">Leadership Philosophy</h2>
              </div>
            </div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-10%" }} 
              variants={fvStaggerContainer} 
              className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 xl:gap-16"
            >
              {principles.map((p, index) => (
                <motion.div 
                  key={index} 
                  variants={fvTextReveal}
                  whileHover={{ y: -8 }}
                  className="space-y-6 border-t-2 border-neutral-900 pt-8 flex flex-col justify-between min-h-[240px] group transition-all duration-500"
                  onMouseEnter={() => setCursorType("hover")}
                  onMouseLeave={() => setCursorType("default")}
                >
                  <div className="space-y-4">
                    <span className="block font-mono text-xs font-semibold tracking-wider text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300">
                      // SECTION {p.num}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-neutral-900">{p.title}</h3>
                    <p className="text-sm sm:text-base text-neutral-500 font-light leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* SECTION 4: WHY WE STARTED MOVETOSOLAR */}
          <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto z-10 border-t border-neutral-200/50">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-4">
                <span className="block text-[10px] font-mono tracking-[0.3em] text-neutral-400 uppercase">The Vector Loop</span>
                <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05]">
                  Why We Started <br />
                  <span className="font-serif font-light italic text-neutral-400">MoveToSolar</span>
                </h2>
              </div>

              <div className="lg:col-span-8 divide-y divide-neutral-200/40 border-b border-neutral-200/40">
                {timelineSteps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-5%" }}
                    variants={fvTextReveal}
                    className="py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 group transition-colors duration-500 hover:bg-neutral-900/[0.015] px-6 -mx-6 rounded-xl"
                    onMouseEnter={() => setCursorType("hover")}
                    onMouseLeave={() => setCursorType("default")}
                  >
                    <div className="md:col-span-4">
                      <span className="block font-mono text-xs font-semibold tracking-widest text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300">
                        {step.year}
                      </span>
                    </div>
                    <div className="md:col-span-8 space-y-3">
                      <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">{step.title}</h3>
                      <p className="text-sm sm:text-base text-neutral-500 font-light leading-relaxed max-w-xl">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>

          {/* SECTION 5: MESSAGE FROM THE BOARD */}
          <section className="relative py-40 md:py-56 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1500px] mx-auto z-10 text-left border-t border-neutral-200/50">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fvTextReveal}
              className="space-y-12 relative max-w-5xl"
            >
              <span className="block font-serif text-[14rem] text-neutral-200/60 select-none leading-none absolute -top-28 -left-10 pointer-events-none">“</span>
              
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-light tracking-tight text-neutral-900 leading-[1.35] relative z-10">
                {"\"Our vision is not simply to install solar panels. It is to help families and businesses become independent through clean, reliable energy while building a more sustainable future.\""}
              </h2>
              
              <div className="pt-4 flex items-center space-x-4 font-mono">
                <motion.span 
                  animate={{ width: [32, 72, 32] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="h-[2px] bg-neutral-900" 
                />
                <div className="text-xs uppercase tracking-widest">
                  <span className="block font-bold text-neutral-900 text-sm">The Executive Collective</span>
                  <span className="block text-neutral-400 text-[10px] mt-0.5 font-medium">Founders & Directors // MoveToSolar</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* SECTION 6: CLOSING CTA */}
          <section 
            className="relative py-48 px-6 md:px-12 lg:px-24 xl:px-32 bg-white text-[#111111] border-t border-neutral-200/60 text-center overflow-hidden z-10"
            onMouseEnter={() => setCursorType("interactive")}
            onMouseLeave={() => setCursorType("default")}
          >
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
              backgroundImage: `linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)`,
              backgroundSize: "60px 60px"
            }} />

            <div className="max-w-3xl mx-auto space-y-12 relative z-10">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fvTextReveal}
                className="space-y-6"
              >
                <span className="block text-[10px] font-mono tracking-[0.4em] text-neutral-400 uppercase">Consultation Framework</span>
                <h2 className="text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tight text-neutral-900 leading-none">
                  Ready to power <br />
                  <span className="font-serif font-light italic text-neutral-400">your future?</span>
                </h2>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fvTextReveal}
                className="pt-4"
              >
                <MotionLink
                  href="/survey"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center space-x-4 bg-neutral-900 text-white text-xs font-mono font-bold tracking-widest uppercase px-16 py-6 rounded-xl shadow-xl hover:bg-neutral-800 transition-colors duration-300 md:cursor-none group"
                >
                  <span>Book a Free Site Survey</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
                </MotionLink>
              </motion.div>
            </div>
          </section>

        </div>
      )}
    </AnimatePresence>
  );
}