import React, { useEffect, useState } from "react";
import {  useSpring, useMotionValue } from "framer-motion";
import { motion } from "framer-motion"

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth lag
  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 200 });

  const outerX = useSpring(mouseX, { damping: 30, stiffness: 120 });
  const outerY = useSpring(mouseY, { damping: 30, stiffness: 120 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const hoverCheck = (e) => {
      if (e.target.closest("a, button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hoverCheck);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hoverCheck);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Trailing Glow Background */}
      <motion.div
        className="fixed top-0 left-0 w-50 h-50 rounded-full pointer-events-none z-9998 blur-[300px] hidden md:block"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(255,90,31,0.25) 0%, transparent 70%)",
        }}
      />

      {/* Outer Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-mtech-orange/50 pointer-events-none z-9999 hidden md:block"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(255, 90, 31, 0.1)' : 'transparent',
          backdropFilter: isHovering ? 'blur(2px)' : 'none',
        }}
        // animate={{
        //   boxShadow: isHovering
        //     ? "0 0 30px rgba(255,90,31,0.8)"
        //     : "0 0 15px rgba(255,90,31,0.5)",
        // }}
        transition={{ duration: 0.3 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-mtech-orange rounded-full pointer-events-none z-10000 hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 0.5 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;