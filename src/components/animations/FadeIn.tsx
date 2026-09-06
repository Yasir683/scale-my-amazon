"use client";

import { motion, Variants } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
}


export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: FadeInProps) {


  const variants: Variants = {

    hidden: {
      opacity: 0,

      y:
        direction === "up"
          ? 40
          : direction === "down"
          ? -40
          : 0,

      x:
        direction === "left"
          ? 40
          : direction === "right"
          ? -40
          : 0,
    },


    visible: {
      opacity: 1,

      x: 0,
      y: 0,

      transition: {
        duration: 0.45,
        delay: delay,
        ease: "easeOut",
      },
    },

  };


  return (

    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.25,
      }}
      className={className}
    >

      {children}

    </motion.div>

  );
}