"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

type NavigationProps = {
  isAuthenticated?: boolean
  userEmail?: string | null
  onLogout?: () => void
}

export function Navigation({ isAuthenticated = false, userEmail, onLogout }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [auth, setAuth] = useState<boolean>(isAuthenticated)
  const pathname = usePathname()
  const base = pathname === "/" ? "" : "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // If no explicit prop provided, read from localStorage (client-only)
    if (!isAuthenticated && typeof window !== "undefined") {
      const lsAuth = localStorage.getItem("authenticated") === "true"
      setAuth(lsAuth)
    } else {
      setAuth(isAuthenticated)
    }
  }, [isAuthenticated])

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  const handleLogoutClick = () => {
    onLogout?.()
    setMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-110">
            <Image src="/logo.png" alt="Adventure Triangle" fill className="object-cover" />
          </div>
          <span className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
            Adventure Triangle
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a
            href={`${base}#home`}
            className="text-md font-medium hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Home
          </a>
          <a
            href={`${base}#about`}
            className="text-md font-medium hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            About
          </a>
          <a
            href={`${base}#mission`}
            className="text-md font-medium hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Mission
          </a>
          <a
            href={`${base}#partner`}
            className="text-md font-medium hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Partners
          </a>
          <a
            href={`${base}#beta`}
            className="text-md font-medium hover:text-primary transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Join Beta
          </a>
          {auth ? (
            <div className="flex items-center gap-3">
              <Link href="/admin">
                <Button variant="outline" size="sm">
                  Admin
                </Button>
              </Link>
              <Button variant="default" size="sm" onClick={handleLogoutClick}>
                Logout
              </Button>
            </div>
          ) : (
            <Link href="/login">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-foreground hover:text-primary transition-colors duration-300 cursor-pointer p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={mobileMenuOpen ? "open" : "closed"}
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              variants={{
                closed: { d: "M4 6h16" },
                open: { d: "M6 18L18 6" },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              variants={{
                closed: { d: "M4 12h16", opacity: 1 },
                open: { d: "M12 12h0", opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              variants={{
                closed: { d: "M4 18h16" },
                open: { d: "M6 6l12 12" },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-none z-[100] md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm z-[101] md:hidden shadow-2xl border-l border-border bg-white text-foreground"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex items-center justify-between mb-12">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                      <Image src="/logo.png" alt="Adventure Triangle" fill className="object-cover" />
                    </div>
                    <span className="text-xl font-bold text-foreground">Adventure Triangle</span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-foreground hover:text-primary transition-colors cursor-pointer p-2"
                    aria-label="Close menu"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <motion.div
                  className="flex flex-col gap-8 flex-1"
                  initial="closed"
                  animate="open"
                  variants={{
                    open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                  }}
                >
                  {[
                    { href: `${base}#home`, label: "Home" },
                    { href: `${base}#about`, label: "About" },
                    { href: `${base}#mission`, label: "Mission" },
                    { href: `${base}#partner`, label: "Partners" },
                    { href: `${base}#beta`, label: "Join Beta" },
                  ].map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="text-2xl font-semibold hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-2"
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: 50 },
                      }}
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  {auth && (
                    <motion.a
                      href="/admin"
                      onClick={handleLinkClick}
                      className="text-2xl font-semibold hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-2"
                      variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: 50 } }}
                    >
                      Admin
                    </motion.a>
                  )}

                  <motion.div
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: 50 },
                    }}
                    className="mt-8"
                  >
                    {auth ? (
                      <div className="flex flex-col gap-3">
                        <Link href="/admin" onClick={handleLinkClick}>
                          <Button variant="default" size="lg" className="w-full">
                            Admin
                          </Button>
                        </Link>
                        <Button variant="outline" size="lg" className="w-full" onClick={handleLogoutClick}>
                          Logout
                        </Button>
                      </div>
                    ) : (
                      <Link href="/login" onClick={handleLinkClick}>
                        <Button variant="default" size="lg" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                    )}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="text-md text-muted-foreground text-center pt-8 border-t border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Launching January 26, 2026
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
