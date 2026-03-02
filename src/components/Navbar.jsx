import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"
import { navLinks } from '../data/data'
import { TextScramble } from './AnimatedText'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {
  const[isMenuOpen , setIsMenuOpen] = useState(false)
  const[isScrolling,setIsScrolling]=useState(false)
   const location = useLocation()
  const pathname = location.pathname

 useEffect(() => {
  const handleScroll = () => {
    setIsScrolling(window.scrollY > 50)
  }

  window.addEventListener("scroll", handleScroll)

  return () => {
    window.removeEventListener("scroll", handleScroll)
  }
}, [])

  
  return (
    <>
    <nav className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${isScrolling ?'py-4':'py-10' }`}>
        <div className='container  mx-auto px-6'>
            <div className={`flex items-center justify-between px-8 py-6 rounded-full border transition-all duration-500 ${isScrolling? "bg-mtech-dark/80 backdrop-blur-2xl border-white/10 shadow-2xl shadow-black/50":"bg-transparent border-transparent"}`}>
                <Link href="/" className='flex items-center gap-3 group relative'>
                <div className='absolute -inset-4 bg-mtech-orange/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100  transition-opacity duration-700 '></div>
                <img src={logo} alt='mtech lab logo'  className='h-28 w-auto invert brightness-0 transition-transform duration-500 relative z-10 group-hover:scale-105 '/>
                </Link>
                <div className='hidden md:flex items-center gap-12'>
                  {
                    navLinks.map((link)=>(
                      <Link to={link.path} key={link.name} 
                      className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all hover:text-mtech-orange ${pathname === link.path ? 'text-mtech-orange' : 'text-white/60 '}`}>
                       <TextScramble text={link.name} trigger="hover" />
                      </Link>
                    ))
                  }
                </div>
                <div className='flex items-center gap-6'>
                  <Link to='/contact' className='hidden lg:flex items-center gap-3 group'>
                  <span className='text-white font-black text-[10px] uppercase tracking-[0.4em]'>Get Started</span>
                  <div className='w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-mtech-orange group-hover:border-mtech-orange transition during-500 ' >
                    <ArrowUpRight size={16} className='text-white'/>
                  </div>
                  </Link>
                  <button onClick={()=>setIsMenuOpen(!isMenuOpen)}
                    className='w-12 h-12 rounded-full bg-white/10 border-white/10 flex items-center justify-center text-white hover:bg-mtech-orange transition-colors'>
                      {isMenuOpen ? <X size={20} /> :<Menu size={20} />}
                    
                  </button>
                </div>
            </div>
        </div>
    </nav>
   <AnimatePresence>
    {isMenuOpen && (
      <motion.div
      initial={{opacity:0,y:-20}}
      animate={{opacity:1,y:0}}
      exit={{opacity:0,y:-20}}
       className='fixed inset-0 z-90 bg-mtech-dark flex flex-col items-center justify-center pt-20 '>
        <div className='absolute top-12 left-1/2 -translate-x-1/2 '>
            <img src={logo} alt='MtechLab' className='h-28 w-auto invert brightness-0 ' />
        </div>
        <div className='flex flex-col items-center gap-8'>
          {
            navLinks.map((link,i)=>(
              <motion.div key={link.name}
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              transition={{delay:i * 0.1}}>
                <Link to={link.path} className='text-5xl md:text-8xl font-display font-black text-white hover:text-mtech-orange transition-colors tracking-tights '>
                {link.name}
                </Link>
              </motion.div>
            ))
          }

        </div>
         <div className="mt-20 flex gap-8">
               <span className="text-white/20 uppercase tracking-[0.5em] text-[10px] font-black">X</span>
               <span className="text-white/20 uppercase tracking-[0.5em] text-[10px] font-black">LI</span>
               <span className="text-white/20 uppercase tracking-[0.5em] text-[10px] font-black">IG</span>
            </div>
      </motion.div>
    )}
   </AnimatePresence>
    </>
    
  )
}

export default Navbar