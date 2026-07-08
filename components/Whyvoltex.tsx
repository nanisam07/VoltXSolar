"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
    title: "Why homeowners choose VoltX.",
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        const textScenes = gsap.utils.toArray<HTMLElement>(".apple-text-scene");
        const imageContainers = gsap.utils.toArray<HTMLElement>(".apple-img-container");
        const imageAssets = gsap.utils.toArray<HTMLElement>(".apple-img-asset");
        const pillIndicators = gsap.utils.toArray<HTMLElement>(".apple-pill-indicator");

        // Universal layout initial states
        gsap.set(textScenes, { opacity: 0, y: 40, filter: "blur(10px)", pointerEvents: "none" });
        gsap.set(imageContainers, { opacity: 0, visibility: "hidden" });
        gsap.set(imageAssets, { scale: 1.1 });
        gsap.set(pillIndicators, { width: "8px", backgroundColor: "rgba(15, 23, 42, 0.2)" });

        // Force launch Step 1 cleanly
        gsap.set(textScenes[0], { opacity: 1, y: 0, filter: "blur(0px)", pointerEvents: "auto" });
        gsap.set(imageContainers[0], { opacity: 1, visibility: "visible" });
        gsap.set(imageAssets[0], { scale: 1 });
        gsap.set(pillIndicators[0], { width: "28px", backgroundColor: "#0F172A" });

        const totalScenes = storySteps.length;

        // Linear pinned animation timeline sequence
        const masterTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: scrollTrackRef.current,
            start: "top top",
            end: "+=5000",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
          },
        });

        // Exact sequential transition maps running step-by-step
        for (let i = 0; i < totalScenes - 1; i++) {
          const timeOffset = i * 2; 

          masterTimeline
            // Outbound exit transitions
            .to(textScenes[i], { opacity: 0, y: -40, filter: "blur(10px)", duration: 0.6, ease: "power2.inOut" }, timeOffset)
            .to(imageAssets[i], { scale: 0.95, duration: 0.6, ease: "power2.inOut" }, timeOffset)
            .to(imageContainers[i], { opacity: 0, duration: 0.6, ease: "power2.inOut" }, timeOffset)
            .to(pillIndicators[i], { width: "8px", backgroundColor: "rgba(15, 23, 42, 0.2)", duration: 0.4 }, timeOffset)
            
            // DOM visibility switch toggles
            .set(imageContainers[i], { visibility: "hidden" }, timeOffset + 0.6)
            .set(imageContainers[i + 1], { visibility: "visible" }, timeOffset + 0.6)

            // Inbound entry transitions
            .to(imageContainers[i + 1], { opacity: 1, duration: 0.6, ease: "power2.inOut" }, timeOffset + 0.6)
            .to(imageAssets[i + 1], { scale: 1, duration: 0.7, ease: "power2.out" }, timeOffset + 0.6)
            .to(textScenes[i + 1], { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.6, ease: "power2.out", pointerEvents: "auto" }, timeOffset + 0.7)
            .to(pillIndicators[i + 1], { width: "28px", backgroundColor: "#0F172A", duration: 0.4 }, timeOffset + 0.7);
        }

        // Add a small final timeline hold to let Slide 5 rest comfortably on scroll complete
        masterTimeline.to({}, { duration: 1.5 });

      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-[#FAFAFA] text-[#0F172A] antialiased relative">
      
      {/* Structural Minimalist Grid Background Mesh */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] opacity-[0.04] pointer-events-none" />

      {/* DESKTOP SCROLL SEQUENCER CANVAS CONTAINER */}
      <div ref={scrollTrackRef} className="hidden lg:block relative w-full">
        <div className="sticky top-0 left-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* BACKGROUND PARALLAX LAYER - Now fully visible with un-muted assets */}
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
                  {/* Subtle edge vignette mapping to frame the display beautifully */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA]/40 via-transparent to-[#FAFAFA]/20 mix-blend-multiply" />
                </div>
              </div>
            ))}
          </div>

          {/* TYPOGRAPHIC OVERLAY SYSTEM WITH FROSTED BACKDROP BLUR SHIELD */}
          <div className="relative z-20 w-full max-w-5xl px-8 text-center flex items-center justify-center h-full">
            {storySteps.map((step) => (
              <div
                key={`text-${step.id}`}
                className="apple-text-scene absolute max-w-3xl flex flex-col items-center will-change-transform px-12 py-10 rounded-3xl bg-white/60 backdrop-blur-2xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
              >
                <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#475569] mb-5 block font-bold">
                  {step.number}
                </span>
                <h2 className="text-[44px] xl:text-[54px] 2xl:text-[64px] font-medium tracking-[-0.03em] leading-[1.2] text-[#0F172A] text-balance">
                  {step.title}
                </h2>
                {step.description && (
                  <p className="mt-6 text-[17px] xl:text-[19px] font-normal text-[#334155] leading-[1.7] tracking-tight max-w-2xl text-balance">
                    {step.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* FLOATING CAPSULE NAVIGATION PILL OVERLAY */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-6 py-3.5 rounded-full bg-white/80 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center gap-2.5 z-40">
            {storySteps.map((step) => (
              <div
                key={`nav-${step.id}`}
                className="apple-pill-indicator h-2 rounded-full transition-all duration-300 will-change-transform"
              />
            ))}
          </div>

        </div>
      </div>

      {/* MOBILE INTERACTION RESPONSIVE LAYOUT */}
      <div className="block lg:hidden w-full px-6 py-24 space-y-32 relative z-10">
        {storySteps.map((step) => (
          <div key={`mobile-${step.id}`} className="w-full flex flex-col">
            <div className="relative w-full aspect-[4/3] bg-[#E2E8F0] overflow-hidden mb-8 rounded-2xl shadow-sm">
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#64748B] mb-3 font-semibold">
              {step.number}
            </span>
            <h2 className="text-3xl sm:text-4xl font-light tracking-[-0.02em] leading-[1.2] text-[#0F172A] max-w-xl">
              {step.title}
            </h2>
            {step.description && (
              <p className="mt-4 text-base font-light text-[#64748B] leading-[1.7]">
                {step.description}
              </p>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}