"use client";

import type { ReactNode } from "react";
import { fadeInUp } from "@/lib/motion";
import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedSection({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={shouldReduceMotion ? undefined : fadeInUp}
    >
      {children}
    </motion.section>
  );
}
