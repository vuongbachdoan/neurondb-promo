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
  title: "Neuron Engine - Neural Database Technology",
  description: "Revolutionary neural database engine combining AI intelligence with high-performance data processing",
  generator: "v0.app",
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
      </head>
      <body className="font-mono antialiased">{children}</body>
    </html>
  )
}
