"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- Premium Kinematic Motion Profiles ---
const fvTextReveal: Variants = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
  },
};

const fvStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const fvHeroMask: Variants = {
  hidden: { clipPath: "inset(15% 15% 15% 15% rounded 48px)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0% rounded 32px)",
    opacity: 1,
    transition: { duration: 1.8, ease: [0.21, 1, 0.36, 1] },
  },
};

const fvItemReveal: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Custom Smooth Fluid Cursor state tracking
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<"default" | "hover" | "dark">("default");
  const MotionLink = motion.create(Link);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(heroProgress, [0, 1], ["0%", "15%"]);
  const heroImageScale = useTransform(heroProgress, [0, 1], [1, 1.06]);

  const representativeProjects = [
    {
      id: 1,
      name: "Green Valley International School",
      category: "Educational Institution",
      capacity: "120 kW",
      location: "Hyderabad",
      desc: "Representative rooftop solar solution designed for a modern educational campus.",
      img: "/projects/project-1.jpeg"
    },
    {
      id: 2,
      name: "Sri Chaitanya Junior College",
      category: "College",
      capacity: "85 kW",
      location: "Vijayawada",
      desc: "Example commercial-scale rooftop installation for higher education.",
      img: "/projects/project-2.jpeg"
    },
    {
      id: 3,
      name: "Narayana Educational Campus",
      category: "Educational Institution",
      capacity: "150 kW",
      location: "Visakhapatnam",
      desc: "Representative solar infrastructure for large academic buildings.",
      img: "/projects/project-3.jpeg"
    },
    {
      id: 4,
      name: "Zilla Parishad High School",
      category: "Government School",
      capacity: "45 kW",
      location: "Warangal",
      desc: "Example sustainable energy solution for public education facilities.",
      img: "/projects/project-4.jpeg"
    },
    {
      id: 5,
      name: "Sai Lakshmi Residency",
      category: "Residential",
      capacity: "8 kW",
      location: "Hyderabad",
      desc: "Representative premium rooftop installation for an independent home.",
      img: "/projects/project-5.jpeg"
    },
    {
      id: 6,
      name: "Sri Venkateswara Residency",
      category: "Residential",
      capacity: "10 kW",
      location: "Medchal",
      desc: "Modern rooftop solar designed for long-term energy savings.",
      img: "/projects/project-6.jpeg"
    },
    {
      id: 7,
      name: "Annapurna Hospitals",
      category: "Healthcare",
      capacity: "90 kW",
      location: "Hyderabad",
      desc: "Representative healthcare solar infrastructure with reliable power generation.",
      img: "/projects/project-7.jpeg"
    },
    {
      id: 8,
      name: "Shree Balaji Industries",
      category: "Industrial",
      capacity: "350 kW",
      location: "Medchal",
      desc: "Industrial-scale solar solution designed for manufacturing facilities.",
      img: "/projects/project-8.jpeg"
    },
    {
      id: 9,
      name: "Lakshmi Rice Mill",
      category: "Industrial",
      capacity: "180 kW",
      location: "Nizamabad",
      desc: "Representative commercial solar installation for agro-processing.",
      img: "/projects/project-1.jpeg"
    },
    {
      id: 10,
      name: "Government Polytechnic College",
      category: "Educational Institution",
      capacity: "110 kW",
      location: "Karimnagar",
      desc: "Example campus-wide renewable energy implementation.",
      img: "/projects/project-2.jpeg"
    },
    {
      id: 11,
      name: "Saraswati Vidya Mandir",
      category: "School",
      capacity: "60 kW",
      location: "Nalgonda",
      desc: "Representative rooftop installation for school infrastructure.",
      img: "/projects/project-3.jpeg"
    },
    {
      id: 12,
      name: "Raghava Convention Centre",
      category: "Commercial",
      capacity: "140 kW",
      location: "Hyderabad",
      desc: "Commercial rooftop solar designed for high-energy facilities.",
      img: "/projects/project-1.jpeg"
    }
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative bg-[#FAFAFA] text-[#111111] antialiased font-sans selection:bg-[#111111] selection:text-[#FAFAFA] min-h-screen overflow-x-hidden cursor-none"
    >
      
      {/* INTERACTIVE COMPOSITE CURSOR */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: cursorType === "hover" ? 2.5 : cursorType === "dark" ? 1.8 : 1,
          backgroundColor: cursorType === "dark" ? "rgba(250, 250, 250, 0.9)" : "rgba(255, 255, 255, 1)",
        }}
        transition={{ type: "spring", stiffness: 550, damping: 35, mass: 0.4 }}
      />

      {/* SWISS ARCHITECTURAL BACKGROUND GRID SYSTEM */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 fixed" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(17, 17, 17, 0.015) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(17, 17, 17, 0.015) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* SECTION 1: EDITORIAL TYPOGRAPHIC HERO */}
      <section ref={heroRef} className="relative w-full pt-36 pb-16 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto z-10 flex flex-col justify-start">
        <div className="max-w-4xl space-y-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-neutral-900/[0.04] border border-neutral-900/5 px-3 py-1 rounded-full"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">Project Portfolio</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] text-neutral-900">
            Solar Solutions <br />
            <span className="font-serif font-light italic text-neutral-400">Designed For Every Need.</span>
          </h1>

          <motion.p 
            initial="hidden"
            animate="visible"
            variants={fvTextReveal}
            className="text-lg sm:text-xl font-light text-neutral-500 max-w-2xl leading-relaxed pt-2"
          >
            {"These projects demonstrate the configuration range of high-efficiency residential, commercial, educational and institutional architectural solar layouts proposed by MoveToSolar."}
          </motion.p>
        </div>

        {/* 70vh Premium Parallax Hero Frame */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fvHeroMask}
          className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden shadow-2xl bg-neutral-100 border border-neutral-200/30"
          onMouseEnter={() => setCursorType("hover")}
          onMouseLeave={() => setCursorType("default")}
        >
          <motion.div style={{ y: heroImageY, scale: heroImageScale }} className="absolute inset-0 w-full h-full">
            <Image 
              src="/image/hero5.webp" 
              alt="Premium architectural sustainable energy configuration setup" 
              fill 
              priority
              className="object-cover object-center brightness-95"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: ARCHITECTURAL GALLERY (EDITORIAL MASONRY MATRIX) */}
      <section className="relative py-20 md:py-36 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          variants={fvStaggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-24 md:gap-y-36 md:gap-x-12 xl:gap-x-24 w-full"
        >
          {representativeProjects.map((project, index) => {
            // Generates an alternating asymmetrical structural grid rhythm
            const isStaggered = index % 2 !== 0;

            return (
              <motion.div 
                key={project.id}
                variants={fvItemReveal}
                className={`flex flex-col space-y-6 group cursor-none w-full ${isStaggered ? "md:pt-32" : ""}`}
                onMouseEnter={() => setCursorType("hover")}
                onMouseLeave={() => setCursorType("default")}
              >
                {/* Image Canvas Frame wrapper */}
                <div className="relative aspect-[4/3] xl:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200/40 shadow-xs">
                  <Image 
                    src={project.img} 
                    alt={project.name} 
                    fill 
                    className="object-cover transition-transform duration-[1.2s] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-103 brightness-[0.99] filter grayscale hover:grayscale-0"
                  />
                </div>

                {/* Conceptual Content Typography Grid */}
                <div className="space-y-3 px-1 transition-transform duration-500 transform group-hover:translate-x-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-neutral-400">
                    <span className="font-semibold text-neutral-900 uppercase tracking-wider">{project.category}</span>
                    <span>//</span>
                    <span>{project.capacity}</span>
                    <span>//</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 leading-tight">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* FOOTER MATRIX CONFIGURATION LAYER */}
      <div className="relative z-20 bg-white border-t border-neutral-200/60 shadow-2xl shadow-neutral-200/20">
        
        {/* SECTION 3: STATEMENT & HIGH END MINIMAL JAPANESE CTA */}
        <section 
          className="relative py-40 md:py-56 px-6 md:px-12 lg:px-24 xl:px-32 bg-[#111111] text-[#FAFAFA] text-center overflow-hidden w-full"
          onMouseEnter={() => setCursorType("dark")}
          onMouseLeave={() => setCursorType("default")}
        >
          {/* Subtle interior structural lines matrix layout blueprint within layout frame */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
            backgroundImage: `linear-gradient(to right, #FFF 1px, transparent 1px), linear-gradient(to bottom, #FFF 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }} />

          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fvTextReveal}
              className="space-y-6"
            >
              <span className="block text-[10px] font-mono tracking-[0.4em] text-neutral-500 uppercase">Architecture Assessment</span>
              <h2 className="text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.2]">
                "Every project begins with understanding <br />your energy needs."
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
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-4 bg-white text-neutral-900 text-xs font-mono font-bold tracking-widest uppercase px-16 py-6 rounded-xl shadow-2xl cursor-none group transition-colors duration-300 hover:bg-neutral-100"
              >
                <span>Book Free Site Survey</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2.5} />
              </MotionLink>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}