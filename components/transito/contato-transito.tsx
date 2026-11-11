"use client"

import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import { MessageCircle, Lock, Phone, Clock } from "lucide-react"
import { waLink } from "@/lib/saude"

const assuntos = [
  "Multa de bafômetro (Lei Seca)",
  "Suspensão ou cassação da CNH",
  "Acidente de trânsito",
  "Multa de trânsito",
  "Revisão de financiamento",
  "Busca e apreensão de veículo",
  "Consultoria para frotas",
  "Outro",
]

const field =
  "w-full rounded-xl bg-[#0b0b38]/70 border border-[#D2D3D5]/15 px-4 py-3 text-[#D2D3D5] placeholder:text-[#848688] focus:outline-none focus:border-[#D2D3D5]/50 transition-colors"

export function ContatoTransito({ defaultAssunto = "", title }: { defaultAssunto?: string; title: string }) {
  const [nome, setNome] = useState("")
  const [assunto, setAssunto] = useState(defaultAssunto)
  const [uf, setUf] = useState("")
  const [prazo, setPrazo] = useState(false)

  const href = useMemo(() => {
    const linhas = [
      "Olá! Vim pelo site e gostaria de uma análise do meu caso.",
      nome && `Nome: ${nome}`,
      assunto && `Assunto: ${assunto}`,
      uf && `Cidade/Estado: ${uf}`,
      prazo && "Recebi uma notificação e o prazo está correndo.",
    ].filter(Boolean)
    return waLink(linhas.join("\n"))
  }, [nome, assunto, uf, prazo])

  return (
    <section id="contato" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#11114E] to-[#1a1a5e]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#D2D3D5] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#848688] rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium text-[#D2D3D5] bg-[#D2D3D5]/10 border border-[#D2D3D5]/20">
              Fale com a gente
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#D2D3D5] mb-6 text-balance">{title}</h2>
            <p className="text-[#848688] text-base md:text-lg leading-relaxed mb-8">
              Conte em poucos passos o que aconteceu. A mensagem já chega pronta no nosso WhatsApp e a análise inicial é
              feita sem compromisso.
            </p>
            <div className="space-y-4 text-[#848688]">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D2D3D5]" /> (61) 99185-0093, WhatsApp e ligações
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#D2D3D5]" /> Segunda a sexta, das 9h às 18h
              </div>
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#D2D3D5]" /> Atendimento sigiloso e confidencial
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
            <select className={field} value={assunto} onChange={(e) => setAssunto(e.target.value)}>
              <option value="">Qual é o assunto?</option>
              {assuntos.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
            <input className={field} placeholder="Cidade e estado" value={uf} onChange={(e) => setUf(e.target.value)} />
            <label className="flex items-center gap-3 text-[#848688] cursor-pointer select-none">
              <input type="checkbox" checked={prazo} onChange={(e) => setPrazo(e.target.checked)} className="w-5 h-5 accent-[#D2D3D5]" />
              Recebi uma notificação e o prazo está correndo
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
            <p className="text-xs text-[#848688] text-center">Seus dados são usados apenas para o atendimento do seu caso.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
