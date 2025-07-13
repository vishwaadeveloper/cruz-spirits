"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Award, Users, Globe, Clock } from "lucide-react"

export default function AboutPage() {
  const founders = [
    {
      name: "Karvin Cruz",
      title: "Founder & Master Sommelier",
      description:
        "With over 20 years of experience in the spirits industry, Karvin founded Cruz Spirits with a vision to bring the world's finest liquors to discerning connoisseurs.",
      image: "/placeholder.svg?height=400&width=300",
      expertise: ["Master Sommelier Certification", "International Wine & Spirit Research", "Luxury Brand Development"],
    },
    {
      name: "[Partner Name]",
      title: "Co-Founder & Operations Director",
      description:
        "A seasoned business executive with extensive experience in luxury retail and international distribution, bringing operational excellence to Cruz Spirits.",
      image: "/placeholder.svg?height=400&width=300",
      expertise: ["Luxury Retail Management", "International Distribution", "Strategic Partnerships"],
    },
  ]

  const milestones = [
    { year: "1995", event: "Karvin Cruz begins his journey in the spirits industry" },
    { year: "2008", event: "Achieves Master Sommelier certification" },
    { year: "2015", event: "Cruz Spirits is founded with a focus on rare collections" },
    { year: "2018", event: "Expands to international markets" },
    { year: "2021", event: "Opens flagship store in Napa Valley" },
    { year: "2024", event: "Launches premium online experience" },
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We curate only the finest spirits from renowned distilleries and vineyards worldwide.",
    },
    {
      icon: Users,
      title: "Heritage",
      description: "Preserving the traditions and craftsmanship that make each bottle a work of art.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting connoisseurs with exceptional spirits from every corner of the world.",
    },
    {
      icon: Clock,
      title: "Legacy",
      description: "Building relationships that span generations, one exceptional bottle at a time.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2379a896' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-32" />
              <div className="mx-4 w-2 h-2 bg-[#D4AF37] rounded-full" />
              <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-32" />
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-light mb-6 tracking-wide">
              Our <span className="text-[#79a896] italic">Story</span>
            </h1>

            <div className="w-24 h-px bg-[#D4AF37] mx-auto mb-8" />

            <p className="text-xl text-[#B0B0B0] max-w-4xl mx-auto font-light leading-relaxed">
              Cruz Spirits was born from a passion for exceptional craftsmanship and an unwavering commitment to
              quality. Founded by connoisseurs, for connoisseurs, we bridge the gap between legendary distilleries and
              discerning collectors worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-24" />
              <div className="mx-4 w-2 h-2 bg-[#D4AF37] rounded-full" />
              <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-24" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
              Meet the <span className="text-[#79a896] italic">Founders</span>
            </h2>

            <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-6" />

            <p className="text-[#B0B0B0] text-lg max-w-3xl mx-auto font-light">
              Visionaries who transformed their passion for exceptional spirits into a legacy of excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-[#2A2A2A] border border-[#333333] hover:border-[#79a896]/50 transition-all duration-500 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] via-transparent to-transparent opacity-60" />

                    {/* Ornate Corners */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#79a896]/50" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#79a896]/50" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-light mb-2 text-[#79a896]">{founder.name}</h3>
                    <p className="text-[#D4AF37] text-sm font-light mb-4 tracking-wide uppercase">{founder.title}</p>

                    <p className="text-[#B0B0B0] font-light leading-relaxed mb-6">{founder.description}</p>

                    {/* Expertise */}
                    <div>
                      <h4 className="font-serif text-lg font-light mb-3 text-white">Expertise</h4>
                      <ul className="space-y-2">
                        {founder.expertise.map((skill, skillIndex) => (
                          <li key={skillIndex} className="text-[#B0B0B0] text-sm font-light flex items-center">
                            <div className="w-1 h-1 bg-[#79a896] rounded-full mr-3" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Decorative Line */}
                    <div className="mt-6 w-0 h-px bg-gradient-to-r from-[#79a896] to-[#D4AF37] group-hover:w-full transition-all duration-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-24" />
              <div className="mx-4 w-2 h-2 bg-[#D4AF37] rounded-full" />
              <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-24" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
              Our <span className="text-[#79a896] italic">Journey</span>
            </h2>

            <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-6" />

            <p className="text-[#B0B0B0] text-lg max-w-3xl mx-auto font-light">
              From humble beginnings to becoming a trusted name in luxury spirits.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#79a896] via-[#79a896] to-transparent" />

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-center mb-12"
                >
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-[#79a896] rounded-full border-4 border-[#0A0A0A] relative z-10" />

                  {/* Content */}
                  <div className="ml-8 bg-[#1A1A1A] border border-[#333333] p-6 rounded-none flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-serif text-xl font-light text-[#D4AF37]">{milestone.year}</span>
                    </div>
                    <p className="text-[#B0B0B0] font-light leading-relaxed">{milestone.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-24" />
              <div className="mx-4 w-2 h-2 bg-[#D4AF37] rounded-full" />
              <div className="h-px bg-gradient-to-r from-transparent via-[#79a896] to-transparent w-24" />
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
              Our <span className="text-[#79a896] italic">Values</span>
            </h2>

            <div className="w-20 h-px bg-[#D4AF37] mx-auto mb-6" />

            <p className="text-[#B0B0B0] text-lg max-w-3xl mx-auto font-light">
              The principles that guide every decision and define our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group text-center"
              >
                <div className="bg-[#2A2A2A] border border-[#333333] hover:border-[#79a896]/50 transition-all duration-500 p-8 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-[#79a896]/10 rounded-full mb-6 border border-[#79a896]/20 group-hover:border-[#79a896]/50 transition-colors"
                  >
                    <value.icon className="w-8 h-8 text-[#79a896]" />
                  </motion.div>

                  <h3 className="font-serif text-xl font-light mb-4 group-hover:text-[#79a896] transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-[#B0B0B0] font-light leading-relaxed">{value.description}</p>

                  <div className="mt-6 w-0 h-px bg-[#79a896] group-hover:w-12 mx-auto transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
