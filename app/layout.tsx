import type React from "react"
import type { Metadata } from "next"
import { Chivo_Mono, Roboto_Mono } from "next/font/google"
import "./globals.css"

const chivoMono = Chivo_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chivo-mono",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "NeuronDB - Neural Graph Database with Semantic Embeddings",
  description: "A neural graph database that combines semantic embeddings with neuron-like behavior for intelligent data storage and retrieval. Features 384-dimension vectors, NQL query language, and RAG integration.",
  keywords: "neural database, semantic search, graph database, embeddings, NQL, RAG, AI database, semantic similarity, neural network, machine learning",
  authors: [{ name: "Vuong Bach Doan", url: "https://www.linkedin.com/in/vuongbd2007/" }],
  creator: "Vuong Bach Doan",
  publisher: "NeuronDB",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neurondb.dev",
    title: "NeuronDB - Neural Graph Database with Semantic Embeddings",
    description: "A neural graph database that understands meaning, not just keywords. Built with semantic embeddings and neural operations.",
    siteName: "NeuronDB",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "NeuronDB Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuronDB - Neural Graph Database",
    description: "A neural graph database that understands meaning, not just keywords.",
    images: ["/preview.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#22c55e",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${chivoMono.variable} ${robotoMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/logo.avif" type="image/avif" />
        <link rel="canonical" href="https://neurondb.dev" />
        <meta name="google-site-verification" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "NeuronDB",
              "description": "A neural graph database that combines semantic embeddings with neuron-like behavior for intelligent data storage and retrieval.",
              "url": "https://neurondb.dev",
              "author": {
                "@type": "Person",
                "name": "Vuong Bach Doan",
                "url": "https://www.linkedin.com/in/vuongbd2007/"
              },
              "applicationCategory": "DatabaseApplication",
              "operatingSystem": "macOS, Ubuntu",
              "programmingLanguage": "Python",
              "license": "MIT",
              "downloadUrl": "https://test.pypi.org/project/neurondb/",
              "codeRepository": "https://github.com/vuongbachdoan/neurondb"
            })
          }}
        />
      </head>
      <body className="font-mono antialiased">{children}</body>
    </html>
  )
}
