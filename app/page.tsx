"use client"

import Header from "@/components/layout/header"
import Hero from "@/components/sections/hero"
import Collections from "@/components/sections/collections"
import FeaturedProducts from "@/components/sections/featured-products"
import TrustIndicators from "@/components/sections/trust-indicators"
import Newsletter from "@/components/sections/newsletter"
import Footer from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Collections />
      <FeaturedProducts />
      <TrustIndicators />
      <Newsletter />
      <Footer />
    </div>
  )
}
