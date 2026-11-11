import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { absolute: "Advogado de Trânsito | Bafômetro, Suspensão de CNH e Acidentes | Di Garcia Advocacia" },
  description:
    "Advogado especialista em Direito de Trânsito e Veicular. Defesa em multa de bafômetro, suspensão e cassação de CNH, acidentes de trânsito e defesas no DETRAN. Atendimento em todo o Brasil.",
  alternates: { canonical: "/transito" },
}

export default function TransitoLayout({ children }: { children: React.ReactNode }) {
  return children
}
