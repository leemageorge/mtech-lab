import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LetterReveal, TextScramble } from "./AnimatedText";
import { ChevronLeft, ChevronRight, Quote, QuoteIcon } from "lucide-react";
import { reviews } from "../data/data";
const Testimonials = () => {
const[current , setCurrent] = useState(0)
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrent((prev)=>(prev + 1) % reviews.length)
        },6000)
        return () => clearInterval(timer)
    },[])

    const next = () => setCurrent((prev)=> (prev + 1) % reviews.length)
    const prev = () => setCurrent((prev)=> (prev - 1 + reviews.length) % reviews.length)
  return (
    <div className="relative bg-mtech-dark overflow-hidden ">
      <div className="flex flex-col lg:flex-row items-start justify-between mb-20 gap-10 ">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-mtech-orange text-[10px] uppercase tracking-[0.8em] font-black mb-6"
          >
            <TextScramble text="CLIENT VERDICTS" trigger="view" />
          </motion.div>
          <div className="flex flex-col">
            <LetterReveal
              text="TRUSTED BY"
              className="text-5xl md:text-[80px] font-display font-black text-white leading-tight tracking-tighter "
            />
            <LetterReveal
              text="THE ELITE."
              className="text-5xl md:text-[80px] italic font-display font-black text-white/40 leading-tight tracking-tighter "
              delay={0.3}
            />
          </div>
        </div>
        <div className="flex gap-4">
            <button onClick={prev} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white  hover:border-white transition-all group">
                <ChevronLeft size={24} className="text-white group-hover:text-mtech-dark transition-colors "/>
            </button>
              <button onClick={next} className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:border-white transition-all group">
                <ChevronRight  size={24} className="text-white group-hover:text-mtech-dark transition-colors" />
            </button>
        </div>
      </div>
      <div className="relative h-114 md:h-88">
        <AnimatePresence mode="wait">
        <motion.div
         key={current}
          initial={{ opacity:0,scale:0.95,filter: 'blur(10px)'  }}
          animate={{opacity:1,sclale:1,filter:"blur(0px)"}}
          exit={{opacity:0, scale:1.05, filter:"blur(10px)"}}
          transition={{duration:1, ease:[0.16,1,0.3,1]}}
        >
           
            <QuoteIcon size={64} strokeWidth={1} className="text-mtech-orange mb-10 opacity-50" />  
            <p className="text-2xl md:text-4xl font-serif font-light italic ">
               "{ reviews[current].text}"
            </p>
            <div className="flex items-center gap-6 mt-12">
                <div className="w-12 h-0.5 bg-mtech-orange" />
                <div>
                  <h4 className="text-xl font-display font-black text-white tracking-tight ">
                    {reviews[current].author}
                  </h4>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{reviews[current].role}</p>
                </div>
            </div>
        </motion.div> 
        </AnimatePresence>
      </div>
      <div className=" flex gap-4 mb-10">
        {reviews.map((_,i)=>(
          <div key={i}
          className={`h-0.5 transition-all duration-1000 ${current === i ?"w-24 bg-mtech-orange":"w-8 bg-white/10"}`}>
              
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 origin-left -translate-y-1/2 -rotate-90 opacity-[0.1] text-[15vw] font-black text-white pointer-events-none" >
          testimonials
      </div>


    </div>
  );
};

export default Testimonials;
