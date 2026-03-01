import React from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useSpring, useInView, useMotionValue } from "framer-motion";

/* ===========================
   LetterReveal Component
=========================== */
export const LetterReveal = ({
  text,
  className = "",
  delay = 0,
  stagger = 0.02,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <span key={index} className="whitespace-nowrap mr-1 flex">
          {word.split("").map((letter, i) => (
            <motion.span key={i} variants={child} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

/* ===========================
   TextScramble Component
=========================== */



const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export const TextScramble = ({
  text,
  className = "",
  trigger = "hover",
  once = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const iterationRef = useRef(0);
  const frameRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const startScramble = useCallback(() => {
    iterationRef.current = 0;

    const scramble = () => {
      setDisplayText(() =>
        text
          .split("")
          .map((_, index) => {
            if (index < iterationRef.current) {
              return text[index];
            }
            return characters[
              Math.floor(Math.random() * characters.length)
            ];
          })
          .join("")
      );

      if (iterationRef.current >= text.length) {
        cancelAnimationFrame(frameRef.current);
        return;
      }

      iterationRef.current += 1 / 3;
      frameRef.current = requestAnimationFrame(scramble);
    };

    frameRef.current = requestAnimationFrame(scramble);
  }, [text]);

  useEffect(() => {
    if (trigger === "view" && isInView) {
      startScramble();
    }

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [isInView, trigger, startScramble]);

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={() => trigger === "hover" && startScramble()}
    >
      {displayText}
    </span>
  );
};
/* ===========================
   MarqueeText Component
=========================== */

export const MarqueeText = ({
  text,
  className = "",
  reverse = false,
  speed = 20,
}) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div
        animate={{ x: reverse ? [0, 1000] : [0, -1000] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
        <span className="mr-8">{text}</span>
      </motion.div>
    </div>
  );
};

/* ===========================
   Magnetic Button
=========================== */

export const MagneticButton = ({ children, className = "", onClick }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={`inline-block relative ${className}`}
    >
      {children}
    </motion.button>
  );
};