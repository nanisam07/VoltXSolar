"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Zap, ArrowUpRight, Wrench, Package } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const servicesData = [
  {
    id: "solar-services",
    icon: "sun",
    title: "Solar Services",
    description:
      "We provide complete solar energy solutions for residential, commercial, industrial, and institutional customers.",
    items: [
      "Rooftop Solar Installation",
      "On-Grid Solar Systems",
      "Off-Grid Solar Systems",
      "Hybrid Solar Systems",
      "Solar Design & Engineering",
      "Solar System Sizing",
      "Site Survey & Feasibility Study",
      "Shadow Analysis & Energy Yield Analysis",
      "Solar Plant Design",
      "Inverter Selection & System Configuration",
      "Electrical Single-Line Diagram (SLD)",
      "Net Metering Assistance",
      "Solar EPC Services",
      "Solar System Testing & Commissioning",
      "Operation & Maintenance (O&M)",
      "Annual Maintenance Contracts (AMC)",
      "Solar Panel Cleaning Services",
      "Solar Plant Inspection & Health Check",
      "Solar System Upgrades & Expansion",
      "Battery Backup Solutions",
      "Solar Energy Consultation",
    ],
  },
  {
    id: "electrical-services",
    icon: "zap",
    title: "Electrical Services",
    description:
      "We provide professional electrical services for homes, offices, commercial buildings, and industries.",
    items: [
      "Complete Home Electrical Wiring",
      "Commercial Electrical Works",
      "Industrial Electrical Works",
      "Electrical Renovation & Rewiring",
      "Electrical Panel Installation",
      "Distribution Board (DB) Installation",
      "MCB, RCCB & MCCB Installation",
      "Earthing & Lightning Protection",
      "Cable Laying & Cable Termination",
      "Indoor & Outdoor Lighting Installation",
      "LED Lighting Solutions",
      "Power Distribution Systems",
      "Electrical Safety Inspection",
      "Preventive Electrical Maintenance",
      "Electrical Fault Finding & Repairs",
      "EV Charger Installation",
      "Generator & UPS Electrical Connections",
      "Smart Home Electrical Installation",
    ],
  },
];

const productsData = [
  {
    id: "solar-products",
    icon: "sun",
    title: "Solar Products",
    description: "We supply high-quality solar products from trusted brands.",
    items: [
      "Solar Panels (Mono PERC, TOPCon & Bifacial)",
      "On-Grid Solar Inverters",
      "Hybrid Solar Inverters",
      "Off-Grid Solar Inverters",
      "Lithium Batteries",
      "Lead Acid Batteries",
      "Solar Charge Controllers (MPPT & PWM)",
      "Solar Mounting Structures",
      "DC Cables & AC Cables",
      "MC4 Connectors",
      "DCDB & ACDB Boxes",
      "Combiner Boxes",
      "Earthing Kits",
      "Lightning Arresters",
      "Solar Water Pumps",
      "Solar Street Lights",
      "Solar Flood Lights",
      "Solar Garden Lights",
      "Solar Home Lighting Systems",
      "Solar Fans",
      "Solar Water Heaters",
      "Solar CCTV Systems",
      "Solar Accessories & Spare Parts",
    ],
  },
  {
    id: "electrical-products",
    icon: "zap",
    title: "Electrical Products",
    description:
      "We supply quality electrical products for residential, commercial, and industrial applications.",
    items: [
      "Electrical Wires & Cables",
      "Modular Switches & Sockets",
      "MCB, RCCB & MCCB",
      "Distribution Boards (DB)",
      "Changeover Switches",
      "Contactors & Relays",
      "Electrical Panels",
      "LED Bulbs & Tube Lights",
      "LED Panel Lights",
      "Ceiling Fans & Exhaust Fans",
      "Extension Boards",
      "Cable Trays & Cable Glands",
      "PVC Conduits & Accessories",
      "Industrial Switchgear",
      "Surge Protection Devices (SPD)",
      "Earthing Materials",
      "Electrical Safety Equipment",
      "Smart Home Electrical Devices",
      "Electrical Accessories",
    ],
  },
];

