"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function Collections() {
  const collections = [
    {
      name: "Single Malt Whiskey",
      count: 47,
      description: "Aged to perfection in oak barrels",
      color: "#D4AF37",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Vintage Cognac",
      count: 23,
      description: "Centuries of French tradition",
      color: "#B87333",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Rare Bordeaux",
      count: 89,
      description: "From legendary vineyards",
      color: "#722F37",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Artisan Gin",
      count: 34,
      description: "Small batch botanical spirits",
      color: "#79a896",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-24 bg-[#1A1A1A] relative">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2379a896' fillOpacity='0.1'%3E%3Cpath d='M50 50c13.807 0 25-11.193 25-25S63.807 0 50 0 25 11.193 25 25s11.193 25 25 25zm0 25c13.807 0 25-11.193 25-25S63.807 50 50 50s-25 11.193-25 25 11.193 25 25 25z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Ornate Header */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-24" />
            <div className="mx-4 w-2 h-2 bg-[#D4AF37] rounded-full" />
            <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-24" />
          </div>

          <h2 className="font-serif text-4xl md:text-6xl font-light mb-4 tracking-wide">
            Our <span className="text-[#79a896] italic">Collections</span>
          </h2>

          <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />

          <p className="text-[#B0B0B0] text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Each collection represents decades of careful curation, bringing together the finest expressions from
            renowned distilleries and vineyards around the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#2A2A2A] border border-[#333333] hover:border-[#79a896]/50 transition-all duration-500 overflow-hidden relative">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${collection.image})`,
                      backgroundColor: `${collection.color}20`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] via-transparent to-transparent" />

                  {/* Ornate Corner */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-3 h-3 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: collection.color }}
                    />
                    <Badge
                      variant="secondary"
                      className="bg-[#79a896]/10 text-[#79a896] border-[#79a896]/20 font-light text-xs tracking-wide"
                    >
                      {collection.count} Selections
                    </Badge>
                  </div>

                  <h3 className="font-serif text-xl font-light mb-2 group-hover:text-[#79a896] transition-colors tracking-wide">
                    {collection.name}
                  </h3>

                  <p className="text-[#B0B0B0] text-sm font-light leading-relaxed">{collection.description}</p>

                  {/* Decorative Line */}
                  <div className="mt-4 w-0 h-px bg-[#79a896] group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
