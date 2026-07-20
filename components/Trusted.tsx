'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Zap } from 'lucide-react';

// --- Types & Interfaces ---
interface CertificationLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

interface CertificationCard {
  icon: React.ElementType;
  title: string;
  description: string;
}

// --- Data Constants ---
const REGULATORY_LOGOS: CertificationLogo[] = [
  { name: 'MNRE', src: '/logo/mnre.svg', width: 180, height: 80 },
  { name: 'ISO', src: '/logo/iso.jpg', width: 90, height: 80 },
  { name: 'IEC', src: '/logo/iec.webp', width: 90, height: 80 },
  { name: 'BIS', src: '/logo/bis.png', width: 85, height: 80 },
];

const CERTIFICATIONS: CertificationCard[] = [
  {
    icon: Award,
    title: 'MNRE Approved',
    description: 'Government-recognized solar installation standards.',
  },
  {
    icon: ShieldCheck,
    title: '25-Year Performance Warranty',
    description: 'Long-term performance and product assurance.',
  },
  {
    icon: Cpu,
    title: 'Tier-1 Solar Panels',
    description: 'Premium modules from trusted manufacturers.',
  },
  {
    icon: Zap,
    title: 'End-to-End Installation',
    description: 'Survey, design, installation and maintenance.',
  },
];

export default function TrustedBy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const luxuryEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#FAFAFA] text-[#0F172A] py-[80px] lg:py-[100px] font-sans antialiased overflow-hidden select-none min-h-screen flex items-center"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center">
        
        {/* --- Header Group --- */}
        <div className="w-full max-w-3xl text-center mb-16 flex flex-col items-center">
          {/* Eyebrow */}
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: luxuryEase }}
            className="text-[11px] font-medium tracking-[0.25em] text-[#64748B] uppercase mb-4"
          >
            Trusted By
          </motion.span>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: luxuryEase }}
            className="text-[36px] md:text-[44px] font-normal tracking-[-0.03em] leading-[1.15] text-[#0F172A] mb-5 max-w-2xl"
          >
            Trusted by homeowners,<br />businesses and institutions.
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
            className="text-[15px] md:text-[16px] font-normal leading-relaxed text-[#64748B] max-w-xl text-balance"
          >
            Premium rooftop solar systems engineered with Tier-1 components and trusted installation practices across Telangana.
          </motion.p>
        </div>

        {/* --- Infinite Regulatory Logo Marquee --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full relative mb-20"
        >
          {/* Edge Masking Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex overflow-hidden select-none group py-2">
            <div className="flex items-center gap-40 animate-[marquee_25s_linear_infinite] min-w-full shrink-0">
              {[...REGULATORY_LOGOS, ...REGULATORY_LOGOS, ...REGULATORY_LOGOS, ...REGULATORY_LOGOS].map((logo, index) => (
                <div 
                  key={`regulatory-logo-${index}`} 
                  className="flex items-center justify-center h-16 relative grayscale contrast-[1.1] opacity-25 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-out transform hover:scale-[1.03]"
                  style={{ width: logo.width }}
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo compliance qualification`}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain max-h-full"
                    priority={index < 4}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* --- Certification Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-center md:text-left">
          {CERTIFICATIONS.map((cert, index) => {
            const IconComponent = cert.icon;
            const cardNumber = String(index + 1).padStart(2, '0');
            return (
              <motion.div
                key={`cert-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.08, ease: luxuryEase }}
                whileHover={{ 
                  y: -6,
                  backgroundColor: '#059669',
                  borderColor: '#059669',
                  boxShadow: '0 30px 60px -15px rgba(5,150,105,0.25)'
                }}
                // MODIFIED: Added flex alignment adjustments for mobile to prevent extra empty center space
                className="bg-white border border-[#0F172A]/[0.04] rounded-[28px] p-8 lg:p-9 flex flex-col items-center md:items-start justify-center md:justify-between min-h-[260px] md:min-h-0 md:aspect-[4/3.5] group relative overflow-hidden cursor-pointer transition-all duration-500"
              >
                {/* MODIFIED: Standardized absolute container adjustments for mobile index alignment */}
                <div className="flex items-center justify-center md:justify-between w-full md:relative z-10 mb-6 md:mb-0">
                  {/* MODIFIED: Increased icon badge wrapper sizing from w-12/h-12 to w-16/h-16 on mobile screens */}
                  <div className="w-16 h-16 md:w-12 md:h-12 rounded-2xl bg-[#FAFAFA] border border-[#0F172A]/[0.02] flex items-center justify-center text-[#64748B] group-hover:text-[#059669] group-hover:bg-white transition-all duration-500">
                    {/* MODIFIED: Bumped internal icon size up to w-7 h-7 on mobile viewports */}
                    <IconComponent className="w-7 h-7 md:w-5 md:h-5 stroke-[1.25] transition-transform duration-500 group-hover:rotate-6" />
                  </div>
                  
                  <span className="absolute top-6 right-8 md:static font-mono text-[11px] font-medium tracking-widest text-[#64748B]/30 group-hover:text-white/40 transition-colors duration-500">
                    {cardNumber}
                  </span>
                </div>

                {/* Content Block */}
                {/* MODIFIED: Centered title and description text on mobile viewports */}
                <div className="mt-0 md:mt-auto relative z-10 space-y-2 text-center md:text-left">
                  <h3 className="text-[18px] font-medium tracking-tight text-[#0F172A] group-hover:text-white transition-colors duration-400">
                    {cert.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-[#64748B] font-light group-hover:text-white/85 transition-colors duration-400">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}