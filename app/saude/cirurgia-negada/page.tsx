import type { Metadata } from "next"
import { ProdutoPage } from "@/components/saude/produto-page"
import { produtos } from "@/lib/saude-produtos"

const p = produtos["cirurgia-negada"]

export const metadata: Metadata = {
  title: { absolute: p.seo.title },
  description: p.seo.description,
  alternates: { canonical: "/saude/cirurgia-negada" },
  openGraph: { title: p.seo.title, description: p.seo.description, url: "https://www.digarciadv.com.br/saude/cirurgia-negada", type: "website" },
}

export default function Page() {
  return <ProdutoPage slug="cirurgia-negada" />
}
