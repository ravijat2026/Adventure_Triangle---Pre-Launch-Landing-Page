"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MissionSection } from "@/components/mission-section"
import { WinterTrekkingSection } from "@/components/winter-trekking-section"
import { PartnerOnboarding } from "@/components/partner-onboarding"
import { LaunchEventSection } from "@/components/launch-event-section"
import { BetaRegistration } from "@/components/beta-registration"
import { CampaignSection } from "@/components/campaign-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <WinterTrekkingSection />
      <PartnerOnboarding />
      <LaunchEventSection />
      <BetaRegistration />
      <CampaignSection />
      <Footer />
    </main>
  )
}
