"use client"

import { motion } from "framer-motion"
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/adventuretriangle", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/adventuretriangle", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/adventuretriangle", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/adventuretriangle", label: "Twitter" },
  ]

  return (
    <footer className="bg-gradient-to-br from-muted/50 via-muted/30 to-background border-t border-border">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group cursor-pointer">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-110">
                <Image src="/logo.png" alt="Adventure Triangle" fill className="object-cover" />
              </div>
              <span className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                Adventure Triangle
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Building the world's most comprehensive adventure ecosystem. Trusted, transformative, and truly global.
            </p>
            <p className="text-sm text-muted-foreground">Launching January 26, 2026</p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "About Us" },
                { href: "#mission", label: "Our Mission" },
                { href: "#partner", label: "Partners" },
                { href: "/admin", label: "Admin", isLink: true },
              ].map((item) => (
                <li key={item.href}>
                  {item.isLink ? (
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:support@adventuretriangle.com "
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  support@adventuretriangle.com 
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+14379555710" className="hover:text-primary transition-colors cursor-pointer">
                  4379555710
                </a>
              </li>
              <li className="flex gap-3 mt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 text-muted-foreground hover:text-primary-foreground transition-all cursor-pointer rounded-lg border border-border hover:bg-primary hover:border-primary"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Adventure Triangle. All rights reserved.</p>
            <p className="text-center">Toronto, Canada | Nepal | India | Expanding Worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
