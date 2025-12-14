"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Users, Building2, Calendar, LogOut, Sparkles, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"

export default function AdminPage() {
  const router = useRouter()
  const [authenticated, setAuthenticated] = useState(false)
  const [stats, setStats] = useState({
    betaUsers: 0,
    partners: 0,
    eventRegistrations: 0,
  })
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => {
    const isAuth = localStorage.getItem("authenticated") === "true"
    if (!isAuth) {
      router.push("/login")
    } else {
      setAuthenticated(true)
      setUserEmail(localStorage.getItem("userEmail"))
      // Load statistics
      const betaUsers = JSON.parse(localStorage.getItem("betaUsers") || "[]")
      const partners = JSON.parse(localStorage.getItem("partners") || "[]")
      const eventRegistrations = JSON.parse(localStorage.getItem("eventRegistrations") || "[]")

      setStats({
        betaUsers: betaUsers.length,
        partners: partners.length,
        eventRegistrations: eventRegistrations.length,
      })
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("authenticated")
    localStorage.removeItem("userEmail")
    router.push("/login")
  }

  if (!authenticated) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <Navigation isAuthenticated userEmail={userEmail} onLogout={handleLogout} />

      <div className="container mx-auto px-4 pt-28 pb-10 md:pb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">Dashboard</p>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">Admin control center</h1>
              <p className="text-sm text-muted-foreground mt-2">Monitor beta users, partner intake, and events.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-background/70" size="sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Quick tour
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground">
                <BarChart3 className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Beta users", value: stats.betaUsers, icon: Users },
              { label: "Partner apps", value: stats.partners, icon: Building2 },
              { label: "Event signups", value: stats.eventRegistrations, icon: Calendar },
            ].map((card) => (
              <div
                key={card.label}
                className="bg-card/90 backdrop-blur-lg p-6 rounded-2xl border border-border/60 shadow-lg hover:translate-y-[-2px] transition-transform"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground capitalize">{card.label}</p>
                  </div>
                  <span className="text-3xl font-semibold text-foreground">{card.value}</span>
                </div>
                <div className="text-xs text-muted-foreground">Live counts from local data.</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="bg-card/90 backdrop-blur-lg p-8 rounded-2xl border border-border/60 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Quick actions</h2>
                <span className="text-xs text-muted-foreground">Faster workflows</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["View beta users", "Review partner apps", "Manage events", "Open analytics"].map((action) => (
                  <Button key={action} variant="outline" className="justify-start bg-background/60" size="lg">
                    {action}
                  </Button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8 shadow-lg border border-border/60 bg-gradient-to-br from-zinc-900/10 via-zinc-800/10 to-primary/10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Recent activity</h3>
                <span className="text-xs text-muted-foreground">Local demo</span>
              </div>
              <div className="space-y-3">
                {[
                  { t: "New beta signup", d: "Today, 11:24 AM" },
                  { t: "Partner form submitted", d: "Yesterday, 5:02 PM" },
                  { t: "Event RSVP received", d: "Sat, 9:13 AM" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg bg-background/70 border border-border/60 px-4 py-3">
                    <span className="text-sm text-foreground">{row.t}</span>
                    <span className="text-xs text-muted-foreground">{row.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
