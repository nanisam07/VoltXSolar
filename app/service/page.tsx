"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Zap, ArrowUpRight, Wrench, ArrowLeft } from "lucide-react";

const servicesData = [
  {
    id: "solar-services",
    icon: "sun",
    title: "Solar Services",
    description: "We provide complete solar energy solutions for residential, commercial, industrial, and institutional customers.",
    items: [
      "Rooftop Solar Installation", "On-Grid Solar Systems", "Off-Grid Solar Systems",
      "Hybrid Solar Systems", "Solar Design & Engineering", "Solar System Sizing",
      "Site Survey & Feasibility Study", "Shadow Analysis & Energy Yield Analysis",
      "Solar Plant Design", "Inverter Selection & System Configuration",
      "Electrical Single-Line Diagram (SLD)", "Net Metering Assistance",
      "Solar EPC Services", "Solar System Testing & Commissioning",
      "Operation & Maintenance (O&M)", "Annual Maintenance Contracts (AMC)",
      "Solar Panel Cleaning Services", "Solar Plant Inspection & Health Check",
      "Solar System Upgrades & Expansion", "Battery Backup Solutions",
      "Solar Energy Consultation",
    ],
  },
  {
    id: "electrical-services",
    icon: "zap",
    title: "Electrical Services",
    description: "We provide professional electrical services for homes, offices, commercial buildings, and industries.",
    items: [
      "Complete Home Electrical Wiring", "Commercial Electrical Works", "Industrial Electrical Works",
      "Electrical Renovation & Rewiring", "Electrical Panel Installation", "Distribution Board (DB) Installation",
      "MCB, RCCB & MCCB Installation", "Earthing & Lightning Protection", "Cable Laying & Cable Termination",
      "Indoor & Outdoor Lighting Installation", "LED Lighting Solutions", "Power Distribution Systems",
      "Electrical Safety Inspection", "Preventive Electrical Maintenance", "Electrical Fault Finding & Repairs",
      "EV Charger Installation", "Generator & UPS Electrical Connections", "Smart Home Electrical Installation",
    ],
  },
];

const ICONS = { sun: Sun, zap: Zap, wrench: Wrench };

const CategoryCard = ({ category, index }: { category: typeof servicesData[0]; index: number }) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const Icon = ICONS[category.icon as keyof typeof ICONS];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.05 } },
      }}
      className="relative border border-[#E5E5E5] bg-white p-8 sm:p-10 lg:p-14 group/card overflow-hidden rounded-xl shadow-sm"
    >
      <span className="pointer-events-none absolute -right-4 -top-10 font-sans text-[10rem] sm:text-[13rem] font-black leading-none text-[#F3F3F3] select-none">
        0{index + 1}
      </span>

      <div className="relative z-10">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-white transition-transform duration-500 group-hover/card:scale-110">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </div>
          <div className="overflow-hidden mb-4 w-12 h-[2px] bg-[#E5E5E5] relative hidden sm:block">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-[#111111]"
            />
          </div>
        </div>

        <motion.h3 className="mt-6 font-sans text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl leading-[1.1]">
          {category.title}
        </motion.h3>

        <motion.p className="mt-5 font-sans text-base font-medium leading-relaxed text-[#555555] max-w-xl">
          {category.description}
        </motion.p>

        <motion.ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {category.items.map((item, i) => (
            <motion.li
              key={item}
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(null)}
              className="flex items-start gap-3 border-b border-[#EFEFEF] py-2 font-sans text-sm font-medium text-[#333333] transition-colors duration-300 hover:text-[#111111]"
            >
              <ArrowUpRight
                className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 transition-all duration-300 ${
                  hoveredItem === i ? "translate-x-0.5 -translate-y-0.5 text-[#111111]" : "text-[#AAAAAA]"
                }`}
              />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen py-16 text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Link href="/" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#666666] hover:text-[#111111] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        
        <div className="max-w-3xl mb-16">
          <h1 className="font-sans text-4xl sm:text-6xl font-black tracking-tight uppercase mb-4">Our Services</h1>
          <p className="text-lg text-[#666666] font-medium">Design, structural installations & dynamic end-to-end electrical ecosystem maintenance setups.</p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {servicesData.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}