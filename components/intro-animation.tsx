"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"logo" | "ring" | "pulse" | "split" | "done">("logo")

  useEffect(() => {
    // Phase timing
    const timers = [
      setTimeout(() => setPhase("ring"), 400),      // Start ring animation
      setTimeout(() => setPhase("pulse"), 2000),    // Pulse effect
      setTimeout(() => setPhase("split"), 2500),    // Split screen
      setTimeout(() => {
        setPhase("done")
        onComplete()
      }, 3800),                                       // Complete (extended for smoother split)
    ]

    return () => timers.forEach(clearTimeout)
  }, [onComplete])

  if (phase === "done") return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none">
      {/* Top half */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-[#0a0a0a] transition-transform duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          phase === "split" ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ transformOrigin: "top" }}
      />
      
      {/* Bottom half */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-[#0a0a0a] transition-transform duration-[1200ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          phase === "split" ? "translate-y-full" : "translate-y-0"
        }`}
        style={{ transformOrigin: "bottom" }}
      />

      {/* Center content */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
          phase === "split" ? "opacity-0 scale-90" : "opacity-100 scale-100"
        }`}
      >
        <div className="relative flex items-center justify-center">
          {/* Outer decorative ring */}
          <svg
            className="absolute w-64 h-64 md:w-80 md:h-80"
            viewBox="0 0 200 200"
          >
            {/* Background ring (subtle) */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
            
            {/* Animated progress ring */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray={565.48}
              strokeDashoffset={phase === "logo" ? 565.48 : 0}
              className="transition-all duration-[1600ms] ease-out"
              style={{ 
                transformOrigin: "center",
                transform: "rotate(-90deg)"
              }}
            />
            
            {/* Inner decorative ring */}
            <circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="rgba(255,255,255,0.03)"
              strokeWidth="1"
              strokeDasharray="4 8"
              className={`transition-opacity duration-500 ${
                phase !== "logo" ? "opacity-100" : "opacity-0"
              }`}
            />
          </svg>

          {/* Logo container with pulse effect */}
          <div
            className={`relative transition-all duration-500 ${
              phase === "pulse" ? "scale-110" : "scale-100"
            }`}
          >
            {/* Glow effect on pulse */}
            <div
              className={`absolute inset-0 bg-white/10 rounded-full blur-3xl transition-all duration-500 ${
                phase === "pulse" ? "opacity-100 scale-150" : "opacity-0 scale-100"
              }`}
            />
            
            {/* Logo */}
            <div
              className={`relative transition-all duration-700 ease-out ${
                phase === "logo" ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
              style={{ transitionDelay: phase === "logo" ? "0ms" : "200ms" }}
            >
              <Image
                src="/images/logo.png"
                alt="AERA"
                width={160}
                height={64}
                className="h-16 md:h-20 w-auto brightness-0 invert"
                priority
              />
            </div>
          </div>

          {/* Floating particles - static positions to avoid hydration mismatch */}
          <div className="absolute inset-0">
            {[
              { left: "90%", top: "50%", delay: "500ms" },
              { left: "70%", top: "84.6%", delay: "600ms" },
              { left: "30%", top: "84.6%", delay: "700ms" },
              { left: "10%", top: "50%", delay: "800ms" },
              { left: "30%", top: "15.4%", delay: "900ms" },
              { left: "70%", top: "15.4%", delay: "1000ms" },
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-white/40 rounded-full transition-all duration-1000 ${
                  phase !== "logo" ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  left: pos.left,
                  top: pos.top,
                  transitionDelay: pos.delay,
                  transform: phase !== "logo" ? "scale(1)" : "scale(0)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Tagline - positioned below the circle */}
        <p
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 mt-52 md:mt-56 text-white/40 text-sm tracking-[0.3em] uppercase transition-all duration-500 ${
            phase === "ring" || phase === "pulse" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          Une nouvelle ere
        </p>
      </div>

      {/* Horizontal split line effect */}
      <div
        className={`absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-500 ${
          phase === "pulse" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
        }`}
      />
    </div>
  )
}

// Wrapper component to handle the intro state
export function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  const handleIntroComplete = () => {
    setShowIntro(false)
    setContentVisible(true)
  }

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <div
        className={`transition-opacity duration-700 ease-out ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  )
}
