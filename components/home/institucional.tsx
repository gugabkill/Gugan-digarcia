"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Car,
  HeartPulse,
  Scale,
  MapPin,
  Users,
  ShieldCheck,
  Award,
  MessageCircle,
  Gavel,
} from "lucide-react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/sections/whatsapp-button"
import { Testimonials } from "@/components/sections/testimonials"
import { waLink } from "@/lib/saude"

const WA = waLink("Olá! Vim pelo site da Di Garcia Advocacia e gostaria de atendimento.")

const menu = [
  { href: "#inicio", label: "Início" },
  { href: "#escritorio", label: "O escritório" },
  { href: "#areas", label: "Áreas" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
]

const areas = [
  {
    href: "/transito",
    icon: Car,
    eyebrow: "Área de atuação",
    title: "Direito de Trânsito e Veicular",
    text: "Defesa de condutores e proprietários de veículos em processos administrativos e judiciais.",
    itens: ["Multa de bafômetro (Lei Seca)", "Suspensão e cassação da CNH", "Acidentes de trânsito", "Defesas no DETRAN"],
    pattern:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect x='36' y='8' width='8' height='22' rx='2' fill='%23D2D3D5'/%3E%3Crect x='36' y='50' width='8' height='22' rx='2' fill='%23D2D3D5'/%3E%3C/svg%3E\")",
  },
  {
    href: "/saude",
    icon: HeartPulse,
    eyebrow: "Área de atuação",
    title: "Direito da Saúde",
    text: "Atuação contra negativas e abusos de planos de saúde, com pedido de liminar quando há urgência.",
    itens: ["Medicamento negado", "Cirurgia e exame negados", "Home care", "Reajuste abusivo e falso coletivo"],
    pattern:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M26 20h4v6h6v4h-6v6h-4v-6h-6v-4h6z' fill='%23D2D3D5'/%3E%3C/svg%3E\")",
  },
]

const diferenciais = [
  {
    icon: Scale,
    title: "Atuação técnica",
    text: "Cada caso é estudado a fundo, com estratégia própria para a via administrativa ou judicial.",
  },
  {
    icon: ShieldCheck,
    title: "Atendimento personalizado",
    text: "Você fala diretamente com o advogado responsável e acompanha cada etapa do seu processo.",
  },
  {
    icon: Users,
    title: "Advogados parceiros",
    text: "Contamos com uma rede de advogados parceiros, o que amplia a nossa atuação em diferentes frentes.",
  },
  {
    icon: MapPin,
    title: "Todo o Brasil",
    text: "Atendimento online e processos eletrônicos, com a mesma atenção de um atendimento presencial.",
  },
]

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8 },
}

const slides = ["/brand/slide-1.jpg", "/brand/slide-2.jpg", "/brand/slide-3.jpg", "/brand/slide-4.jpg"]

