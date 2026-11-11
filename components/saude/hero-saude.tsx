"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HeartPulse, Phone, Scale, Zap, MapPin, FileSearch, Lock, FileText, ClipboardList, Receipt, Stethoscope } from "lucide-react"
import { WA_SAUDE } from "@/lib/saude"

const pilares = [
  { icon: Zap, title: "Urgência 24h", label: "Plantão pelo WhatsApp" },
  { icon: FileSearch, title: "Análise", label: "Contrato e negativa" },
  { icon: MapPin, title: "Brasil", label: "Atendimento online" },
  { icon: Lock, title: "Sigilo", label: "Dados protegidos" },
]

const documentos = [
  { icon: Stethoscope, title: "Relatório médico", text: "Com a indicação do tratamento e a urgência" },
  { icon: FileText, title: "Negativa do plano", text: "Você tem direito de pedir por escrito" },
  { icon: ClipboardList, title: "Contrato e carteirinha", text: "Tipo de plano e data de início" },
  { icon: Receipt, title: "Boletos recentes", text: "Para conferir reajustes e cobranças" },
]

export function HeroSaude() {
  return (
    <section id="inicio" className="pt-20 pb-16 relative overflow-hidden min-h-screen flex items-center">
      {/* Fundo: azul do site com padrão discreto de cruzes */}
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

      {/* Linha de pulso animada */}
      <svg
        aria-hidden
        className="absolute bottom-2 left-0 w-full h-16 opacity-20"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
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

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5 md:space-y-7"
          >
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <Badge className="bg-gradient-to-r from-primary via-muted to-secondary shimmer text-xs md:text-sm text-white">
                <HeartPulse className="w-3 h-3 md:w-4 md:h-4 mr-2 text-white" />
                Direito da Saúde e Ações contra Planos de Saúde
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.6rem] font-serif font-bold text-balance leading-tight drop-shadow-2xl"
            >
              Seu plano de saúde negou o
              <span className="text-transparent bg-gradient-to-r from-primary via-muted to-secondary bg-clip-text">
                {" "}tratamento que você precisa?
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-xl text-muted-foreground text-pretty leading-relaxed"
            >
              Atuação especializada contra negativas e abusos de planos de saúde: medicamentos, cirurgias, home care,
              internações e reajustes abusivos. Analisamos o seu caso e indicamos o melhor caminho para{" "}
              <span className="text-accent font-semibold">garantir o seu direito</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground transition-all duration-300 shadow-xl glow w-full sm:w-auto"
                >
                  <a href={WA_SAUDE} target="_blank" rel="noopener noreferrer" aria-label="Analisar meu caso pelo WhatsApp">
                    <Scale className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    Analisar meu caso
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-card/50 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                >
                  <a href="tel:+5561991850093">
                    <Phone className="w-4 h-4 mr-2" />
                    (61) 99185-0093
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 py-2 md:py-4"
            >
              {pilares.map((p, index) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 md:p-4 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50"
                >
                  <p.icon className="w-5 h-5 md:w-6 md:h-6 text-accent mx-auto mb-2" />
                  <div className="text-base md:text-lg font-bold text-accent">{p.title}</div>
                  <div className="text-xs md:text-sm text-muted-foreground leading-snug">{p.label}</div>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Cartão: o que separar para a análise */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-muted/30 to-secondary/30 rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl border border-[#D2D3D5]/15 bg-[#11114E]/70 backdrop-blur-md p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D2D3D5] to-[#848688] flex items-center justify-center">
                  <FileSearch className="w-6 h-6 text-[#11114E]" />
                </div>
                <div>
                  <div className="font-serif font-bold text-xl text-[#D2D3D5]">Recebeu uma negativa?</div>
                  <div className="text-sm text-[#848688]">Separe estes documentos para a análise</div>
                </div>
              </div>
              <div className="space-y-3">
                {documentos.map((d, i) => (
                  <motion.div
                    key={d.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + i * 0.15 }}
                    className="flex items-center gap-4 rounded-xl border border-[#D2D3D5]/10 bg-[#0b0b38]/60 p-4 hover:border-[#D2D3D5]/30 transition-colors"
                  >
                    <d.icon className="w-5 h-5 text-[#D2D3D5] flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-[#D2D3D5]">{d.title}</div>
                      <div className="text-sm text-[#848688]">{d.text}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <a
                href={WA_SAUDE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D2D3D5] to-[#848688] py-3 font-bold text-[#11114E] hover:scale-[1.02] transition-transform"
              >
                Enviar documentos pelo WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
