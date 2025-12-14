"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mountain, ShieldCheck, Sparkles } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"

export default function LoginPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  const [mounted, setMounted] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const auth = localStorage.getItem("authenticated") === "true"
    const email = localStorage.getItem("userEmail")
    setIsAuthenticated(auth)
    setUserEmail(email)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Dummy authentication
    // Demo credentials: admin@adventure.com / admin123
    if (credentials.email === "admin@adventure.com" && credentials.password === "admin123") {
      localStorage.setItem("authenticated", "true")
      localStorage.setItem("userEmail", credentials.email)
      setIsAuthenticated(true)
      setUserEmail(credentials.email)
      toast({
        title: "Login Successful!",
        description: "Welcome back to Adventure Triangle",
      })
      router.push("/admin")
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Try: admin@adventure.com / admin123",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden pt-20">
      <Navigation isAuthenticated={isAuthenticated} userEmail={userEmail} onLogout={() => {
        localStorage.removeItem("authenticated")
        localStorage.removeItem("userEmail")
        setIsAuthenticated(false)
        setUserEmail(null)
        router.push("/")
      }} />

      <div className="absolute inset-0">
        <img
          src="/adventure-landscape-mountains-ocean-sky.jpg"
          alt="Adventure background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/75 to-background" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10"
        >
          <div className="bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl p-8 shadow-2xl">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Mountain className="w-7 h-7 text-primary" />
              </div>
              <span className="text-2xl font-bold text-card-foreground">Adventure Triangle</span>
            </Link>

            <div className="mb-8 space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Admin access</p>
              <h1 className="text-3xl font-bold text-card-foreground leading-tight">Sign in to the dashboard</h1>
              <p className="text-sm text-muted-foreground">Secure entry for verified team members.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="admin@adventure.com"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Sign In
              </Button>
            </form>

            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="flex items-center gap-3 mb-1">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <p className="text-sm font-semibold text-card-foreground">Demo credentials</p>
              </div>
              <p className="text-sm font-mono text-card-foreground">admin@adventure.com</p>
              <p className="text-sm font-mono text-card-foreground">admin123</p>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Don't have an account?{" "}
              <Link href="/#beta" className="text-primary hover:underline">
                Join Beta
              </Link>
            </p>
          </div>

          <div className="hidden lg:flex flex-col justify-between rounded-2xl p-8 backdrop-blur-xl shadow-2xl border border-white/10 bg-gradient-to-br from-zinc-900/60 via-zinc-800/60 to-primary/20 text-white">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                <Sparkles className="w-4 h-4" />
                Trusted access
              </div>
              <h2 className="text-3xl font-bold leading-tight">Adventures need a confident cockpit.</h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Keep launch data, partner requests, and event registrations organized in one place. Smooth transitions,
                focused inputs, and quick feedback for busy teams.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-white/90 text-sm">
              {["Secure sessions", "Local data demo", "Responsive UI", "Motion tuned"].map((item) => (
                <div key={item} className="rounded-lg border border-white/20 bg-white/5 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