const mainTabs = [
  {
    id: "services",
    label: "Services",
    icon: "wrench",
    tagline: "Design, installation & maintenance",
    data: servicesData,
  },
  {
    id: "products",
    label: "Products",
    icon: "package",
    tagline: "Equipment, components & hardware",
    data: productsData,
  },
];

const ICONS = { sun: Sun, zap: Zap, wrench: Wrench, package: Package };

/* ------------------------------------------------------------------ */
/*  CATEGORY CARD (sub-category)                                       */
/* ------------------------------------------------------------------ */

const CategoryCard = ({ category, index }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const Icon = ICONS[category.icon];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.05 },
        },
      }}
      className="relative border border-[#E5E5E5] bg-white p-8 sm:p-10 lg:p-14 group/card overflow-hidden"
    >
      {/* Faint kinetic number in background */}
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

        <motion.h3
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="mt-6 font-sans text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl leading-[1.1]"
        >
          {category.title}
        </motion.h3>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
          }}
          className="mt-5 font-sans text-base font-medium leading-relaxed text-[#555555] antialiased max-w-xl"
        >
          {category.description}
        </motion.p>

        <motion.ul
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.015, delayChildren: 0.15 } },
          }}
          className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2"
        >
          {category.items.map((item, i) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
              }}
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(null)}
              className="flex items-start gap-3 border-b border-[#EFEFEF] py-2 font-sans text-sm font-medium text-[#333333] transition-colors duration-300 hover:text-[#111111]"
            >
              <ArrowUpRight
                className={`mt-0.5 h-3.5 w-3.5 flex-shrink-0 transition-all duration-300 ${
                  hoveredItem === i
                    ? "translate-x-0.5 -translate-y-0.5 text-[#111111]"
                    : "text-[#AAAAAA]"
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

/* ------------------------------------------------------------------ */
/*  MAIN TAB SWITCH (Services / Products)                              */
/* ------------------------------------------------------------------ */

const TabSwitch = ({ active, onChange }) => {
  return (
    <div className="relative inline-flex items-center gap-1 rounded-full border border-[#E5E5E5] bg-white p-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      {mainTabs.map((tab) => {
        const Icon = ICONS[tab.icon];
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className="relative z-10 flex items-center gap-2.5 rounded-full px-6 py-3 sm:px-8 sm:py-3.5 font-sans text-sm sm:text-base font-bold tracking-tight transition-colors duration-300"
            style={{ color: isActive ? "#FFFFFF" : "#555555" }}
          >
            {isActive && (
              <motion.span
                layoutId="tab-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 -z-10 rounded-full bg-[#111111]"
              />
            )}
            <Icon className="h-4 w-4" strokeWidth={2.25} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  SECTION                                                             */
/* ------------------------------------------------------------------ */

export default function ServicesAndProducts() {
  const [activeTab, setActiveTab] = useState("services");
  const currentTab = mainTabs.find((t) => t.id === activeTab);

  return (
    <section className="relative w-full bg-[#FAFAFA] pt-20 pb-24 text-[#111111] overflow-hidden">
      {/* Editorial Header Section */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-12 md:mb-14">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 overflow-hidden">
            <motion.span
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-[#888888]"
            >
              What We Offer
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
            From solar design to full electrical execution, our teams deliver end-to-end
            engineering across every scale of project.
          </motion.p>
        </div>
      </div>

      {/* Tab Switch */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-[#E5E5E5] pt-8">
          <TabSwitch active={activeTab} onChange={setActiveTab} />

          <AnimatePresence mode="wait">
            <motion.p
              key={currentTab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-[#999999]"
            >
              {currentTab.tagline}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Category Cards */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 gap-10 lg:grid-cols-2"
          >
            {currentTab.data.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
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