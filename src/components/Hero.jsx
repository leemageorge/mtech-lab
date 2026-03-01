import React from "react";
import RobotAnimation from "./RobotAnimation";
import { LetterReveal, MagneticButton } from "./AnimatedText";
import { easeInOut, motion } from "framer-motion";
import { Phone, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="realtive flex items-center pt-24 overflow-hidden bg-linear-to-br from-mtech-dark via-[050510] to-[#0A0A20] ">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12">
        <div className="flex flex-col mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 mb-8 w-fit ">
              <div className="w-1.5 h-1.5 rounded-full bg-mtech-orange animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                Building Digital Businesses That Scale
              </span>
            </div>
            <div>
              <LetterReveal
                text="TRANSFORMING IDEAS"
                className="text-5xl md:text-7xl xl:text-8xl leading-[0.9] font-bold text-white tracking-tighter font-display"
              />
              <LetterReveal
                text="INTO SCALABLE"
                className="text-5xl md:text-7xl xl:text-8xl leading-[0.9] font-bold text-white/20 italic tracking-tighter font-display"
                delay={0.3}
              />
              <LetterReveal
                text="DIGITAL BUSINESSES"
                className="text-5xl md:text-7xl xl:text-8xl leading-[0.9] font-bold font-display text-white tracking-tighter "
                delay={0.6}
              />
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            viewport={{ once: false }}
            className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-xl mt-12 mb-12"
          >
            MTechLab delivers technology, strategy, and marketing solutions that
            drive measurable growth.
          </motion.p>
          <div className="flex flex-wrap gap-6">
            <Link to="/">
              <MagneticButton className="px-8 py-5 bg-mtech-orange rounded-full flex items-center gap-3 group">
                <span className="text-white font-black uppercase tracking-widest text-xs">
                  Start Your Project
                </span>
                <Rocket
                  size={18}
                  className="text-white group hover:translate-x-1 group-hover:translate-y-1 transition-transform "
                />
              </MagneticButton>
            </Link>
            <Link to="tel:+919633889848">
              <MagneticButton className="px-8 py-5 bg-white/15 border border-white/15 rounded-full flex items-center gap-3 group">
                <span className="text-white font-black uppercase tracking-widest text-xs">
                  Book Free Consultation
                </span>
                <Phone
                  size={18}
                  className="text-white group hover:translate-x-1 group-hover:translate-y-1 transition-transform "
                />
              </MagneticButton>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center relative">
          <div className="absolute inset-0 bg-linear-to-br from-mtech-indigo/20 to-mtech-orange/20 blur-3xl rounded-full animate-pulse-slow" />
          <RobotAnimation />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: easeInOut }}
            className="absolute top-10 right-20 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 z-20 px-2 py-3"
          >
            <div className="text-[10px] text-mtech-orange font-black uppercase tracking-widest mb-1">
              Scale Up
            </div>
            <div className="text-2xl font-display font-black text-white">
              +240
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-20 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 z-20 px-2 py-3"
          >
            <div className="text-[10px] text-mtech-orange font-black uppercase tracking-widest mb-1">
              Performance
            </div>
            <div className="text-2xl font-display font-black text-white">
              98%
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
