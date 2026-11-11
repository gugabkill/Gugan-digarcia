"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle2 } from "lucide-react"

const linhas = [
  {
    situacao: "Medicamento negado",
    abuso: "Recusar o remédio prescrito apenas por não estar no rol da ANS, quando a doença tem cobertura.",
    agora: "Peça a negativa por escrito e guarde a receita e o relatório médico.",
  },
  {
    situacao: "Cirurgia ou exame negado",
    abuso: "Recusar o procedimento indicado ou deixar a autorização parada além dos prazos máximos da ANS.",
    agora: "Anote o protocolo do pedido e guarde a resposta da operadora.",
  },
  {
    situacao: "Home care negado",
    abuso: "Negar a internação domiciliar que o médico indicou no lugar da internação hospitalar.",
    agora: "Peça ao médico um relatório detalhado explicando a necessidade.",
  },
  {
    situacao: "Reajuste muito alto",
    abuso: "Aplicar aumento sem justificativa, ou tratar como empresarial um plano que atende só uma família.",
    agora: "Junte os boletos e o histórico de reajustes dos últimos anos.",
  },
  {
    situacao: "Plano cancelado",
    abuso: "Cancelar o contrato sem aviso prévio, ou durante um tratamento em andamento.",
    agora: "Guarde a comunicação recebida e mantenha os pagamentos em dia.",
  },
]

export function QuandoProcurar() {
  return (
    <section id="quando-procurar" className="py-16 md:py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-4 md:mb-6">
            Guia rápido
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 text-balance">
            Quando procurar um advogado?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Veja o que pode ser abusivo em cada situação e o que fazer agora, antes mesmo de falar com a gente.
          </p>
        </motion.div>

        {/* Cabeçalho da tabela (desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-6 px-6 pb-3 text-xs uppercase tracking-widest text-[#848688]">
          <div className="col-span-3">Situação</div>
          <div className="col-span-5">O que pode ser abusivo</div>
          <div className="col-span-4">O que fazer agora</div>
        </div>

        <div className="space-y-3">
          {linhas.map((l, i) => (
            <motion.div
              key={l.situacao}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid md:grid-cols-12 gap-3 md:gap-6 rounded-2xl border border-[#D2D3D5]/10 bg-[#11114E]/50 p-5 md:p-6 hover:border-[#D2D3D5]/30 transition-colors"
            >
              <div className="md:col-span-3 font-serif font-bold text-lg text-[#D2D3D5]">{l.situacao}</div>
              <div className="md:col-span-5 flex gap-3 text-[#848688]">
                <AlertTriangle className="w-5 h-5 text-[#D2D3D5]/70 flex-shrink-0 mt-0.5" />
                <span>{l.abuso}</span>
              </div>
              <div className="md:col-span-4 flex gap-3 text-[#D2D3D5]/90">
                <CheckCircle2 className="w-5 h-5 text-[#D2D3D5] flex-shrink-0 mt-0.5" />
                <span>{l.agora}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
