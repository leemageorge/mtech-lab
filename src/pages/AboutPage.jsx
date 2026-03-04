import React from "react";
import { LetterReveal, TextScramble } from "../components/AnimatedText";
import { motion } from "framer-motion";

import CTA from "../components/CTA";

import WhyChooseUs from "../components/WhyChooseUs";
import About from "../components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-mtech-dark overflow-hidden pt-56 relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col mb-20 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.8em] font-black mb-8 text-mtech-orange"
          >
            <TextScramble text="THE MANIFESTO" trigger="view" />
          </motion.div>
          <div>
            <LetterReveal
              text="vanguard"
              className="text-7xl md:text-[140px] uppercase font-display font-black text-white tracking-tighter leading-[0.85]"
            />
            <LetterReveal
              text="culture."
              className="text-7xl md:text-[140px] font-display uppercase font-black text-white/20 italic leading-[0.85] -tracking-tighter "
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-white/40 text-xl md:text-2xl mt-12 max-w-2xl font-light tracking-relaxed"
          >
            We are a team of architects, engineers, and designers obsessed with
            the intersection of raw performance and visual prestige.
          </motion.p>
        </div>
        <About />
        <WhyChooseUs />
        <CTA />
      </div>
    </div>
  );
};

export default AboutPage;
