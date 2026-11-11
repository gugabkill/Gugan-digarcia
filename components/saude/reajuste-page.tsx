"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, MessageCircle, CheckCircle, Building2, Users, TrendingUp, CalendarClock, Percent, FileCheck2, ArrowRight, HeartPulse } from "lucide-react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/sections/whatsapp-button"
import { Process } from "@/components/sections/process"
import { FAQ } from "@/components/sections/faq"
import { FundoSaude } from "@/components/saude/fundo-saude"
import { Simulador } from "@/components/saude/simulador"
import { SobreSaude } from "@/components/saude/sobre-saude"
import { ContatoSaude } from "@/components/saude/contato-saude"
import { passos } from "@/components/saude/passos"
import { saudeProdutos, waLink } from "@/lib/saude"

const WA = waLink("Olá! Vim pelo site. O meu plano de saúde teve um reajuste muito alto e gostaria de uma análise.")

const menu = [
  { href: "/saude", label: "Direito da Saúde" },
  { href: "#simulador", label: "Simulador" },
  { href: "#falso-coletivo", label: "Falso coletivo" },
  { href: "#reajustes", label: "Outros reajustes" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
]

const sinais = [
  "O plano está no nome do seu CNPJ ou MEI",
  "Só você e a sua família usam o plano",
  "Os reajustes anuais passam de 15% ou 20%",
  "A mensalidade dobrou em poucos anos",
]

const outros = [
  {
    icon: Building2,
    title: "Falso coletivo",
    text: "Plano empresarial que atende só uma família, mas recebe reajustes de plano coletivo, sem o limite da ANS.",
  },
  {
    icon: CalendarClock,
    title: "Faixa etária e 59 anos",
    text: "Depois dos 60 anos, a lei proíbe reajuste pela idade. Antes disso, aumentos desproporcionais podem ser revistos.",
  },
  {
    icon: Percent,
    title: "Sinistralidade",
    text: "Reajuste justificado pelo uso do plano exige transparência. Sem demonstração clara dos cálculos, pode ser contestado.",
  },
  {
    icon: Users,
    title: "Coletivo por adesão",
    text: "Planos por associação ou sindicato com aumentos muito acima da média do mercado, sem justificativa.",
  },
]

const faqs = [
  {
    question: "O que é o falso coletivo?",
    answer:
      "É o plano contratado no nome de uma empresa ou MEI, mas que na prática atende só uma família, como um plano familiar comum. Por estar no CNPJ, ele recebe reajustes de plano coletivo, que não têm o teto da ANS. Os tribunais vêm admitindo, nesses casos, a aplicação dos limites dos planos individuais e familiares.",
  },
  {
    question: "O resultado do simulador é exato?",
    answer:
      "Não. É uma estimativa feita com a mensalidade inicial e a atual. O valor real depende da análise dos boletos, do contrato e de reajustes por faixa etária, e não é garantia de resultado em processo.",
  },
  {
    question: "Posso pedir de volta o que paguei a mais?",
    answer:
      "Sim. Além de reduzir a mensalidade daqui para frente, é possível pedir a devolução do que foi pago a mais nos últimos 3 anos, que é o prazo aceito pelos tribunais para esse tipo de pedido.",
  },
  {
    question: "O plano pode ser cancelado se eu entrar com a ação?",
    answer:
      "Entrar com a ação não autoriza o cancelamento. Se houver risco de cancelamento, é possível pedir ao juiz que o plano seja mantido durante o processo. O importante é manter as mensalidades em dia.",
  },
  {
    question: "Vou continuar com a mesma cobertura?",
    answer:
      "Sim. A ação discute o valor dos reajustes. A rede, a cobertura e as demais condições do contrato continuam as mesmas.",
  },
  {
    question: "Quais documentos preciso?",
    answer:
      "Contrato ou proposta de adesão, carteirinhas, o primeiro boleto (ou um antigo) e os boletos mais recentes, além das cartas de reajuste, se tiver. Se faltar algo, ajudamos a pedir à operadora.",
  },
  {
    question: "Meus dados ficam salvos no simulador?",
    answer:
      "Não. O cálculo é feito no seu próprio aparelho, e nada é enviado ao escritório a não ser que você decida mandar o resultado pelo WhatsApp.",
  },
]

export function ReajustePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header menuItems={menu} whatsappLink={WA} />

      <section id="inicio" className="pt-20 pb-16 relative overflow-hidden min-h-[88vh] flex items-center">
        <FundoSaude />
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-5 md:space-y-7">
              <a href="/saude" className="inline-block">
                <Badge className="bg-gradient-to-r from-primary via-muted to-secondary shimmer text-xs md:text-sm text-white">
                  <HeartPulse className="w-3 h-3 md:w-4 md:h-4 mr-2 text-white" />
                  Reajuste abusivo e falso coletivo
                </Badge>
              </a>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.6rem] font-serif font-bold text-balance leading-tight drop-shadow-2xl">
                O seu plano de saúde
                <span className="text-transparent bg-gradient-to-r from-primary via-muted to-secondary bg-clip-text"> subiu demais?</span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Se o plano está no nome do seu CNPJ ou MEI e atende só a sua família, os reajustes podem estar acima do
                permitido. Simule em 1 minuto quanto você pode ter pago a mais nos últimos 3 anos.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground shadow-xl glow w-full sm:w-auto">
                    <a href="#simulador">
                      <Calculator className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Fazer a simulação grátis
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-card/50 backdrop-blur-sm w-full sm:w-auto">
                    <a href={WA} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Falar com advogado
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-muted/30 to-secondary/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl border border-[#D2D3D5]/15 bg-[#11114E]/70 backdrop-blur-md p-6 md:p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D2D3D5] to-[#848688] flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-[#11114E]" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-xl text-[#D2D3D5]">Sinais de falso coletivo</div>
                    <div className="text-sm text-[#848688]">Se você se identificou, vale simular</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {sinais.map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + i * 0.12 }}
                      className="flex items-start gap-3 rounded-xl border border-[#D2D3D5]/10 bg-[#0b0b38]/60 p-4"
                    >
                      <CheckCircle className="w-5 h-5 text-[#D2D3D5] flex-shrink-0 mt-0.5" />
                      <span className="text-[#D2D3D5]">{s}</span>
                    </motion.div>
                  ))}
                </div>
                <a
                  href="#simulador"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D2D3D5] to-[#848688] py-3 font-bold text-[#11114E] hover:scale-[1.02] transition-transform"
                >
                  Ir para o simulador
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Simulador />

      {/* O que é */}
      <section id="falso-coletivo" className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-4 md:mb-6">Entenda</Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">O que é o falso coletivo empresarial?</h2>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  Muitas famílias são orientadas a contratar o plano no nome de uma empresa ou MEI, porque a mensalidade
                  inicial costuma ser mais barata. O problema aparece depois: por ser um contrato empresarial, os
                  reajustes não seguem o teto que a ANS define todo ano para os planos individuais e familiares.
                </p>
                <p>
                  Na prática, porém, o plano funciona como um plano familiar comum, com poucas pessoas, todas da mesma
                  família. Por isso, os tribunais vêm reconhecendo que esses contratos devem receber a mesma proteção dos
                  planos familiares, com a aplicação dos índices da ANS.
                </p>
                <p>
                  Com a ação, é possível pedir a redução da mensalidade e a devolução do que foi pago a mais nos últimos
                  3 anos, sem perder a cobertura.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-3xl border border-[#D2D3D5]/15 bg-gradient-to-br from-[#1a1a5e] to-[#11114E] p-6 md:p-8 shadow-2xl"
            >
              <div className="font-serif font-bold text-xl text-[#D2D3D5] mb-5">Plano familiar x falso coletivo</div>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div />
                <div className="text-center text-[#848688] uppercase text-xs tracking-wider">Familiar</div>
                <div className="text-center text-[#848688] uppercase text-xs tracking-wider">Falso coletivo</div>
                {[
                  ["Quem usa", "A família", "A família"],
                  ["Nome no contrato", "Pessoa física", "CNPJ ou MEI"],
                  ["Teto da ANS", "Sim", "Não aplicado"],
                  ["Reajustes", "Limitados", "Muito acima"],
                ].map(([a, b, c]) => (
                  <div key={a} className="contents">
                    <div className="py-3 border-t border-[#D2D3D5]/10 text-[#D2D3D5] font-semibold">{a}</div>
                    <div className="py-3 border-t border-[#D2D3D5]/10 text-center text-[#D2D3D5]/90">{b}</div>
                    <div className="py-3 border-t border-[#D2D3D5]/10 text-center text-[#D2D3D5]/90">{c}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outros reajustes */}
      <section id="reajustes" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-4 md:mb-6">Outros casos</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-balance">Reajustes que podem ser abusivos</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {outros.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-border/50 bg-card/50 hover:bg-card/80 p-6 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 via-muted/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <o.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="font-serif font-bold text-lg mb-2">{o.title}</div>
                <div className="text-muted-foreground text-sm leading-relaxed">{o.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process
        id="como-funciona"
        steps={passos}
        title="Como Funciona o Atendimento"
        subtitle="Do primeiro contato até o cumprimento da decisão, você sabe exatamente o que está acontecendo"
        ctaLabel="Iniciar Análise Gratuita"
        ctaHref={WA}
      />

      <section id="documentos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto rounded-3xl border border-[#D2D3D5]/15 bg-[#11114E]/60 p-6 md:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <FileCheck2 className="w-7 h-7 text-[#D2D3D5]" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#D2D3D5]">O que separar para a análise</h2>
            </div>
            <p className="text-[#848688] mb-6">Não tem tudo? Sem problema. A gente ajuda a pedir o que faltar à operadora.</p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Contrato ou proposta de adesão do plano",
                "Carteirinhas de todas as pessoas do plano",
                "Um boleto antigo, de preferência o primeiro",
                "Os boletos mais recentes e as cartas de reajuste",
              ].map((d) => (
                <div key={d} className="flex items-start gap-3 rounded-xl bg-[#0b0b38]/60 border border-[#D2D3D5]/10 p-4">
                  <CheckCircle className="w-5 h-5 text-[#D2D3D5] flex-shrink-0 mt-0.5" />
                  <span className="text-[#D2D3D5]/90">{d}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SobreSaude />

      <FAQ
        id="duvidas"
        faqs={faqs}
        subtitle="Dúvidas comuns sobre reajuste abusivo e falso coletivo"
        backgroundImage="/professional-consultation-meeting-with-documents.jpg"
        ctaHref={WA}
      />

      <ContatoSaude defaultProblema="Reajuste abusivo" title="Reajuste alto no plano? Fale com a gente." />

      <Footer
        description="Di Garcia Advocacia. Atuação especializada em Direito da Saúde, com foco em ações contra planos de saúde, e em Direito de Trânsito. Atendimento em todo o Brasil."
        services={saudeProdutos.map((x) => ({ label: x.title, href: `/saude/${x.slug}` }))}
      />
      <WhatsAppButton whatsappLink={WA} />
    </div>
  )
}
