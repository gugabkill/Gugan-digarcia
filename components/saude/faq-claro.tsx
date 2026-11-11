"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react"

type Faq = { question: string; answer: string }

export function FaqClaro({
  faqs,
  id = "duvidas",
  subtitle,
  ctaHref,
}: {
  faqs: Faq[]
  id?: string
  subtitle: string
  ctaHref: string
}) {
  const [aberta, setAberta] = useState<number | null>(0)

  return (
    <section id={id} className="tema-claro bg-[#f5f6fa] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <span className="inline-flex items-center gap-2 uppercase tracking-[0.25em] text-xs text-[#5b5f7a]">
              <HelpCircle className="w-4 h-4" /> Tire suas dúvidas
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#11114E] mt-4 mb-4">Perguntas frequentes</h2>
            <p className="text-[#5b5f7a] text-lg mb-8">{subtitle}</p>
            <div className="rounded-2xl bg-white p-6 shadow-[0_20px_60px_-25px_rgba(17,17,78,0.3)]">
              <div className="font-serif font-bold text-lg text-[#11114E] mb-2">Não encontrou a sua resposta?</div>
              <p className="text-[#5b5f7a] text-sm mb-5">Fale com a gente e tire as suas dúvidas sem compromisso.</p>
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#11114E] to-[#2C3056] text-white font-bold hover:scale-105 transition-transform"
              >
                Falar com especialista
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-3">
            {faqs.map((f, i) => {
              const open = aberta === i
              return (
                <motion.div
                  key={f.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`rounded-2xl bg-white border transition-colors ${open ? "border-[#11114E]/25" : "border-[#11114E]/10"}`}
                >
                  <button
                    onClick={() => setAberta(open ? null : i)}
                    className="w-full text-left flex items-start justify-between gap-4 p-5 md:p-6"
                  >
                    <span className="font-serif font-bold text-base md:text-lg text-[#11114E]">{f.question}</span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${open ? "bg-[#11114E] text-white" : "bg-[#11114E]/5 text-[#11114E]"}`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 md:px-6 pb-6 text-[#5b5f7a] leading-relaxed">{f.answer}</p>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
