import type { Metadata } from "next"
import { ProdutoPage } from "@/components/saude/produto-page"
import { produtos } from "@/lib/saude-produtos"

const p = produtos["medicamento-negado"]

export const metadata: Metadata = {
  title: { absolute: p.seo.title },
  description: p.seo.description,
  alternates: { canonical: "/saude/medicamento-negado" },
  openGraph: {
    images: ["/gugan-img.jpeg"], title: p.seo.title, description: p.seo.description, url: "https://www.digarciadv.com.br/saude/medicamento-negado", type: "website" },
}

export default function Page() {
  return <ProdutoPage slug="medicamento-negado" />
}
