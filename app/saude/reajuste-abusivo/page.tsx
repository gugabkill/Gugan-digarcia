import type { Metadata } from "next"
import { ReajustePage } from "@/components/saude/reajuste-page"

const title = "Reajuste Abusivo e Falso Coletivo | Simulador | Di Garcia Advocacia"
const description =
  "Plano de saúde no CNPJ ou MEI com reajuste muito alto? Simule grátis quanto você pode ter pago a mais nos últimos 3 anos pelo teto da ANS. Atendimento em todo o Brasil."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/saude/reajuste-abusivo" },
  openGraph: {
    images: ["/gugan-img.jpeg"], title, description, url: "https://www.digarciadv.com.br/saude/reajuste-abusivo", type: "website" },
}

export default function Page() {
  return <ReajustePage />
}
