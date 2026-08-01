"use client";

import React, { useRef } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

interface StatItemProps {
  number: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

const statData: StatItemProps[] = [
  {
    number: 100,
    suffix: "+",
    label: "Projects Installed",
    description: "Across residential, commercial and industrial properties."
  },
  {
    number: 25,
    suffix: " Years",
    label: "Performance Warranty",
    description: "Long-term assurance with Tier-1 components."
  },
  {
    number: 98,
    suffix: "%",
    label: "Customer Satisfaction",
    description: "Built through quality workmanship."
  },
  {
    number: 12,
    prefix: "₹",
    suffix: " Cr+",
    label: "Customer Savings",
    description: "Estimated cumulative electricity savings."
  }
];

export default function Statistics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // FIXED: Explicitly typed as Variants to pass Framer Motion's internal checks cleanly
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  // FIXED: Assigned `as const` to the bezier curves array to block primitive array type widening
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] text-[#111111] antialiased selection:bg-[#10B981] selection:text-white">
      {/* Premium Dynamic Background Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-25" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 pt-[140px] pb-[140px]">
        
        {/* Header Section */}
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#666666]">
              Our Impact
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-4xl md:text-[44px] font-normal tracking-[-0.03em] leading-[1.1] mb-6 text-[#111111]"
          >
            Numbers that speak <br className="hidden sm:inline" /> for themselves.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-[#666666] text-sm md:text-base font-normal tracking-tight max-w-md mx-auto leading-relaxed"
          >
            Every installation reflects our commitment to quality, precision and long-term performance.
          </motion.p>
        </div>

        {/* 2x2 Editorial Grid */}
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 border-t border-[#E5E5E5]"
        >
          {statData.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`group relative pt-12 pb-14 md:py-16 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-out cursor-pointer
                hover:bg-white
                ${idx % 2 === 0 ? "md:pr-16" : "md:pl-16"}
                ${idx < 2 ? "border-b border-[#E5E5E5]" : ""}
                ${idx % 2 === 0 ? "border-b md:border-b-0 md:border-r border-[#E5E5E5]" : ""}
              `}
            >
              {/* Premium Subtle Green Glow Layer on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                {/* Large Responsive Typography with Hover Green Shift */}
                <h3 className="text-6xl sm:text-7xl lg:text-[90px] font-bold tracking-[-0.04em] leading-none mb-6 text-[#111111] group-hover:text-[#10B981] group-hover:scale-[1.01] flex items-baseline gap-1 transition-all duration-500 ease-out origin-left">
                  {stat.prefix && <span className="text-[#111111] group-hover:text-[#10B981] transition-colors duration-500">{stat.prefix}</span>}
                  <span>
                    {isInView ? (
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={2.5}
                        useEasing={true}
                        separator=","
                      />
                    ) : (
                      "0"
                    )}
                  </span>
                  {stat.suffix && <span className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-normal text-[#666666] group-hover:text-[#047857] ml-1 transition-colors duration-500">{stat.suffix}</span>}
                </h3>
                
                <div className="space-y-2">
                  <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-[#111111] font-semibold flex items-center gap-2">
                    {/* Tiny green indicator dot that slides/scales in on hover */}
                    <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                    {stat.label}
                  </p>
                  <p className="text-[#666666] text-sm tracking-tight leading-snug max-w-xs font-normal group-hover:text-[#334155] transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}