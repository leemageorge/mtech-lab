import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { navLinks, serviceCategories, SocialMediaIcons } from "../data/data";
import { Globe, MapPin, Phone } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-mtech-dark pt-32 pb-12 relative overfolow-hidden border-t border-white/10">
      <div className="container px-6 mx-auto">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none opacity-[0.02]">
          <h2 className="uppercase text-[30vw] font-display font-black tracking-tighter ">
            mtech
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          <div className="lg:col-span-5">
            <Link to="/" className="relative">
              <div className="absolute -inset-4 bg-mtech-orange/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 " />
              <img
                src={logo}
                alt="mtech logo"
                className="h-32 w-auto invert brightness-0 z-10"
              />
            </Link>
            <p className="text-white/40 text-lg font-light leading-relaxed max-w-sm mb-12">
              Architecting the future of software and visual identities with
              precision and luxury. Building digital businesses that scale.
            </p>
            <div className="flex gap-4">
              {SocialMediaIcons.map((icon, index) => {
                const Icon = icon.icon;
                return (
                  <a key={index} href={icon.url} className="group" target="_blank">
                    <div className="border border-white/10 bg-white/5 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-mtech-orange ">
                      <Icon size={18} className="text-white" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-starts-6">
            <h5 className="text-[10px] uppercase tracking-[0.5em] font-black text-white/20 mb-10">Company</h5>
              <div className="flex flex-col gap-6">
                {
                  navLinks.map((link,index)=>(
                    <div key={index}>
                      <Link href={link.path} className="text-white font-bold hover:text-mtech-orange transition-colors text-xs uppercase tracking-widest " >
                        {link.name}
                      </Link>
                    </div>
                  ))
                }
              </div>
          </div>
          <div className="lg:col-span-2">
             <h5 className="text-[10px] uppercase tracking-[0.5em] font-black text-white/20 mb-10">SERVICES</h5>
            <div className="flex flex-col gap-6">
            {
              serviceCategories.map((service,index)=>(
                <div key={index} className="">
                    <span className="text-white/60 text-xs font-light uppercase tracking-widest" >{service.title}</span>
                </div>
              ))
            }
          </div>
          </div>
          <div className="lg:col-span-3">
               <h5 className="text-[10px] uppercase tracking-[0.5em] font-black text-white/20 mb-10">CONTACT</h5>
               <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 group">
                  <MapPin size={16} className="text-mtech-orange"/>
                  <span className="text-sm text-white/60 font-light">Kerala, India</span>
                </div>
                   <div className="flex items-center gap-4 group">
                  <Phone size={16} className="text-mtech-orange"/>
                  <span className="text-sm text-white/60 font-light">+91 9633889848</span>
                </div>
                   <div className="flex items-center gap-4 group">
                  <Globe size={16} className="text-mtech-orange"/>
                  <a href="https://mtechlab.co.in" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 font-light">Kerala, India</a>
                </div>
               </div>
          </div>
        </div>
         <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20">
              © 2026 MTECHLAB AGENCY. ALL RIGHTS RESERVED.
           </div>
               <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] font-black text-white/20">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>

      </div>
      </div>
     
    </footer>
  );
};

export default Footer;
