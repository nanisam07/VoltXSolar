"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Clock, 
  ChevronDown, 
  Building2, 
  Home, 
  Factory,
  Send,
  Sun
} from "lucide-react";

// --- ANIMATION CONSTANTS (Strictly Typed Framer Motion Variants) ---
const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  }
};

const STAGGER_CONTAINER: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 }
  }
};

const ARTWORK_REVEAL: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.19, 1, 0.22, 1], delay: 0.2 }
  }
};

// Gradient and color settings
const COLORS = {
  primary: '#111111', 
  accent: '#FBBF24',  
  textMuted: '#6B7280', 
  border: '#E5E7EB', 
};

// --- DATA TYPES & STRUCTURES ---
interface FaqItemProps {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItemProps[] = [
  {
    question: "How long does installation take?",
    answer: "Typically, a standard residential system is installed within 2 to 3 days once engineering approvals are completed. Commercial deployments scale based on megawatt capacity, routinely concluding within 3 to 6 weeks."
  },
  {
    question: "Do you provide subsidy assistance?",
    answer: "Yes. We manage the entire state and central government subsidy documentation workflow natively, ensuring all technical guidelines are met for seamless financial disbursement directly to your account."
  },
  {
    question: "Do you offer free site surveys?",
    answer: "Absolutely. Our engineering architects conduct full-spectrum geospatial layouts, structural load assessments, and shade analysis using precision drone telemetry entirely free of obligation."
  },
  {
    question: "How soon can someone contact me?",
    answer: "Our technical advisory team initiates custom consultations within 2 business hours of receiving a verified architecture or residential profile blueprint request."
  }
];

export default function ContactPage() {
  // Form State
  const [propertyType, setPropertyType] = useState<"Residential" | "Commercial" | "Industrial">("Residential");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp custom message text block
    const whatsappText = `Hello MoveToSolar Team,\n\nI would like to make an enquiry.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Property Type:* ${propertyType}\n` +
      `*Message:* ${formData.message}`;

    // Encode text payload for browser URL execution
    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/918790650918?text=${encodedText}`;

    // Open WhatsApp action context link natively
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#FDFDFC] text-[#111111] antialiased selection:bg-neutral-200 selection:text-black font-sans overflow-x-hidden relative">
      
      {/* Background Gradient Accents */}
      <div className="fixed inset-0 z-0 opacity-[0.08]">
        <div className="absolute top-[-10%] right-[5%] w-[600px] h-[600px] rounded-full bg-amber-300/60 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-orange-400/50 blur-[140px]" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-amber-200/50 blur-[100px]" />
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CONTAINER}
          >
            <motion.span 
              variants={FADE_UP} 
              className="tracking-[0.2em] text-xs font-semibold uppercase text-amber-500"
            >
              Contact
            </motion.span>
            
            <motion.h1 
              variants={FADE_UP}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-neutral-950 font-normal font-sans"
            >
              Let’s Build <br />
              <motion.span initial={{ color: COLORS.textMuted }} animate={{ color: COLORS.accent }} transition={{ delay: 1, duration: 1.5 }} className="font-light italic pr-2">Your Solar</motion.span> Future.
            </motion.h1>

            <motion.p 
              variants={FADE_UP}
              className="text-lg md:text-xl text-neutral-600 font-light max-w-xl leading-relaxed"
            >
              Whether you're planning a home installation or a commercial solar project, our team is ready to help.
            </motion.p>
          </motion.div>

          {/* Abstract Geometric Artwork */}
          <motion.div 
            className="lg:col-span-5 relative h-[360px] md:h-[520px] w-full rounded-[32px] overflow-hidden bg-neutral-950 flex flex-col justify-between p-8 md:p-12 shadow-2xl shadow-neutral-950/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={ARTWORK_REVEAL}
          >
            <div className="absolute inset-0 bg-[radial-gradient(at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80" />
            
            {/* Architectural Grid Accent */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border-t border-l border-white" />
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="relative z-10 flex justify-between items-start">
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">System: MoveToSolar v4</span>
              <Sun className="w-6 h-6 text-amber-400 stroke-[1.25]" />
            </motion.div>

            <div className="relative z-10 flex flex-col space-y-4">
              <motion.div initial={{ width: 0 }} animate={{ width: 48 }} transition={{ delay: 1.8, duration: 1.2, ease: "easeOut" }} className="h-[1px] bg-neutral-500" />
              <p className="text-2xl font-light text-neutral-200 tracking-tight leading-snug max-w-xs">
                Premium monocrystalline integration for modern architectural scales.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: CONTACT INFORMATION */}
      <section className="py-20 md:py-28 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-neutral-100">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CONTAINER}
        >
          {/* Block 1: WhatsApp */}
          <motion.div variants={FADE_UP} className="flex flex-col justify-between p-8 bg-white/70 backdrop-blur-sm border border-neutral-200 rounded-[24px] shadow-sm transition-all duration-500 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1">
            <div>
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800 mb-6">
                <MessageSquare className="w-4 h-4 text-neutral-900" />
              </div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">WhatsApp</span>
              <p className="text-sm text-neutral-500 mt-1">Main Number</p>
              <h3 className="text-2xl font-normal text-neutral-955 mt-4 tracking-tight">87906 50918</h3>
            </div>
            <div className="mt-8">
              <a 
                href="https://wa.me/918790650918" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-6 py-4 bg-[#25D366] text-white rounded-xl text-sm font-medium tracking-tight group hover:bg-[#20ba59] transition-colors duration-300"
                aria-label="Chat on WhatsApp"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

          {/* Block 2: Phone */}
          <motion.div variants={FADE_UP} className="flex flex-col justify-between p-8 bg-white/70 backdrop-blur-sm border border-neutral-200 rounded-[24px] shadow-sm transition-all duration-500 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1">
            <div>
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800 mb-6">
                <Phone className="w-4 h-4 text-neutral-900" />
              </div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Phone</span>
              <p className="text-sm text-neutral-500 mt-1">Secondary Number</p>
              <h3 className="text-2xl font-normal text-neutral-955 mt-4 tracking-tight">77993 22357</h3>
            </div>
            <div className="mt-8">
              <a 
                href="tel:+917799322357" 
                className="inline-flex items-center justify-between w-full px-6 py-4 bg-neutral-950 text-white rounded-xl text-sm font-medium tracking-tight group hover:bg-neutral-800 transition-colors duration-300"
                aria-label="Call Now"
              >
                <span>Call Now</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

          {/* Block 3: Email */}
          <motion.div variants={FADE_UP} className="flex flex-col justify-between p-8 bg-white/70 backdrop-blur-sm border border-neutral-200 rounded-[24px] shadow-sm transition-all duration-500 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1">
            <div>
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-800 mb-6">
                <Mail className="w-4 h-4 text-neutral-900" />
              </div>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Email</span>
              <p className="text-sm text-neutral-500 mt-1">General Inquiries</p>
              <h3 className="text-2xl font-normal text-neutral-955 mt-4 tracking-tight break-all">MoveToSolarpower@gmail.com</h3>
            </div>
            <div className="mt-8">
              <a 
                href="mailto:MoveToSolarpower@gmail.com" 
                className="inline-flex items-center justify-between w-full px-6 py-4 bg-white text-neutral-955 border border-neutral-200 rounded-xl text-sm font-medium tracking-tight group hover:bg-neutral-100 hover:border-neutral-300 transition-colors duration-300"
                aria-label="MoveToSolarpower@gmail.com"
              >
                <span>Mail Now</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* SECTION 3: OUR OFFICES */}
      <section className="py-20 md:py-28 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-neutral-100">
        <motion.div 
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
        >
          <span className="tracking-[0.2em] text-xs font-semibold uppercase text-amber-500">Locations</span>
          <h2 className="text-3xl md:text-4xl tracking-tight text-neutral-955 mt-2 font-normal">Our Offices</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER_CONTAINER}
        >
          {/* Office 01 */}
          <motion.div variants={FADE_UP} className="bg-white/70 backdrop-blur-sm border border-neutral-200 p-8 md:p-10 rounded-[28px] flex flex-col justify-between shadow-sm transition-all duration-500 hover:shadow-xl hover:border-amber-100 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-mono text-neutral-400">Office 01</span>
                <span className="px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-amber-700 bg-amber-100/70 rounded-full">
                  Head Office
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <h4 className="text-xl font-normal text-neutral-955">Medchal</h4>
                  <p className="text-neutral-600 font-light leading-relaxed">
                    Medchal, Hyderabad,<br />
                    Telangana, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-neutral-100">
              <a 
                href="https://maps.google.com/?q=Medchal,Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-neutral-800 font-medium hover:text-amber-600 transition-colors group"
              >
                <span>Open Google Maps</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

          {/* Office 02 */}
          <motion.div variants={FADE_UP} className="bg-white/70 backdrop-blur-sm border border-neutral-200 p-8 md:p-10 rounded-[28px] flex flex-col justify-between shadow-sm transition-all duration-500 hover:shadow-xl hover:border-amber-100 hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-mono text-neutral-400">Office 02</span>
                <span className="px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-neutral-600 bg-neutral-100 rounded-full">
                  Branch Office
                </span>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-neutral-400 mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <h4 className="text-xl font-normal text-neutral-955">Banjara Hills</h4>
                  <p className="text-neutral-600 font-light leading-relaxed">
                    Road number 11,Banjara Hills, Hyderabad, Telangana
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-neutral-100">
              <a 
                href="https://maps.google.com/?q=Banjara+Hills+Road+No.11+BRK+News+Hyderabad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm text-neutral-800 font-medium hover:text-amber-600 transition-colors group"
              >
                <span>Open Google Maps</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* SECTION 4: GOOGLE MAPS EMBEDS */}
      <section className="py-12 md:py-16 px-6 sm:px-12 max-w-[1440px] mx-auto z-10">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={FADE_UP}
        >
          {/* Map One: Medchal */}
          <div className="w-full h-[350px] md:h-[460px] rounded-[32px] overflow-hidden border border-neutral-200 bg-neutral-100 relative shadow-inner group">
            <iframe 
              src="https://maps.google.com/maps?q=Medchal,Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 filter grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MoveToSolar Medchal Head Office"
            />
          </div>

          {/* Map Two: Banjara Hills */}
          <div className="w-full h-[350px] md:h-[460px] rounded-[32px] overflow-hidden border border-neutral-200 bg-neutral-100 relative shadow-inner group">
            <iframe 
              src="https://maps.google.com/maps?q=Banjara%20Hills%20Road%20No.11%20BRK%20News%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 filter grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="MoveToSolar Banjara Hills Branch Office"
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 5: CONTACT FORM */}
      <section className="py-20 md:py-32 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <motion.div 
            className="lg:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
          >
            <span className="tracking-[0.2em] text-xs font-semibold uppercase text-amber-500">Briefing</span>
            <h2 className="text-3xl md:text-4xl tracking-tight text-neutral-955 mt-2 font-normal">Contact Form</h2>
            <p className="text-neutral-600 font-light mt-4 leading-relaxed max-w-sm">
              Submit your property criteria below and our engineering specialists will follow up swiftly via WhatsApp.
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-8 bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-[32px] p-8 md:p-12 shadow-sm transition-all duration-700 hover:border-amber-100 hover:shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
          >
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-8"
              transition={{ duration: 0.3 }}
            >
              
              {/* Property Type Custom Selector */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Property Type</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "Residential", label: "Residential", icon: Home },
                    { id: "Commercial", label: "Commercial", icon: Building2 },
                    { id: "Industrial", label: "Industrial", icon: Factory }
                  ].map((type) => {
                    const Icon = type.icon;
                    const isSelected = propertyType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setPropertyType(type.id as "Residential" | "Commercial" | "Industrial")}
                        className={`flex items-center space-x-3 px-5 py-4 rounded-xl border text-left transition-all duration-300 ${
                          isSelected 
                            ? "bg-amber-950 border-amber-950 text-white shadow-md shadow-amber-950/20" 
                            : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300"
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? "text-amber-300" : "text-neutral-400"}`} />
                        <span className="text-sm font-medium tracking-tight">{type.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Standard Form Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="px-4 py-3.5 bg-white border border-neutral-200 rounded-xl text-neutral-955 placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 focus:ring-amber-300 focus:border-amber-400 transition-all duration-200"
                  />
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    className="px-4 py-3.5 bg-white border border-neutral-200 rounded-xl text-neutral-955 placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 focus:ring-amber-300 focus:border-amber-400 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email Address"
                  className="w-full px-4 py-3.5 bg-white border border-neutral-200 rounded-xl text-neutral-955 placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 focus:ring-amber-300 focus:border-amber-400 transition-all duration-200"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-neutral-500">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your request details here..."
                  className="w-full px-4 py-3.5 bg-white border border-neutral-200 rounded-xl text-neutral-955 placeholder-neutral-400 text-sm focus:outline-none focus:ring-1 focus:ring-amber-300 focus:border-amber-400 transition-all duration-200 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-amber-500 text-white rounded-xl text-sm font-semibold tracking-tight shadow-md shadow-amber-500/20 group cursor-pointer transition-all duration-300 hover:bg-amber-600"
              >
                <span>Send Enquiry</span>
                <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>

            </motion.form>
          </motion.div>

        </div>
      </section>

      {/* SECTION 6: BUSINESS HOURS */}
      <section className="py-16 md:py-24 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-neutral-100">
        <motion.div 
          className="bg-white/40 backdrop-blur-[2px] border border-neutral-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm group transition-all duration-500 hover:shadow-md hover:border-neutral-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FADE_UP}
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 transition-colors group-hover:bg-amber-50">
              <Clock className="w-4 h-4 text-neutral-900 transition-colors group-hover:text-amber-600" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block">Business Hours</span>
              <p className="text-sm text-neutral-600 mt-0.5">MoveToSolar Operations Availability</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 text-sm">
            <div className="flex flex-col">
              <span className="text-neutral-500 font-light">Monday — Saturday</span>
              <span className="font-semibold text-neutral-955 mt-0.5">9:00 AM — 6:30 PM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-neutral-500 font-light">Sunday</span>
              <span className="text-amber-600 font-semibold italic mt-0.5">Closed</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 7: QUICK FAQ */}
      <section className="py-20 md:py-32 px-6 sm:px-12 max-w-[1440px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <motion.div 
            className="lg:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP}
          >
            <span className="tracking-[0.2em] text-xs font-semibold uppercase text-amber-500">FAQ</span>
            <h2 className="text-3xl md:text-4xl tracking-tight text-neutral-955 mt-2 font-normal">Quick FAQ</h2>
            <p className="text-neutral-600 font-light mt-4 leading-relaxed max-w-sm">
              Workflow strategic execution timelines, regional frameworks, and surveys.
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-8 divide-y divide-neutral-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={STAGGER_CONTAINER}
          >
            {FAQ_DATA.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <motion.div 
                  key={index} 
                  variants={FADE_UP} 
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left group py-2 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg md:text-xl font-normal text-neutral-955 group-hover:text-amber-600 transition-colors duration-200">
                      {faq.question}
                    </span>
                    <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 transition-all duration-300 ${isOpen ? "rotate-180 bg-neutral-100 border-amber-300 text-amber-600" : "group-hover:border-neutral-300"}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-neutral-600 font-light leading-relaxed text-base pt-3 pb-2 max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

    </main>
  );
}