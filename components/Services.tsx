"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "residential",
    number: "01",
    title: "Residential Solar Power Systems",
    description: "Professional rooftop solar systems designed for modern homes, reducing electricity costs while increasing long-term energy independence.",
    image: "/image/Ser1.jpg",
    href: "/services/residential",
  },
  {
    id: "commercial",
    number: "02",
    title: "Commercial Solar Solutions",
    description: "Scalable solar infrastructure optimized for architectural integration across corporate offices, industrial facilities, and institutional campuses.",
    image: "/image/Ser2.jpg",
    href: "/services/commercial",
  },
  {
    id: "installation",
    number: "03",
    title: "Solar Panel Installation",
    description: "End-to-end deployment executed by certified engineers, employing premium structural materials and precise geometric alignments.",
    image: "/image/Ser3.jpg",
    href: "/services/installation",
  },
  {
    id: "design",
    number: "04",
    title: "Solar System Design & Consultation",
    description: "Custom energy modeling, spatial planning, and contextual micro-grid analysis tailored to the specific solar envelope of your property.",
    image: "/image/Ser4.jpg",
    href: "/services/design",
  },
  {
    id: "maintenance",
    number: "05",
    title: "Solar Maintenance & Support",
    description: "Predictive diagnostics, thermographic inspections, and calibrated tuning to secure peak generation efficiency over multi-decade lifecycles.",
    image: "/image/Ser5.jpg",
    href: "/services/maintenance",
  },
  {
    id: "efficiency",
    number: "06",
    title: "Energy Efficiency Solutions",
    description: "Cohesive infrastructure engineering designed to minimize systemic thermal losses and drastically elevate aggregate return on investment.",
    image: "/image/Ser6.jpg",
    href: "/services/efficiency",
  },
];

const ServiceRow = ({ 
  service, 
  index, 
  setCursorText 
}: { 
  service: ServiceItem; 
  index: number; 
  setCursorText: (text: string) => void;
}) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 1;

  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <motion.div
      ref={rowRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 } 
        }
      }}
      className="relative border-b border-[#E5E5E5] py-10 md:py-12 lg:py-16 last:border-none group/row overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Text Block */}
          <div className={`relative z-10 lg:col-span-5 ${isEven ? "lg:col-start-8 lg:order-2" : "lg:col-start-1 lg:order-1"}`}>
            <div className="flex flex-col items-start">
              
              {/* Infinite Running Line Loop Indicator */}
              <div className="overflow-hidden mb-4 w-12 h-[2px] bg-[#E5E5E5] relative">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className="absolute inset-0 bg-[#111111]"
                />
              </div>

              {/* Massive Bold Background Kinetic Number */}
              <motion.span 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, x: -20 },
                  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="font-sans text-8xl font-black tracking-tighter text-[#ECECEC] sm:text-9xl lg:text-[11rem] leading-none select-none transition-colors duration-500 group-hover/row:text-[#E2E2E2]"
              >
                {service.number}
              </motion.span>

              {/* Ultra Bold Premium Title */}
              <motion.h3 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="mt-4 font-sans text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl leading-[1.1] transition-transform duration-500 group-hover/row:translate-x-2"
              >
                {service.title}
              </motion.h3>

              <motion.p 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="mt-6 font-sans text-base font-medium leading-relaxed text-[#555555] antialiased max-w-md"
              >
                {service.description}
              </motion.p>

              <Link
                href={service.href}
                onMouseEnter={() => setCursorText("GO →")}
                onMouseLeave={() => setCursorText("")}
                className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-bold tracking-widest uppercase text-[#111111] group/btn"
              >
                <span className="relative py-1 overflow-hidden">
                  <span className="inline-block transition-transform duration-500 group-hover/btn:-translate-y-full">
                    Explore Service
                  </span>
                  <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-500 group-hover/btn:translate-y-0 text-[#111111]">
                    Explore Service
                  </span>
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#111111] scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500 origin-left" />
                </span>
                <div className="overflow-hidden w-4 h-4 relative">
                  <ArrowUpRight className="h-4 w-4 absolute transition-transform duration-500 group-hover/btn:translate-x-4 group-hover/btn:-translate-y-4" />
                  <ArrowUpRight className="h-4 w-4 absolute -translate-x-4 translate-y-4 transition-transform duration-500 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
                </div>
              </Link>
            </div>
          </div>

          {/* Architectural Image Block */}
          <div 
            className={`lg:col-span-7 ${isEven ? "lg:col-start-1 lg:order-1" : "lg:col-start-6 lg:order-2"}`}
            onMouseEnter={() => setCursorText("VIEW")}
            onMouseLeave={() => setCursorText("")}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.1 },
                visible: { 
                  opacity: 1, 
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", 
                  scale: 1,
                  transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
                }
              }}
              className="relative aspect-[16/10] w-full overflow-hidden bg-[#EAEAEA] group/img shadow-2xl transition-shadow duration-700 hover:shadow-neutral-300"
            >
              <motion.div
                style={{ y: yParallax }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 h-[115%] w-full -top-[7.5%]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-w: 1024px) 100vw, 55vw"
                  className="object-cover object-center grayscale contrast-[1.08] transition-all duration-1000 group-hover/img:grayscale-0 group-hover/img:scale-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-neutral-950/5 mix-blend-multiply transition-opacity duration-500 group-hover/img:opacity-0" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const [cursorText, setCursorText] = useState("");
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative w-full bg-[#FAFAFA] pt-20 pb-8 text-[#111111] overflow-hidden select-none lg:cursor-none"
    >
      {/* Luxury Minimalist Kinetic Viewport-Fixed Custom Cursor */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-50 hidden lg:flex items-center justify-center rounded-full bg-[#111111] text-white font-sans text-[10px] font-bold tracking-widest mix-blend-difference"
            animate={{
              x: mousePos.x - (cursorText ? 40 : 6),
              y: mousePos.y - (cursorText ? 40 : 6),
              width: cursorText ? 80 : 12,
              height: cursorText ? 80 : 12,
            }}
            initial={{ width: 0, height: 0 }}
            exit={{ width: 0, height: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 32, mass: 0.3 }}
          >
            {cursorText && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2 }}
              >
                {cursorText}
              </motion.span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Editorial Header Section with Aggressive Bold Typography */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-32 md:mb-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 overflow-hidden">
            <motion.span
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-[#888888]"
            >
              Our Services
            </motion.span>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
          </div>
          
          <div className="overflow-hidden mt-6">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-5xl font-black tracking-tight text-[#111111] sm:text-7xl lg:text-8xl leading-[0.95] uppercase"
            >
              Solutions Built <br />
              <span className="text-transparent text-stroke-dark">For Every Scale.</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 font-sans text-lg font-medium text-[#666666] max-w-xl"
          >
            Architectural integration meets high-output execution. Discover engineering frameworks tailored to structural parameters.
          </motion.p>
        </div>
      </div>

      {/* Services List Matrix Grid */}
      <div className="relative border-t border-[#E5E5E5]">
        {servicesData.map((service, index) => (
          <ServiceRow 
            key={service.id} 
            service={service} 
            index={index} 
            setCursorText={setCursorText} 
          />
        ))}
      </div>

      <style jsx global>{`
        .text-stroke-dark {
          -webkit-text-stroke: 1.5px #111111;
        }
        @media (min-width: 768px) {
          .text-stroke-dark {
            -webkit-text-stroke: 2px #111111;
          }
        }
      `}</style>
    </section>
  );
}