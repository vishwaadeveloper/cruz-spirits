"use client"

import { motion } from "framer-motion"
import { Shield, Truck, Award, Star, Clock, Globe } from "lucide-react"

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      desc: "Every bottle verified and certified",
      detail: "Our expert team authenticates each product",
    },
    {
      icon: Truck,
      title: "White Glove Delivery",
      desc: "Secure, temperature-controlled shipping",
      detail: "Professional handling for precious cargo",
    },
    {
      icon: Award,
      title: "Master Sommelier Curated",
      desc: "Hand-selected by certified experts",
      detail: "Over 30 years of combined experience",
    },
    {
      icon: Clock,
      title: "Heritage Since 1892",
      desc: "Over a century of excellence",
      detail: "Four generations of wine expertise",
    },
    {
      icon: Star,
      title: "Exclusive Access",
      desc: "Rare and limited allocations",
      detail: "Direct relationships with producers",
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      desc: "From the world's finest regions",
      detail: "Partnerships across six continents",
    },
  ]

  return (
    <section className="py-20 bg-[#1A1A1A] relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2379a896' fillOpacity='0.1'%3E%3Cpath d='M60 60c16.569 0 30-13.431 30-30S76.569 0 60 0 30 13.431 30 30s13.431 30 30 30zm0 30c16.569 0 30-13.431 30-30S76.569 60 60 60s-30 13.431-30 30 13.431 30 30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-24" />
            <div className="mx-4 w-2 h-2 bg-[#D4AF37] rounded-full" />
            <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-24" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 tracking-wide">
            The <span className="text-[#79a896] italic">Heritage</span> Promise
          </h2>

          <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-6" />

          <p className="text-[#B0B0B0] text-lg max-w-2xl mx-auto font-light">
            Our commitment to excellence is built on generations of expertise and unwavering dedication to quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {indicators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group text-center"
            >
              <div className="bg-[#2A2A2A] border border-[#333333] hover:border-[#79a896]/50 transition-all duration-500 p-8 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-[#79a896]/10 rounded-full mb-6 border border-[#79a896]/20 group-hover:border-[#79a896]/50 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-[#79a896]" />
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-xl font-light mb-3 group-hover:text-[#79a896] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#B0B0B0] font-light mb-2 leading-relaxed">{item.desc}</p>

                <p className="text-[#808080] text-sm font-light">{item.detail}</p>

                {/* Decorative Element */}
                <div className="mt-6 w-0 h-px bg-[#79a896] group-hover:w-12 mx-auto transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
