"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Zap, ArrowUpRight, Package, ArrowLeft } from "lucide-react";

const productsData = [
  {
    id: "solar-products",
    icon: "sun",
    title: "Solar Products",
    description: "We supply high-quality solar products from trusted brands.",
    items: [
      "Solar Panels (Mono PERC, TOPCon & Bifacial)", "On-Grid Solar Inverters", "Hybrid Solar Inverters",
      "Off-Grid Solar Inverters", "Lithium Batteries", "Lead Acid Batteries",
      "Solar Charge Controllers (MPPT & PWM)", "Solar Mounting Structures", "DC Cables & AC Cables",
      "MC4 Connectors", "DCDB & ACDB Boxes", "Combiner Boxes", "Earthing Kits",
      "Lightning Arresters", "Solar Water Pumps", "Solar Street Lights", "Solar Flood Lights",
      "Solar Garden Lights", "Solar Home Lighting Systems", "Solar Fans", "Solar Water Heaters",
      "Solar CCTV Systems", "Solar Accessories & Spare Parts",
    ],
  },
  {
    id: "electrical-products",
    icon: "zap",
    title: "Electrical Products",
    description: "We supply quality electrical products for residential, commercial, and industrial applications.",
    items: [
      "Electrical Wires & Cables", "Modular Switches & Sockets", "MCB, RCCB & MCCB",
      "Distribution Boards (DB)", "Changeover Switches", "Contactors & Relays",
      "Electrical Panels", "LED Bulbs & Tube Lights", "LED Panel Lights",
      "Ceiling Fans & Exhaust Fans", "Extension Boards", "Cable Trays & Cable Glands",
      "PVC Conduits & Accessories", "Industrial Switchgear", "Surge Protection Devices (SPD)",
      "Earthing Materials", "Electrical Safety Equipment", "Smart Home Electrical Devices",
      "Electrical Accessories",
    ],
  },
];

const ICONS = { sun: Sun, zap: Zap, package: Package };

const CategoryCard = ({ category, index }: { category: typeof productsData[0]; index: number }) => {
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

export default function ProductsPage() {
  return (
    <main className="w-full bg-[#FAFAFA] min-h-screen py-16 text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Link href="/" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#666666] hover:text-[#111111] mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        
        <div className="max-w-3xl mb-16">
          <h1 className="font-sans text-4xl sm:text-6xl font-black tracking-tight uppercase mb-4">Our Products</h1>
          <p className="text-lg text-[#666666] font-medium">Premium hardware equipment, components & comprehensive operational industrial materials.</p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {productsData.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}