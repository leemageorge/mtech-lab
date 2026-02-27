import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

export const TextScramble = ({
  text,
  className = "",
  trigger = "hover",
  once = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const iterationRef = useRef(0);
  const frameRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const startScramble = () => {
    if (isScrambling) return;

    setIsScrambling(true);
    iterationRef.current = 0;

    const scramble = () => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterationRef.current) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iterationRef.current >= text.length) {
        setIsScrambling(false);
        cancelAnimationFrame(frameRef.current);
        return;
      }

      iterationRef.current += 1 / 3;
      frameRef.current = requestAnimationFrame(scramble);
    };

    frameRef.current = requestAnimationFrame(scramble);
  };

  useEffect(() => {
    if (trigger === "view" && isInView) {
      startScramble();
    }

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [isInView, trigger]);

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