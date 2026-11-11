"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Pill, Activity, Home, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import { saudeProdutos } from "@/lib/saude"

const icons = [Pill, Activity, Home, TrendingUp]
const colors = [
  "from-sky-500/20 to-cyan-500/20",
  "from-indigo-500/20 to-blue-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-slate-400/20 to-zinc-500/20",
]

export function AtuacaoSaude() {
  return (
    <section id="atuacao" className="tema-claro py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-transparent to-card/30 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge className="bg-gradient-to-r from-primary via-muted to-secondary text-primary-foreground mb-4 md:mb-6 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2">
            Áreas de Atuação
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 md:mb-6 text-balance">
            Atuamos nas principais negativas e abusos
          </h2>
          <p className="text-muted-foreground text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Cada tipo de problema com o plano de saúde tem regras e estratégias próprias. Escolha o seu caso e entenda
            os seus direitos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {saudeProdutos.map((p, index) => {
            const Icon = icons[index]
            return (
              <motion.a
                key={p.slug}
                href={`/saude/${p.slug}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="block"
              >
                <Card className="hover:shadow-2xl transition-all duration-500 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 group relative overflow-hidden h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  {p.tag && (
                    <span className="absolute top-4 right-4 z-10 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D2D3D5] text-[#11114E]">
                      {p.tag}
                    </span>
                  )}
                  <CardHeader className="text-center pb-4 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 6 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary/20 via-muted/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg"
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                    </motion.div>
                    <CardTitle className="font-serif text-lg md:text-xl leading-tight mb-2 md:mb-3 text-balance">
                      {p.title}
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm leading-relaxed">{p.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 relative z-10">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
                    <div className="space-y-2 md:space-y-3">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-start space-x-2 md:space-x-3 text-xs md:text-sm">
                          <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="w-full mt-4 md:mt-6 flex items-center justify-center rounded-md py-2 text-sm font-medium group-hover:bg-primary/10 transition-colors">
                      Saiba mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
