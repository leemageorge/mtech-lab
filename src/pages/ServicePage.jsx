import React from 'react'
import { LetterReveal, TextScramble } from '../components/AnimatedText'
import { motion } from "framer-motion"
import Services from "../components/Services"
import Process from "../components/Process"
import CTA from "../components/CTA"
const ServicePage = () => {
  return (
    <div className='min-h-screen bg-mtech-dark overflow-hidden pt-56 relative'>
      <div className='container px-6 mx-auto'>
        <div className='flex flex-col mb-20 '>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
             className='text-[10px] uppercase tracking-[0.8em] font-black mb-8 text-mtech-orange'>
              <TextScramble text="OUR CAPABILITIES" trigger="view"/>
            </motion.div>
            <div>
              <LetterReveal text="full-stack"
              className='text-7xl md:text-[140px] uppercase font-display font-black text-white tracking-tighter leading-[0.85]'/>
              <LetterReveal text="excellence" 
              className='text-7xl md:text-[140px] font-display uppercase font-black text-white/20 italic leading-[0.85] -tracking-tighter '/>

            </div>
            <motion.p 
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{delay:1, duration:1}}
            className='text-white/40 text-xl md:text-2xl mt-12 max-w-2xl font-light tracking-relaxed'>
              From architectural planning to military-grade deployment, we provide a full spectrum of high-performance digital services.
            </motion.p>
        </div>
        <Services />
        <Process />
        </div>
        <div className='border-t  bg-white/2 border-white/10 py-20'>
           <div className='container px-6 mx-auto'>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
                <div className='flex flex-col gap-6'>
                  <h4 className='text-white font-black uppercase tracking-widest text-xs '>Security First</h4>
                  <p className='text-white/40 font-light leading-relaxed'>Every line of code is audited for security. We build systems that are as resilient as they are beautiful.</p>
                </div>
                   <div className='flex flex-col gap-6'>
                  <h4 className='text-white font-black uppercase tracking-widest text-xs '>Performance Driven</h4>
                  <p className='text-white/40 font-light leading-relaxed'>We optimize for the sub-second world. Milliseconds matter, and we save them wherever possible.</p>
                </div>
                  <div className='flex flex-col gap-6'>
                  <h4 className='text-white font-black uppercase tracking-widest text-xs '>User Centric</h4>
                  <p className='text-white/40 font-light leading-relaxed'>Complex functionality hidden behind intuitive, luxury interfaces. Simple to use, impossible to ignore.</p>
                </div>
            </div>
            <div className='mt-20 border-t border-white/10'>
              <CTA />
            </div>
           </div>
        </div>
      </div>
      
 
  )
}

export default ServicePage
