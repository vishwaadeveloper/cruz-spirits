"use client"

import { motion } from "framer-motion"
import { Star, Heart } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const products = [
    {
      id: 1,
      name: "Macallan 25 Year Single Malt",
      category: "Single Malt Whisky",
      vintage: "1998",
      price: 2499,
      originalPrice: 2799,
      rating: 4.9,
      reviews: 127,
      badge: "Limited Edition",
      description: "Aged in sherry oak casks for exceptional depth",
      image: "/placeholder.svg?height=500&width=350",
    },
    {
      id: 2,
      name: "Dom Pérignon Vintage",
      category: "Champagne",
      vintage: "2013",
      price: 299,
      rating: 4.8,
      reviews: 89,
      badge: "Cellar Selection",
      description: "The pinnacle of champagne excellence",
      image: "/placeholder.svg?height=500&width=350",
    },
    {
      id: 3,
      name: "Hennessy Paradis Imperial",
      category: "Cognac",
      vintage: "Blend",
      price: 899,
      rating: 4.9,
      reviews: 156,
      badge: "Master's Choice",
      description: "A symphony of over 100 rare eaux-de-vie",
      image: "/placeholder.svg?height=500&width=350",
    },
    {
      id: 4,
      name: "Château Margaux",
      category: "Bordeaux Wine",
      vintage: "2016",
      price: 1299,
      rating: 4.9,
      reviews: 203,
      badge: "Grand Cru",
      description: "First growth Bordeaux from legendary terroir",
      image: "/placeholder.svg?height=500&width=350",
    },
  ]

  return (
    <section className="py-24 bg-[#1A1A1A] relative">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-8">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23333333' fillOpacity='0.3'%3E%3Cpath d='M20 20c5.523 0 10-4.477 10-10S25.523 0 20 0 10 4.477 10 10s4.477 10 10 10zm0 20c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#0A0A0A] opacity-50" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Ornate Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-32" />
            <div className="mx-4 flex space-x-2">
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
              <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-32" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-light mb-4 tracking-wide">
            Featured <span className="text-[#79a896] italic">Selections</span>
          </h2>

          <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-6" />

          <p className="text-[#B0B0B0] text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Handpicked by our master sommelier, these exceptional spirits represent the pinnacle of their respective
            categories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#1A1A1A] border border-[#333333] hover:border-[#79a896]/50 transition-all duration-500 overflow-hidden relative">
                {/* Product Image */}
                <div className="relative overflow-hidden h-80">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={350}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4">
                    {product.badge && (
                      <Badge className="bg-[#D4AF37] text-black font-light text-xs tracking-wide">
                        {product.badge}
                      </Badge>
                    )}
                  </div>

                  {product.originalPrice && (
                    <Badge variant="destructive" className="absolute top-4 right-4 bg-red-700/80 font-light">
                      Sale
                    </Badge>
                  )}

                  {/* Favorite Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute bottom-4 right-4 p-2 bg-[#2A2A2A]/80 backdrop-blur-sm rounded-full border border-[#333333] hover:border-[#79a896] transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        favorites.includes(product.id) ? "text-red-500 fill-current" : "text-[#B0B0B0]"
                      }`}
                    />
                  </motion.button>

                  {/* Ornate Corner Decoration */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#79a896]/30" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#79a896]/30" />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating) ? "text-[#D4AF37] fill-current" : "text-[#333333]"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-[#B0B0B0] text-xs font-light">({product.reviews})</span>
                  </div>

                  {/* Category & Vintage */}
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[#79a896] text-sm font-light tracking-wide">{product.category}</p>
                    <p className="text-[#D4AF37] text-xs font-light">{product.vintage}</p>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-serif text-lg font-light mb-2 group-hover:text-[#79a896] transition-colors leading-tight">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#B0B0B0] text-sm font-light mb-4 leading-relaxed">{product.description}</p>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-xl font-light text-[#79a896]">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[#808080] line-through text-sm font-light">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="group/btn relative px-4 py-2 bg-transparent border border-[#79a896]/50 text-[#79a896] font-light text-sm tracking-wide uppercase transition-all duration-300 hover:border-[#79a896] hover:bg-[#79a896] hover:text-black overflow-hidden"
                    >
                      <span className="relative z-10">Add to Cart</span>
                      <div className="absolute inset-0 bg-[#79a896] transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.button>
                  </div>

                  {/* Decorative Line */}
                  <div className="mt-4 w-0 h-px bg-gradient-to-r from-[#79a896] to-[#D4AF37] group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
