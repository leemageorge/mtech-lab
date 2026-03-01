import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import robot from "../assets/heroImage.png";
import laptop from "../assets/laptop.png";

const RobotAnimation = () => {
  const ref = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Mouse motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 120, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 15 });

  const rotateX = useTransform(smoothY, [-100, 100], [20, -20]);
  const rotateY = useTransform(smoothX, [-100, 100], [-20, 20]);

  const handleMouseMove = (e) => {
    if (!isReady) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = e.clientX - centerX;
    const offsetY = e.clientY - centerY;

    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative flex items-center justify-center h-150 perspective">

      {/* Laptop */}
      <motion.img
        src={laptop}
        alt="Laptop"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-125 z-0"
      />

      {/* Robot Coming Out */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ scale: 0.3, y: 120, opacity: 0 }}
        animate={{ scale: 1, y: -80, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        onAnimationComplete={() => setIsReady(true)}
        style={{
          x: smoothX,
          y: smoothY,
          rotateX,
          rotateY,
        }}
        className="absolute w-72 z-10"
      >
        <img
          src={robot}
          alt="Robot"
          className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
        />
      </motion.div>
    </div>
  );
};

export default RobotAnimation;