import { MessageSquare, FileSearch, Gavel, CheckCircle } from "lucide-react"

export const passos = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Primeiro Contato",
    description:
      "Chame no WhatsApp, conte o que aconteceu e, se puder, envie a negativa e o relatório médico. A análise inicial é sem compromisso.",
    color: "from-[#D2D3D5] to-[#848688]",
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Análise do Caso",
    description:
      "Estudamos o contrato, a negativa e a indicação médica para entender o seu direito e o nível de urgência.",
    color: "from-[#848688] to-[#D2D3D5]",
  },
  {
    icon: Gavel,
    number: "03",
    title: "Medida Adequada",
    description:
      "Definimos o caminho certo: notificação à operadora, reclamação na ANS ou ação judicial com pedido de liminar quando há urgência.",
    color: "from-[#D2D3D5] to-[#848688]",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Acompanhamento",
    description:
      "Você é informado de cada passo, do pedido até o cumprimento da decisão pela operadora.",
    color: "from-[#848688] to-[#D2D3D5]",
  },
]
