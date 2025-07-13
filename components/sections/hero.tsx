"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Classic Pattern Background */}
      <motion.div className="absolute inset-0" style={{ opacity: heroOpacity, scale: heroScale }}>
        <div className="absolute inset-0 bg-gradient-radial from-[#1A1A1A] via-[#0A0A0A] to-[#000000]" />
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2379a896' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </motion.div>

      {/* Ornate Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#79a896]/20 rounded-full opacity-30" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#D4AF37]/20 rounded-full opacity-30" />
        <div className="absolute top-1/2 left-10 w-1 h-32 bg-gradient-to-b from-transparent via-[#79a896]/30 to-transparent" />
        <div className="absolute top-1/2 right-10 w-1 h-32 bg-gradient-to-b from-transparent via-[#79a896]/30 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* Ornate Top Border */}
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-32" />
            <div className="mx-4 w-2 h-2 bg-[#D4AF37] rounded-full" />
            <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-32" />
          </motion.div>

          <motion.h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <span className="text-white">Exceptional</span>
            <br />
            <span className="text-[#79a896] italic">Spirits</span>
          </motion.h1>

          <motion.div
            className="w-24 h-px bg-[#D4AF37] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 1.5 }}
          />

          <motion.p
            className="text-lg md:text-xl text-[#B0B0B0] mb-8 max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Founded by Karvin Cruz, we curate the world's finest collection of premium spirits and wines for the most
            discerning connoisseurs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-transparent border-2 border-[#79a896] text-[#79a896] font-light tracking-wider uppercase text-sm transition-all duration-500 hover:bg-[#79a896] hover:text-black overflow-hidden"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-[#79a896] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-transparent border border-[#D4AF37]/50 text-[#D4AF37] font-light tracking-wider uppercase text-sm transition-all duration-500 hover:border-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20"
            >
              Our Heritage
            </motion.button>
          </motion.div>

          {/* Ornate Bottom Border */}
          <motion.div
            className="flex items-center justify-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-[#79a896]/50 to-transparent w-48" />
          </motion.div>
        </motion.div>
      </div>

      {/* Classic Floating Elements */}
      <motion.div
        className="absolute right-20 top-1/3 hidden xl:block opacity-20"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <div className="w-24 h-40 bg-gradient-to-b from-[#D4AF37]/30 to-[#B8860B]/30 rounded-t-full border border-[#D4AF37]/20" />
      </motion.div>
    </section>
  )
}
