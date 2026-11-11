import type { Metadata } from "next"
import { Institucional } from "@/components/home/institucional"

export const metadata: Metadata = {
  title: { absolute: "Di Garcia Advocacia e Consultoria | Escritório de Advocacia" },
  description:
    "Di Garcia Advocacia e Consultoria. Advocacia judicial e administrativa, preventiva e personalizada, com atendimento em todo o Brasil.",
  alternates: { canonical: "/" },
}

export default function Page() {
  return <Institucional />
}
