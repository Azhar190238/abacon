import React from "react"
import { Inter } from "next/font/google"
import "../../styles/globals.css"
import Navbar from "../components/layout/navbar"
import Header from "../components/layout/header"
import Footer from "../components/landing/layout/footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Residential & Custom Building Designers in Sydney NSW",
  description: "Residential & Custom Building Designers in Sydney NSW (ABCON)",
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className='font-roboto '
        suppressHydrationWarning
      >
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
