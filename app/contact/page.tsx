"use client";

import React, { useState, useEffect } from "react";
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

  // Runtime Tracking System for Layout/DOM Layout Debugging
  useEffect(() => {
    console.log("[FAQ Debugger] Current active state index:", activeFaq);
    if (activeFaq !== null) {
      const activeEl = document.getElementById(`faq-collapse-${activeFaq}`);
      if (activeEl) {
        console.log(`[FAQ Debugger] Panel ${activeFaq} DOM Properties:`, {
          offsetHeight: activeEl.offsetHeight,
          scrollHeight: activeEl.scrollHeight,
          computedDisplay: window.getComputedStyle(activeEl).display,
          computedHeight: window.getComputedStyle(activeEl).height,
          computedVisibility: window.getComputedStyle(activeEl).visibility
        });
      }
    }
  }, [activeFaq]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappText = `Hello MoveToSolar Team,\n\nI would like to make an enquiry.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Property Type:* ${propertyType}\n` +
      `*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://wa.me/918790650918?text=${encodedText}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-[#FDFDFC] text-[#111111] antialiased selection:bg-neutral-200 selection:text-black font-sans overflow-x-hidden relative">
      
      {/* Background Gradient Accents */}
      <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none">
        <div className="absolute top-[-10%] right-[5%] w-[600px] h-[600px] rounded-full bg-amber-300/60 blur-[120px]" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-orange-400/50 blur-[140px]" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-amber-200/50 blur-[100px]" />
      </div>

      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 md:space-y-8">
            <span className="tracking-[0.2em] text-xs font-semibold uppercase text-amber-500">
              Contact
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-neutral-955 font-normal font-sans">
              Let’s Build <br />
              <span style={{ color: COLORS.accent }} className="font-light italic pr-2">Your Solar</span> Future.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 font-light max-w-xl leading-relaxed">
              Whether you're planning a home installation or a commercial solar project, our team is ready to help.
            </p>
          </div>

          {/* Geometric Artwork Grid Layout Panel */}
          <div className="lg:col-span-5 relative h-[360px] md:h-[520px] w-full rounded-[32px] overflow-hidden bg-neutral-955 flex flex-col justify-between p-8 md:p-12 shadow-2xl shadow-neutral-955/20">
            <div className="absolute inset-0 bg-[radial-gradient(at_top_right,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black opacity-80" />
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border-t border-l border-white" />
              ))}
            </div>
            <div className="relative z-10 flex justify-between items-start">
              <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">System: MoveToSolar v4</span>
              <Sun className="w-6 h-6 text-amber-400 stroke-[1.25]" />
            </div>
            <div className="relative z-10 flex flex-col space-y-4">
              <div className="h-[1px] bg-neutral-500 w-12" />
              <p className="text-2xl font-light text-neutral-200 tracking-tight leading-snug max-w-xs">
                Premium monocrystalline integration for modern architectural scales.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: CONTACT INFORMATION */}
      <section className="py-20 md:py-28 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-neutral-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Block 1: WhatsApp */}
          <div className="flex flex-col justify-between p-8 bg-white border border-neutral-200 rounded-[24px] shadow-sm transition-all duration-500 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1">
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
          </div>

          {/* Block 2: Phone */}
          <div className="flex flex-col justify-between p-8 bg-white border border-neutral-200 rounded-[24px] shadow-sm transition-all duration-500 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1">
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
                className="inline-flex items-center justify-between w-full px-6 py-4 bg-neutral-955 text-white rounded-xl text-sm font-medium tracking-tight group hover:bg-neutral-800 transition-colors duration-300"
                aria-label="Call Now"
              >
                <span>Call Now</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Block 3: Email */}
          <div className="flex flex-col justify-between p-8 bg-white border border-neutral-200 rounded-[24px] shadow-sm transition-all duration-500 hover:border-amber-300 hover:shadow-lg hover:-translate-y-1">
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
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR OFFICES */}
      <section className="py-20 md:py-28 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-neutral-100">
        <div className="mb-12 md:mb-16">
          <span className="tracking-[0.2em] text-xs font-semibold uppercase text-amber-500">Locations</span>
          <h2 className="text-3xl md:text-4xl tracking-tight text-neutral-955 mt-2 font-normal">Our Offices</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Office 01 */}
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-[28px] flex flex-col justify-between shadow-sm transition-all duration-500 hover:shadow-xl hover:border-amber-100 hover:-translate-y-1">
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
          </div>

          {/* Office 02
          <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-[28px] flex flex-col justify-between shadow-sm transition-all duration-500 hover:shadow-xl hover:border-amber-100 hover:-translate-y-1">
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
          </div> */}
        </div>
      </section>

      {/* SECTION 4: CONTACT FORM */}
      <section className="py-20 md:py-32 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="tracking-[0.2em] text-xs font-semibold uppercase text-amber-500">Briefing</span>
            <h2 className="text-3xl md:text-4xl tracking-tight text-neutral-955 mt-2 font-normal">Contact Form</h2>
            <p className="text-neutral-600 font-light mt-4 leading-relaxed max-w-sm">
              Submit your property criteria below and our engineering specialists will follow up swiftly via WhatsApp.
            </p>
          </div>

          <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-[32px] p-8 md:p-12 shadow-sm transition-all duration-700 hover:border-amber-100 hover:shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
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
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 5: BUSINESS HOURS */}
      <section className="py-16 md:py-24 px-6 sm:px-12 max-w-[1440px] mx-auto z-10 border-b border-neutral-100">
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-sm group transition-all duration-500 hover:shadow-md hover:border-neutral-300">
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
        </div>
      </section>

      {/* SECTION 6: QUICK FAQ */}
      <section className="py-20 md:py-32 px-6 sm:px-12 max-w-[1440px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-4">
            <span className="tracking-[0.2em] text-xs font-semibold uppercase text-amber-500">FAQ</span>
            <h2 className="text-3xl md:text-4xl tracking-tight text-neutral-955 mt-2 font-normal">Quick FAQ</h2>
            <p className="text-neutral-600 font-light mt-4 leading-relaxed max-w-sm">
              Workflow strategic execution timelines, regional frameworks, and surveys.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-neutral-200">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <button
                    onClick={() => {
                      const newIndex = isOpen ? null : index;
                      console.log(`[FAQ Action] Clicked row index ${index}. Next active state:`, newIndex);
                      setActiveFaq(newIndex);
                    }}
                    className="w-full flex items-center justify-between text-left group py-2 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg md:text-xl font-normal text-neutral-955 group-hover:text-amber-600 transition-colors duration-200">
                      {faq.question}
                    </span>
                    <span 
                      className="ml-4 flex-shrink-0 w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 transition-all duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        backgroundColor: isOpen ? "#F5F5F5" : "transparent",
                        borderColor: isOpen ? "#FBBF24" : "",
                        color: isOpen ? "#D97706" : ""
                      }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <div
                    id={`faq-collapse-${index}`}
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      opacity: isOpen ? 1 : 0,
                      visibility: isOpen ? "visible" : "hidden"
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-neutral-600 font-light leading-relaxed text-base pt-3 pb-2 max-w-2xl">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </main>
  );
}