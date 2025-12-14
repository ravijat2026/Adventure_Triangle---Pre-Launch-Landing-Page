"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function PartnerOnboarding() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    adventureType: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await new Promise((resolve) => setTimeout(resolve, 1000))

    const partners = JSON.parse(localStorage.getItem("partners") || "[]")
    partners.push({ ...formData, id: Date.now(), submittedAt: new Date().toISOString() })
    localStorage.setItem("partners", JSON.stringify(partners))

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 48 hours.",
    })

    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      adventureType: "",
      description: "",
    })
  }

  const benefits = [
    "Global exposure to adventure seekers",
    "Streamlined booking management",
    "Marketing support and promotion",
    "Zero upfront costs",
  ]

  return (
    <section id="partner" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/10" ref={ref}>
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Become a Partner</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join our global network of adventure providers and grow your business while helping adventurers discover
              unforgettable experiences.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl border border-border shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Partner Application</h3>

              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Contact Name"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Adventure Type (Water/Air/Land)"
                    value={formData.adventureType}
                    onChange={(e) => setFormData({ ...formData, adventureType: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your adventure services..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full cursor-pointer" size="lg">
                  Submit Application
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
