export const WHATSAPP_NUMBER = "5561991850093"

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WA_SAUDE = waLink(
  "Olá! Vim pelo site e gostaria de uma análise sobre o meu plano de saúde.",
)

export const saudeMenu = [
  { href: "#inicio", label: "Início" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
]

export const saudeProdutos = [
  {
    slug: "medicamento-negado",
    title: "Medicamento Negado",
    description:
      "Medicamentos prescritos pelo seu médico, inclusive de alto custo, oncológicos e imunobiológicos.",
    features: [
      "Medicamentos fora do rol da ANS",
      "Uso off label com indicação médica",
      "Tratamentos oncológicos",
      "Pedido de liminar quando há urgência",
    ],
  },
  {
    slug: "cirurgia-negada",
    title: "Cirurgia e Exame Negados",
    description:
      "Cirurgias, exames e procedimentos recusados ou com autorização parada além do prazo.",
    features: [
      "Cirurgia reparadora pós-bariátrica",
      "Materiais, órteses e próteses",
      "Demora acima dos prazos da ANS",
      "Procedimentos de urgência",
    ],
  },
  {
    slug: "home-care",
    title: "Home Care Negado",
    description:
      "Internação domiciliar indicada pelo médico, com a equipe e os insumos de que o paciente precisa.",
    features: [
      "Negativa de internação domiciliar",
      "Redução de horas de enfermagem",
      "Corte de insumos e equipamentos",
      "Substituição da internação hospitalar",
    ],
  },
  {
    slug: "reajuste-abusivo",
    title: "Reajuste Abusivo",
    description:
      "Aumentos acima do permitido, inclusive em planos empresariais familiares (falso coletivo).",
    features: [
      "Falso coletivo (plano no CNPJ ou MEI)",
      "Reajuste por faixa etária",
      "Reajuste por sinistralidade",
      "Simulador de reajuste gratuito",
    ],
    tag: "Simulador",
  },
]
