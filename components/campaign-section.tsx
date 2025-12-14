"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram, Facebook, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CampaignSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const socialPosts = [
    {
      image: "/adventure-surfing-ocean.jpg",
      caption: "Riding waves in Bali",
      likes: "2.4K",
    },
    {
      image: "/skydiving-parachute-sky.jpg",
      caption: "Sky high adventures",
      likes: "3.1K",
    },
    {
      image: "/mountain-climbing-peak.jpg",
      caption: "Summit conquered",
      likes: "2.8K",
    },
    {
      image: "/images/diving.png",
      caption: "Underwater wonders",
      likes: "3.5K",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-primary/10" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              #FeelTheAdventure
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Join thousands of adventurers sharing their epic journeys. Tag us in your adventures and inspire the
            community!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              href="https://instagram.com/adventuretriangle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="gap-2 cursor-pointer hover:border-primary/50 transition-all duration-300 bg-transparent whitespace-nowrap"
              >
                <Instagram className="w-5 h-5 flex-shrink-0" />
                <span>Instagram</span>
              </Button>
            </motion.a>
            <motion.a
              href="https://facebook.com/adventuretriangle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="gap-2 cursor-pointer hover:border-primary/50 transition-all duration-300 bg-transparent whitespace-nowrap"
              >
                <Facebook className="w-5 h-5 flex-shrink-0" />
                <span>Facebook</span>
              </Button>
            </motion.a>
            <motion.a
              href="https://linkedin.com/company/adventuretriangle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="gap-2 cursor-pointer hover:border-primary/50 transition-all duration-300 bg-transparent whitespace-nowrap"
              >
                <Linkedin className="w-5 h-5 flex-shrink-0" />
                <span>LinkedIn</span>
              </Button>
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-primary/50"
            >
              <motion.img
                src={post.image || "/placeholder.svg"}
                alt={post.caption}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex flex-col justify-end p-4"
              >
                <p className="text-sm text-foreground mb-2 font-medium">{post.caption}</p>
                <p className="text-xs text-muted-foreground">❤️ {post.likes} likes</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
