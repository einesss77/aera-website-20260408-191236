"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/produits", label: "Produits" },
    { href: "/contact", label: "FAQ / Contact" },
  ]

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        transform: isLoaded ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.6s cubic-bezier(0.25, 0.4, 0.25, 1)",
      }}
    >
      {/* Glassy container with margin */}
      <div className="container mx-auto px-4 md:px-6 pt-4">
        <div 
          className={`rounded-2xl transition-all duration-500 ${
            isScrolled
              ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/[0.03]"
              : "bg-white/40 backdrop-blur-md border border-white/10"
          }`}
        >
          <div className="px-6 md:px-8">
            <div className="flex items-center justify-between h-16 md:h-18">
              <Link href="/" className="relative group">
                <span className="text-xl md:text-2xl font-heading font-semibold tracking-tight transition-transform duration-200 hover:scale-[1.02] inline-block">
                  AERA
                </span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-foreground group-hover:w-full transition-all duration-300" />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-12">
                {navLinks.map((link, index) => (
                  <div
                    key={link.href}
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? "translateY(0)" : "translateY(-20px)",
                      transition: `all 0.5s cubic-bezier(0.25, 0.4, 0.25, 1) ${0.1 + index * 0.1}s`,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group py-2"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground group-hover:w-full transition-all duration-300" />
                    </Link>
                  </div>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <div
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transition: "opacity 0.5s 0.3s",
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden relative w-10 h-10"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                  <span
                    className={`absolute transition-all duration-200 ${
                      isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    }`}
                  >
                    <Menu className="h-5 w-5" />
                  </span>
                  <span
                    className={`absolute transition-all duration-200 ${
                      isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                    }`}
                  >
                    <X className="h-5 w-5" />
                  </span>
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav
              className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
                isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="py-6 border-t border-border/50">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <div
                      key={link.href}
                      style={{
                        opacity: isMenuOpen ? 1 : 0,
                        transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)",
                        transition: `all 0.3s ease-out ${index * 0.1}s`,
                      }}
                    >
                      <Link
                        href={link.href}
                        className="block py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
