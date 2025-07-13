"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const footerSections = [
    {
      title: "Collections",
      links: [
        "Single Malt Whiskey",
        "Vintage Cognac",
        "Rare Bordeaux",
        "Premium Champagne",
        "Artisan Gin",
        "Limited Editions",
      ],
    },
    {
      title: "Services",
      links: [
        "Personal Sommelier",
        "Corporate Gifts",
        "Wine Storage",
        "Appraisal Services",
        "Private Tastings",
        "Cellar Consultation",
      ],
    },
    {
      title: "Company",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Meet the Team", href: "/about" },
        "Distillery Partners",
        "Vineyard Tours",
        "Education Center",
        "Press & Awards",
      ],
    },
    {
      title: "Support",
      links: ["Contact Us", "Shipping Information", "Returns & Exchanges", "Size Guide", "Care Instructions", "FAQ"],
    },
  ]

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#333333]/50 relative">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent" />

      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex flex-col items-start mb-4">
                <div className="font-serif text-3xl font-bold tracking-wider mb-1">
                  <span className="text-[#79a896]">CRUZ</span>
                </div>
                <div className="text-xs tracking-[0.3em] text-[#B0B0B0] font-light mb-2">FINE SPIRITS</div>
                <div className="w-20 h-px bg-gradient-to-r from-[#79a896] to-[#D4AF37]" />
              </div>

              <p className="text-[#B0B0B0] mb-6 font-light leading-relaxed">
                Founded by Karvin Cruz, Cruz Spirits has been the premier destination for discerning collectors seeking
                the world's finest spirits and wines. Our legacy is built on expertise, authenticity, and an unwavering
                commitment to excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-[#B0B0B0] text-sm">
                  <Phone className="w-4 h-4 mr-3 text-[#79a896]" />
                  <span className="font-light">1-800-CRUZ-SPIRITS</span>
                </div>
                <div className="flex items-center text-[#B0B0B0] text-sm">
                  <Mail className="w-4 h-4 mr-3 text-[#79a896]" />
                  <span className="font-light">info@cruzspirits.com</span>
                </div>
                <div className="flex items-center text-[#B0B0B0] text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-[#79a896]" />
                  <span className="font-light">123 Vintage Lane, Napa Valley, CA</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-[#1A1A1A] border border-[#333333] rounded-full flex items-center justify-center hover:border-[#79a896] hover:bg-[#79a896]/10 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4 text-[#79a896]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h3 className="font-serif text-lg font-light mb-6 text-[#79a896] tracking-wide">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {typeof link === "object" ? (
                      <Link
                        href={link.href}
                        className="text-[#B0B0B0] hover:text-[#79a896] transition-colors font-light text-sm leading-relaxed block"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="text-[#B0B0B0] hover:text-[#79a896] transition-colors font-light text-sm leading-relaxed block"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-[#333333]/50 pt-12 mb-12"
        >
          <div className="text-center">
            <h3 className="font-serif text-2xl font-light mb-4 text-[#79a896]">Connoisseur's Newsletter</h3>
            <p className="text-[#B0B0B0] mb-6 font-light max-w-2xl mx-auto">
              Join our exclusive circle for early access to rare releases and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-[#1A1A1A] border border-[#333333] text-white placeholder-[#808080] focus:border-[#79a896] focus:outline-none font-light"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-transparent border border-[#79a896] text-[#79a896] hover:bg-[#79a896] hover:text-black transition-all duration-300 font-light tracking-wide uppercase text-sm"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333333]/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="text-[#808080] text-sm font-light mb-4 md:mb-0">
              <p>© 2024 Cruz Spirits. All rights reserved.</p>
              <p className="mt-1">Please enjoy responsibly. Must be 21+ to purchase.</p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-[#808080] text-sm font-light">
              <a href="#" className="hover:text-[#79a896] transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#79a896] transition-colors">
                Terms of Service
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#79a896] transition-colors">
                Accessibility
              </a>
              <span>|</span>
              <a href="#" className="hover:text-[#79a896] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#79a896]/30 to-transparent" />
    </footer>
  )
}
