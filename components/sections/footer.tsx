import { Award, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-card to-background border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/logo-gugan-1.png" className="w-80 " alt="" />
              {/* <div>
                <span className="font-serif font-bold text-xl">Dr. Gugan Pimentel</span>
                <p className="text-sm text-muted-foreground">Especialista em Direito de Trânsito</p>
              </div> */}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Advogado especialista em Direito de Trânsito e Direito Veicular com mais de 5 anos de experiência.
              Vice-Presidente da Comissão de Direito de Trânsito da OAB/DF.
            </p>
            <div className="flex gap-3">
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a> */}
              <a
                  href="https://www.facebook.com/gugan.gumido?mibextid=wwXIfr&rdid=cl0MOztV4rpXBzYH&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17rKg3v1qi%2F%3Fmibextid%3DwwXIfr%26ref%3D1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a> */}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="hover:text-accent transition-colors cursor-pointer">Defesa em Multa de Bafômetro</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Suspensão e Cassação da CNH</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Ação Revisional de Financiamento</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Busca e Apreensão de Veículo</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Defesas Administrativas</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Acidentes de Trânsito</li>
              <li className="hover:text-accent transition-colors cursor-pointer">Consultoria e Assistência</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-accent" />
                <span>OAB/DF 79.271</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>(61) 99185-0093</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>gumido@hotmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Brasília, DF</span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Dr. Gugan Pimentel Di Garcia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
