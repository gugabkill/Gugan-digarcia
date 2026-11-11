import {
  Pill,
  Syringe,
  Microscope,
  Dna,
  FlaskConical,
  HeartPulse,
  Scissors,
  Bone,
  ScanLine,
  Siren,
  Hourglass,
  Ribbon,
  BedDouble,
  Clock,
  Stethoscope,
  Package,
  Wind,
  Users,
  type LucideIcon,
} from "lucide-react"
import { waLink } from "@/lib/saude"

export type Produto = {
  slug: string
  problema: string
  waMessage: string
  badge: string
  h1: string
  h1Destaque: string
  subtitulo: string
  direitoSe: string[]
  casosTitulo: string
  casos: { icon: LucideIcon; title: string; text: string }[]
  direitosTitulo: string
  direitos: string[]
  baseLegal: { title: string; text: string }[]
  documentos: string[]
  faqs: { question: string; answer: string }[]
  contatoTitulo: string
  seo: { title: string; description: string }
}

export const produtos: Record<string, Produto> = {
  "medicamento-negado": {
    slug: "medicamento-negado",
    problema: "Medicamento negado",
    waMessage: "Olá! Vim pelo site. O meu plano de saúde negou um medicamento e gostaria de uma análise do caso.",
    badge: "Medicamento negado pelo plano de saúde",
    h1: "O plano de saúde negou o seu",
    h1Destaque: "medicamento?",
    subtitulo:
      "Medicamentos de alto custo, oncológicos e imunobiológicos prescritos pelo seu médico podem ter cobertura obrigatória, mesmo fora do rol da ANS. Quando o tratamento não pode esperar, pedimos liminar.",
    direitoSe: [
      "O medicamento foi prescrito pelo seu médico",
      "A doença tem cobertura pelo seu plano",
      "O plano negou alegando rol da ANS, uso off label ou custo",
      "O tratamento é urgente ou não pode ser interrompido",
    ],
    casosTitulo: "Medicamentos que costumam ser negados",
    casos: [
      { icon: Ribbon, title: "Oncológicos", text: "Quimioterapia oral e venosa, imunoterapia e terapia-alvo." },
      { icon: Syringe, title: "Imunobiológicos", text: "Para artrite, Crohn, psoríase, esclerose múltipla e outras." },
      { icon: Pill, title: "Alto custo", text: "Medicamentos caros que o plano tenta empurrar para o paciente." },
      { icon: FlaskConical, title: "Uso off label", text: "Uso fora da bula com indicação médica fundamentada." },
      { icon: Dna, title: "Doenças raras", text: "Tratamentos específicos, muitas vezes os únicos disponíveis." },
      { icon: Microscope, title: "Fora do rol da ANS", text: "Medicamentos com eficácia comprovada ainda não listados." },
    ],
    direitosTitulo: "O plano não escolhe o tratamento no lugar do médico",
    direitos: [
      "A operadora pode definir quais doenças o contrato cobre, mas não pode decidir qual tratamento o paciente vai receber para uma doença coberta. Essa escolha é do médico que acompanha o caso.",
      "Desde a Lei 14.454/2022, o rol da ANS é uma referência básica, e não uma lista fechada. Tratamentos fora dele podem ser exigidos quando há comprovação científica de eficácia ou recomendação de órgãos técnicos, dentro dos critérios definidos pelos tribunais.",
      "Por isso, cada caso é analisado a partir do relatório médico. Quando há urgência, pedimos ao juiz uma liminar para que o medicamento seja fornecido enquanto o processo segue.",
    ],
    baseLegal: [
      { title: "Lei 14.454/2022", text: "O rol da ANS passou a ser referência básica de cobertura." },
      { title: "Lei 9.656/98", text: "Garante a cobertura da quimioterapia oral (antineoplásicos de uso domiciliar)." },
      { title: "Código de Defesa do Consumidor", text: "Cláusulas que colocam o paciente em desvantagem exagerada são abusivas." },
    ],
    documentos: [
      "Receita e relatório médico com o diagnóstico, o medicamento e a urgência",
      "Negativa do plano por escrito (você tem direito de pedir)",
      "Exames que comprovem o diagnóstico",
      "Carteirinha e, se tiver, o contrato do plano",
      "Orçamento ou valor do medicamento, se já tiver",
    ],
    faqs: [
      {
        question: "O plano pode negar o medicamento por não estar no rol da ANS?",
        answer:
          "Nem sempre. Desde a Lei 14.454/2022, o rol é uma referência básica. Medicamentos fora dele podem ser exigidos quando há comprovação de eficácia ou recomendação de órgãos técnicos, e quando não existe alternativa adequada no rol. A análise depende do relatório médico.",
      },
      {
        question: "E se o uso for off label, fora da bula?",
        answer:
          "Os tribunais têm entendido que o plano não pode negar o medicamento registrado na Anvisa apenas porque o uso indicado pelo médico não consta na bula, desde que a prescrição seja fundamentada.",
      },
      {
        question: "Medicamento de uso em casa tem cobertura?",
        answer:
          "A regra geral permite que o plano exclua medicamentos de uso domiciliar, mas há exceções importantes, como a quimioterapia oral e os medicamentos ligados à internação domiciliar (home care). Vale analisar o seu caso.",
      },
      {
        question: "Quanto tempo leva para conseguir o medicamento?",
        answer:
          "Quando há urgência, pedimos uma liminar logo no início do processo. O tempo da decisão varia conforme o caso e o tribunal, por isso o ideal é procurar ajuda assim que a negativa chegar.",
      },
      {
        question: "Comprei o remédio por conta própria. Posso ser ressarcido?",
        answer:
          "Se a negativa foi indevida, é possível pedir o reembolso do que você pagou. Guarde as notas fiscais e os comprovantes.",
      },
    ],
    contatoTitulo: "O plano negou o seu medicamento? Fale com a gente.",
    seo: {
      title: "Plano de Saúde Negou Medicamento | Advogado | Di Garcia Advocacia",
      description:
        "Plano de saúde negou medicamento de alto custo, oncológico ou fora do rol da ANS? Atuação especializada com pedido de liminar. Atendimento urgente 24h em todo o Brasil.",
    },
  },

  "cirurgia-negada": {
    slug: "cirurgia-negada",
    problema: "Cirurgia ou exame negado",
    waMessage: "Olá! Vim pelo site. O meu plano de saúde negou uma cirurgia ou exame e gostaria de uma análise do caso.",
    badge: "Cirurgia, exame ou procedimento negado",
    h1: "O plano de saúde negou a sua",
    h1Destaque: "cirurgia ou exame?",
    subtitulo:
      "Cirurgias, exames e procedimentos indicados pelo médico não podem ser negados ou travados na autorização sem uma justificativa válida. Atuamos para garantir o procedimento, com pedido de liminar nos casos urgentes.",
    direitoSe: [
      "O procedimento foi indicado pelo seu médico",
      "O plano negou, autorizou só uma parte ou não respondeu",
      "A doença tem cobertura pelo seu plano",
      "Existe urgência ou risco para a sua saúde",
    ],
    casosTitulo: "Casos que costumam ser negados",
    casos: [
      { icon: Scissors, title: "Reparadora pós-bariátrica", text: "Retirada de excesso de pele com finalidade funcional." },
      { icon: Bone, title: "Órteses e próteses", text: "Materiais negados ou trocados por opções inferiores." },
      { icon: ScanLine, title: "Exames", text: "Exames de imagem, genéticos e de alta complexidade." },
      { icon: Ribbon, title: "Cirurgias oncológicas", text: "Procedimentos ligados ao tratamento do câncer." },
      { icon: Siren, title: "Urgência e emergência", text: "Negativas por carência quando a situação é urgente." },
      { icon: Hourglass, title: "Autorização parada", text: "Pedidos sem resposta além dos prazos da ANS." },
    ],
    direitosTitulo: "Negar ou atrasar o procedimento pode ser abusivo",
    direitos: [
      "Se a doença tem cobertura, o procedimento indicado pelo médico para tratá-la também deve ser coberto. A operadora não pode substituir a avaliação do médico por critérios próprios.",
      "Nas situações de urgência e emergência, a carência máxima é de 24 horas. E a ANS fixa prazos máximos para a operadora garantir o atendimento, como 21 dias úteis para procedimentos de alta complexidade e internações eletivas.",
      "Quando o plano nega, autoriza apenas parte do pedido ou simplesmente não responde, é possível exigir o procedimento na Justiça, com pedido de liminar quando há urgência.",
    ],
    baseLegal: [
      { title: "Lei 9.656/98", text: "Carência máxima de 24 horas para urgência e emergência." },
      { title: "Prazos da ANS", text: "A operadora tem prazos máximos para garantir cada tipo de atendimento." },
      { title: "Entendimento do STJ", text: "Cirurgia plástica reparadora pós-bariátrica deve ser coberta quando tem finalidade funcional." },
    ],
    documentos: [
      "Pedido médico e relatório explicando a necessidade e a urgência",
      "Laudos e exames que comprovem o diagnóstico",
      "Negativa do plano por escrito, ou o número do protocolo do pedido",
      "Carteirinha e, se tiver, o contrato do plano",
    ],
    faqs: [
      {
        question: "O plano pode negar a cirurgia plástica depois da bariátrica?",
        answer:
          "Quando a cirurgia tem finalidade reparadora ou funcional, e não apenas estética, o STJ entende que o plano deve cobrir. O relatório médico é fundamental para demonstrar isso.",
      },
      {
        question: "Estou em carência. O plano pode negar?",
        answer:
          "Em casos de urgência e emergência, a carência máxima é de 24 horas. Fora dessas situações, é preciso verificar o contrato e o tipo de carência aplicada ao seu caso.",
      },
      {
        question: "O plano pode trocar o material pedido pelo médico?",
        answer:
          "Quando há divergência sobre materiais, órteses ou próteses, existem regras específicas a serem seguidas. A troca por conta própria, sem justificativa técnica, pode ser contestada.",
      },
      {
        question: "O plano não responde o meu pedido. O que fazer?",
        answer:
          "Anote o número do protocolo e a data do pedido. Se os prazos máximos da ANS forem ultrapassados, é possível registrar reclamação e exigir o procedimento, inclusive na Justiça.",
      },
      {
        question: "Paguei a cirurgia por conta própria. Posso pedir reembolso?",
        answer:
          "Se a negativa foi indevida, é possível pedir o ressarcimento dos valores pagos. Guarde todos os comprovantes, notas e recibos.",
      },
    ],
    contatoTitulo: "Cirurgia ou exame negado? Fale com a gente.",
    seo: {
      title: "Plano de Saúde Negou Cirurgia ou Exame | Advogado | Di Garcia Advocacia",
      description:
        "Plano de saúde negou cirurgia, exame ou procedimento? Atuação especializada com pedido de liminar em casos urgentes. Atendimento urgente 24h em todo o Brasil.",
    },
  },

  "home-care": {
    slug: "home-care",
    problema: "Home care negado",
    waMessage: "Olá! Vim pelo site. O meu plano de saúde negou ou reduziu o home care e gostaria de uma análise do caso.",
    badge: "Home care negado ou reduzido",
    h1: "O plano de saúde negou o",
    h1Destaque: "home care?",
    subtitulo:
      "Quando o médico indica a internação domiciliar no lugar da hospitalar, o plano não pode simplesmente negar ou reduzir o atendimento. Atuamos para garantir a equipe, os insumos e os equipamentos de que o paciente precisa.",
    direitoSe: [
      "O médico indicou a internação domiciliar",
      "O paciente precisa de cuidados contínuos em casa",
      "O plano negou, reduziu as horas ou cortou insumos",
      "A alta hospitalar depende do home care",
    ],
    casosTitulo: "Situações que atendemos",
    casos: [
      { icon: BedDouble, title: "Negativa total", text: "O plano se recusa a fornecer a internação domiciliar." },
      { icon: Clock, title: "Redução de horas", text: "Corte nas horas de enfermagem sem indicação médica." },
      { icon: Stethoscope, title: "Equipe incompleta", text: "Falta de fisioterapia, fonoaudiologia ou nutrição." },
      { icon: Package, title: "Insumos e dietas", text: "Corte de materiais, dietas e medicamentos do tratamento." },
      { icon: Wind, title: "Equipamentos", text: "Cama hospitalar, oxigênio, aspirador e ventilação." },
      { icon: Users, title: "Pacientes dependentes", text: "Idosos, acamados e pacientes neurológicos." },
    ],
    direitosTitulo: "Home care que substitui a internação deve ser coberto",
    direitos: [
      "Os tribunais entendem que, quando a internação domiciliar substitui a internação hospitalar, a cláusula que exclui o home care é abusiva. O plano já teria de custear o paciente no hospital.",
      "O atendimento deve seguir a indicação médica. A operadora não pode reduzir horas de enfermagem, cortar a equipe ou suspender insumos por conta própria, nem transferir para a família um cuidado técnico que exige profissionais.",
      "Quando o paciente corre risco, pedimos liminar para restabelecer ou garantir o home care imediatamente.",
    ],
    baseLegal: [
      { title: "Entendimento do STJ", text: "É abusiva a exclusão do home care quando ele substitui a internação hospitalar." },
      { title: "Código de Defesa do Consumidor", text: "O contrato deve ser interpretado da forma mais favorável ao paciente." },
      { title: "Lei 9.656/98", text: "Define as coberturas mínimas obrigatórias dos planos de saúde." },
    ],
    documentos: [
      "Relatório médico detalhado: diagnóstico, necessidade do home care, horas de enfermagem e equipe",
      "Prescrição de insumos, dietas, medicamentos e equipamentos",
      "Negativa ou comunicação de redução enviada pelo plano",
      "Carteirinha e, se tiver, o contrato do plano",
    ],
    faqs: [
      {
        question: "O contrato diz que não cobre home care. Mesmo assim posso pedir?",
        answer:
          "Sim. Quando a internação domiciliar substitui a hospitalar, os tribunais consideram essa exclusão abusiva. O ponto central é o relatório médico mostrar essa necessidade.",
      },
      {
        question: "O plano pode reduzir as horas de enfermagem?",
        answer:
          "Não por conta própria. Mudanças no atendimento devem seguir a avaliação do médico que acompanha o paciente. Redução sem justificativa técnica pode ser contestada.",
      },
      {
        question: "O plano pode exigir que a família assuma os cuidados?",
        answer:
          "Cuidados técnicos, como os de enfermagem, exigem profissionais habilitados. Transferir essa responsabilidade para a família pode colocar o paciente em risco e ser questionado.",
      },
      {
        question: "Insumos e medicamentos também entram?",
        answer:
          "Em regra, os insumos, dietas e medicamentos necessários ao tratamento em home care fazem parte da internação domiciliar e devem ser fornecidos.",
      },
    ],
    contatoTitulo: "Home care negado ou reduzido? Fale com a gente.",
    seo: {
      title: "Plano de Saúde Negou Home Care | Advogado | Di Garcia Advocacia",
      description:
        "Plano de saúde negou ou reduziu o home care? Atuação especializada para garantir a internação domiciliar, com pedido de liminar. Atendimento urgente 24h em todo o Brasil.",
    },
  },
}

export function produtoWa(p: Produto) {
  return waLink(p.waMessage)
}

export const produtoMenu = [
  { href: "/saude", label: "Direito da Saúde" },
  { href: "#casos", label: "Casos" },
  { href: "#direitos", label: "Seus direitos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
]

export const HeartIcon = HeartPulse
