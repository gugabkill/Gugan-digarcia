import type { Metadata } from "next"
import { Institucional } from "@/components/home/institucional"

export const metadata: Metadata = {
  title: { absolute: "Di Garcia Advocacia | Direito de Trânsito e Direito da Saúde" },
  description:
    "Di Garcia Advocacia e Consultoria. Advocacia especializada em Direito de Trânsito e Direito da Saúde, com atendimento personalizado em todo o Brasil.",
  alternates: { canonical: "/" },
}

export default function Page() {
  return <Institucional />
}
