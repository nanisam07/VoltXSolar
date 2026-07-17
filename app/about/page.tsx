"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight, Check, Sparkles, Eye, Target, ShieldCheck, Leaf, Cpu, Award, Users, Lock, LifeBuoy } from "lucide-react";

// --- Framer Motion Animation Presets ---
const fvFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const fvRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fvImageMask: Variants = {
  hidden: { clipPath: "inset(10% 10% 10% 10% rounded 24px)", opacity: 0, scale: 1.05 },
  visible: {
    clipPath: "inset(0% 0% 0% 0% rounded 24px)",
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Smooth scroll parallax references
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(heroProgress, [0, 1], ["0%", "20%"]);
  const videoScale = useTransform(heroProgress, [0, 1], [1, 1.05]);
  const MotionLink = motion.create(Link);

  const services = [
    { num: "01", title: "Residential Solar Power Systems", desc: "Professional rooftop solar systems designed for modern architectural homes.", img: "/image/hero3.webp" },
    { num: "02", title: "Commercial Solar Solutions", desc: "Scalable configurations built for corporate headquarters and infrastructure layouts.", img: "/image/Sec22.jpg" },
    { num: "03", title: "Solar Panel Installation", desc: "Precision technical execution orchestrated entirely by internal engineering squads.", img: "/image/Sec3.jpg" },
    { num: "04", title: "Solar System Design & Consultation", desc: "Bespoke spatial modeling created around specific environmental asset blueprints.", img: "/image/Sec4.jpg" },
    { num: "05", title: "Solar Maintenance & Support", desc: "Predictive physical monitoring loops to secure absolute continuous operational efficiency.", img: "/image/Ser2.jpg" },
    { num: "06", title: "Energy Efficiency Solutions", desc: "Granular structural assessment workflows optimizing passive internal consumption dynamics.", img: "/image/Ser6.jpg" },
  ];

  const whyChoosePoints = [
    { title: "Quality Products", desc: "We select premium components designed for absolute durability and peak generational performance over decades." },
    { title: "Professional Installation", desc: "Engineered and executed with architectural discipline by master technicians who value design integrity." },
    { title: "Long-Term Performance", desc: "Sustained efficiency metrics back up every layout, optimizing your physical footprint and clean-yield output." },
    { title: "Customer-First Approach", desc: "Transparent consulting frameworks that respect your timeline, spatial assets, and economic objectives." },
  ];

  const companyValues = [
    { icon: Award, name: "Quality & Excellence", desc: "Delivering premium workmanship and Tier-1 components on every installation, without compromise." },
    { icon: Users, name: "Customer Satisfaction", desc: "Putting your needs first with transparent consulting, honest timelines, and dependable communication." },
    { icon: Lock, name: "Integrity & Transparency", desc: "Clear pricing, honest reporting, and no artificial padding across every stage of your project." },
    { icon: ShieldCheck, name: "Safety First", desc: "Strict adherence to safety standards across every installation, wiring job, and maintenance visit." },
    { icon: Cpu, name: "Innovation", desc: "Pushing technical thresholds with state-of-the-art microinverters and smart architectural integration modules." },
    { icon: Leaf, name: "Sustainability", desc: "Ensuring your property leaves zero environmental friction while fostering long-term bio-harmonic structural yield." },
    { icon: LifeBuoy, name: "Reliable After-Sales Support", desc: "Ongoing maintenance, monitoring, and responsive service long after your system is commissioned." },
  ];

  return (
    <div ref={containerRef} className="relative bg-[#FAFAFA] text-[#111111] antialiased selection:bg-[#111111] selection:text-[#FAFAFA] font-sans min-h-screen">
      
      {/* SECTION 1: CINEMATIC SPLIT HERO WITH BACKGROUND VIDEO */}
      <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-black text-white">
        {/* Immersive Parallax Video Background Element */}
        <motion.div style={{ y: videoY, scale: videoScale }} className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <video className="w-full h-full object-cover opacity-50" autoPlay muted loop playsInline>
            <source src="/image/about.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
        </motion.div>

        {/* Hero Structural Copy */}
        <div className="relative z-10 my-auto px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 pt-24">
          <div className="lg:col-span-8 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -10 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/[0.06] backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-neutral-300" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-300">About Move to Solar Power Solutions</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05]">
              Powering Tomorrow <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-400 bg-[size:200%]">
                Through Clean Energy.
              </span>
            </h1>
            
            <p className="text-base sm:text-xl font-light text-neutral-300 max-w-xl leading-relaxed">
              We curate architectural-grade solar infrastructure that beautifully bridges ecological responsibility with permanent energy independence.
            </p>
          </div>

          {/* Floating Static Displays - Luxury Brand Execution */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end space-y-8 lg:space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-left lg:text-right border-l lg:border-l-0 lg:border-r border-white/20 pl-4 lg:pl-0 lg:pr-6">
              <span className="block text-3xl font-light tracking-tight">0%</span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Grid Reliance Ambition</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-left lg:text-right border-l lg:border-l-0 lg:border-r border-white/20 pl-4 lg:pl-0 lg:pr-6">
              <span className="block text-3xl font-light tracking-tight">Tier 1</span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Premium Components Only</span>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator Footer */}
        <div className="w-full flex justify-between items-center relative z-10 border-t border-white/10 py-6 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto">
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">Scroll to explore profile</span>
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </div>
      </section>

      {/* CONTINUOUS LAYER CONTEXT: ENFORCES GRID PATTERNS & BALANCED LAYOUTS */}
      <div className="relative z-20 bg-[#FAFAFA]">
        
        {/* PREMIUM SWISS ARCHITECTURAL GRID BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 0.015) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.015) 1px, transparent 1px)
              `,
              backgroundSize: "90px 90px",
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-100/20 via-transparent to-transparent blur-3xl" />
        </div>

        {/* SECTION 2: OUR STORY (WHO WE ARE) */}
        <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto z-10 border-t border-neutral-200/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start w-full">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="w-12 h-[1px] bg-neutral-900" />
              <span className="block text-xs font-mono tracking-widest text-neutral-400 uppercase">Heritage & Direction</span>
              <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-neutral-900">Who We Are</h2>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fvRevealContainer} className="space-y-6 text-base sm:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl">
                <p className="text-neutral-900 font-normal text-xl sm:text-2xl tracking-tight leading-snug transition-colors duration-300 hover:text-neutral-950">
                  Welcome to Moveto Solar Power Solutions, your trusted partner for reliable, innovative, and sustainable solar energy solutions. We specialize in delivering complete rooftop solar systems for residential, commercial, industrial, and institutional customers.
                </p>
                <p className="transition-colors duration-300 hover:text-neutral-800">From consultation and site survey to system design, engineering, supply, installation, commissioning, and maintenance, we provide end-to-end solar solutions tailored to meet every customer&apos;s energy needs. Our goal is to help individuals and businesses reduce electricity costs while embracing clean and renewable energy.</p>
                <p className="transition-colors duration-300 hover:text-neutral-800">In addition to solar solutions, we also provide professional electrical services, including home and commercial electrical installations, panel board works, earthing systems, cable laying, maintenance, and energy-efficient electrical solutions. We supply high-quality solar and electrical products from trusted brands to ensure safety, performance, and long-term reliability.</p>
                <p className="transition-colors duration-300 hover:text-neutral-800">At Moveto Solar Power Solutions, customer satisfaction, quality workmanship, safety, and innovation are at the heart of everything we do. Our experienced team is committed to delivering cost-effective, efficient, and future-ready energy solutions that power a greener tomorrow.</p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-5%" }} variants={fvImageMask} className="relative aspect-[16/10] w-full bg-neutral-100 overflow-hidden shadow-xl border border-neutral-200/40 group">
                <Image src="/image/hero1.webp" alt="MoveX Solar Power Solutions clean engineering structural overview" fill className="object-cover transition-transform duration-1000 group-hover:scale-102" />
              </motion.div>
            </div>

          </div>
        </section>

        {/* SECTION 3: MISSION & VISION */}
        <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto z-10 border-t border-neutral-200/60 bg-neutral-50/70 backdrop-blur-xs border-b border-neutral-200/60 shadow-2xl shadow-neutral-100/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 relative w-full">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-200/80" />
            
            {/* Left Column: Mission */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fvFadeUp} className="space-y-6 md:pr-12 group cursor-default">
              <div className="flex items-center space-x-3">
                <Target className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 block transition-colors group-hover:text-neutral-900">Our Mission</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-neutral-900 leading-[1.45] transition-all duration-300 group-hover:text-neutral-950">
                To make clean and affordable solar energy accessible to every home and business by delivering high-quality solar and electrical solutions with professionalism, integrity, and exceptional customer service.
              </h3>
            </motion.div>

            {/* Right Column: Vision */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fvFadeUp} className="space-y-6 md:pl-12 group cursor-default">
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400 block transition-colors group-hover:text-neutral-900">Our Vision</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-neutral-900 leading-[1.45] transition-all duration-300 group-hover:text-neutral-950">
                To become one of India&apos;s most trusted solar and renewable energy companies by providing innovative, sustainable, and reliable energy solutions that contribute to a cleaner and brighter future.
              </h3>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: OUR SERVICES */}
        <section className="relative py-32 md:py-44 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto z-10">
          <div className="mb-28 space-y-4">
            <span className="block text-xs font-mono tracking-widest text-neutral-400 uppercase">Capabilities Matrix</span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-neutral-900">Our Services</h2>
          </div>

          <div className="space-y-36 md:space-y-48">
            {services.map((service, index) => {
              const isImageLeft = index % 2 === 0;
              return (
                <div key={service.num} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center group/item relative">
                  
                  {/* Oversized Layered Typographic Number Tracking */}
                  <span className="absolute -top-12 left-0 font-mono text-[8rem] sm:text-[12rem] text-neutral-900/[0.02] font-bold select-none pointer-events-none group-hover/item:text-neutral-900/[0.04] transition-colors duration-500">
                    {service.num}
                  </span>

                  {/* Dynamic Custom Alternating Compositions */}
                  <div className={`col-span-1 lg:col-span-7 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fvImageMask} className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 border border-neutral-200/40 shadow-xs">
                      <Image src={service.img} alt={service.title} fill className="object-cover transition-transform duration-1000 group-hover/item:scale-103" />
                    </motion.div>
                  </div>

                  <div className={`col-span-1 lg:col-span-5 space-y-4 relative z-10 ${isImageLeft ? "lg:order-2 lg:pl-10" : "lg:order-1 lg:pr-10"}`}>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fvFadeUp}>
                      <div className="font-mono text-xs text-neutral-400 flex items-center space-x-3">
                        <span>{service.num}</span>
                        <span className="w-6 h-[1px] bg-neutral-200 transition-all duration-500 group-hover/item:w-14 group-hover/item:bg-neutral-900" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-neutral-900 mt-2 transition-colors duration-300 group-hover/item:text-neutral-950">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-500 font-light leading-relaxed transition-colors duration-300 group-hover/item:text-neutral-700 mt-2">
                        {service.desc}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: WHY CHOOSE MOVEX SOLAR POWER SOLUTIONS */}
        <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto z-10 border-t border-neutral-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-4">
              <span className="block text-xs font-mono tracking-widest text-neutral-400 uppercase">Operational Values</span>
              <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-neutral-900">Why Choose <br className="hidden lg:block"/>Moveto Solar Power Solutions</h2>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {whyChoosePoints.map((point) => (
                <div key={point.title} className="space-y-3 group/pt">
                  <div className="flex items-center space-x-3 text-neutral-900">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border border-neutral-300 bg-white transition-colors duration-300 group-hover/pt:bg-neutral-900 group-hover/pt:border-neutral-900">
                      <Check className="w-3 h-3 text-neutral-800 transition-colors duration-300 group-hover/pt:text-white" strokeWidth={3} />
                    </div>
                    <h3 className="text-lg font-medium tracking-tight transition-colors duration-300 group-hover/pt:text-neutral-950">{point.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-500 font-light leading-relaxed pl-8 transition-colors duration-300 group-hover/pt:text-neutral-700">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: OUR CORE VALUES */}
        <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 xl:px-32 max-w-[1800px] mx-auto z-10 border-t border-neutral-200/80">
          <div className="mb-20 space-y-4">
            <span className="block text-xs font-mono tracking-widest text-neutral-400 uppercase">Ethical Blueprint</span>
            <h2 className="text-3xl md:text-5xl font-normal tracking-tight text-neutral-900">Our Core Values</h2>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fvRevealContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-neutral-200/40 pb-16">
            {companyValues.map((value) => {
              const IconComp = value.icon;
              return (
                <motion.div key={value.name} variants={fvFadeUp} className="space-y-4 group/val border-t border-neutral-200 pt-6">
                  <div className="p-2 bg-neutral-100 rounded-lg w-fit transition-colors duration-300 group-hover/val:bg-neutral-900 group-hover/val:text-white text-neutral-800">
                    <IconComp className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-medium text-neutral-900 transition-colors group-hover/val:text-neutral-950">{value.name}</h4>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed group-hover/val:text-neutral-600 transition-colors duration-300">{value.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* SECTION 7: CLOSING STATEMENT / PREMIUM CTA */}
        <section className="relative py-36 px-6 md:px-12 lg:px-24 xl:px-32 bg-white border-t border-neutral-200/60 text-center overflow-hidden">
          {/* Subtle interior background layout pattern within final layout frame */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px)`,
            backgroundSize: "140px 100%"
          }} />

          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.15] group cursor-default">
              Powering Your Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-500 transition-colors duration-500 group-hover:from-neutral-950 group-hover:to-neutral-600">With Clean Energy.</span>
            </h2>
            <p className="text-base sm:text-xl font-light text-neutral-400 max-w-xl mx-auto leading-relaxed">
              Whether you are planning your first solar installation or upgrading your existing system, Moveto Solar Power Solutions is here to support you every step of the way.
            </p>
            
            <div className="pt-6">
              <MotionLink
              href="/survey"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-3 bg-[#111111] text-[#FAFAFA] text-sm font-medium tracking-tight px-10 py-4 rounded-full shadow-xl shadow-neutral-900/10 cursor-pointer relative group/btn overflow-hidden"
              >
                <span>Book Free Site Survey</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </MotionLink>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}