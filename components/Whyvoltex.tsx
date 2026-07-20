"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface StoryStep {
  id: string;
  number: string;
  title: string;
  description?: string;
  image: string;
}

const storySteps: StoryStep[] = [
  {
    id: "scene-1",
    number: "01",
    title: "Why homeowners choose Move to Solar.",
    image: "/image/Sec1.jpg",
  },
  {
    id: "scene-2",
    number: "02",
    title: "Every roof deserves a custom solution.",
    description: "Your architecture dictates our engineering. We design bespoke solar arrays tailored to your property's geometric parameters and energy thresholds.",
    image: "/image/Sec22.jpg",
  },
  {
    id: "scene-3",
    number: "03",
    title: "Installed by certified professionals.",
    description: "Precision at scale. Our dedicated master technicians handle every connection, structure validation, and systems calibration with meticulous attention to detail.",
    image: "/image/Sec3.jpg",
  },
  {
    id: "scene-4",
    number: "04",
    title: "Built to save for decades.",
    description: "An investment engineered to withstand the test of time. Tier-1 engineering parameters ensure uncompromised efficiency output and asset structural longevity.",
    image: "/image/Sec4.jpg",
  },
  {
    id: "scene-5",
    number: "05",
    title: "Ready to build your own energy future?",
    image: "/image/Sec5.jpg",
  },
];

export default function WhyChooseVoltex() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  // Function to handle slide animations
  const changeSlide = (nextIndex: number) => {
    if (isAnimating.current || nextIndex === currentSlide) return;
    isAnimating.current = true;

    const textScenes = gsap.utils.toArray<HTMLElement>(".apple-text-scene");
    const imageContainers = gsap.utils.toArray<HTMLElement>(".apple-img-container");
    const imageAssets = gsap.utils.toArray<HTMLElement>(".apple-img-asset");
    const pillIndicators = gsap.utils.toArray<HTMLElement>(".apple-pill-indicator");

    const currentText = textScenes[currentSlide];
    const currentImgContainer = imageContainers[currentSlide];
    const currentImgAsset = imageAssets[currentSlide];
    const currentPill = pillIndicators[currentSlide];

    const nextText = textScenes[nextIndex];
    const nextImgContainer = imageContainers[nextIndex];
    const nextImgAsset = imageAssets[nextIndex];
    const nextPill = pillIndicators[nextIndex];

    // Determine direction for aesthetic offset slide movement
    const movingForward = nextIndex > currentSlide;

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSlide(nextIndex);
        isAnimating.current = false;
      },
    });

    // Outbound transitions
    tl.to(currentText, { opacity: 0, y: movingForward ? -40 : 40, filter: "blur(10px)", duration: 0.4, ease: "power2.inOut" }, 0)
      .to(currentImgAsset, { scale: 0.95, duration: 0.4, ease: "power2.inOut" }, 0)
      .to(currentImgContainer, { opacity: 0, duration: 0.4, ease: "power2.inOut" }, 0)
      .to(currentPill, { width: "8px", backgroundColor: "rgba(15, 23, 42, 0.2)", duration: 0.3 }, 0);

    // Visibility toggles
    tl.set(currentImgContainer, { visibility: "hidden" })
      .set(nextImgContainer, { visibility: "visible" });

    // Inbound setup values before they animate into screen view
    tl.set(nextText, { y: movingForward ? 40 : -40, filter: "blur(10px)" })
      .set(nextImgAsset, { scale: 1.1 });

    // Inbound entry animations
    tl.to(nextImgContainer, { opacity: 1, duration: 0.5, ease: "power2.inOut" }, 0.4)
      .to(nextImgAsset, { scale: 1, duration: 0.5, ease: "power2.out" }, 0.4)
      .to(nextText, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5, ease: "power2.out" }, 0.5)
      .to(nextPill, { width: "28px", backgroundColor: "#0F172A", duration: 0.3 }, 0.5);
  };

  const nextSlide = () => {
    if (currentSlide < storySteps.length - 1) {
      changeSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      changeSlide(currentSlide - 1);
    }
  };

  // Set initial rendering layout structure cleanly on load
  useEffect(() => {
    const textScenes = gsap.utils.toArray<HTMLElement>(".apple-text-scene");
    const imageContainers = gsap.utils.toArray<HTMLElement>(".apple-img-container");
    const imageAssets = gsap.utils.toArray<HTMLElement>(".apple-img-asset");
    const pillIndicators = gsap.utils.toArray<HTMLElement>(".apple-pill-indicator");

    gsap.set(textScenes, { opacity: 0, y: 40, filter: "blur(10px)" });
    gsap.set(imageContainers, { opacity: 0, visibility: "hidden" });
    gsap.set(imageAssets, { scale: 1.1 });
    gsap.set(pillIndicators, { width: "8px", backgroundColor: "rgba(15, 23, 42, 0.2)" });

    // Activate the primary step
    gsap.set(textScenes[0], { opacity: 1, y: 0, filter: "blur(0px)" });
    gsap.set(imageContainers[0], { opacity: 1, visibility: "visible" });
    gsap.set(imageAssets[0], { scale: 1 });
    gsap.set(pillIndicators[0], { width: "28px", backgroundColor: "#0F172A" });
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-[#FAFAFA] text-[#0F172A] antialiased relative h-[700px] lg:h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      
      {/* Structural Grid Background Mesh */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] opacity-[0.04] pointer-events-none" />

      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 w-full h-full bg-[#FAFAFA]">
        {storySteps.map((step, index) => (
          <div
            key={`img-${step.id}`}
            className="apple-img-container absolute inset-0 w-full h-full will-change-transform"
          >
            <div className="apple-img-asset absolute inset-0 w-full h-full will-change-transform">
              <Image
                src={step.image}
                alt={step.title}
                fill
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA]/40 via-transparent to-[#FAFAFA]/20 mix-blend-multiply" />
            </div>
          </div>
        ))}
      </div>

      {/* TYPOGRAPHIC OVERLAY SYSTEM */}
      <div className="relative z-20 w-full max-w-5xl px-6 md:px-8 text-center flex items-center justify-center h-full">
        {storySteps.map((step) => (
          <div
            key={`text-${step.id}`}
            className="apple-text-scene absolute max-w-3xl flex flex-col items-center will-change-transform px-6 py-8 md:px-12 md:py-10 rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#475569] mb-3 md:mb-5 block font-bold">
              {step.number}
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[44px] xl:text-[54px] font-medium tracking-[-0.03em] leading-[1.2] text-[#0F172A] text-balance">
              {step.title}
            </h2>
            {step.description && (
              <p className="mt-4 md:mt-6 text-[15px] md:text-[17px] xl:text-[19px] font-normal text-[#334155] leading-[1.6] md:leading-[1.7] tracking-tight max-w-2xl text-balance">
                {step.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* NAVIGATION INTERACTION SYSTEM (ARROWS & PILLS) */}
      <div className="absolute bottom-8 md:bottom-12 left-0 right-0 px-6 flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto z-40 gap-4">
        
        {/* Left Control Arrow Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-sm text-[#0F172A] hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Center Progress Capsule Navigation Indicators */}
        <div className="px-6 py-3.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center gap-2.5">
          {storySteps.map((step, idx) => (
            <button
              key={`nav-${step.id}`}
              onClick={() => changeSlide(idx)}
              className="apple-pill-indicator h-2 rounded-full transition-all duration-300 will-change-transform focus:outline-none"
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Right Control Arrow Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === storySteps.length - 1}
          className="p-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-sm text-[#0F172A] hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>
    </div>
  );
}