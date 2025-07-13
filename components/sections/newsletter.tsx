"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] relative">
      {/* Ornate Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2379a896' fillOpacity='0.1'%3E%3Cpath d='M100 100c27.614 0 50-22.386 50-50S127.614 0 100 0 50 22.386 50 50s22.386 50 50 50zm0 50c27.614 0 50-22.386 50-50s-22.386-50-50-50-50 22.386-50 50 22.386 50 50 50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          {/* Ornate Header */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-32" />
            <div className="mx-6 flex items-center space-x-3">
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
              <Mail className="w-6 h-6 text-[#79a896]" />
              <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-32" />
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4 tracking-wide">
            Join the <span className="text-[#79a896] italic">Cruz</span> Circle
          </h2>

          <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-6" />

          <p className="text-[#B0B0B0] text-lg mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Receive exclusive access to rare releases, private tastings, and expert insights from Karvin Cruz and our
            master sommelier team.
          </p>

          {/* Newsletter Form */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-[#2A2A2A] border border-[#333333] rounded-none">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent border-none text-white placeholder-[#808080] focus:ring-0 focus:border-none font-light tracking-wide flex-1"
              />
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-6 py-3 bg-transparent border border-[#79a896] text-[#79a896] font-light tracking-wider uppercase text-sm transition-all duration-300 hover:bg-[#79a896] hover:text-black overflow-hidden"
              >
                <span className="relative z-10">Subscribe</span>
                <div className="absolute inset-0 bg-[#79a896] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </div>

            <p className="text-[#808080] text-xs mt-4 font-light">
              By subscribing, you agree to receive marketing communications. Unsubscribe at any time.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { title: "Exclusive Releases", desc: "First access to limited editions" },
              { title: "Expert Insights", desc: "Tasting notes and pairing guides" },
              { title: "Member Pricing", desc: "Special rates on premium selections" },
            ].map((benefit, index) => (
              <div key={benefit.title} className="text-center">
                <div className="w-12 h-px bg-[#79a896] mx-auto mb-3" />
                <h3 className="font-serif text-lg font-light mb-2 text-[#79a896]">{benefit.title}</h3>
                <p className="text-[#B0B0B0] text-sm font-light">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
