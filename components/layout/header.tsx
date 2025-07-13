"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Search, User, Menu, Phone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

interface HeaderProps {
  cartCount?: number
}

export default function Header({ cartCount = 0 }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#1A1A1A] border-b border-[#333333]/30 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-[#B0B0B0]">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                1-800-CRUZ-SPIRITS
              </span>
              <span>Free shipping on orders over $500</span>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-[#B0B0B0]">
              <a href="#" className="hover:text-[#79a896] transition-colors">
                Store Locator
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#79a896] transition-colors">
                Gift Cards
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#79a896] transition-colors">
                Corporate Sales
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header className="sticky top-0 z-50 transition-all duration-300" initial={{ y: -100 }} animate={{ y: 0 }}>
        <div className="backdrop-blur-md bg-[#0A0A0A]/95 border-b border-[#333333]/50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/">
                <motion.div
                  className="flex flex-col items-center cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div className="text-3xl font-serif font-bold tracking-wider">
                    <span className="text-[#79a896]">CRUZ</span>
                  </div>
                  <div className="text-xs tracking-[0.3em] text-[#B0B0B0] font-light">FINE SPIRITS</div>
                  <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent mt-1"></div>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {[
                  { name: "Home", href: "/" },
                  { name: "Collections", href: "#" },
                  { name: "Whiskey & Bourbon", href: "#" },
                  { name: "Wine & Champagne", href: "#" },
                  { name: "Spirits & Liqueurs", href: "#" },
                  { name: "About", href: "/about" },
                ].map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.span
                      className="text-[#E0E0E0] hover:text-[#79a896] transition-colors relative group font-light tracking-wide cursor-pointer"
                      whileHover={{ y: -1 }}
                    >
                      {item.name}
                      <motion.div className="absolute -bottom-1 left-0 w-0 h-px bg-[#79a896] group-hover:w-full transition-all duration-500" />
                    </motion.span>
                  </Link>
                ))}
              </nav>

              {/* Actions */}
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 hover:bg-[#1A1A1A] rounded-full transition-colors border border-transparent hover:border-[#333333]"
                >
                  <Search className="w-5 h-5 text-[#E0E0E0]" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 hover:bg-[#1A1A1A] rounded-full transition-colors border border-transparent hover:border-[#333333]"
                >
                  <User className="w-5 h-5 text-[#E0E0E0]" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-3 hover:bg-[#1A1A1A] rounded-full transition-colors border border-transparent hover:border-[#333333]"
                >
                  <ShoppingCart className="w-5 h-5 text-[#E0E0E0]" />
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-[#79a896] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </motion.button>

                <button
                  className="lg:hidden p-3 hover:bg-[#1A1A1A] rounded-full transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu className="w-5 h-5 text-[#E0E0E0]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  )
}
