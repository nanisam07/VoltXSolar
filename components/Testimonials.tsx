"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, User } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  location: string;
  quote: string;
  initials: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    name: "Ramesh Reddy",
    role: "Homeowner",
    location: "Hyderabad",
    quote: "The installation was completed on schedule, and the team explained every step clearly. Within the first month, we noticed a significant reduction in our electricity bill.",
    initials: "RR",
  },
  {
    id: 2,
    name: "S. Lakshmi",
    role: "Business Owner",
    location: "Secunderabad",
    quote: "Voltex handled everything from the site survey to installation professionally. The entire process was smooth, and the system has been performing exactly as promised.",
    initials: "SL",
  },
  {
    id: 3,
    name: "Praveen Kumar",
    role: "Factory Owner",
    location: "Medchal",
    quote: "Their technical knowledge and workmanship gave us confidence from day one. The installation was neat, and the after-sales support has been excellent.",
    initials: "PK",
  },
  {
    id: 4,
    name: "Anusha Devi",
    role: "Homeowner",
    location: "Warangal",
    quote: "Choosing solar felt like a big decision, but the Voltex team made it simple. They answered every question patiently and delivered quality work.",
    initials: "AD",
  },
  {
    id: 5,
    name: "Kiran Kumar",
    role: "Commercial Building Owner",
    location: "Vijayawada",
    quote: "Professional communication, quality materials, and timely execution. I would confidently recommend Voltex to anyone planning a solar installation.",
    initials: "KK",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[activeIndex];

  return (
    <section className="relative w-full bg-[#FAFAFA] pt-16 pb-16 lg:pt-20 lg:pb-20  text-[#0F172A] overflow-hidden select-none border-b border-[#E5E5E5]">
      {/* Editorial Header Section */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-12 md:mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-[#64748B]"
        >
          Testimonials
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-sans text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl text-[#0F172A] uppercase"
        >
          What our customers say.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-sans text-base font-medium text-[#64748B] max-w-xl mx-auto leading-relaxed"
        >
          Every installation is built on trust, quality workmanship and long-term relationships.
        </motion.p>
      </div>

      {/* Main Structural Layout Grid */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[360px]">
          
          {/* Left Column: Architectural Avatar Frame Placeholder */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative aspect-[4/5] w-full max-w-[360px] lg:max-w-none overflow-hidden bg-[#F1F3F5] border border-[#E5E5E5] shadow-2xl shadow-neutral-200/50 flex flex-col items-center justify-center p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="w-28 h-28 rounded-full bg-[#0F172A] text-white flex items-center justify-center mb-6 shadow-lg">
                    <User className="w-12 h-12 text-[#FFD54A]" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs tracking-[0.2em] font-bold text-[#64748B] uppercase mb-1">
                    VERIFIED CLIENT
                  </span>
                  <span className="font-sans text-xl font-black text-[#0F172A] tracking-tight">
                    {current.name}
                  </span>
                  <span className="font-sans text-xs font-semibold text-[#64748B] mt-1">
                    {current.location}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Statement Quote Field & UI Interface Controls */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-2">
            <div className="relative">
              {/* Elegant Minimal Quotation Symbol Geometry */}
              <span className="absolute -top-10 -left-4 font-serif text-8xl text-[#FFD54A]/20 select-none leading-none">
                “
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-start"
                >
                  {/* Calibrated Stars Matrix */}
                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD54A] text-[#FFD54A]" strokeWidth={1} />
                    ))}
                  </div>

                  {/* True Impact Dynamic Quote Typography */}
                  <blockquote className="font-sans text-2xl font-bold tracking-tight text-[#0F172A] sm:text-3xl lg:text-4xl leading-[1.25] antialiased">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>

                  {/* Individual Profile Meta Information */}
                  <div className="mt-10 flex flex-col">
                    <span className="font-sans text-lg font-black tracking-tight text-[#0F172A]">
                      {current.name}
                    </span>
                    <span className="font-sans text-sm font-semibold tracking-wide text-[#64748B] mt-1">
                      {current.role} &mdash; {current.location}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Swiss Grid Controlled Navigation Counter Controls */}
            <div className="mt-16 pt-8 border-t border-[#E5E5E5] flex items-center justify-between sm:justify-start sm:gap-12">
              <div className="font-mono text-sm font-bold tracking-wider text-[#0F172A] flex items-center">
                <span>{String(current.id).padStart(2, "0")}</span>
                <span className="mx-3 text-[#64748B]/40 font-light">/</span>
                <span className="text-[#64748B]">{String(testimonialsData.length).padStart(2, "0")}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-[#E5E5E5] bg-[#FAFAFA] flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all duration-300 group cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-[#E5E5E5] bg-[#FAFAFA] flex items-center justify-center text-[#0F172A] hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all duration-300 group cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}