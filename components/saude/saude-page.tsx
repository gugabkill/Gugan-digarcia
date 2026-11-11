"use client"

import { MessageSquare, FileSearch, Gavel, CheckCircle } from "lucide-react"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/sections/whatsapp-button"
import { Process } from "@/components/sections/process"
import { Nationwide } from "@/components/sections/nationwide"
import { FAQ } from "@/components/sections/faq"
import { HeroSaude } from "@/components/saude/hero-saude"
import { Situacoes } from "@/components/saude/situacoes"
import { AtuacaoSaude } from "@/components/saude/atuacao-saude"
import { QuandoProcurar } from "@/components/saude/quando-procurar"
import { SobreSaude } from "@/components/saude/sobre-saude"
import { ContatoSaude } from "@/components/saude/contato-saude"
import { WA_SAUDE, saudeMenu, saudeProdutos } from "@/lib/saude"

const passos = [
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

const faqs = [
  {
    question: "O plano de saúde pode negar um tratamento que o médico indicou?",
    answer:
      "Em regra, o plano pode limitar quais doenças cobre, mas não deve escolher o tratamento no lugar do médico quando a doença tem cobertura. Desde a Lei 14.454/2022, o rol da ANS funciona como referência básica, e tratamentos fora dele podem ser exigidos quando há comprovação de eficácia ou recomendação de órgãos técnicos. Cada caso precisa ser analisado.",
  },
  {
    question: "É possível conseguir uma liminar?",
    answer:
      "Sim, quando há urgência e documentos que demonstrem a necessidade do tratamento. A liminar é uma decisão do juiz logo no início do processo, que pode obrigar o plano a cobrir o tratamento enquanto a ação segue. O tempo da decisão varia conforme o caso e o tribunal.",
  },
  {
    question: "Quais documentos eu preciso separar?",
    answer:
      "Relatório médico detalhado (com o diagnóstico, o tratamento indicado e a urgência), receita ou pedido médico, a negativa do plano, contrato ou carteirinha e os últimos boletos. Você tem direito de pedir à operadora a negativa por escrito.",
  },
  {
    question: "O plano pode me prejudicar se eu entrar com uma ação?",
    answer:
      "Não. Buscar os seus direitos na Justiça não autoriza a operadora a cancelar o contrato ou a tratar você de forma diferente. Durante o processo, o ideal é manter as mensalidades em dia.",
  },
  {
    question: "O que é o falso coletivo?",
    answer:
      "É o plano contratado no nome de uma empresa ou MEI, mas que atende apenas uma família. Nesses casos, os tribunais vêm admitindo a aplicação dos limites de reajuste dos planos individuais, com possível devolução do que foi pago a mais. Use o nosso simulador para ter uma estimativa.",
  },
  {
    question: "Vocês atendem fora de Brasília?",
    answer:
      "Sim. O atendimento é online e os processos são eletrônicos, então atendemos pacientes e famílias em todo o Brasil, com a mesma atenção de um atendimento presencial.",
  },
  {
    question: "Quanto custa?",
    answer:
      "Os honorários são apresentados depois da análise inicial, de forma clara, conforme o tipo de caso e a medida necessária. A análise inicial não tem custo.",
  },
  {
    question: "Meus dados de saúde ficam protegidos?",
    answer:
      "Sim. Todas as informações são tratadas com sigilo profissional e de acordo com a Lei Geral de Proteção de Dados (LGPD), usadas apenas para o atendimento do seu caso.",
  },
]

export function SaudePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header menuItems={saudeMenu} whatsappLink={WA_SAUDE} />
      <HeroSaude />
      <Situacoes />
      <AtuacaoSaude />
      <QuandoProcurar />
      <Process
        id="como-funciona"
        steps={passos}
        title="Como Funciona o Atendimento"
        subtitle="Do primeiro contato até o cumprimento da decisão, você sabe exatamente o que está acontecendo"
        ctaLabel="Iniciar Análise Gratuita"
        ctaHref={WA_SAUDE}
      />
      <SobreSaude />
      <Nationwide
        area="Direito da Saúde"
        whatsappLink={WA_SAUDE}
        items={[
          "Ações contra qualquer operadora de plano de saúde",
          "Processos eletrônicos em todos os estados",
          "Envio de documentos pelo WhatsApp",
          "Acompanhamento do processo online",
          "Atendimento por videochamada quando necessário",
        ]}
      />
      <FAQ
        id="duvidas"
        faqs={faqs}
        subtitle="Respostas para as dúvidas mais comuns sobre planos de saúde e os seus direitos"
        backgroundImage="/professional-consultation-meeting-with-documents.jpg"
        ctaHref={WA_SAUDE}
      />
      <ContatoSaude />
      <Footer
        description="Di Garcia Advocacia. Atuação especializada em Direito da Saúde, com foco em ações contra planos de saúde, e em Direito de Trânsito. Atendimento em todo o Brasil."
        services={saudeProdutos.map((p) => ({ label: p.title, href: `/saude/${p.slug}` }))}
      />
      <WhatsAppButton whatsappLink={WA_SAUDE} />
    </div>
  )
}
