"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { X, Quote, ArrowRight } from "lucide-react"
import { WA_SAUDE } from "@/lib/saude"

const situacoes = [
  "O plano negou um medicamento prescrito pelo seu médico, inclusive de alto custo",
  "A cirurgia, o exame ou o procedimento indicado foi recusado ou está parado na autorização",
  "O pedido de home care foi negado, ou as horas de enfermagem foram reduzidas",
  "A internação foi recusada por carência, ou a alta veio antes da hora",
  "A mensalidade subiu muito acima do índice autorizado pela ANS",
  "O plano foi cancelado sem aviso, ou durante um tratamento",
]

export function Situacoes() {
  return (
    <section id="situacoes" className="tema-claro py-16 md:py-24 bg-[#f5f6fa] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 md:mb-14"
        >
          <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-4 md:mb-6">
            Reconhece sua situação?
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-balance max-w-3xl">
            Se você chegou até aqui, talvez:
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            {situacoes.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 py-4 border-b border-border/40 last:border-0 group"
              >
                <span className="mt-0.5 w-7 h-7 rounded-full bg-gradient-to-br from-[#D2D3D5] to-[#848688] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <X className="w-4 h-4 text-[#11114E]" strokeWidth={3} />
                </span>
                <span className="text-base md:text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                  {s}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl p-8 md:p-10 bg-gradient-to-br from-[#1a1a5e] to-[#11114E] border border-[#D2D3D5]/15 shadow-2xl overflow-hidden">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-[#D2D3D5]/10" />
              <p className="relative font-serif text-xl md:text-2xl leading-snug text-[#D2D3D5] mb-4">
                Quando o médico indica o tratamento, não cabe à operadora decidir sozinha o que vai cobrir.
              </p>
              <p className="relative text-[#848688] leading-relaxed mb-8">
                Muitas negativas contrariam a lei e o entendimento dos tribunais e podem ser revistas, inclusive com
                pedido de liminar nos casos urgentes. Muita gente desiste sem saber que tinha esse direito.
              </p>
              <a
                href={WA_SAUDE}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D2D3D5] to-[#848688] text-[#11114E] font-bold rounded-full hover:scale-105 transition-transform"
              >
                Quero analisar meu caso
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
