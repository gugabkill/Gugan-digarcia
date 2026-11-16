"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, MessageCircle, Send } from "lucide-react"
import { pixelTrackCustom } from "@/lib/meta-pixel"

// Envio por e-mail (FormSubmit), o mesmo endereço já ativado no simulador.
const EMAIL_ENDPOINT = "https://formsubmit.co/ajax/gumido@hotmail.com"

type Gtag = (...args: unknown[]) => void

// Aceita o número com ou sem o código do país (55)
function mascaraTelefone(v: string) {
  let d = v.replace(/\D/g, "")
  if (d.length > 11 && d.startsWith("55")) d = d.slice(2)
  d = d.slice(0, 11)
  if (d.length <= 2) return d
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

const ABORDAGEM = ["Fiz o teste e deu positivo", "Recusei o teste", "Não sei ao certo"]
const NOTIFICACAO = ["Sim", "Ainda não"]

function Opcoes({
  name,
  value,
  onChange,
  options,
}: {
  name: string
  value: string
  onChange: (v: string) => void
  options: string[]
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          aria-pressed={value === o}
          onClick={() => onChange(o)}
          className={`px-4 py-2 rounded-full text-sm border transition-colors ${
            value === o
              ? "bg-[#D2D3D5] text-[#11114E] border-[#D2D3D5] font-semibold"
              : "bg-transparent text-[#D2D3D5] border-[#D2D3D5]/30 hover:border-[#D2D3D5]/70"
          }`}
          data-name={name}
        >
          {o}
        </button>
      ))}
    </div>
  )
}

export function FormLead({ produto, whatsappLink }: { produto: string; whatsappLink: string }) {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [abordagem, setAbordagem] = useState("")
  const [notificacao, setNotificacao] = useState("")
  const [autorizo, setAutorizo] = useState(false)
  const [erro, setErro] = useState("")
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  async function enviar(e: React.FormEvent) {
    e.preventDefault()
    const tel = telefone.replace(/\D/g, "")
    if (nome.trim().length < 2) return setErro("Informe o seu nome.")
    if (tel.length < 10) return setErro("Informe o seu WhatsApp com DDD.")
    if (tel.length === 11 && tel[2] !== "9")
      return setErro("Confira o seu WhatsApp: informe só o DDD e o número, sem o +55.")
    if (!abordagem) return setErro("Diga o que aconteceu na abordagem.")
    if (!notificacao) return setErro("Diga se já chegou notificação do Detran.")
    if (!autorizo) return setErro("Marque a caixa autorizando o contato pelo WhatsApp.")
    setErro("")
    setEnviando(true)
    try {
      await fetch(EMAIL_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Novo lead de ${produto}: ${nome.trim()}`,
          _template: "table",
          _captcha: "false",
          Nome: nome.trim(),
          WhatsApp: telefone,
          "Link do WhatsApp": `https://wa.me/55${tel}`,
          "O que aconteceu": abordagem,
          "Notificação do Detran": notificacao,
          Origem: typeof window !== "undefined" ? window.location.href : "",
        }),
      })
    } catch {
      // segue mesmo se o e-mail falhar, para não travar a pessoa
    }
    const gtag = (window as unknown as { gtag?: Gtag }).gtag
    gtag?.("event", "lead_formulario", { produto })
    // Evento próprio: não usa "Lead" para não misturar com a campanha do falso coletivo no Meta
    pixelTrackCustom("LeadBafometro", { produto })
    setEnviando(false)
    setEnviado(true)
  }

  return (
    <section id="formulario" className="scroll-mt-24 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto rounded-3xl border border-[#D2D3D5]/20 bg-[#1a1a5e]/40 backdrop-blur-sm p-6 md:p-10 shadow-2xl"
        >
          {enviado ? (
            <div className="text-center space-y-4" role="status">
              <CheckCircle className="w-12 h-12 text-[#D2D3D5] mx-auto" />
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#D2D3D5]">Recebemos seus dados!</h2>
              <p className="text-[#D2D3D5]/80">Vamos te chamar no WhatsApp em breve.</p>
              <p className="text-[#D2D3D5]/80">Se preferir, fale com a gente agora:</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D2D3D5] to-[#848688] text-[#11114E] font-bold hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={enviar} className="space-y-6" noValidate>
              <div className="text-center space-y-2">
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#D2D3D5]">Prefere que a gente te chame?</h2>
                <p className="text-[#D2D3D5]/75">
                  Preencha em 30 segundos. Um advogado analisa o seu caso e te chama no WhatsApp.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="font-semibold text-[#D2D3D5]">Seu nome</span>
                  <input
                    id="lead-nome"
                    type="text"
                    autoComplete="name"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="rounded-xl bg-[#0b0b38]/60 border border-[#D2D3D5]/25 px-4 py-3 text-[#D2D3D5] placeholder:text-[#D2D3D5]/40 focus:outline-none focus:border-[#D2D3D5]"
                    placeholder="Como podemos te chamar?"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-semibold text-[#D2D3D5]">Seu WhatsApp com DDD</span>
                  <input
                    id="lead-telefone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel"
                    value={telefone}
                    onChange={(e) => setTelefone(mascaraTelefone(e.target.value))}
                    className="rounded-xl bg-[#0b0b38]/60 border border-[#D2D3D5]/25 px-4 py-3 text-[#D2D3D5] placeholder:text-[#D2D3D5]/40 focus:outline-none focus:border-[#D2D3D5]"
                    placeholder="(61) 99999-9999"
                  />
                </label>
              </div>

              <div className="space-y-2">
                <span className="block font-semibold text-[#D2D3D5]">O que aconteceu na abordagem?</span>
                <Opcoes name="abordagem" value={abordagem} onChange={setAbordagem} options={ABORDAGEM} />
              </div>

              <div className="space-y-2">
                <span className="block font-semibold text-[#D2D3D5]">Já chegou notificação do Detran?</span>
                <Opcoes name="notificacao" value={notificacao} onChange={setNotificacao} options={NOTIFICACAO} />
              </div>

              <label className="flex items-start gap-3 text-sm text-[#D2D3D5]/80">
                <input
                  id="lead-autorizo"
                  type="checkbox"
                  checked={autorizo}
                  onChange={(e) => setAutorizo(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#D2D3D5]"
                />
                <span>
                  Autorizo o contato do escritório pelo WhatsApp.{" "}
                  <a href="/privacidade" target="_blank" rel="noopener noreferrer" className="underline">
                    Política de Privacidade
                  </a>
                </span>
              </label>

              {erro && (
                <p className="text-sm text-[#ffb4b4]" role="alert">
                  {erro}
                </p>
              )}

              <button
                type="submit"
                disabled={enviando}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#D2D3D5] to-[#848688] text-[#11114E] font-bold hover:scale-[1.02] transition-transform disabled:opacity-60"
              >
                <Send className="w-5 h-5" />
                {enviando ? "Enviando..." : "Quero a análise do meu caso"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
