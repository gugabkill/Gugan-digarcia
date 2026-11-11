"use client"

import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Lock, Phone, Clock } from "lucide-react"
import { waLink } from "@/lib/saude"

const planos = [
  "Amil",
  "Bradesco Saúde",
  "SulAmérica",
  "Unimed",
  "Hapvida / NotreDame",
  "Cassi",
  "GEAP",
  "Saúde Caixa",
  "Outro",
]

const problemas = [
  "Medicamento negado",
  "Cirurgia ou exame negado",
  "Home care negado",
  "Internação negada",
  "Reajuste abusivo",
  "Plano cancelado",
  "Outro",
]

const tipos = ["Individual ou familiar", "Empresarial (CNPJ ou MEI)", "Coletivo por adesão", "Não sei"]

const field =
  "w-full rounded-xl bg-[#0b0b38]/70 border border-[#D2D3D5]/15 px-4 py-3 text-[#D2D3D5] placeholder:text-[#848688] focus:outline-none focus:border-[#D2D3D5]/50 transition-colors"

export function ContatoSaude() {
  const [nome, setNome] = useState("")
  const [plano, setPlano] = useState("")
  const [tipo, setTipo] = useState("")
  const [problema, setProblema] = useState("")
  const [urgente, setUrgente] = useState(false)

  const href = useMemo(() => {
    const linhas = [
      "Olá! Vim pelo site e gostaria de uma análise sobre o meu plano de saúde.",
      nome && `Nome: ${nome}`,
      plano && `Plano: ${plano}`,
      tipo && `Tipo de plano: ${tipo}`,
      problema && `Problema: ${problema}`,
      urgente && "O caso é urgente.",
    ].filter(Boolean)
    return waLink(linhas.join("\n"))
  }, [nome, plano, tipo, problema, urgente])

  return (
    <section id="contato" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background to-[#1a1a5e]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#D2D3D5] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#848688] rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-4 md:mb-6">
              Fale com a gente
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-balance">
              Recebeu uma negativa? Não desista do seu tratamento.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              Conte em poucos passos o que aconteceu. A mensagem já chega pronta no nosso WhatsApp e a análise inicial
              é feita sem compromisso.
            </p>
            <div className="space-y-4 text-[#848688]">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D2D3D5]" /> (61) 99185-0093, WhatsApp e ligações
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D2D3D5]" /> Segunda a sexta, das 9h às 18h
              </div>
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#D2D3D5]" /> Atendimento sigiloso, protegido pela LGPD
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl border border-[#D2D3D5]/15 bg-[#11114E]/70 backdrop-blur-md p-6 md:p-8 shadow-2xl space-y-4"
          >
            <div className="font-serif font-bold text-xl text-[#D2D3D5]">Receba o contato de um advogado</div>
            <input className={field} placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <select className={field} value={plano} onChange={(e) => setPlano(e.target.value)}>
              <option value="">Qual é o seu plano de saúde?</option>
              {planos.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            <select className={field} value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="">Tipo de plano</option>
              {tipos.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            <select className={field} value={problema} onChange={(e) => setProblema(e.target.value)}>
              <option value="">O que aconteceu?</option>
              {problemas.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
            <label className="flex items-center gap-3 text-[#848688] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={urgente}
                onChange={(e) => setUrgente(e.target.checked)}
                className="w-5 h-5 accent-[#D2D3D5]"
              />
              O caso é urgente (internação, cirurgia ou tratamento em curso)
            </label>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-gradient-to-r from-[#D2D3D5] to-[#848688] text-[#11114E] font-bold hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar pelo WhatsApp
            </a>
            <p className="text-xs text-[#848688] text-center">
              Seus dados são usados apenas para o atendimento do seu caso.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
