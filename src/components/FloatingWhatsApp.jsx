import React from 'react'
import { Link } from 'react-router-dom'
import whatsapp from "../assets/whatsapp.png"
import { motion } from 'framer-motion'

const FloatingWhatsApp = () => {
  return (

      <motion.div className="fixed bottom-2 right-5 z-50 "
      initial={{scale:0}}
      animate={{scale:[0.8,1,0.8]}}
      transition={{duration:1, repeat:Infinity, ease:"easeInOut"}}
      viewport={{once:false}}>
        
        <Link to="https://wa.me/+919633889848" target='_blank' >
        <img src={whatsapp} alt="whatsapp" width={74} height={74} className='' />
      </Link>
      </motion.div>
  
  )
}

export default FloatingWhatsApp