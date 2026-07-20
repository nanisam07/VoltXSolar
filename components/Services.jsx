"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Wrench, Package } from "lucide-react";

export default function ServicesAndProductsHub() {
  return (
    <section className="relative w-full bg-[#FAFAFA] min-h-[70vh] flex items-center justify-center py-20 text-[#111111] overflow-hidden">
      {/* Structural Minimalist Accent Grid Mesh */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E5E5E5_1px,transparent_1px),linear-gradient(to_bottom,#E5E5E5_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.4] pointer-events-none" />
      
      <div className="mx-auto max-w-5xl px-6 sm:px-8 text-center relative z-10 flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 mb-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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

        {/* Action Route Redirect Interaction buttons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link href="/service" className="group relative w-full sm:w-auto z-10 flex items-center justify-center gap-3 rounded-full border border-[#E5E5E5] bg-white px-8 py-4 font-sans text-base font-bold tracking-tight text-[#111111] shadow-sm hover:bg-[#111111] hover:text-white transition-all duration-300 hover:shadow-lg active:scale-98">
            <Wrench className="h-4 w-4 transition-transform group-hover:rotate-12" strokeWidth={2.25} />
            Explore Services
          </Link>

          <Link href="/products" className="group relative w-full sm:w-auto z-10 flex items-center justify-center gap-3 rounded-full border border-[#111111] bg-[#111111] px-8 py-4 font-sans text-base font-bold tracking-tight text-white shadow-sm hover:bg-transparent hover:text-[#111111] transition-all duration-300 hover:shadow-lg active:scale-98">
            <Package className="h-4 w-4 transition-transform group-hover:scale-110" strokeWidth={2.25} />
            Browse Products
          </Link>
        </motion.div>
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