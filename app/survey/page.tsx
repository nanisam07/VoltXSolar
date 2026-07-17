"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  FileText, 
  Calendar, 
  CalendarCheck, 
  ArrowRight
} from "lucide-react";

// --- HANDCRAFTED DESIGN SYSTEM ANIMATIONS (Strictly Typed) ---
const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function BookSurveyPage() {
  const [formData, setFormData] = useState({
    clientName: "",
    phoneNo: "",
    mailId: "",
    address: "",
    monthlyBill: "",
    dateToVisit: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct a premium structured breakdown text block for WhatsApp
    const whatsappText = `Hello MoveToSolar Team,\n\n` +
      `⚡ *NEW FREE SITE SURVEY REQUEST* ⚡\n` +
      `───────────────────────\n\n` +
      `👤 *Client Name:* ${formData.clientName}\n` +
      `📞 *Phone No:* ${formData.phoneNo}\n` +
      `✉️ *Mail ID:* ${formData.mailId}\n` +
      `📍 *Location/Address:* ${formData.address}\n` +
      `💰 *Monthly Power Bill:* ₹${formData.monthlyBill}\n` +
      `📅 *Preferred Date to Visit:* ${formData.dateToVisit}\n\n` +
      `───────────────────────\n` +
      `Please assign an engineering architect to verify my geospatial framework layout.`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/918790650918?text=${encodedText}`;

    // Secure cross-origin redirection to WhatsApp application context
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen w-full bg-[#FAFAFA] text-neutral-900 antialiased font-sans flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden selection:bg-neutral-950 selection:text-white">
      
      {/* Premium Apple/Tesla Futuristic Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-amber-200/40 via-orange-100/30 to-transparent blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-amber-300/30 via-neutral-100/50 to-transparent blur-[120px]" />
        {/* Subtle geometric structural horizon mesh line typical of premium configuration views */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_90%)]" />
      </div>

      <motion.div 
        className="w-full max-w-4xl bg-white/80 backdrop-blur-2xl border border-neutral-200/60 rounded-[32px] p-8 md:p-14 shadow-[0_24px_80px_-15px_rgba(0,0,0,0.04)] relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        initial="hidden"
        animate="visible"
        variants={CONTAINER_VARIANTS}
      >
        {/* Left Interactive Accent Column: Apple Functionalism meets Tesla Cyber Core */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-8">
          <motion.div variants={ITEM_VARIANTS} className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-[1.05] text-neutral-955">
              Book Your <br />
              <span className="font-light italic tracking-tight text-neutral-500">Free Site</span> Survey.
            </h1>
            <p className="text-sm font-light leading-relaxed text-neutral-600 max-w-xs">
              Provide your architecture metadata. Our drone telemetry engineers will map structural load and geospatial metrics.
            </p>
          </motion.div>

          {/* Clean Glassmorphic Interactive Progress Deck */}
          <motion.div 
            variants={ITEM_VARIANTS}
            className="p-5 rounded-2xl bg-neutral-50/80 border border-neutral-200/50 space-y-4 shadow-sm"
          >
            <div className="flex items-center space-x-3.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                <CalendarCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-sm font-medium text-neutral-900">Book your Available Survey Slot</span>
                
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Input Stream: Minimal Form Controls */}
        <div className="lg:col-span-7 w-full">
          <motion.form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Client Name Field */}
            <motion.div variants={ITEM_VARIANTS} className="space-y-2">
              <label htmlFor="clientName" className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 flex items-center space-x-2">
                <User className="w-3 h-3" />
                <span>Name</span>
              </label>
              <input 
                type="text"
                id="clientName"
                required
                value={formData.clientName}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl text-neutral-950 placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 focus:bg-white transition-all duration-300 shadow-sm"
              />
            </motion.div>

            {/* Split Row: Phone & Mail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={ITEM_VARIANTS} className="space-y-2">
                <label htmlFor="phoneNo" className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 flex items-center space-x-2">
                  <Phone className="w-3 h-3" />
                  <span>Phone Number</span>
                </label>
                <input 
                  type="tel"
                  id="phoneNo"
                  required
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl text-neutral-950 placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 focus:bg-white transition-all duration-300 shadow-sm"
                />
              </motion.div>

              <motion.div variants={ITEM_VARIANTS} className="space-y-2">
                <label htmlFor="mailId" className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 flex items-center space-x-2">
                  <Mail className="w-3 h-3" />
                  <span>Mail ID</span>
                </label>
                <input 
                  type="email"
                  id="mailId"
                  required
                  value={formData.mailId}
                  onChange={handleInputChange}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl text-neutral-950 placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 focus:bg-white transition-all duration-300 shadow-sm"
                />
              </motion.div>
            </div>

            {/* Address / Location Field */}
            <motion.div variants={ITEM_VARIANTS} className="space-y-2">
              <label htmlFor="address" className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 flex items-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span>Address / Location</span>
              </label>
              <textarea 
                id="address"
                required
                rows={3}
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter full architectural deployment site coordinate address..."
                className="w-full px-4 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl text-neutral-950 placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 focus:bg-white transition-all duration-300 resize-none shadow-sm"
              />
            </motion.div>

            {/* Split Row: Monthly Bill & Date to Visit */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div variants={ITEM_VARIANTS} className="space-y-2">
                <label htmlFor="monthlyBill" className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 flex items-center space-x-2">
                  <FileText className="w-3 h-3" />
                  <span>Monthly Bill (₹)</span>
                </label>
                <input 
                  type="number"
                  id="monthlyBill"
                  required
                  value={formData.monthlyBill}
                  onChange={handleInputChange}
                  placeholder="Avg monthly consumption"
                  className="w-full px-4 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl text-neutral-950 placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 focus:bg-white transition-all duration-300 shadow-sm"
                />
              </motion.div>

              <motion.div variants={ITEM_VARIANTS} className="space-y-2">
                <label htmlFor="dateToVisit" className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 flex items-center space-x-2">
                  <Calendar className="w-3 h-3" />
                  <span>Date to Visit</span>
                </label>
                <input 
                  type="date"
                  id="dateToVisit"
                  required
                  value={formData.dateToVisit}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 bg-neutral-50/50 border border-neutral-200 rounded-xl text-neutral-950 placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-950 focus:border-neutral-950 focus:bg-white transition-all duration-300 cursor-pointer shadow-sm"
                />
              </motion.div>
            </div>

            {/* Premium Action Dispatch Mechanism */}
            <motion.div variants={ITEM_VARIANTS} className="pt-4">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center space-x-3 px-8 py-4 bg-neutral-950 text-white rounded-xl text-sm font-medium tracking-tight relative overflow-hidden transition-all duration-300 group shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:bg-neutral-800 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] cursor-pointer"
              >
                <span>Dispatch Architecture Profile</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>

          </motion.form>
        </div>

      </motion.div>
    </main>
  );
}