"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/adventure-landscape-mountains-ocean-sky.jpg"
          alt="Adventure background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground text-balance leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Discover. Connect.
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary/80 via-primary to-primary/80 bg-clip-text text-transparent">
              Experience. Adventure.
            </span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl text-muted-foreground">anywhere.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            The global adventure marketplace helping travelers discover and book verified experiences across water, air,
            and land. Launching January 26, 2026.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a href="#beta">
              <Button size="lg" className="text-lg   px-8 gap-2 cursor-pointer whitespace-nowrap">
                Join Beta Program
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#partner">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 gap-2 bg-background/80 backdrop-blur-sm cursor-pointer"
              >
                Become a Partner
              </Button>
            </a>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { value: "Toronto", label: "Global HQ" },
              { value: "3 Regions", label: "Canada | Nepal | India" },
              { value: "Jan 26, 2026", label: "Launch Date" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
