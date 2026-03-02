import React from 'react'
import { LetterReveal, TextScramble } from './AnimatedText'
import { motion } from 'framer-motion'
import { projects } from '../data/data'
const Portfolio = () => {
  return (
    <div className='relative py-20 bg-mtech-dark overflow-hidden'>
        <div className='flex flex-col md:flex-row items-end justify-between gap-10'>
            <div>
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                className='text-mtech-orange text-[10px] uppercase tracking-[0.8em] font-black mb-6'>
                    <TextScramble text="Case studies" trigger='view'/>
                </motion.div>
                <div className='flex flex-col'>
                    <LetterReveal
                    text="DIGITAL" 
                    className='text-5xl md:text-8xl font-display font-black text-white leading-[0.9] tracking-tighter '/>
                    <LetterReveal
                    text="ARTIFACTS."
                    className='text-5xl md:text-8xl font-display font-black text-mtech-orange italic leading-[0.9] tracking-tighter '/>
                </div>
            </div>
            <motion.div
            initial={{opacity:0,x:20}}
            whileInView={{opacity:1,x:0}}
            className='max-w-md'>
                <p className='text-white/40 font-light leading-relaxed'> A curated collection of high-performance platforms, bespoke identities, and architectural software solutions that define the next generation of business.</p>
            </motion.div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-28'>
           {projects.map((project,index)=>(
                <motion.div key={index}
                initial={{oapcity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:false}}
                transition={{duration: 0.8, delay: index * 0.1}}
                className={`${project.className} group relative rounded-[3rem] overflow-hidden bg-mtech-dark border border-white/10`}>
                <div>
                    <img src={project.image} 
                    alt={project.title}
                    className='w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100 ' />
                    <div className='absolute inset-0 bg-linear-to-t from-mtech-dark via-mtech-dark/40 to-transparent z-10' />
                     <div className='absolute inset-0 z-10 pt-12 flex flex-col'>
                       <div className='flex items-center gap-3 mb-4'>
                            <span className='text-mtech-orange text-[10px] tracking-[0.4em] uppercase font-black'>{project.category}</span>
                            <div className='w-1.5 h-1.5 rounded-full bg-mtech-orange' />
                        
                       </div>
                     </div>
                </div>
                </motion.div>
           ))}
        </div>
    </div>
  )
}

export default Portfolio