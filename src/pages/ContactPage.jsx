import React from "react";
import {
  LetterReveal,
  MagneticButton,
  TextScramble,
} from "../components/AnimatedText";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
const ContactPage = () => {
  return (
    <div className="bg-mtech-dark min-h-screen relative pt-56 mb-20 overflow-hidden">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[10px] text-mtech-orange tracking-[0.8em] font-black uppercase mb-8"
            >
              <TextScramble text="get in touch" />
            </motion.div>
            <div className="flex flex-col mb-12 ">
              <LetterReveal
                text="start"
                className="text-7xl md:text-[100px] uppercase font-display font-black text-white leading-[0.85] tracking-tighter"
              />
              <LetterReveal
                text="the"
                className="text-7xl md:text-[100px] uppercase font-display font-black text-white leading-[0.85] tracking-tighter"
              />
              <LetterReveal
                text="vanguard."
                className="text-6xl md:text-[100px] uppercase italic font-display font-black text-white/20 leading-[0.85] tracking-tighter"
              />
            </div>
            <div className="space-y-12 ">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-mtech-orange transition-colors ">
                  <Mail
                    size={20}
                    className="text-white/20 group-hover:text-mtech-orange transition-colors"
                  />
                </div>
                <div>
                  <h5 className="text-[10px] tracking-widest uppercase font-black text-white/20 mb-1">
                    Email Us
                  </h5>
                  <p className="text-xl text-white font-bold">
                    hello@mtechlab.agency
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-mtech-orange transition-colors ">
                  <Phone
                    size={20}
                    className="text-white/20 group-hover:text-mtech-orange transition-colors"
                  />
                </div>
                <div>
                  <h5 className="text-[10px] tracking-widest uppercase font-black text-white/20 mb-1">
                    call Us
                  </h5>
                  <p className="text-xl text-white font-bold">
                    +1 (888) M-TECH-01
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-mtech-orange transition-colors ">
                  <MapPin
                    size={20}
                    className="text-white/20 group-hover:text-mtech-orange transition-colors"
                  />
                </div>
                <div>
                  <h5 className="text-[10px] tracking-widest uppercase font-black text-white/20 mb-1">
                    Headquarters
                  </h5>
                  <p className="text-xl text-white font-bold">
                    Obsidian Tower, New York
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-20 pt-20 border-t border-white/10 flex items-center gap-8 ">
              <a
                href="#"
                className="text-white/20 hover:text-white transition-colors text-xs font-black uppercase tracking-wides"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-white/20 hover:text-white transition-colors text-xs font-black uppercase tracking-wides"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-white/20 hover:text-white transition-colors text-xs font-black uppercase tracking-wides"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="bg-white/5 border border-white/5 rounded-[3rem] p-12 md:p-16 backdrop-blur-xl relative "
            >
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.4em] font-black uppercase text-white/40 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full border-b border-white/10  bg-white/5 p-4 text-white focus:outline-none focus:border-mtech-orange transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.4em] font-black uppercase text-white/40 ml-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Organization"
                      className="w-full border-b border-white/10  bg-white/5 p-4 text-white focus:outline-none focus:border-mtech-orange transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.4em] font-black uppercase text-white/40 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full border-b border-white/10 bg-white/5 p-4 text-white focus:outline-none focus:border-mtech-orange transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[0.4em] font-black uppercase text-white/40 ml-1">
                      Budget Range
                    </label>
                    <select className="w-full border-b border-white/10 bg-white/5 p-4 text-white focus:outline-none focus:border-mtech-orange transition-colors appearance-none">
                      <option className="bg-mtech-dark">$25k - $50k</option>
                      <option className="bg-mtech-dark">$50k - $100k</option>
                      <option className="bg-mtech-dark">$100k+</option>
                      <option className="bg-mtech-dark">
                        Bespoke Enterprise
                      </option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-[0.4em] font-black uppercase text-white/40 ml-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your vision..."
                    className="w-full resize-none border-b border-white/10 bg-white/5 p-4 text-white focus:outline-none focus:border-mtech-orange transition-colors"
                  />
                </div>
                <div className="w-full flex items-center justify-center gap-6 bg-white py-8 rounded-full transition-all duration-700 ">
                  <MagneticButton className="group">
                    <span className="text-mtech-dark font-black text-xl uppercase tracking-tighter block">
                      initiate Brief
                    </span>
                    <div className="w-10 h-10 rounded-full bg-mtech-dark flex items-center justify-center group-hover:bg-mtech-orange transition-colors ">
                      <Send size={18} className="text-white " />
                    </div>
                  </MagneticButton>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[40%] w-[40%] h-[40%] bg-mtech-indigo/30 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-mtech-orange/20 blur-[180px] rounded-full" />
      </div>
    </div>
  );
};

export default ContactPage;
