import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
  variable: "--font-lato",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.digarciadv.com.br"),

  icons: {
    icon: [{ url: "/favicon.ico" }],
    shortcut: ["/favicon.ico"],
    apple: ["/favicon.ico"],
  },

  title: {
    default: "Dr. Gugan Pimentel Di Garcia",
    template: "%s | Dr. Gugan Pimentel Di Garcia - Advogado de Trânsito",
  },

  description:
    "Advogado especialista em Direito de Trânsito e Veicular em Brasília/DF. Defesa em multas, suspensão e cassação de CNH, busca e apreensão, revisão de financiamento. Atendimento em todo o Brasil. Consulta gratuita.",

  keywords: [
    "advogado de trânsito",
    "advogado trânsito Brasília",
    "advogado CNH suspensa",
    "advogado multa bafômetro",
    "defesa multa de trânsito",
    "suspensão CNH",
    "cassação CNH",
    "busca e apreensão veículo",
    "revisão financiamento veículo",
    "advogado DETRAN",
    "recurso multa trânsito",
    "advogado Lei Seca",
    "OAB DF",
    "direito de trânsito",
    "direito veicular",
  ],

  authors: [
    {
      name: "Dr. Gugan Pimentel Di Garcia",
      url: "https://www.digarciadv.com.br",
    },
  ],

  creator: "Dr. Gugan Pimentel Di Garcia",
  publisher: "Dr. Gugan Pimentel Di Garcia",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.digarciadv.com.br",
    siteName: "Dr. Gugan Pimentel Di Garcia - Advogado de Trânsito",
    title:
      "Dr. Gugan Pimentel Di Garcia | Advogado Especialista em Direito de Trânsito",
    description:
      "Advogado especialista em Direito de Trânsito e Veicular em Brasília/DF.",
    images: [
      {
        url: "/gugan-img.jpeg",
        width: 1200,
        height: 630,
        alt: "Dr. Gugan Pimentel Di Garcia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/gugan-img.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "Zy1IWzgtVfhput-Ra3mIKp0SOG3w3tx9BMSrRy8qRtA",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`font-sans ${montserrat.variable} ${lato.variable} antialiased`}
      >
        <Suspense fallback={null}>{children}</Suspense>

        {/* Structured Data para Google exibir a logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Dr. Gugan Pimentel Di Garcia",
              url: "https://www.digarciadv.com.br",
              logo: "https://www.digarciadv.com.br/logo.png",
              image: "https://www.digarciadv.com.br/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Brasília",
                addressRegion: "DF",
                addressCountry: "BR",
              },
            }),
          }}
        />

        <Analytics />
      </body>
    </html>
  )
}