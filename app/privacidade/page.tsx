import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidade | Di Garcia Advocacia e Consultoria" },
  description: "Como a Di Garcia Advocacia e Consultoria trata os dados pessoais coletados no site, nos anúncios e nos formulários.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
}

const secoes: { titulo: string; corpo: React.ReactNode }[] = [
  {
    titulo: "1. Quem somos",
    corpo: (
      <p>
        A Di Garcia Sociedade Individual de Advocacia (Di Garcia Advocacia e Consultoria), CNPJ 64.529.497/0001-12, com
        sede em Brasília, DF, é a responsável pelos dados pessoais coletados neste site, nos nossos anúncios e nos
        formulários ligados a eles.
      </p>
    ),
  },
  {
    titulo: "2. Quais dados coletamos",
    corpo: (
      <ul>
        <li>
          <strong>Dados que você nos envia:</strong> nome, telefone ou WhatsApp, e-mail, cidade e informações sobre o
          seu caso, como operadora do plano, tipo de contrato, número de beneficiários e valor da mensalidade.
        </li>
        <li>
          <strong>Simulador:</strong> os valores digitados no simulador de reajuste são calculados no seu próprio
          navegador e não ficam guardados conosco. Só recebemos essas informações se você decidir enviá-las pelo
          WhatsApp.
        </li>
        <li>
          <strong>Dados de navegação:</strong> páginas visitadas, cliques e informações do dispositivo, coletados por
          cookies e por ferramentas como o Google Analytics e o Pixel da Meta.
        </li>
      </ul>
    ),
  },
  {
    titulo: "3. Para que usamos",
    corpo: (
      <p>
        Para falar com você e fazer a análise inicial do seu caso, para prestar os serviços jurídicos contratados e
        para medir o desempenho do site e dos anúncios.
      </p>
    ),
  },
  {
    titulo: "4. Base legal",
    corpo: (
      <p>
        Tratamos dados com base na Lei Geral de Proteção de Dados (Lei 13.709/2018): o seu consentimento, os
        procedimentos preliminares a um contrato a seu pedido, o exercício regular de direitos e o nosso legítimo
        interesse, no caso das métricas de navegação.
      </p>
    ),
  },
  {
    titulo: "5. Compartilhamento",
    corpo: (
      <p>
        Não vendemos dados pessoais. Só compartilhamos com os fornecedores necessários ao atendimento (Meta, Google,
        WhatsApp e hospedagem do site) ou quando a lei ou uma ordem judicial exigir. As informações do seu caso também
        estão protegidas pelo sigilo profissional da advocacia.
      </p>
    ),
  },
  {
    titulo: "6. Por quanto tempo guardamos",
    corpo: (
      <p>
        Pelo tempo necessário ao atendimento e ao cumprimento de obrigações legais. Contatos que não resultarem em
        contratação são excluídos em até 12 meses.
      </p>
    ),
  },
  {
    titulo: "7. Seus direitos",
    corpo: (
      <p>
        Você pode pedir a confirmação do tratamento, acesso, correção, exclusão ou portabilidade dos seus dados, além de
        revogar o consentimento a qualquer momento.
      </p>
    ),
  },
  {
    titulo: "8. Cookies",
    corpo: (
      <p>
        Você pode bloquear ou apagar cookies nas configurações do seu navegador. Algumas medições do site podem deixar
        de funcionar.
      </p>
    ),
  },
  {
    titulo: "9. Contato",
    corpo: (
      <p>
        WhatsApp{" "}
        <a href="https://wa.me/5561991850093" target="_blank" rel="noopener noreferrer">
          (61) 99185-0093
        </a>{" "}
        ou e-mail <a href="mailto:gumido@hotmail.com">gumido@hotmail.com</a>.
      </p>
    ),
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#11114E]">
      <div className="bg-[#11114E] text-white">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" aria-label="Di Garcia Advocacia e Consultoria">
            <img src="/brand/logo-horizontal.svg" alt="Di Garcia Advocacia e Consultoria" className="h-10 w-auto" />
          </Link>
          <Link href="/" className="text-sm text-[#D2D3D5] hover:text-white">
            Voltar ao site
          </Link>
        </div>
      </div>
      <article className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Política de Privacidade</h1>
        <p className="text-sm text-[#11114E]/60 mb-10">Última atualização: 11 de novembro de 2026</p>
        <div className="space-y-8 leading-relaxed text-[#11114E]/85 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:underline">
          {secoes.map((s) => (
            <section key={s.titulo}>
              <h2 className="font-serif text-xl font-bold text-[#11114E] mb-3">{s.titulo}</h2>
              {s.corpo}
            </section>
          ))}
        </div>
      </article>
    </main>
  )
}
