import React from "react";
import { LetterReveal, TextScramble } from "./AnimatedText";
import { motion } from "framer-motion";
import { serviceCategories } from "../data/data";

const Services = () => {
  return (
    <div className="relative bg-mtech-dark overflow-hidden  ">
      <div className="flex flex-col items-center text-center gap-10 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-mtech-orange text-[10px] uppercase tracking-[0.6em] font-black "
        >
          <TextScramble text="OUR CAPABILITIES" trigger="view" />
        </motion.div>
        <div className="flex flex-col items-center">
            <LetterReveal
              text="SCALABLE SOLUTIONS"
              className="text-5xl md:text-8xl font-display font-black trxt-white tracking-tighter "/>
          <LetterReveal text="FOR EVERY STAGE."
          className="text-5xl md:text-8xl font-display font-black text-white/20 tracking-tighter italic"
          delay={0.3} />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
        {serviceCategories.map((category,index)=>(
            <motion.div key={index}
            initial={{opacity:0,y:30}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:false}}
            transition={{duration:0.8, delay: index * 0.1}}
            className="group relative p-12 rounded-[3rem] border border-white/5 bg-white/5 hover:bg-white/10 tansition-all duration-700 overflow-hidden">
            <div className={`absolute inset-0 bg-linear-to-br ${category.color} opacity-0 group-hover:opacity:100 transition-opacity duration-1000 blur-3xl`}></div>
            <div className="w-16 h-16 mb-10 flex items-center justify-center bg-white/5 rounded-xl group-hover:border-mtech-orange border border-white/10 transistion-colors duration-500">
                <category.icon className="text-white group-hover:text-mtech-orange transition-colors" size={32}/>
            </div>
            <h3 className="text-3xl font-display font-black text-white mb-6 tracking-tight">
                <TextScramble text={category.title} trigger="hover"/>
            </h3>
            <p className="text-white/40 font-light leading-relaxed mb-10 group-hover:text-white/60 transition-colors ">{category.description}</p>
            <div className="space-y-4">
                {category.items.map((item,i)=>(
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-mtech-orange/30 group-hover:bg-mtech-orange transition-colors" />
                        <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors">{item}</span>
                     
                    </div>
                ))}
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -translate-x-12 -translate-y-12  rotate-45 group-hover:bg-mtech-orange/10 transition-colors duration-700" />

            </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
