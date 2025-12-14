"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export function BetaRegistration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const { toast } = useToast()
  const [betaData, setBetaData] = useState({
    fullName: "",
    email: "",
    interests: [] as string[],
  })

  const interests = ["Water Adventures", "Air Adventures", "Land Adventures", "All Adventures"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const betaUsers = JSON.parse(localStorage.getItem("betaUsers") || "[]")
    betaUsers.push({ ...betaData, id: Date.now(), registeredAt: new Date().toISOString() })
    localStorage.setItem("betaUsers", JSON.stringify(betaUsers))

    toast({
      title: "Welcome to the Beta!",
      description: "You're in! We'll send you early access details soon.",
    })

    setBetaData({ fullName: "", email: "", interests: [] })
  }

  const toggleInterest = (interest: string) => {
    setBetaData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  return (
    <section id="beta" className="py-24 bg-gradient-to-br from-muted/40 via-background to-primary/5" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Join Our Beta Program</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get early access to Adventure Triangle and be among the first to experience the future of adventure
              travel. Limited spots available for our January 26, 2026 launch!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card/80 backdrop-blur-sm p-8 rounded-xl border border-border shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Full Name"
                  value={betaData.fullName}
                  onChange={(e) => setBetaData({ ...betaData, fullName: e.target.value })}
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={betaData.email}
                  onChange={(e) => setBetaData({ ...betaData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-card-foreground mb-3 block">What interests you most?</label>
                <div className="space-y-3">
                  {interests.map((interest) => (
                    <motion.div
                      key={interest}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 cursor-pointer"
                      whileHover={{ x: 4 }}
                    >
                      <Checkbox
                        id={interest}
                        checked={betaData.interests.includes(interest)}
                        onCheckedChange={() => toggleInterest(interest)}
                        className="cursor-pointer"
                      />
                      <label htmlFor={interest} className="text-sm text-muted-foreground cursor-pointer flex-1">
                        {interest}
                      </label>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Button type="submit" className="w-full cursor-pointer" size="lg">
                Join Beta Program
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By joining, you agree to receive updates about Adventure Triangle. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
