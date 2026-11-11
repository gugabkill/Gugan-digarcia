"use client"

import { motion } from "framer-motion"
import { Siren, ArrowRight } from "lucide-react"
import { waLink } from "@/lib/saude"

const WA_URGENTE = waLink(
  "Olá! Tenho um caso URGENTE com o plano de saúde (internação, cirurgia ou tratamento em andamento) e preciso de ajuda agora.",
)

export function UrgenciaBanner() {
  return (
    <section className="tema-claro bg-white relative z-20 -mt-10 md:-mt-14 pb-4">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-2xl border border-[#11114E]/10 bg-gradient-to-r from-[#11114E] to-[#2C3056] p-5 md:p-6 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="relative flex-shrink-0">
              <span className="absolute inset-0 rounded-full bg-[#D2D3D5]/30 animate-ping" />
              <span className="relative w-12 h-12 rounded-full bg-[#D2D3D5] flex items-center justify-center">
                <Siren className="w-6 h-6 text-[#11114E]" />
              </span>
            </div>
            <div className="flex-1 text-[#D2D3D5]">
              <div className="font-serif font-bold text-lg md:text-xl">Atendimento urgente 24 horas</div>
              <div className="text-sm md:text-base text-[#D2D3D5]/75">
                Internação negada, cirurgia marcada ou tratamento que não pode parar? Fale com a gente a qualquer hora,
                todos os dias, pelo WhatsApp.
              </div>
            </div>
            <a
              href={WA_URGENTE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D2D3D5] text-[#11114E] font-bold hover:scale-105 transition-transform whitespace-nowrap"
            >
              Falar agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
