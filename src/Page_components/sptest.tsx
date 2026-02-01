import React, { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { motion, useScroll, useTransform } from "framer-motion";

// Single-file React component that shows a full-screen Spline background
// and scroll-synced, slow slide-down text animations using Framer Motion.
// Tailwind classes are used for layout. Adapt to your project structure.

export default function HeroWithSpline() {
  // reference to the hero section so we can map scroll progress inside it
  const heroRef = useRef(null);

  // Map the scroll progress of the hero section (0 at top of section -> 1 at bottom)
  const { scrollYProgress } = useScroll({ target: heroRef });

  // Map progress to transforms for a layered/parallax effect
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 120]); // px downward
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.9, 0.75]);

  return (
    <div className="relative min-h-screen">
      {/* Spline background (fills the hero viewport). Pointer events turned off so UI stays clickable. */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Spline
          scene="https://prod.spline.design/VQZNhjzawxwZypS0/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Page content - hero section that takes full viewport height */}
      <section
        ref={heroRef}
        className="relative z-10 flex items-center justify-center h-screen px-6 lg:px-20"
        aria-label="Hero"
      >
        <div className="max-w-4xl w-full text-center text-white">
          {/* Main title - slow slide down based on scroll progress */}
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold tracking-tight drop-shadow-md"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            Hey, I am Boucenna!
          </motion.h1>

          {/* Subtitle / description with slightly different translate to create depth */}
          <motion.p
            className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto opacity-90"
            style={{ y: subtitleY }}
          >
            Welcome to my page. Software & Security. I build small apps, solve algorithms
            problems and explore 3D visuals.
          </motion.p>

          {/* Example CTA that also moves a little bit (adds life) */}
          <motion.div
            className="mt-10 flex justify-center"
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 40]) }}
          >
            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 shadow-lg"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </section>

      {/* Below-hero content so there's room to scroll and watch the slow slide animation */}
      <main className="relative z-10 bg-black text-white px-6 lg:px-20">
        <section className="py-24">
          <h2 className="text-3xl font-bold mb-6">Who am I?</h2>
          <p className="max-w-3xl">Boucenna Chiraz a motivated and detail-oriented developer ...</p>
        </section>

        <section className="py-24" id="contact">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p>Put your contact cards / links here.</p>
        </section>
      </main>
    </div>
  );
}
