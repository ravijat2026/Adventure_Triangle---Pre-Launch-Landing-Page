"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Snowflake, Heart, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WinterTrekkingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const benefits = [
    {
      icon: Sun,
      title: "The 'Snow Mirror' Effect",
      description:
        "Snow reflects up to 80% of UV light, exposing you to significantly more natural light than summer walks, triggering serotonin release.",
    },
    {
      icon: Snowflake,
      title: "Cold-Shock Endorphins",
      description:
        "Exercising in colder temperatures forces your body to work harder, stimulating higher endorphin release compared to gym workouts.",
    },
    {
      icon: Heart,
      title: "Cortisol Reduction",
      description:
        "Winter landscapes offer unique visual silence that dampens cognitive fatigue and reduces stress more effectively.",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-primary/5" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Science of Adventure
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            Why Your Brain Needs the Mountain More Than Your Couch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Humans weren't designed to hibernate indoors. Winter inactivity often leads to Seasonal Affective Disorder
            (SAD). Here's the science on why winter trekking is a powerful antidote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center bg-card/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-border shadow-xl"
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-6 text-balance">
            At Adventure Triangle, we don't just book trips; we facilitate a biological reset.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Don't fight the winter gloom from your living room. Step out into the light.
          </p>
          <a href="#beta">
            <Button size="lg" className="text-lg px-8 cursor-pointer">
              Join Our Winter Adventures
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
