"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wrench, 
  Package, 
  Sun, 
  Zap, 
  ArrowUpRight, 
  ChevronDown 
} from "lucide-react";

// --- STRUCTURAL ENUM TYPES ---
type ActiveHubSection = "none" | "services" | "products";

// --- SYSTEM STATIC DATA SCHEMAS ---
const SERVICES_DATA = [
  {
    id: "solar-services",
    icon: Sun,
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
    icon: Zap,
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

const PRODUCTS_DATA = [
  {
    id: "solar-products",
    icon: Sun,
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
    icon: Zap,
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

const InlineCategoryCard = ({ category, index }: { category: typeof SERVICES_DATA[0]; index: number }) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative text-left border border-[#E5E5E5] bg-white p-6 sm:p-8 lg:p-10 overflow-hidden rounded-xl shadow-sm"
    >
      <span className="pointer-events-none absolute -right-4 -top-6 font-sans text-[7rem] sm:text-[9rem] font-black leading-none text-[#F3F3F3] select-none">
        0{index + 1}
      </span>

      <div className="relative z-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-white">
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>

        <h3 className="mt-4 font-sans text-2xl font-extrabold tracking-tight text-[#111111] leading-[1.1]">
          {category.title}
        </h3>

        <p className="mt-3 font-sans text-sm font-medium leading-relaxed text-[#555555]">
          {category.description}
        </p>

        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 border-t border-[#F0F0F0] pt-4">
          {category.items.map((item, i) => (
            <li
              key={item}
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(null)}
              className="flex items-start gap-2 py-1 font-sans text-xs font-medium text-[#333333] transition-colors duration-300 hover:text-[#111111]"
            >
              <ArrowUpRight
                className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 transition-all duration-300 ${
                  hoveredItem === i ? "translate-x-0.5 -translate-y-0.5 text-[#111111]" : "text-[#AAAAAA]"
                }`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default function ServicesAndProductsHub() {
  const [activeSection, setActiveSection] = useState<ActiveHubSection>("none");

  const toggleSection = (target: ActiveHubSection) => {
    setActiveSection((current) => (current === target ? "none" : target));
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] min-h-[70vh] flex flex-col items-center justify-start py-20 text-[#111111] overflow-hidden">
      {/* Structural Minimalist Accent Grid Mesh */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.4] pointer-events-none" />
      
      <div className="mx-auto max-w-5xl w-full px-6 sm:px-8 text-center relative z-10 flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 mb-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-[#888888]"
          >
            What We Offer
          </motion.span>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-5xl font-black tracking-tight text-[#111111] sm:text-7xl lg:text-8xl leading-[0.95] uppercase text-balance"
        >
          Solutions Built <br />
          <span className="text-transparent text-stroke-dark">For Every Scale.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-8 font-sans text-lg md:text-xl font-medium text-[#666666] max-w-2xl text-balance"
        >
          From strategic solar design to full structural electrical execution, our engineering teams deliver end-to-end management across every scale.
        </motion.p>

        {/* --- INLINE EXPANSION CONTROLS BAR (NO REDIRECT LINKS) --- */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto z-20">
          <button
            onClick={() => toggleSection("services")}
            className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 rounded-full border px-8 py-4 font-sans text-base font-bold tracking-tight transition-all duration-300 shadow-sm active:scale-98 ${
              activeSection === "services"
                ? "bg-[#111111] text-white border-[#111111]"
                : "bg-white text-[#111111] border-[#E5E5E5] hover:bg-[#F5F5F5]"
            }`}
          >
            <Wrench className={`h-4 w-4 transition-transform ${activeSection === "services" ? "rotate-45" : "group-hover:rotate-12"}`} strokeWidth={2.25} />
            Explore Services
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeSection === "services" ? "rotate-180" : ""}`} />
          </button>

          <button
            onClick={() => toggleSection("products")}
            className={`group relative w-full sm:w-auto flex items-center justify-center gap-3 rounded-full border px-8 py-4 font-sans text-base font-bold tracking-tight transition-all duration-300 shadow-sm active:scale-98 ${
              activeSection === "products"
                ? "bg-[#111111] text-white border-[#111111]"
                : "bg-white text-[#111111] border-[#E5E5E5] hover:bg-[#F5F5F5]"
            }`}
          >
            <Package className="h-4 w-4 transition-transform group-hover:scale-110" strokeWidth={2.25} />
            Browse Products
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeSection === "products" ? "rotate-180" : ""}`} />
          </button>
        </div>

        {/* --- DYNAMIC INLINE ACCORDION GRID DROPDOWN --- */}
        <div className="w-full mt-4 overflow-hidden">
          <AnimatePresence mode="wait">
            {activeSection === "services" && (
              <motion.div
                key="services-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="py-6 text-left max-w-3xl mb-8 border-b border-[#E5E5E5] mt-8">
                  <h3 className="font-sans text-3xl font-black uppercase tracking-tight text-[#111111]">Our Services Portfolio</h3>
                  <p className="text-sm font-medium text-[#666666] mt-1">Design, structural installations & end-to-end technical system operations execution workflows.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 pb-12">
                  {SERVICES_DATA.map((category, index) => (
                    <InlineCategoryCard key={category.id} category={category} index={index} />
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === "products" && (
              <motion.div
                key="products-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="py-6 text-left max-w-3xl mb-8 border-b border-[#E5E5E5] mt-8">
                  <h3 className="font-sans text-3xl font-black uppercase tracking-tight text-[#111111]">Hardware & Equipment Catalog</h3>
                  <p className="text-sm font-medium text-[#666666] mt-1">Premium structural architectural modules, core industrial components & tier-1 technical materials.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 pb-12">
                  {PRODUCTS_DATA.map((category, index) => (
                    <InlineCategoryCard key={category.id} category={category} index={index} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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