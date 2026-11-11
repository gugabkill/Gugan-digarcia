"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowDown,
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

export function Institucional() {
  return (
    <div className="min-h-screen bg-background">
      <Header menuItems={menu} whatsappLink={WA} />

      {/* Abertura */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/brand/escritorio.jpg')" }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 14, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b38] via-[#11114E]/92 to-[#11114E]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b38] via-transparent to-[#0b0b38]/60" />

        <div className="container mx-auto px-4 relative z-10 pt-28 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="h-px w-12 bg-[#D2D3D5]/60" />
              <span className="uppercase tracking-[0.3em] text-xs md:text-sm text-[#D2D3D5]/80">
                Di Garcia Advocacia e Consultoria
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35 }}
              className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.08] text-[#D2D3D5] text-balance"
            >
              Advocacia especializada em{" "}
              <span className="text-transparent bg-gradient-to-r from-[#ffffff] via-[#D2D3D5] to-[#848688] bg-clip-text">
                Direito de Trânsito
              </span>{" "}
              e{" "}
              <span className="text-transparent bg-gradient-to-r from-[#ffffff] via-[#D2D3D5] to-[#848688] bg-clip-text">
                Direito da Saúde
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-lg md:text-xl text-[#D2D3D5]/75 max-w-2xl leading-relaxed"
            >
              Atuação técnica, judicial e administrativa, com atendimento personalizado e presença em todo o Brasil.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/transito"
                className="group inline-flex items-center justify-between gap-6 px-7 py-4 rounded-full bg-gradient-to-r from-[#D2D3D5] to-[#848688] text-[#11114E] font-bold hover:scale-[1.03] transition-transform"
              >
                <span className="flex items-center gap-3">
                  <Car className="w-5 h-5" /> Direito de Trânsito
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/saude"
                className="group inline-flex items-center justify-between gap-6 px-7 py-4 rounded-full border border-[#D2D3D5]/40 text-[#D2D3D5] font-bold hover:bg-[#D2D3D5]/10 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <HeartPulse className="w-5 h-5" /> Direito da Saúde
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>

        <motion.a
          href="#escritorio"
          aria-label="Rolar para o conteúdo"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#D2D3D5]/60 text-xs uppercase tracking-[0.25em]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Conheça
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </section>

      {/* O escritório */}
      <section id="escritorio" className="bg-white text-[#11114E] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <motion.div {...fade} className="lg:col-span-3">
              <span className="uppercase tracking-[0.3em] text-xs text-[#848688]">O escritório</span>
            </motion.div>
            <div className="lg:col-span-9">
              <motion.h2
                {...fade}
                className="font-serif text-3xl md:text-5xl leading-tight font-semibold text-balance"
              >
                Advocacia judicial e administrativa,{" "}
                <span className="text-[#848688]">preventiva e conduzida de forma personalizada.</span>
              </motion.h2>
              <motion.div {...fade} transition={{ duration: 0.8, delay: 0.15 }} className="mt-10 grid md:grid-cols-2 gap-8 text-[#11114E]/75 text-lg leading-relaxed">
                <p>
                  A Di Garcia Advocacia nasceu para oferecer uma atuação próxima e técnica, em que cada cliente é
                  acompanhado de perto pelo advogado responsável, do primeiro contato até a solução do caso.
                </p>
                <p>
                  Concentramos a nossa atuação em duas áreas, Direito de Trânsito e Direito da Saúde, para conhecer a
                  fundo cada tema e oferecer estratégias específicas para cada situação.
                </p>
              </motion.div>
              <motion.div {...fade} transition={{ duration: 1, delay: 0.25 }} className="mt-14 h-px bg-gradient-to-r from-[#11114E]/20 via-[#11114E]/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section id="areas" className="bg-[#f3f4f6] text-[#11114E] py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div {...fade} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <span className="uppercase tracking-[0.3em] text-xs text-[#848688]">Áreas de atuação</span>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold mt-4">Onde atuamos</h2>
            </div>
            <p className="text-[#11114E]/70 max-w-md text-lg">
              Escolha a área do seu caso para conhecer os serviços, os seus direitos e como podemos ajudar.
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
                  Fundador da Di Garcia Advocacia, é advogado especialista em Direito de Trânsito e atua também em
                  Direito da Saúde, na defesa de pacientes e famílias diante de negativas e abusos de planos de saúde.
                </p>
                <p>Atuação marcada pela precisão técnica, pela ética e pela busca de soluções eficazes para cada caso.</p>
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
        description="Di Garcia Advocacia e Consultoria. Atuação especializada em Direito de Trânsito e em Direito da Saúde. Atendimento em todo o Brasil."
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
