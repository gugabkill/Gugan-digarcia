"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Scale, Phone, Award, HeartPulse, MapPin, Landmark, FileCheck2, ArrowRight } from "lucide-react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/sections/whatsapp-button"
import { Process } from "@/components/sections/process"
import { FaqClaro } from "@/components/saude/faq-claro"
import { FundoSaude } from "@/components/saude/fundo-saude"
import { UrgenciaBanner } from "@/components/saude/urgencia-banner"
import { SobreSaude } from "@/components/saude/sobre-saude"
import { ContatoSaude } from "@/components/saude/contato-saude"
import { passos } from "@/components/saude/passos"
import { saudeProdutos } from "@/lib/saude"
import { produtos, produtoMenu, produtoWa } from "@/lib/saude-produtos"

export function ProdutoPage({ slug }: { slug: string }) {
  const p = produtos[slug]
  const wa = produtoWa(p)

  return (
    <div className="min-h-screen bg-background">
      <Header menuItems={produtoMenu} whatsappLink={wa} />

      {/* Topo */}
      <section id="inicio" className="tema-claro bg-white pt-20 pb-20 relative overflow-hidden min-h-[92vh] flex items-center">
        <FundoSaude />
        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-5 md:space-y-7"
            >
              <a href="/saude" className="inline-block">
                <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-xs md:text-sm text-white border-0">
                  <HeartPulse className="w-3 h-3 md:w-4 md:h-4 mr-2 text-white" />
                  {p.badge}
                </Badge>
              </a>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.6rem] font-serif font-bold text-balance leading-tight">
                {p.h1}
                <span className="text-transparent bg-gradient-to-r from-primary via-muted to-secondary bg-clip-text">
                  {" "}
                  {p.h1Destaque}
                </span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground text-pretty leading-relaxed">{p.subtitulo}</p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground shadow-xl glow w-full sm:w-auto"
                  >
                    <a href={wa} target="_blank" rel="noopener noreferrer">
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
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-card/50 backdrop-blur-sm w-full sm:w-auto"
                  >
                    <a href="tel:+5561991850093">
                      <Phone className="w-4 h-4 mr-2" />
                      (61) 99185-0093
                    </a>
                  </Button>
                </motion.div>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-accent" /> OAB/DF 79.271
                </span>
                <span className="flex items-center gap-2">
                  <HeartPulse className="w-4 h-4 text-accent" /> Comissão de Direito da Saúde, OAB Águas Claras
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> Atendimento em todo o Brasil
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-muted/30 to-secondary/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl border border-[#11114E]/15 bg-white shadow-[0_20px_60px_-25px_rgba(17,17,78,0.35)] p-6 md:p-8 shadow-2xl">
                <div className="font-serif font-bold text-xl md:text-2xl text-[#11114E] mb-1">Você pode ter direito se:</div>
                <div className="text-sm text-[#5b5f7a] mb-5">Basta uma dessas situações para valer a análise</div>
                <div className="space-y-3">
                  {p.direitoSe.map((d, i) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + i * 0.12 }}
                      className="flex items-start gap-3 rounded-xl border border-[#11114E]/10 bg-[#f5f6fa] p-4"
                    >
                      <CheckCircle className="w-5 h-5 text-[#11114E] flex-shrink-0 mt-0.5" />
                      <span className="text-[#11114E]">{d}</span>
                    </motion.div>
                  ))}
                </div>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#11114E] to-[#2C3056] py-3 font-bold text-white hover:scale-[1.02] transition-transform"
                >
                  Quero que analisem o meu caso
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <UrgenciaBanner />

      {/* Casos */}
      <section id="casos" className="tema-claro bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-4 md:mb-6">
              Casos que atendemos
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-balance">{p.casosTitulo}</h2>
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
                className="group rounded-2xl border border-border/50 bg-card/50 hover:bg-card/80 p-6 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 via-muted/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <c.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="font-serif font-bold text-lg mb-1">{c.title}</div>
                <div className="text-muted-foreground text-sm leading-relaxed">{c.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Direitos */}
      <section id="direitos" className="tema-claro py-16 md:py-24 bg-[#f5f6fa]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-4 md:mb-6">
                Seus direitos
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-balance">{p.direitosTitulo}</h2>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                {p.direitos.map((t) => (
                  <p key={t.slice(0, 30)}>{t}</p>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-[#1a1a5e] to-[#11114E] border border-[#D2D3D5]/15 p-6 md:p-8 shadow-2xl"
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

      <Process
        id="como-funciona"
        steps={passos}
        title="Como Funciona o Atendimento"
        subtitle="Do primeiro contato até o cumprimento da decisão, você sabe exatamente o que está acontecendo"
        ctaLabel="Iniciar Análise Gratuita"
        ctaHref={wa}
      />

      {/* Documentos */}
      <section id="documentos" className="tema-claro bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto rounded-3xl border border-[#11114E]/15 bg-white shadow-[0_20px_60px_-25px_rgba(17,17,78,0.3)] p-6 md:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-2">
              <FileCheck2 className="w-7 h-7 text-[#11114E]" />
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#11114E]">O que separar para a análise</h2>
            </div>
            <p className="text-[#5b5f7a] mb-6">
              Não tem tudo? Sem problema. Comece pelo que tiver em mãos e a gente orienta o resto.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {p.documentos.map((d) => (
                <div key={d} className="flex items-start gap-3 rounded-xl bg-[#f5f6fa] border border-[#11114E]/10 p-4">
                  <CheckCircle className="w-5 h-5 text-[#11114E] flex-shrink-0 mt-0.5" />
                  <span className="text-[#11114E]/90">{d}</span>
                </div>
              ))}
            </div>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#11114E] to-[#2C3056] text-white font-bold rounded-full hover:scale-105 transition-transform"
            >
              Enviar documentos pelo WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <SobreSaude />

      <FaqClaro faqs={p.faqs} subtitle={`Dúvidas comuns sobre ${p.problema.charAt(0).toLowerCase() + p.problema.slice(1)}`} ctaHref={wa} />

      <ContatoSaude defaultProblema={p.problema} title={p.contatoTitulo} />

      <Footer
        description="Di Garcia Advocacia. Atuação especializada em Direito da Saúde, com foco em ações contra planos de saúde, e em Direito de Trânsito. Atendimento em todo o Brasil."
        services={saudeProdutos.map((x) => ({ label: x.title, href: `/saude/${x.slug}` }))}
      />
      <WhatsAppButton whatsappLink={wa} />
    </div>
  )
}
