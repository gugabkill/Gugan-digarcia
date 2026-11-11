"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Scale,
  Phone,
  Award,
  Gavel,
  MapPin,
  Landmark,
  FileCheck2,
  ArrowRight,
  AlertTriangle,
  Search,
  TimerReset,
} from "lucide-react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/sections/whatsapp-button"
import { Process } from "@/components/sections/process"
import { FAQ } from "@/components/sections/faq"
import { Testimonials } from "@/components/sections/testimonials"
import { AdvogadoResponsavel } from "@/components/sections/advogado-responsavel"
import { ContatoTransito } from "@/components/transito/contato-transito"
import { transitoProdutos, transitoMenu, transitoLinks, produtoTransitoWa } from "@/lib/transito-produtos"

const badge =
  "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium text-[#D2D3D5] bg-[#D2D3D5]/10 border border-[#D2D3D5]/20"

export function ProdutoTransito({ slug }: { slug: string }) {
  const p = transitoProdutos[slug]
  const wa = produtoTransitoWa(p)

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header menuItems={transitoMenu} whatsappLink={wa} />

      {/* Topo */}
      <section id="inicio" className="pt-20 pb-20 relative overflow-hidden min-h-[92vh] flex items-center">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${p.imagem}')` }}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b38] via-[#11114E]/92 to-[#11114E]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-[#0b0b38]/60" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect x='37' y='8' width='6' height='24' rx='2' fill='%23D2D3D5'/%3E%3Crect x='37' y='48' width='6' height='24' rx='2' fill='%23D2D3D5'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-5 md:space-y-7">
              <a href="/transito" className={badge}>
                <Gavel className="w-4 h-4" />
                {p.badge}
              </a>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.6rem] font-serif font-bold text-balance leading-tight text-[#D2D3D5] drop-shadow-2xl">
                {p.h1}
                <span className="text-transparent bg-gradient-to-r from-[#ffffff] via-[#D2D3D5] to-[#848688] bg-clip-text"> {p.h1Destaque}</span>
              </h1>
              <p className="text-base md:text-xl text-[#D2D3D5]/75 text-pretty leading-relaxed">{p.subtitulo}</p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" className="bg-gradient-to-r from-[#D2D3D5] to-[#848688] text-[#11114E] font-bold shadow-xl w-full sm:w-auto">
                    <a href={wa} target="_blank" rel="noopener noreferrer">
                      <Scale className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                      Analisar meu caso
                    </a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild size="lg" variant="outline" className="border-[#D2D3D5]/50 text-[#D2D3D5] hover:bg-[#D2D3D5]/10 bg-transparent w-full sm:w-auto">
                    <a href="tel:+5561991850093">
                      <Phone className="w-4 h-4 mr-2" />
                      (61) 99185-0093
                    </a>
                  </Button>
                </motion.div>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-[#D2D3D5]/70">
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#D2D3D5]" /> OAB/DF 79.271
                </span>
                <span className="flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-[#D2D3D5]" /> Vice-Presidente da Comissão de Direito de Trânsito, OAB Águas Claras
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D2D3D5]" /> Atendimento em todo o Brasil
                </span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D2D3D5]/20 via-[#848688]/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl border border-[#D2D3D5]/15 bg-[#11114E]/75 backdrop-blur-md p-6 md:p-8 shadow-2xl">
                <div className="font-serif font-bold text-xl md:text-2xl text-[#D2D3D5] mb-1">Procure ajuda se:</div>
                <div className="text-sm text-[#848688] mb-5">Basta uma dessas situações para valer a análise</div>
                <div className="space-y-3">
                  {p.agirSe.map((d, i) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + i * 0.12 }}
                      className="flex items-start gap-3 rounded-xl border border-[#D2D3D5]/10 bg-[#0b0b38]/60 p-4"
                    >
                      <CheckCircle className="w-5 h-5 text-[#D2D3D5] flex-shrink-0 mt-0.5" />
                      <span className="text-[#D2D3D5]">{d}</span>
                    </motion.div>
                  ))}
                </div>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D2D3D5] to-[#848688] py-3 font-bold text-[#11114E] hover:scale-[1.02] transition-transform"
                >
                  Quero que analisem o meu caso
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faixa de prazo */}
      <section className="relative z-20 -mt-10 md:-mt-14 pb-4">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-gradient-to-r from-[#D2D3D5] to-[#a9abae] p-5 md:p-6 shadow-2xl"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <span className="relative flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-[#11114E]/30 animate-ping" />
                <span className="relative w-12 h-12 rounded-full bg-[#11114E] flex items-center justify-center">
                  <TimerReset className="w-6 h-6 text-[#D2D3D5]" />
                </span>
              </span>
              <div className="flex-1 text-[#11114E]">
                <div className="font-serif font-bold text-lg md:text-xl">Os prazos de defesa são curtos</div>
                <div className="text-sm md:text-base text-[#11114E]/80">
                  Recebeu uma notificação? Fale com a gente o quanto antes para não perder nenhuma oportunidade de defesa.
                </div>
              </div>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#11114E] text-[#D2D3D5] font-bold hover:scale-105 transition-transform whitespace-nowrap"
              >
                Falar agora
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Casos */}
      <section id="casos" className="scroll-mt-24 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D2D3D5]/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <span className={`${badge} mb-5`}>Atuação</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#D2D3D5] text-balance">{p.casosTitulo}</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {p.casos.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-[#D2D3D5]/10 bg-[#1a1a5e]/40 hover:bg-[#1a1a5e]/70 hover:border-[#D2D3D5]/25 p-6 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D2D3D5] to-[#848688] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <c.icon className="w-7 h-7 text-[#11114E]" />
                </div>
                <div className="font-serif font-bold text-lg text-[#D2D3D5] mb-1">{c.title}</div>
                <div className="text-[#848688] text-sm leading-relaxed">{c.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quando procurar */}
      <section id="quando-procurar" className="scroll-mt-24 py-16 md:py-24 bg-[#1a1a5e]/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-3">
              <span className={`${badge} mb-5`}>Quando procurar</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#D2D3D5] mb-8 text-balance">
                Quando você deve procurar ajuda jurídica?
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {p.quandoProcurar.map((q, i) => (
                  <motion.div
                    key={q}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-start gap-3 rounded-xl border border-[#D2D3D5]/10 bg-[#11114E]/60 p-4"
                  >
                    <AlertTriangle className="w-5 h-5 text-[#D2D3D5]/80 flex-shrink-0 mt-0.5" />
                    <span className="text-[#D2D3D5]/90 text-sm md:text-base">{q}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-[#D2D3D5] to-[#a9abae] p-6 md:p-8 shadow-2xl text-[#11114E]"
            >
              <div className="flex items-center gap-3 mb-5">
                <Search className="w-6 h-6" />
                <div className="font-serif font-bold text-xl">{p.analisamosTitulo}</div>
              </div>
              <div className="space-y-3">
                {p.analisamos.map((a) => (
                  <div key={a} className="flex items-start gap-3 border-b border-[#11114E]/10 pb-3 last:border-0 last:pb-0">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{a}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destaque (penalidades, danos, prazos...) */}
      <section id={p.destaque.id} className="scroll-mt-24 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <span className={`${badge} mb-5`}>{p.destaque.badge}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#D2D3D5] text-balance">{p.destaque.titulo}</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {p.destaque.cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl border border-[#D2D3D5]/15 bg-gradient-to-br from-[#1a1a5e] to-[#11114E] p-7 overflow-hidden"
              >
                <span className="absolute -top-4 -right-2 font-serif font-bold text-8xl text-[#D2D3D5]/5">{i + 1}</span>
                <div className="font-serif font-bold text-2xl text-[#D2D3D5] mb-4">{c.title}</div>
                <ul className="space-y-3">
                  {c.itens.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[#D2D3D5]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D2D3D5] mt-2.5 flex-shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entenda + lei */}
      <section id="entenda" className="scroll-mt-24 py-16 md:py-24 bg-[#1a1a5e]/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-3">
              <span className={`${badge} mb-5`}>Seus direitos</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#D2D3D5] mb-6 text-balance">{p.entendaTitulo}</h2>
              <div className="space-y-4 text-[#D2D3D5]/75 text-base md:text-lg leading-relaxed">
                {p.entenda.map((t) => (
                  <p key={t.slice(0, 30)}>{t}</p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-2 rounded-2xl bg-[#0b0b38]/70 border border-[#D2D3D5]/15 p-6 md:p-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-5">
                <Landmark className="w-6 h-6 text-[#D2D3D5]" />
                <div className="font-serif font-bold text-xl text-[#D2D3D5]">O que diz a lei</div>
              </div>
              <div className="space-y-4">
                {p.baseLegal.map((b) => (
                  <div key={b.title} className="border-l-2 border-[#D2D3D5]/40 pl-4">
                    <div className="font-semibold text-[#D2D3D5]">{b.title}</div>
                    <div className="text-sm text-[#848688] leading-relaxed">{b.text}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Process id="como-funciona" ctaHref={wa} ctaLabel="Iniciar Análise Gratuita" />

      {/* Documentos */}
      <section id="documentos" className="scroll-mt-24 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto rounded-3xl border border-[#D2D3D5]/15 bg-[#1a1a5e]/40 p-6 md:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <FileCheck2 className="w-7 h-7 text-[#D2D3D5]" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#D2D3D5]">O que separar para a análise</h2>
            </div>
            <p className="text-[#848688] mb-6">Não tem tudo? Sem problema. Comece pelo que tiver em mãos e a gente orienta o resto.</p>
            <div className="grid md:grid-cols-2 gap-3">
              {p.documentos.map((d) => (
                <div key={d} className="flex items-start gap-3 rounded-xl bg-[#0b0b38]/60 border border-[#D2D3D5]/10 p-4">
                  <CheckCircle className="w-5 h-5 text-[#D2D3D5] flex-shrink-0 mt-0.5" />
                  <span className="text-[#D2D3D5]/90">{d}</span>
                </div>
              ))}
            </div>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D2D3D5] to-[#848688] text-[#11114E] font-bold rounded-full hover:scale-105 transition-transform"
            >
              Enviar documentos pelo WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <AdvogadoResponsavel textoServico={p.textoAdvogado} />

      <Testimonials />

      <FAQ id="duvidas" faqs={p.faqs} subtitle={`Dúvidas comuns sobre ${p.problema.charAt(0).toLowerCase() + p.problema.slice(1)}`} ctaHref={wa} backgroundImage="/traffic-law-background.jpg" />

      <ContatoTransito defaultAssunto={p.problema === "Multa de trânsito" ? "Multa de trânsito" : p.problema} title={p.contatoTitulo} />

      <Footer
        description="Di Garcia Advocacia e Consultoria. Advogado especialista em Direito de Trânsito e Direito Veicular. Vice-Presidente da Comissão de Direito de Trânsito da OAB/DF, Subseção Águas Claras."
        services={transitoLinks}
      />
      <WhatsAppButton whatsappLink={wa} />
    </div>
  )
}
