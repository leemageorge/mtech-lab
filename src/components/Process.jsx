import React from 'react'
import { LetterReveal, TextScramble } from './AnimatedText'
import { motion } from 'framer-motion'
import { steps } from '../data/data'
const Process = () => {
  
  return (
    <div className='relative bg-mtech-dark py-20 overflow-hidden'>
       <div className='flex flex-col items-center mb-10'>
         <motion.div
         initial ={{opacity:0}}
         whileInView={{opacity:1}}
         className='text-mtech-orange text-[10px] uppercase tracking-[0.8em] font-black mb-6'>
          <TextScramble text="THE ROADMAP" triggle="view" />
         </motion.div>
          <div className='flex flex-col'>
              <LetterReveal text="OUR STRATEGIC"
              className='text-5xl md:text-8xl font-display font-black text-white tracking-tighter justify-center' />
               <LetterReveal text="PROCESS."
              className='text-5xl md:text-8xl font-display font-black text-mtech-orange italic tracking-tighter justify-center' />
          </div>
          </div>
        <div className="relative">
          <div className="absolute top-11 left-0 w-full h-0.5 bg-white/5 hidden lg:block" />
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-11 left-0 h-0.5 bg-linear-to-r from-mtech-orange to-mtech-indigo hidden lg:block shadow-[0_0_10px_rgba(255,90,31,0.5)]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative group pt-10 lg:pt-24"
              >
                {/* Connector Node */}
                <div className="absolute top-0 lg:top-9 left-0 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-mtech-dark border-2 border-white/10 group-hover:border-mtech-orange transition-all duration-500 z-10 hidden lg:block">
                  <div className="absolute inset-0 rounded-full bg-mtech-orange scale-0 group-hover:scale-100 transition-transform duration-500" />
                </div>
                
                <div className="relative p-8 rounded-4xl border border-white/5 bg-white/10 hover:bg-white/10 transition-all duration-700 h-full group">
                  <div className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10 blur-xl`} />
                  
                  <div className="text-white/10 font-display font-black text-6xl mb-8 group-hover:text-mtech-orange transition-colors absolute top-4 right-8">
                    0{index + 1}
                  </div>
                  
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-mtech-orange transition-colors">
                    <step.icon className="text-white" size={20} />
                  </div>
                  
                  <h3 className="text-xl font-display font-black text-white mb-4 tracking-tight">
                    <TextScramble text={step.title} trigger="hover" />
                  </h3>
                  
                  <p className="text-white/40 text-md font-light leading-relaxed group-hover:text-white/60 transition-colors">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
       </div>
    
  )
}

export default Process