"use client"

import { motion } from "framer-motion"
import { Award, Scale, MapPin, Phone } from "lucide-react"

type AdvogadoResponsavelProps = {
  /** Parágrafo específico do serviço, exibido logo abaixo da apresentação geral */
  textoServico: string
}

const destaques = [
  { icon: Award, titulo: "OAB/DF 79.271", subtitulo: "Registro profissional" },
  { icon: Scale, titulo: "Comissão de Direito de Trânsito", subtitulo: "OAB/DF, Subseção Águas Claras" },
  { icon: MapPin, titulo: "Águas Claras, Brasília/DF", subtitulo: "Atendimento presencial e online" },
]

export function AdvogadoResponsavel({ textoServico }: AdvogadoResponsavelProps) {
  return (
    <section id="advogado" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 md:gap-12 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative md:col-span-2 max-w-sm mx-auto w-full"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-[#D2D3D5]/20 to-[#848688]/10 rounded-2xl blur-xl" />
            <img
              src="/gugan-img.jpeg"
              alt="Dr. Gugan Pimentel Di Garcia, advogado de trânsito"
              className="relative z-10 w-full aspect-[4/5] object-cover object-[30%_center] rounded-2xl border border-[#848688]/30 shadow-2xl"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <span className="inline-block px-4 py-1.5 mb-4 rounded-full text-sm font-medium text-[#D2D3D5] bg-[#D2D3D5]/10 border border-[#D2D3D5]/20">
              Quem vai cuidar do seu caso
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#D2D3D5] mb-5">Dr. Gugan Pimentel Di Garcia</h2>

            <div className="space-y-4 text-[#D2D3D5]/80 text-lg leading-relaxed mb-8">
              <p>
                Sou advogado de Direito de Trânsito e atendo pessoalmente cada cliente, do primeiro contato até a
                decisão final. Você fala diretamente comigo, sem intermediários.
              </p>
              <p>{textoServico}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {destaques.map((item) => (
                <div
                  key={item.titulo}
                  className="flex items-start gap-3 bg-[#1a1a5e]/40 p-4 rounded-lg border border-[#848688]/20"
                >
                  <item.icon className="w-5 h-5 text-[#D2D3D5] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[#D2D3D5] font-semibold text-sm leading-snug">{item.titulo}</p>
                    <p className="text-[#848688] text-xs mt-1">{item.subtitulo}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/5561991850093"
              className="inline-flex items-center gap-3 bg-[#D2D3D5] text-[#11114E] px-7 py-3.5 rounded-lg font-semibold hover:bg-white transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Falar diretamente com o Dr. Gugan
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
