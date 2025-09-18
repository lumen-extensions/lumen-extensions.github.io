import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Lumen Extensions - Browser Extension Development",
  description: "Professional browser extension development services. Custom extensions for Chrome, Firefox, Safari, and Edge.",
  keywords: "browser extension, Chrome extension, Firefox addon, Safari extension, Edge extension, web development",
  authors: [{ name: "Lumen Extensions" }],
  creator: "Lumen Extensions",
  publisher: "Lumen Extensions",
  robots: "index, follow",
  openGraph: {
    title: "Lumen Extensions - Browser Extension Development",
    description: "Professional browser extension development services for all major browsers.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}