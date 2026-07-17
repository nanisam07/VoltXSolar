"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Search, 
  Cpu, 
  Layers, 
  Receipt, 
  TrendingDown, 
  Sparkles, 
  CalendarDays, 
  Wallet, 
  PiggyBank, 
  Coins, 
  Hourglass, 
  LineChart, 
  Leaf, 
  TreePine, 
  Car, 
  Info 
} from "lucide-react";

// --- INDIAN STATES CONSTANT ---
const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
];

// --- ZOD SCHEMA ---
const calculatorSchema = z.object({
  propertyType: z.enum(["Residential", "Commercial", "Industrial"]),
  state: z.string().min(1),
  city: z.string().min(1),
  monthlyBill: z.number().min(500).max(100000),
  roofType: z.enum(["Flat", "Sloped", "Metal"]),
});

type CalculatorInputs = z.infer<typeof calculatorSchema>;

// --- INTERFACES ---
interface CalculationResults {
  systemSize: number;
  roofArea: number;
  monthlyBill: number;
  monthlySolarBill: number;
  monthlySavings: number;
  annualSavings: number;
  installationCost: number;
  subsidy: number;
  netInvestment: number;
  paybackYears: number;
  lifetimeSavings: number;
  roi: number;
  treesSaved: number;
  carsOffRoad: number;
  co2Reduction: number;
}

// --- CALCULATION HOOK/ENGINE ---
const calculateMetrics = (inputs: Partial<CalculatorInputs>): CalculationResults => {
  const monthlyBill = inputs.monthlyBill ?? 8500;
  const isResidential = (inputs.propertyType ?? "Residential") === "Residential";

  const systemSize = Math.max(0.1, monthlyBill / 1025);
  const roofArea = systemSize * 100;
  const monthlySolarBill = monthlyBill * 0.05;
  const monthlySavings = monthlyBill - monthlySolarBill;
  const annualSavings = monthlySavings * 12;
  const installationCost = systemSize * 52000;
  
  const subsidy = isResidential ? Math.min(systemSize, 3) * 18000 : 0;
  const netInvestment = Math.max(0, installationCost - subsidy);
  const paybackYears = annualSavings > 0 ? netInvestment / annualSavings : 0;
  const lifetimeSavings = annualSavings * 25;
  const roi = installationCost > 0 ? ((lifetimeSavings - installationCost) / installationCost) * 100 : 0;

  const treesSaved = systemSize * 43;
  const carsOffRoad = systemSize * 1.15;
  const co2Reduction = systemSize * 2.4;

  return {
    systemSize,
    roofArea,
    monthlyBill,
    monthlySolarBill,
    monthlySavings,
    annualSavings,
    installationCost,
    subsidy,
    netInvestment,
    paybackYears,
    lifetimeSavings,
    roi,
    treesSaved,
    carsOffRoad,
    co2Reduction,
  };
};

