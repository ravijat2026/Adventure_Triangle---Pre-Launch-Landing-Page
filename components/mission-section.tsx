"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Waves, Wind, Mountain } from "lucide-react"

export function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const missions = [
    {
      icon: Waves,
      title: "Water Adventures",
      description: "Diving, sailing, surfing, and underwater exploration with certified operators",
      image: "/scuba-diving-ocean-adventure.jpg",
    },
    {
      icon: Wind,
      title: "Air Adventures",
      description: "Paragliding, skydiving, hot air ballooning, and aerial experiences",
      image: "/paragliding-sky-adventure.jpg",
    },
    {
      icon: Mountain,
      title: "Land Adventures",
      description: "Hiking, camping, rock climbing, and wilderness exploration worldwide",
      image: "/mountain-hiking-adventure.png",
    },
  ]

  return (
    <section id="mission" className="py-24 bg-gradient-to-br from-background via-primary/5 to-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Mission:{" "}
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              Water | Air | Land
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We cover every dimension of adventure, ensuring you can explore the planet in all its glory with trusted
            local providers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={mission.image || "/placeholder.svg"}
                  alt={mission.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>
              <div className="p-6 bg-card">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <mission.icon className="w-6 h-6 text-primary transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{mission.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{mission.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
