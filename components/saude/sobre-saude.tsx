"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, HeartPulse, Users, MapPin } from "lucide-react"

const destaques = [
  { icon: Award, title: "OAB/DF 79.271", subtitle: "Registro profissional" },
  { icon: HeartPulse, title: "Comissão de Direito da Saúde", subtitle: "Membro, OAB/DF Águas Claras" },
  { icon: Users, title: "Advogados parceiros", subtitle: "Rede de apoio em todo o país" },
  { icon: MapPin, title: "Todo o Brasil", subtitle: "Processos 100% digitais" },
]

export function SobreSaude() {
  return (
    <section id="sobre" className="tema-claro py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-muted/20 to-primary/20 rounded-2xl blur-2xl" />
            <motion.img
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="/gugan-img.jpeg"
              alt="Dr. Gugan Pimentel Di Garcia, advogado"
              className="rounded-2xl shadow-2xl relative z-10 border border-border/20 w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <div>
              <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-4 md:mb-6">
                Quem cuida do seu caso
              </Badge>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 md:mb-6 text-balance">
                Dr. Gugan Pimentel Di Garcia
              </h2>
              <div className="space-y-3 md:space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  Advogado à frente da Di Garcia Advocacia, com atuação em Direito da Saúde voltada à defesa de
                  pacientes e famílias diante de negativas e abusos de planos de saúde.
                </p>
                <p>
                  É membro da Comissão de Direito da Saúde da OAB/DF, Subseção Águas Claras, e Vice-Presidente da
                  Comissão de Direito de Trânsito da mesma subseção.
                </p>
                <p>
                  Cada caso é analisado de perto, a partir do relatório médico e do contrato, para definir a medida
                  certa: da notificação à operadora até a ação judicial com pedido de liminar.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {destaques.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="border-border/50 bg-card/50 hover:bg-card/80 transition-all duration-300 h-full">
                    <CardContent className="p-3 md:p-4 flex items-center space-x-3">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-sm md:text-base">{item.title}</div>
                        <div className="text-xs md:text-sm text-muted-foreground">{item.subtitle}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
