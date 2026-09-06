"use client";

import { motion } from "framer-motion";

export default function MotionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 50,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{
        once: false,
        amount: 0.15,
      }}

      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}

    >

      {children}

    </motion.div>

  );

}