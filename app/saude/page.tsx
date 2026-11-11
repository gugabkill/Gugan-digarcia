import type { Metadata } from "next"
import { SaudePage } from "@/components/saude/saude-page"

export const metadata: Metadata = {
  title: { absolute: "Advogado Direito da Saúde | Ações contra Planos de Saúde | Di Garcia Advocacia" },
  description:
    "Plano de saúde negou medicamento, cirurgia, home care ou aplicou reajuste abusivo? Atuação especializada em Direito da Saúde, com pedido de liminar quando há urgência. Atendimento em todo o Brasil.",
  alternates: { canonical: "/saude" },
  openGraph: {
    images: ["/gugan-img.jpeg"],
    title: "Direito da Saúde | Di Garcia Advocacia",
    description:
      "Atuação contra negativas e abusos de planos de saúde: medicamentos, cirurgias, home care e reajustes abusivos.",
    url: "https://www.digarciadv.com.br/saude",
    type: "website",
  },
}

export default function Page() {
  return <SaudePage />
}
