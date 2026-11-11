"use client"

import { AnimatePresence, motion, useMotionValue, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Calculator, ChevronDown, MessageCircle, RotateCcw, ShieldCheck, Info } from "lucide-react"
import { simular, brl, MESES, PRIMEIRO_ANO, type Resultado } from "@/lib/falso-coletivo"
import { waLink } from "@/lib/saude"
import { pixelTrack, pixelTrackCustom } from "@/lib/meta-pixel"

type Escolha = "sim" | "nao" | ""

const field =
  "w-full rounded-xl bg-[#f5f6fa] border border-[#11114E]/15 px-4 py-3 text-[#11114E] placeholder:text-[#8a8da3] focus:outline-none focus:border-[#11114E]/50 transition-colors"

function parseValor(s: string) {
  const limpo = s.replace(/[^\d,.]/g, "").replace(/\./g, "").replace(",", ".")
  const n = parseFloat(limpo)
  return Number.isFinite(n) ? n : NaN
}

function mascara(s: string) {
  const d = s.replace(/\D/g, "").slice(0, 9)
  if (!d) return ""
  const n = parseInt(d, 10) / 100
  return n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function Opcoes({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (v: string) => void
  options: { v: string; label: string }[]
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          type="button"
          key={o.v}
          onClick={() => onChange(o.v)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
            value === o.v
              ? "bg-[#11114E] text-white border-[#11114E]"
              : "border-[#11114E]/20 text-[#11114E] hover:border-[#11114E]/50 bg-white"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

function Contador({ valor }: { valor: number }) {
  const mv = useMotionValue(0)
  const [txt, setTxt] = useState(brl(0))
  useEffect(() => {
    const c = animate(mv, valor, { duration: 1.4, ease: "easeOut", onUpdate: (v) => setTxt(brl(v)) })
    return () => c.stop()
  }, [valor, mv])
  return <>{txt}</>
}

export function Simulador() {
  const hoje = new Date()
  const anoAtual = hoje.getFullYear()
  const [cnpj, setCnpj] = useState<Escolha>("")
  const [vidas, setVidas] = useState("")
  const [familia, setFamilia] = useState<Escolha>("")
  const [operadora, setOperadora] = useState("")
  const [mes, setMes] = useState("")
  const [ano, setAno] = useState("")
  const [inicial, setInicial] = useState("")
  const [atual, setAtual] = useState("")
  const [ciente, setCiente] = useState(false)
  const [erro, setErro] = useState("")
  const [res, setRes] = useState<Resultado | null>(null)
  const [tabela, setTabela] = useState(false)
  const resRef = useRef<HTMLDivElement>(null)

  const anos: number[] = []
  for (let y = anoAtual; y >= PRIMEIRO_ANO; y--) anos.push(y)

  function calcular(e: React.FormEvent) {
    e.preventDefault()
    const vi = parseValor(inicial)
    const va = parseValor(atual)
    if (!cnpj || !vidas || !familia) return setErro("Responda as três primeiras perguntas.")
    if (mes === "" || ano === "") return setErro("Informe o mês e o ano de início do contrato.")
    if (!(vi > 0) || !(va > 0)) return setErro("Preencha as duas mensalidades com valores acima de zero.")
    const m = Number(mes)
    const y = Number(ano)
    if (y * 12 + m > anoAtual * 12 + hoje.getMonth()) return setErro("A data de início não pode ser no futuro.")
    if (!ciente) return setErro("Marque a caixa confirmando que o resultado é uma estimativa.")
    setErro("")
    const r = simular(vi, va, y, m, hoje)
    setRes(r)
    pixelTrackCustom("SimulacaoConcluida")
    setTimeout(() => resRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50)
  }

  function limpar() {
    setRes(null)
    setTabela(false)
    document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" })
  }

  const avisos: string[] = []
  if (res) {
    if (cnpj === "nao")
      avisos.push(
        "Como o plano não está no nome de empresa ou MEI, a tese do falso coletivo provavelmente não se aplica. Ainda assim, o reajuste pode ser analisado por outros motivos.",
      )
    if (familia === "nao") avisos.push("Como nem todos são da mesma família, o caso precisa de uma análise mais detalhada.")
    if (vidas === "11 a 29" || vidas === "30 ou mais")
      avisos.push("Com muitas pessoas no plano, a análise depende de outros pontos do contrato.")
    if (res.totalPagoAMais <= 0)
      avisos.push(
        "Pela estimativa, os reajustes ficaram dentro do limite da ANS. Reajustes por faixa etária ou por sinistralidade ainda podem ser analisados.",
      )
    if (res.aniversarios.length === 0) avisos.push("O contrato ainda não completou um ano, então não houve reajuste anual.")
  }

  const mensagem = res
    ? [
        "Olá! Fiz a simulação de reajuste do plano de saúde no site.",
        `Plano no CNPJ ou MEI: ${cnpj === "sim" ? "sim" : "não"}`,
        `Pessoas no plano: ${vidas}`,
        `Todos da mesma família: ${familia === "sim" ? "sim" : "não"}`,
        `Operadora: ${operadora.trim() || "não informada"}`,
        `Início do contrato: ${MESES[Number(mes)]}/${ano}`,
        `Mensalidade inicial: ${brl(parseValor(inicial))}`,
        `Mensalidade atual: ${brl(parseValor(atual))}`,
        `Estimativa paga a mais (36 meses): ${brl(res.totalPagoAMais)}`,
        "Quero uma avaliação jurídica.",
      ].join("\n")
    : ""

  return (
    <section id="simulador" className="tema-claro bg-[#f5f6fa] py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#11114E]/5 border border-[#11114E]/20 rounded-full text-[#11114E] text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" /> Simulador gratuito
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#11114E] mb-4 text-balance">
            Quanto o seu plano subiu além do permitido?
          </h2>
          <p className="text-[#5b5f7a] text-base md:text-lg max-w-2xl mx-auto">
            Para planos no nome de empresa ou MEI que atendem só a sua família. Comparamos a sua mensalidade com o
            limite que a ANS autoriza para planos individuais e familiares.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-6xl mx-auto">
          <motion.form
            onSubmit={calcular}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 rounded-3xl border border-[#11114E]/15 bg-white shadow-[0_20px_60px_-25px_rgba(17,17,78,0.35)] p-6 md:p-8 shadow-2xl space-y-6"
          >
            <div className="space-y-2">
              <label className="font-semibold text-[#11114E]">1. O plano está no nome de uma empresa ou MEI?</label>
              <Opcoes value={cnpj} onChange={(v) => setCnpj(v as Escolha)} options={[{ v: "sim", label: "Sim" }, { v: "nao", label: "Não" }]} />
            </div>
            <div className="space-y-2">
              <label className="font-semibold text-[#11114E]">2. Quantas pessoas estão no plano?</label>
              <Opcoes
                value={vidas}
                onChange={setVidas}
                options={["1 a 5", "6 a 10", "11 a 29", "30 ou mais"].map((v) => ({ v, label: v }))}
              />
            </div>
            <div className="space-y-2">
              <label className="font-semibold text-[#11114E]">3. Todos são da mesma família?</label>
              <Opcoes value={familia} onChange={(v) => setFamilia(v as Escolha)} options={[{ v: "sim", label: "Sim" }, { v: "nao", label: "Não" }]} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2 md:col-span-2">
                <label className="font-semibold text-[#11114E]">4. Operadora do plano (opcional)</label>
                <input className={field} placeholder="Ex.: Amil, Bradesco, Unimed" value={operadora} onChange={(e) => setOperadora(e.target.value)} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="font-semibold text-[#11114E]">5. Quando o contrato começou?</label>
                <div className="grid grid-cols-2 gap-3">
                  <select className={field} value={mes} onChange={(e) => setMes(e.target.value)}>
                    <option value="">Mês</option>
                    {MESES.map((m, i) => (
                      <option key={m} value={i}>
                        {m[0].toUpperCase() + m.slice(1)}
                      </option>
                    ))}
                  </select>
                  <select className={field} value={ano} onChange={(e) => setAno(e.target.value)}>
                    <option value="">Ano</option>
                    {anos.map((y) => (
                      <option key={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-semibold text-[#11114E]">6. Mensalidade no início</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5b5f7a]">R$</span>
                  <input className={`${field} pl-11`} inputMode="numeric" placeholder="0,00" value={inicial} onChange={(e) => setInicial(mascara(e.target.value))} />
                </div>
                <p className="text-xs text-[#5b5f7a]">Some todas as pessoas. Pode ser um valor aproximado.</p>
              </div>
              <div className="space-y-2">
                <label className="font-semibold text-[#11114E]">7. Mensalidade atual</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5b5f7a]">R$</span>
                  <input className={`${field} pl-11`} inputMode="numeric" placeholder="0,00" value={atual} onChange={(e) => setAtual(mascara(e.target.value))} />
                </div>
                <p className="text-xs text-[#5b5f7a]">O valor total do último boleto.</p>
              </div>
            </div>
            <label className="flex items-start gap-3 text-sm text-[#5b5f7a] cursor-pointer select-none">
              <input type="checkbox" checked={ciente} onChange={(e) => setCiente(e.target.checked)} className="w-5 h-5 mt-0.5 accent-[#11114E]" />
              Entendo que o resultado é uma estimativa e não substitui a análise de um advogado.
            </label>
            {erro && <p className="text-sm font-semibold text-red-600">{erro}</p>}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-gradient-to-r from-[#11114E] to-[#2C3056] text-white font-bold text-lg hover:scale-[1.02] transition-transform"
            >
              <Calculator className="w-5 h-5" />
              Simular agora
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="rounded-2xl border border-[#11114E]/10 bg-[#f5f6fa] p-6">
              <div className="font-serif font-bold text-lg text-[#11114E] mb-3">Como funciona</div>
              <ol className="space-y-3 text-sm text-[#5b5f7a] list-decimal pl-5">
                <li>Você informa quando o plano começou e quanto pagava no início.</li>
                <li>Aplicamos, ano a ano, o teto de reajuste da ANS para planos individuais.</li>
                <li>Comparamos com o que você paga hoje e somamos a diferença dos últimos 3 anos.</li>
              </ol>
            </div>
            <div className="rounded-2xl border border-[#11114E]/10 bg-[#f5f6fa] p-6 flex gap-3">
              <ShieldCheck className="w-6 h-6 text-[#11114E] flex-shrink-0" />
              <p className="text-sm text-[#5b5f7a]">
                O cálculo é feito no seu próprio aparelho. Nenhum dado é enviado ao escritório, a não ser que você
                decida mandar o resultado pelo WhatsApp.
              </p>
            </div>
          </motion.aside>
        </div>

        <AnimatePresence>
          {res && (
            <motion.div
              ref={resRef}
              key="res"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto mt-10 scroll-mt-28"
            >
              <div className="rounded-3xl border border-[#11114E]/25 bg-white shadow-[0_20px_60px_-25px_rgba(17,17,78,0.35)] p-6 md:p-10 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="text-sm uppercase tracking-widest text-[#5b5f7a] mb-2">
                    Você pode ter pago a mais, entre {MESES[res.periodoInicio.mes]}/{res.periodoInicio.ano} e{" "}
                    {MESES[res.periodoFim.mes]}/{res.periodoFim.ano}
                  </div>
                  <div className="font-serif font-bold text-4xl md:text-6xl text-[#11114E]">
                    <Contador valor={res.totalPagoAMais} />
                  </div>
                  <div className="text-sm text-[#5b5f7a] mt-2">Estimativa da soma das diferenças nos últimos 36 meses</div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {[
                    { k: "Você paga hoje", v: brl(parseValor(atual)) },
                    { k: "Pelo teto da ANS seria", v: brl(res.mensalidadePelaAns) },
                    { k: "Diferença por mês", v: brl(res.diferencaMensal) },
                  ].map((x) => (
                    <div key={x.k} className="rounded-2xl bg-[#f5f6fa] border border-[#11114E]/10 p-5 text-center">
                      <div className="text-sm text-[#5b5f7a] mb-1">{x.k}</div>
                      <div className="font-serif font-bold text-2xl text-[#11114E]">{x.v}</div>
                    </div>
                  ))}
                </div>

                {avisos.length > 0 && (
                  <div className="flex gap-3 rounded-2xl border border-[#11114E]/20 bg-[#11114E]/5 p-4 mb-6">
                    <Info className="w-5 h-5 text-[#11114E] flex-shrink-0 mt-0.5" />
                    <div className="space-y-1 text-sm text-[#11114E]/90">
                      {avisos.map((a) => (
                        <p key={a}>{a}</p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                  <a
                    href={waLink(mensagem)}
                    onClick={() => pixelTrack("Lead")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#11114E] to-[#2C3056] text-white font-bold hover:scale-105 transition-transform"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Quero uma avaliação jurídica
                  </a>
                  <button
                    type="button"
                    onClick={limpar}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#11114E]/30 text-[#11114E] hover:bg-[#11114E]/5 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Fazer nova simulação
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setTabela(!tabela)}
                  className="mx-auto flex items-center gap-2 text-sm text-[#5b5f7a] hover:text-[#11114E]"
                >
                  Ver como calculamos
                  <ChevronDown className={`w-4 h-4 transition-transform ${tabela ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {tabela && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 overflow-x-auto rounded-xl border border-[#11114E]/10">
                        <table className="w-full text-sm text-left">
                          <thead className="bg-[#eef0f6] text-[#5b5f7a] uppercase text-xs tracking-wider">
                            <tr>
                              <th className="px-4 py-3">Aniversário</th>
                              <th className="px-4 py-3">Teto ANS</th>
                              <th className="px-4 py-3">Pelo teto da ANS</th>
                              <th className="px-4 py-3">Estimativa do que foi cobrado</th>
                            </tr>
                          </thead>
                          <tbody className="text-[#11114E]/90">
                            {res.aniversarios.length === 0 && (
                              <tr>
                                <td colSpan={4} className="px-4 py-3">O contrato ainda não completou um ano.</td>
                              </tr>
                            )}
                            {res.aniversarios.map((a) => (
                              <tr key={a.ano} className="border-t border-[#11114E]/5">
                                <td className="px-4 py-2">{MESES[a.mes]}/{a.ano}</td>
                                <td className="px-4 py-2">{a.indice.toLocaleString("pt-BR")}%</td>
                                <td className="px-4 py-2">{brl(a.pelaAns)}</td>
                                <td className="px-4 py-2">{brl(a.estimada)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-xs text-[#5b5f7a] mt-3 leading-relaxed">
                        Como o simulador só conhece a mensalidade inicial e a atual, os reajustes cobrados são estimados
                        por uma média anual. Reajustes por mudança de faixa etária e inclusão de pessoas podem alterar o
                        resultado. O valor real depende da análise dos boletos e do contrato e não é garantia de
                        resultado em processo. Índices: teto de reajuste da ANS para planos individuais e familiares, de 2010 a 2026.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
