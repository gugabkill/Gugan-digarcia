import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappLink =
    "https://wa.me/5561991850093?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20jurídica."

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        asChild
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar consulta pelo WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </Button>
    </div>
  )
}
