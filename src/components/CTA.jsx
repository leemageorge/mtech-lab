import React from "react";
import { motion } from "framer-motion";
import { LetterReveal, MagneticButton, TextScramble } from "./AnimatedText";
import { Rocket } from "lucide-react";
const CTA = () => {
  return (
    <div className="relative bg-mtech-dark overflow-hidden max-w-4xl mx-auto py-10">
      <div className="absolute inset-0 z-0 ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-linear-to-br from-mtech-indigo/20 via-mtech-orange/10 to-mtech-indigo/20 opacity-50 blur-3xl " />
      </div>
      <div className="">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-mtech-orange text-center text-[10px] uppercase tracking-[0.8em] font-black mb-8 "
        >
          <TextScramble text="ignite your growth" trigger="view" />
        </motion.div>
        <div className="flex flex-col mb-10">
          <LetterReveal
            text="let's build your"
            className="text-5xl md:text-8xl uppercase text-white font-black font-display leading-tigh tracking-tighter justify-center"
          />
          <LetterReveal
            text="digital success"
            className="text-5xl md:text-8xl uppercase text-white/20 italic font-black font-display leading-tight tracking-tighter justify-center "
          />
          <LetterReveal
            text="story"
            className="text-5xl md:text-8xl uppercase text-white/20 italic font-black font-display leading-tight tracking-tighter justify-center "
          />
        </div>
        <motion.p
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1 , y:0}}
        viewport={{once:false}}
        transition={{duration: 0.8, delay:0.6}}
        className="text-lg md:text-xl text-white/40 mb-15 leading-relaxed max-w-2xl mx-auto">
            Ready to scale? Partner with MTechLab and transform your business into a high-performance digital ecosystem.
        </motion.p>
        <motion.div 
        initial={{opacity:0, scale:0.09}}
        whileInView={{opacity:1,scale:1}}
        duration={{delay:0.8, duration:0.8}}
        viewport={{once:false}}
        className="flex justify-center">
        <MagneticButton className="relative px-12 py-8 group bg-white rounded-full overflow-hidden transition-all duration-700">
                         <div className="absolute inset-0 bg-mtech-orange translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
            <div className="flex items-center justify-center gap-6 ">
                <span className="text-mtech-dark group-hover:text-white font-black text-xl uppercase tracking-tighter transition-colors duration-500 ">Get free consultation</span>
                <div className="w-12 h-12 bg-mtech-dark rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-500 ">
                    <Rocket size={20} className="text-white group-hover:text-mtech-orange transition-colors duration-500 " />
                </div>
            </div>
        </MagneticButton>
        </motion.div>
      </div>
      </div>

  );
};

export default CTA;
