import React from 'react'
import { motion} from "framer-motion"
import { FramerIcon } from 'lucide-react'
import { LetterReveal, TextScramble } from '../components/AnimatedText'
import CTA from '../components/CTA'
import Portfolio from "../components/Portfolio"

const PortfolioPage = () => {
  return (
    <div className='min-h-screen pt-56 relative bg-mtech-dark '>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col mb-20'>
             <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
             className='text-[10px] uppercase tracking-[0.8em] font-black mb-8 text-mtech-orange'>
              <TextScramble text="SELECTED WORKS" trigger="view"/>
            </motion.div>
                        <div>
                          <LetterReveal text="Digital"
                          className='text-7xl md:text-[140px] uppercase font-display font-black text-white tracking-tighter leading-[0.85]'/>
                          <LetterReveal text="Artifacts." 
                          className='text-7xl md:text-[140px] font-display uppercase font-black text-mtech-orange italic leading-[0.85] -tracking-tighter '/>
            
                        </div>
                        <motion.p 
                        initial={{opacity:0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{delay:1, duration:1}}
                        className='text-white/40 text-xl md:text-2xl mt-12 max-w-2xl font-light tracking-relaxed'>
                        A curated collection of high-performance platforms, bespoke identities, and architectural software solutions.
                        </motion.p>
        </div>
        <div className='absolute top-1/2 right-[10%] w-[60%] h-full -translate-y-1/2 opacity-10 blur-[100px] pointer-events-none'>
          <div className='w-full h-full bg-linear-to-br  from-mtech-orange via bg-mtech-indigo to-transparent rounded-full  animate-pulse' />
        </div>
        <Portfolio />
        <CTA />

      </div>
    </div>
  )
}

export default PortfolioPage