function HeroSlides() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 5500)
    return () => clearInterval(t)
  }, [])
  return (
    <section id="inicio" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-[#0b0b38]">
      <AnimatePresence initial={false}>
        <motion.div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${slides[i]}')` }}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.6 }, scale: { duration: 7, ease: "easeOut" } }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b38]/90 via-[#0b0b38]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b38]/90 via-transparent to-[#0b0b38]/40" />

      <div className="relative z-10 h-full container mx-auto px-4 flex flex-col justify-end pb-24 md:pb-28">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center gap-4 mb-6 md:mb-8"
        >
          <span className="h-px w-12 bg-[#D2D3D5]/60" />
          <span className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#D2D3D5]/80">
            Di Garcia Advocacia e Consultoria
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium leading-[1.08] text-white max-w-3xl"
        >
          Advocacia e consultoria <span className="text-[#D2D3D5]/70">especializada</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#escritorio"
            className="group inline-flex items-center gap-3 px-5 py-3 uppercase tracking-[0.2em] text-xs text-[#D2D3D5] hover:text-white transition-colors"
          >
            Explore
            <span className="w-8 h-8 rounded-full border border-[#D2D3D5]/40 flex items-center justify-center group-hover:translate-y-1 transition-transform">
              <ArrowDown className="w-3.5 h-3.5" />
            </span>
          </a>
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 px-5 py-3 uppercase tracking-[0.2em] text-xs text-[#D2D3D5] border border-[#D2D3D5]/25 hover:bg-[#D2D3D5]/10 transition-colors"
          >
            Contrate
            <span className="w-8 h-8 rounded-full border border-[#D2D3D5]/40 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Indicadores */}
      <div className="absolute z-10 bottom-10 left-4 md:left-auto md:right-32 flex gap-2">
        {slides.map((_, k) => (
          <button
            key={k}
            aria-label={`Imagem ${k + 1}`}
            onClick={() => setI(k)}
            className="relative h-[2px] w-10 md:w-14 bg-[#D2D3D5]/25 overflow-hidden"
          >
            {k === i && (
              <motion.span
                className="absolute inset-y-0 left-0 bg-[#D2D3D5]"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5.5, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  )
}

const valores = [
  "Atendimento personalizado",
  "Atuação técnica",
  "Ética",
  "Transparência",
  "Advocacia preventiva",
  "Atendimento em todo o Brasil",
  "Rede de advogados parceiros",
]

function Valores() {
  const linha = [...valores, ...valores]
  return (
    <div className="mt-16 md:mt-24 border-y border-[#11114E]/10 py-6 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {linha.map((v, k) => (
          <span key={k} className="flex items-center gap-12 font-serif text-xl md:text-2xl text-[#11114E]/70">
            {v}
            <img src="/brand/monograma.png" alt="" className="h-8 w-auto opacity-70 invert" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function Institucional() {
  return (
    <div className="min-h-screen bg-background">
      <Header menuItems={menu} whatsappLink={WA} />

      {/* Abertura: imagens da identidade visual passando */}
      <HeroSlides />

      {/* Sobre */}
      <section id="escritorio" className="bg-white text-[#11114E] pt-20 md:pt-32 pb-14">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
            <motion.div {...fade} className="lg:col-span-3 flex items-start gap-3">
              <span className="font-serif text-3xl leading-none text-[#848688]">&ldquo;</span>
              <span className="uppercase tracking-[0.3em] text-xs text-[#848688] pt-2">Sobre</span>
            </motion.div>
            <div className="lg:col-span-9">
              <motion.h2 {...fade} className="font-serif text-3xl md:text-5xl leading-tight font-semibold text-balance">
                Advocacia judicial e administrativa.{" "}
                <span className="text-[#848688]">Preventiva e conduzida de forma personalizada.</span>
              </motion.h2>
              <motion.p {...fade} transition={{ duration: 0.8, delay: 0.15 }} className="mt-8 max-w-3xl text-[#11114E]/70 text-lg leading-relaxed">
                A Di Garcia Advocacia e Consultoria nasceu para oferecer uma advocacia próxima e técnica, em que cada
                cliente é acompanhado de perto pelo advogado responsável, do primeiro contato até a solução do caso.
              </motion.p>
            </div>
          </div>
        </div>
        <Valores />
      </section>

      {/* Áreas */}
      <section id="areas" className="bg-[#f3f4f6] text-[#11114E] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="uppercase tracking-[0.3em] text-xs text-[#848688]">Áreas de atuação</span>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold mt-4">Advocacia de excelência</h2>
            </div>
            <p className="text-[#11114E]/70 max-w-md text-lg">
              Atuação consultiva e contenciosa, com estudo aprofundado de cada caso e estratégias próprias para cada
              segmento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {areas.map((a, i) => (
              <motion.a
                key={a.href}
                href={a.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="group block rounded-3xl overflow-hidden bg-white shadow-[0_10px_40px_-15px_rgba(17,17,78,0.25)] hover:shadow-[0_25px_60px_-20px_rgba(17,17,78,0.45)] transition-shadow duration-500"
              >
                <div className="relative h-56 md:h-64 bg-gradient-to-br from-[#11114E] to-[#1a1a5e] overflow-hidden">
                  <motion.div
                    className="absolute inset-0 opacity-[0.09] group-hover:opacity-[0.16] transition-opacity duration-500"
                    style={{ backgroundImage: a.pattern }}
                  />
                  <div className="absolute -right-16 -bottom-16 w-72 h-72 rounded-full bg-[#848688]/25 blur-3xl group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br from-[#D2D3D5] to-[#848688] flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <a.icon className="w-12 h-12 md:w-14 md:h-14 text-[#11114E]" />
                    </div>
                  </div>
                </div>
                <div className="p-7 md:p-10">
                  <span className="uppercase tracking-[0.25em] text-[11px] text-[#848688]">{a.eyebrow}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mt-2 mb-3">{a.title}</h3>
                  <p className="text-[#11114E]/70 leading-relaxed mb-6">{a.text}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                    {a.itens.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-sm text-[#11114E]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#848688]" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 font-bold text-[#11114E] border-b-2 border-[#11114E]/20 group-hover:border-[#11114E] pb-1 transition-colors">
                    Conhecer a área
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#11114E] to-[#0b0b38]">
        <div className="absolute top-10 right-0 w-96 h-96 bg-[#848688]/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="relative">
              <div className="absolute -inset-4 border border-[#D2D3D5]/15 rounded-3xl translate-x-6 translate-y-6" />
              <img src="/gugan-img.jpeg" alt="Dr. Gugan Pimentel Di Garcia" className="relative rounded-3xl w-full shadow-2xl" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
              <span className="uppercase tracking-[0.3em] text-xs text-[#848688]">Advogado responsável</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#D2D3D5] mt-4 mb-8">Dr. Gugan Pimentel Di Garcia</h2>
              <div className="space-y-5 text-[#D2D3D5]/75 text-lg leading-relaxed">
                <p>
                  Fundador da Di Garcia Advocacia e Consultoria, conduz pessoalmente os casos do escritório, com apoio
                  de uma rede de advogados parceiros.
                </p>
                <p>
                  Seu trabalho é reconhecido pela precisão técnica, pela atuação ética e pela busca constante de soluções
                  eficazes para cada caso concreto.
                </p>
              </div>
              <div className="mt-10 space-y-4">
                {[
                  { icon: Gavel, t: "Vice-Presidente da Comissão de Direito de Trânsito", s: "OAB/DF, Subseção Águas Claras" },
                  { icon: HeartPulse, t: "Membro da Comissão de Direito da Saúde", s: "OAB/DF, Subseção Águas Claras" },
                  { icon: Award, t: "OAB/DF 79.271", s: "Registro profissional" },
                ].map((c, i) => (
                  <motion.div
                    key={c.t}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                    className="flex items-center gap-4 rounded-2xl border border-[#D2D3D5]/10 bg-[#0b0b38]/50 p-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D2D3D5] to-[#848688] flex items-center justify-center flex-shrink-0">
                      <c.icon className="w-5 h-5 text-[#11114E]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#D2D3D5]">{c.t}</div>
                      <div className="text-sm text-[#848688]">{c.s}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-white text-[#11114E] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="max-w-2xl mb-14">
            <span className="uppercase tracking-[0.3em] text-xs text-[#848688]">Como trabalhamos</span>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold mt-4 text-balance">
              Proximidade e técnica em cada etapa
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#11114E]/10 rounded-3xl overflow-hidden">
            {diferenciais.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group bg-white p-8 hover:bg-[#11114E] transition-colors duration-500"
              >
                <d.icon className="w-8 h-8 text-[#848688] group-hover:text-[#D2D3D5] transition-colors mb-6" />
                <div className="font-serif font-bold text-xl mb-3 group-hover:text-[#D2D3D5] transition-colors">{d.title}</div>
                <p className="text-[#11114E]/70 group-hover:text-[#D2D3D5]/70 leading-relaxed transition-colors">{d.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contato */}
      <section id="contato" className="relative py-20 md:py-28 overflow-hidden bg-[#0b0b38]">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: "url('/brand/escritorio.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b38] via-[#11114E]/90 to-[#0b0b38]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div {...fade} className="max-w-3xl mx-auto">
            <span className="uppercase tracking-[0.3em] text-xs text-[#848688]">Fale com o escritório</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#D2D3D5] mt-4 mb-6 text-balance">
              Conte o seu caso. A análise inicial é sem compromisso.
            </h2>
            <p className="text-[#D2D3D5]/70 text-lg mb-10">
              Atendimento pelo WhatsApp, por telefone ou por videochamada, em todo o Brasil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D2D3D5] to-[#848688] text-[#11114E] font-bold hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                Falar pelo WhatsApp
              </a>
              <a
                href="tel:+5561991850093"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#D2D3D5]/40 text-[#D2D3D5] font-bold hover:bg-[#D2D3D5]/10 transition-colors"
              >
                (61) 99185-0093
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer
        description="Di Garcia Advocacia e Consultoria. Advocacia judicial e administrativa, preventiva e personalizada. Atendimento em todo o Brasil."
        services={[
          { label: "Direito de Trânsito", href: "/transito" },
          { label: "Multa de Bafômetro", href: "/servicos/defesa-bafometro" },
          { label: "Acidentes de Trânsito", href: "/servicos/acidentes-transito" },
          { label: "Direito da Saúde", href: "/saude" },
          { label: "Reajuste Abusivo de Plano", href: "/saude/reajuste-abusivo" },
          { label: "Medicamento Negado", href: "/saude/medicamento-negado" },
        ]}
      />
      <WhatsAppButton whatsappLink={WA} />
    </div>
  )
}
