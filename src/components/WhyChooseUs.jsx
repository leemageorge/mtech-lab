import React from "react";
import { LetterReveal, TextScramble } from "./AnimatedText";
import { motion } from "framer-motion";
import { features } from "../data/data";
const WhyChooseUs = () => {
  return (
    <div className="relative bg-mtech-dark overflow-hidden py-12 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center ">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-mtech-orange text-[10px] uppercase tracking-[0.8em] font-black mb-8"
          >
            <TextScramble text="THE VANTAGE POINT" trigger="view" />
          </motion.div>
          <div className="flex flex-col mb-8">
            <LetterReveal
              text="why choose"
              className="text-5xl md:text-7xl uppercase tracking-tighter font-display font-bold text-white leading-tight"
            />
            <LetterReveal
              text="mtechlab"
              className="text-5xl md:text-7xl text-mtech-orange italic uppercase font-bold tracking-tighter leading-tight"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-lg lg:text-xl font-light leading-relaxed mb-10 text-white/40 "
          >
            We focus on the intersection of raw performance and strategic
            growth, ensuring your digital presence is built to dominate.
          </motion.p>
          <div className="w-full h-0.5 bg-white/10 relative mb-10 ">
            <div className="absolute bg-mtech-orange top-0 left-0 w-24 h-0.5" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/1 hover:bg-white/5 transition-all duration-700"
              >
                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-mtech-orange/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 " />
                <div className="flex items-start gap-6">
                  <div className="mt-1 text-mtech-orange/40 group-hover:text-mtech-orange transition-colors">
                    <feature.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-2">
                      <TextScramble text={feature.name} trigger="hover" />
                    </h3>
                    <p className="text-white/40 text-xs font-light leading-relaxed group-hover:text-white/60 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="uppercase absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.02] font-black text-white pointer-events-none">
        mtech
      </div>
    </div>
  );
};

export default WhyChooseUs;
