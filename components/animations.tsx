"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

// Custom hook for intersection observer
function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(element)
        }
      },
      { threshold: 0.1, rootMargin: "-50px", ...options }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [options])

  return { ref, isInView }
}

// Fade up animation for sections
export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

// Fade in animation
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-600 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

// Scale up animation
export function ScaleUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "scale(1)" : "scale(0.9)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

// Slide in from left
export function SlideInLeft({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateX(0)" : "translateX(-60px)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

// Slide in from right
export function SlideInRight({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateX(0)" : "translateX(60px)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

// Staggered children container
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        "--stagger-delay": `${staggerDelay}s`,
        "--is-visible": isInView ? "1" : "0",
      } as React.CSSProperties}
      data-in-view={isInView}
    >
      {children}
    </div>
  )
}

// Staggered child item
export function StaggerItem({
  children,
  className = "",
  index = 0,
}: {
  children: ReactNode
  className?: string
  index?: number
}) {
  const [isParentVisible, setIsParentVisible] = useState(false)

  useEffect(() => {
    const checkParent = () => {
      const el = document.querySelector(`[data-in-view="true"]`)
      if (el) setIsParentVisible(true)
    }
    const observer = new MutationObserver(checkParent)
    observer.observe(document.body, { attributes: true, subtree: true })
    checkParent()
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`transition-all duration-500 ease-out ${className}`}
      style={{
        opacity: isParentVisible ? 1 : 0,
        transform: isParentVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      {children}
    </div>
  )
}

// Hover scale effect wrapper
export function HoverScale({
  children,
  scale = 1.02,
  className = "",
}: {
  children: ReactNode
  scale?: number
  className?: string
}) {
  return (
    <div
      className={`transition-transform duration-300 ease-out hover:scale-[1.02] ${className}`}
      style={{ "--hover-scale": scale } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

// Text reveal animation (word by word)
export function TextReveal({
  text,
  className = "",
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const { ref, isInView } = useInView()
  const words = text.split(" ")

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.25em] transition-all duration-500 ease-out"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transitionDelay: `${delay + i * 0.08}s`,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

// Parallax effect on scroll
export function ParallaxImage({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  const { ref, isInView } = useInView()

  return (
    <div
      ref={ref}
      className={`overflow-hidden transition-transform duration-1000 ease-out ${className}`}
      style={{
        transform: isInView ? "scale(1)" : "scale(1.1)",
      }}
    >
      {children}
    </div>
  )
}

// Magnetic button effect
export function MagneticWrapper({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`transition-transform duration-200 hover:scale-105 active:scale-98 ${className}`}>
      {children}
    </div>
  )
}

// Animated background orb
export function AnimatedOrb({
  className = "",
  color = "from-muted/40 to-transparent",
}: {
  className?: string
  color?: string
}) {
  return (
    <div
      className={`absolute rounded-full blur-3xl bg-gradient-to-br ${color} animate-pulse-slow ${className}`}
    />
  )
}

// Scroll indicator
export function ScrollIndicator() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-1.5">
        <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" />
      </div>
    </div>
  )
}
