import React from "react";
import { LetterReveal, TextScramble } from "../components/AnimatedText";
import { motion } from "framer-motion";
import { highlights, stats } from "../data/data";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="relative bg-mtech-dark overflow-hidden mb-28 lg:mb-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left section */}
        <div className="flex flex-col gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-mtech-orange text-[10px] uppercase tracking-[0.8em] font-bold mb-6"
          >
            <TextScramble text="Who we are" trigger="view" />
          </motion.div>
          <div className="flex flex-col">
            <LetterReveal
              text="BUILDING POWERFUL"
              className="text-4xl md:text-6xl font-display text-white font-black tracking-tighter"
            />

            <div className="flex flex-col">
              <LetterReveal
                text="DIGITAL"
                className="text-4xl md:text-6xl font-display font-black text-mtech-orange italic tracking-tighter"
                delay={0.3}
              />
              <LetterReveal
                text="ECOSYSTEMS."
                className="text-4xl md:text-6xl font-display font-black text-mtech-orange italic tracking-tighter"
                delay={0.3}
              />
            </div>
          </div>
          <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
            MTechLab is a full-service IT and business growth company helping
            startups, SMEs, and enterprises build powerful digital ecosystems.
            We combine innovation with strategic execution to ensure you don’t
            just launch — you scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-4 group"
              >
                <div className="w-8 h-8 bg-mtech-orange/10 rounded-full flex items-center justify-center group-hover:bg-mtech-orange transition-colors duration-300">
                  <CheckCircle className="text-mtech-orange group-hover:text-white transition-colors duration-300" />
                </div>

                <span className="text-white text-[10px] uppercase font-black tracking-[0.3em]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-xl 
                 group hover:bg-white/15 transition-all duration-700"
            >
              <div
                className="absolute top-6 right-6 text-white/20 
                      group-hover:text-mtech-orange/20 transition-colors duration-500">
                <stat.icon size={48} strokeWidth={1} />
              </div>
              <div
                className="text-4xl md:text-5xl font-display font-black 
                      text-white/40 mb-2 
                      group-hover:text-mtech-orange transition-colors duration-500"
              >
                {stat.value}
              </div>
              <div
                className="text-[10px] uppercase tracking-[0.3em] font-black 
                      text-white group-hover:text-white/60 transition-colors duration-500">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
