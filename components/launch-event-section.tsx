"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Users } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function LaunchEventSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const { toast } = useToast()
  const [eventData, setEventData] = useState({
    name: "",
    email: "",
    attendees: "1",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const registrations = JSON.parse(localStorage.getItem("eventRegistrations") || "[]")
    registrations.push({ ...eventData, id: Date.now(), registeredAt: new Date().toISOString() })
    localStorage.setItem("eventRegistrations", JSON.stringify(registrations))

    toast({
      title: "Registration Confirmed!",
      description: "You're registered for our launch event. Check your email for details.",
    })

    setEventData({ name: "", email: "", attendees: "1" })
  }

  return (
    <section
      className="py-24 bg-gradient-to-br from-background via-muted/20 to-primary/10 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-5">
        <img src="/celebration-event-launch.jpg" alt="Event background" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Join Our Launch Event</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Be part of history as we officially launch Adventure Triangle on January 26, 2026. Network with industry
              leaders, adventure enthusiasts, and partners from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card p-6 rounded-lg border border-border text-center cursor-pointer hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <Calendar className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="font-bold text-card-foreground">January 26, 2026</div>
              <div className="text-sm text-muted-foreground">6:00 PM - 10:00 PM</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card p-6 rounded-lg border border-border text-center cursor-pointer hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="font-bold text-card-foreground">Virtual + In-Person</div>
              <div className="text-sm text-muted-foreground">Toronto | Nepal | India</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card p-6 rounded-lg border border-border text-center cursor-pointer hover:border-primary/50 hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <Users className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="font-bold text-card-foreground">5,000+ Expected</div>
              <div className="text-sm text-muted-foreground">Attendees Worldwide</div>
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border max-w-md mx-auto shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-card-foreground text-center">Register Now</h3>
            <div className="space-y-4">
              <Input
                placeholder="Full Name"
                value={eventData.name}
                onChange={(e) => setEventData({ ...eventData, name: e.target.value })}
                required
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={eventData.email}
                onChange={(e) => setEventData({ ...eventData, email: e.target.value })}
                required
              />
              <Input
                type="number"
                placeholder="Number of Attendees"
                value={eventData.attendees}
                onChange={(e) => setEventData({ ...eventData, attendees: e.target.value })}
                min="1"
                max="10"
                required
              />
              <Button type="submit" className="w-full cursor-pointer" size="lg">
                Secure Your Spot
              </Button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