// --- ANTIMATED COUNTER ---
const AnimatedCounter: React.FC<{ value: number; formatter: (v: number) => string }> = ({ value, formatter }) => {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    let startTime: number | null = null;
    const startValue = display;
    const endValue = value;
    if (startValue === endValue) return;

    const duration = 450; 

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = progress * (2 - progress);
      const current = startValue + (endValue - startValue) * easeOutQuad;
      
      setDisplay(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(endValue);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  return <span>{formatter(display)}</span>;
};

// --- MAIN CLIENT PAGE ---
export default function SolarCalculatorPage() {
  const { register, control, setValue } = useForm<CalculatorInputs>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      propertyType: "Residential",
      state: "Maharashtra",
      city: "Mumbai",
      monthlyBill: 8500,
      roofType: "Flat",
    },
    mode: "onChange",
  });

  const formData = useWatch({ control });
  const results = useMemo(() => calculateMetrics(formData), [formData]);

  // Format Layout Rules
  const fmtKW = (v: number) => `${v.toFixed(2)} kW`;
  const fmtSqft = (v: number) => `${Math.round(v).toLocaleString("en-IN")} sqft`;
  const fmtCash = (v: number) => `₹${Math.round(v).toLocaleString("en-IN")}`;
  const fmtLakhs = (v: number) => `₹${(v / 100000).toFixed(2)} Lakhs`;
  const fmtYears = (v: number) => `${v.toFixed(1)} Years`;
  const fmtPercent = (v: number) => `${Math.round(v).toLocaleString("en-IN")}%`;
  const fmtDecimal = (v: number) => v.toFixed(1);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1D1D1F] font-sans antialiased selection:bg-[#1D1D1F] selection:text-white pb-32">
      
      {/* HEADER SECTION */}
      <header className="max-w-[1440px] mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16">
        <div className="max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-semibold tracking-[0.2em] text-[#86868B] uppercase mb-4"
          >
            MoveToSolar Architecture
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl md:text-7xl font-normal tracking-tight text-[#1D1D1F] mb-6 leading-[1.08]"
          >
            Discover How Much<br />You Can Save.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-[#86868B] max-w-xl font-normal leading-relaxed tracking-tight"
          >
            Estimate your ideal solar system footprint, structural load requirements, and comprehensive economic yield.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="mt-16 w-full h-[50vh] md:h-[70vh] rounded-[32px] overflow-hidden bg-[#E8E8ED] relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=2000&q=90" 
            alt="Minimal premium solar array installation on modern clean structure" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </header>

      {/* MATRIX AND COMPUTATION WORKSPACE */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COMPONENT: LUXURY CALCULATOR INPUT CONTROLS */}
        <section className="lg:col-span-5 space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl font-normal tracking-tight text-[#1D1D1F]">Parameters</h2>
            <p className="text-sm text-[#86868B]">Provide architecture and usage baselines.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            {/* Property Configuration */}
            <div className="space-y-3">
              <label className="text-xs font-semibold tracking-wider text-[#86868B] uppercase">Property Type</label>
              <div className="grid grid-cols-3 gap-1.5 bg-[#F2F2F7] p-1 rounded-xl relative">
                {(["Residential", "Commercial", "Industrial"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setValue("propertyType", type)}
                    className={`py-2.5 text-xs font-medium tracking-tight rounded-lg relative transition-colors duration-200 z-10 ${
                      formData.propertyType === type ? "text-[#1D1D1F] font-semibold" : "text-[#86868B] hover:text-[#1D1D1F]"
                    }`}
                  >
                    {formData.propertyType === type && (
                      <motion.div 
                        layoutId="propTypeTab"
                        className="absolute inset-0 bg-white rounded-lg shadow-xs -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* State and Location Mapping */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-[#86868B] uppercase">State</label>
                <div className="relative">
                  <select
                    {...register("state")}
                    className="w-full appearance-none bg-[#F5F5F7] border border-transparent focus:border-[#86868B] focus:bg-white rounded-xl px-4 py-3 text-sm font-normal text-[#1D1D1F] transition-all duration-200 outline-none cursor-pointer"
                  >
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868B] pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider text-[#86868B] uppercase">City</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search regional grid..."
                    {...register("city")}
                    className="w-full bg-[#F5F5F7] border border-transparent focus:border-[#86868B] focus:bg-white rounded-xl px-4 py-3 pl-10 text-sm font-normal text-[#1D1D1F] transition-all duration-200 outline-none"
                  />
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#86868B] pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Slider & Input Workspace */}
            <div className="space-y-4 bg-[#F5F5F7] p-6 rounded-2xl border border-transparent hover:border-[#E8E8ED] transition-all duration-300">
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-semibold tracking-wider text-[#86868B] uppercase">Monthly Bill Range</label>
                <div className="flex items-center space-x-1 border-b border-[#D2D2D7] focus-within:border-[#1D1D1F] transition-colors pb-0.5">
                  <span className="text-sm font-medium text-[#1D1D1F]">₹</span>
                  <input
                    type="number"
                    min={500}
                    max={100000}
                    value={formData.monthlyBill ?? ""}
                    onChange={(e) => {
                      const inputVal = Math.min(Math.max(Number(e.target.value), 0), 100000);
                      setValue("monthlyBill", inputVal);
                    }}
                    className="bg-transparent text-lg font-semibold text-[#1D1D1F] w-20 outline-none text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>
              </div>

              <input
                type="range"
                min={500}
                max={100000}
                step={250}
                value={formData.monthlyBill ?? 8500}
                onChange={(e) => setValue("monthlyBill", Number(e.target.value))}
                className="w-full h-1 bg-[#D2D2D7] rounded-lg appearance-none cursor-pointer accent-[#1D1D1F] focus:outline-none"
              />
              <div className="flex justify-between text-[10px] text-[#86868B] font-semibold tracking-tight">
                <span>₹500</span>
                <span>₹1,00,000</span>
              </div>
            </div>

            {/* Roof Architectural Styles */}
            <div className="space-y-3">
              <label className="text-xs font-semibold tracking-wider text-[#86868B] uppercase">Roof Infrastructure</label>
              <div className="grid grid-cols-3 gap-2">
                {(["Flat", "Sloped", "Metal"] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setValue("roofType", type)}
                    className={`py-3 px-2 rounded-xl border text-center text-xs tracking-tight transition-all duration-200 ${
                      formData.roofType === type
                        ? "border-[#1D1D1F] bg-[#1D1D1F] text-white shadow-xs font-medium"
                        : "border-[#E8E8ED] bg-white text-[#1D1D1F] hover:border-[#86868B]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </section>

        {/* RIGHT COMPONENT: APPLE FINANCE-INSPIRED REAL-TIME SUMMARY */}
        <section className="lg:col-span-7 space-y-12">
          
          {/* CORE BLUEPRINT GENERATED VALUES */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider text-[#86868B] uppercase">System Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: System Size */}
              <div className="bg-white border border-[#E8E8ED] rounded-2xl p-6 flex items-start space-x-4">
                <div className="p-2.5 bg-[#F5F5F7] rounded-xl text-[#1D1D1F]">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-[#86868B] block">Recommended Array Size</span>
                  <span className="text-2xl font-semibold tracking-tight block text-[#1D1D1F]">
                    <AnimatedCounter value={results.systemSize} formatter={fmtKW} />
                  </span>
                </div>
              </div>

              {/* Card 2: Roof Area */}
              <div className="bg-white border border-[#E8E8ED] rounded-2xl p-6 flex items-start space-x-4">
                <div className="p-2.5 bg-[#F5F5F7] rounded-xl text-[#1D1D1F]">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-[#86868B] block">Minimum Roof Surface Area</span>
                  <span className="text-2xl font-semibold tracking-tight block text-[#1D1D1F]">
                    <AnimatedCounter value={results.roofArea} formatter={fmtSqft} />
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* UTILITY BILL METRICS */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider text-[#86868B] uppercase">Utility Adjustments</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="bg-white border border-[#E8E8ED] rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-[#86868B]">
                  <Receipt className="w-4 h-4" />
                  <span className="text-xs font-medium">Current Bill</span>
                </div>
                <span className="text-xl font-semibold tracking-tight block text-[#1D1D1F]">
                  <AnimatedCounter value={results.monthlyBill} formatter={fmtCash} />
                </span>
              </div>

              <div className="bg-white border border-[#E8E8ED] rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-[#86868B]">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-xs font-medium">Post-Solar Bill</span>
                </div>
                <span className="text-xl font-semibold tracking-tight block text-emerald-600">
                  <AnimatedCounter value={results.monthlySolarBill} formatter={fmtCash} />
                </span>
              </div>

              <div className="bg-white border border-[#E8E8ED] rounded-2xl p-5 space-y-3">
                <div className="flex items-center space-x-2 text-[#86868B]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-medium">Monthly Deficit Return</span>
                </div>
                <span className="text-xl font-semibold tracking-tight block text-[#1D1D1F]">
                  <AnimatedCounter value={results.monthlySavings} formatter={fmtCash} />
                </span>
              </div>

            </div>
          </div>

          {/* CAPITAL STATEMENT MATRIX */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider text-[#86868B] uppercase">Financial Statement</h3>
            <div className="bg-white border border-[#E8E8ED] rounded-2xl p-6 md:p-8 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-[#F2F2F7]">
                <div className="space-y-1">
                  <span className="text-xs font-medium text-[#86868B] flex items-center gap-1.5">
                    <Wallet className="w-3.5 h-3.5" /> Gross Capital Investment
                  </span>
                  <span className="text-xl font-medium tracking-tight block text-[#1D1D1F]">
                    <AnimatedCounter value={results.installationCost} formatter={fmtLakhs} />
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-[#86868B] flex items-center gap-1.5">
                    <PiggyBank className="w-3.5 h-3.5" /> Direct Gov Subsidy
                  </span>
                  <span className={`text-xl font-medium tracking-tight block ${results.subsidy > 0 ? "text-emerald-600" : "text-[#A1A1A6]"}`}>
                    <AnimatedCounter value={results.subsidy} formatter={fmtCash} />
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-[#86868B] flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5" /> Net Asset Investment
                  </span>
                  <span className="text-xl font-semibold tracking-tight block text-[#1D1D1F]">
                    <AnimatedCounter value={results.netInvestment} formatter={fmtLakhs} />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                <div className="space-y-1">
                  <span className="text-xs font-medium text-[#86868B] flex items-center gap-1.5">
                    <CalendarDays className="w-3.5 h-3.5" /> Annualized Yield
                  </span>
                  <span className="text-lg font-medium text-[#1D1D1F] block">
                    <AnimatedCounter value={results.annualSavings} formatter={fmtCash} />
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-[#86868B] flex items-center gap-1.5">
                    <Hourglass className="w-3.5 h-3.5" /> Payback Amortization
                  </span>
                  <span className="text-lg font-medium text-[#1D1D1F] block">
                    <AnimatedCounter value={results.paybackYears} formatter={fmtYears} />
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-medium text-[#86868B] flex items-center gap-1.5">
                    <LineChart className="w-3.5 h-3.5" /> Internal ROI Metric
                  </span>
                  <span className="text-lg font-semibold text-emerald-600 block">
                    <AnimatedCounter value={results.roi} formatter={fmtPercent} />
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* LIFETIME GENERATIONAL CAPITAL PROFILE */}
          <div className="bg-[#1D1D1F] text-white rounded-3xl p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="space-y-1">
              <span className="text-xs font-medium text-[#86868B] uppercase tracking-wider block">25-Year Cumulative Yield</span>
              <h4 className="text-4xl md:text-5xl font-semibold tracking-tight">
                <AnimatedCounter value={results.lifetimeSavings} formatter={fmtLakhs} />
              </h4>
            </div>
            <div className="text-xs text-[#86868B] max-w-xs leading-relaxed sm:text-right">
              Cumulative clean generation value modeled on steady-state regulatory tariffs over the asset life cycle.
            </div>
          </div>

          {/* ENVIRONMENTAL OUTCOME STATEMENT */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-wider text-[#86868B] uppercase">Environmental Impact Statement</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="bg-[#FAFAFA] border border-[#E8E8ED] rounded-2xl p-5 flex items-center space-x-4">
                <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-medium text-[#86868B] block uppercase tracking-wider">CO₂ Mitigated</span>
                  <span className="text-lg font-semibold tracking-tight block text-[#1D1D1F]">
                    <AnimatedCounter value={results.co2Reduction} formatter={fmtDecimal} /> Tons / Yr
                  </span>
                </div>
              </div>

              <div className="bg-[#FAFAFA] border border-[#E8E8ED] rounded-2xl p-5 flex items-center space-x-4">
                <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                  <TreePine className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-medium text-[#86868B] block uppercase tracking-wider">Carbon Offset</span>
                  <span className="text-lg font-semibold tracking-tight block text-[#1D1D1F]">
                    <AnimatedCounter value={results.treesSaved} formatter={(v) => `${Math.round(v)}`} /> Trees
                  </span>
                </div>
              </div>

              <div className="bg-[#FAFAFA] border border-[#E8E8ED] rounded-2xl p-5 flex items-center space-x-4">
                <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                  <Car className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-medium text-[#86868B] block uppercase tracking-wider">Vehicles Retired</span>
                  <span className="text-lg font-semibold tracking-tight block text-[#1D1D1F]">
                    <AnimatedCounter value={results.carsOffRoad} formatter={fmtDecimal} /> Equiv.
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* DISCLAIMER / DATA QUALITY INDEX */}
          <div className="flex items-start space-x-2.5 text-[11px] text-[#86868B] leading-relaxed max-w-2xl">
            <Info className="w-4 h-4 mt-0.5 shrink-0 text-[#C1C1C6]" />
            <p>Calculations align directly with performance guidelines across standard environments. Capital estimates exclude microgrid component variations or unique net-metering structures managed by regional discom infrastructure.</p>
          </div>

        </section>

      </main>
    </div>
  );
}