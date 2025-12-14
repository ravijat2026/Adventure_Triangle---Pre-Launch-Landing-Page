"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Globe, Users, Zap } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const features = [
    {
      icon: Globe,
      title: "Trusted & Transformative",
      description:
        "Discover verified adventure experiences with certified operators worldwide. We connect travelers to authentic, safe adventures.",
    },
    {
      icon: Users,
      title: "Operator Empowerment",
      description:
        "We empower local adventure providers with global visibility, seamless booking management, and certification showcase.",
    },
    {
      icon: Zap,
      title: "Emotion-First Discovery",
      description:
        "Mobile-friendly platform designed for meaningful experiences. Find adventures that resonate with your spirit.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-muted/40 via-background to-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">About Adventure Triangle</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A global adventure activity marketplace helping travelers discover and book verified experiences across
            water, air, and land. From skydiving and rafting to hiking and paragliding - we're building the future of
            adventure: trusted, transformative, and truly global.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              <motion.div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
