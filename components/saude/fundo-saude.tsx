"use client"

import { motion } from "framer-motion"

/** Fundo do topo das páginas de saúde: azul do site, cruzes discretas, brilho e linha de pulso. */
export function FundoSaude() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b38] via-background to-[#1a1a5e]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M26 20h4v6h6v4h-6v6h-4v-6h-6v-4h6z' fill='%23D2D3D5'/%3E%3C/svg%3E\")",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-[-10%] w-[640px] h-[640px] rounded-full bg-[#848688]/20 blur-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <svg aria-hidden className="absolute bottom-2 left-0 w-full h-16 opacity-20" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <motion.path
          d="M0 50 H420 L450 50 L470 20 L495 85 L520 10 L545 70 L565 50 H1200"
          fill="none"
          stroke="#D2D3D5"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.4 }}
        />
      </svg>
    </>
  )
}
