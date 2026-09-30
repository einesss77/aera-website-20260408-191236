"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const { language, setLanguage, copy } = useLanguage()

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const navLinks = copy.header.nav

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-500"
      style={{
        transform: isLoaded ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.6s cubic-bezier(0.25, 0.4, 0.25, 1)",
      }}
    >
      <div
        className={`mx-auto px-4 pt-[max(0.75rem,env(safe-area-inset-top))] transition-all duration-700 ease-[cubic-bezier(0.25,0.4,0.25,1)] md:px-6 md:pt-4 ${
          isScrolled ? "max-w-4xl" : "max-w-7xl"
        }`}
      >
        <div
          className={`premium-border rounded-[1.15rem] transition-all duration-500 md:rounded-2xl ${
            isScrolled
              ? "bg-white/80 backdrop-blur-xl shadow-xl shadow-black/[0.06] border border-white/35"
              : "bg-white/74 backdrop-blur-xl border border-white/30 md:bg-white/56 md:backdrop-blur-md md:border-white/20"
          }`}
        >
          <div className={`transition-all duration-500 ${isScrolled ? "px-4 md:px-6" : "px-4 md:px-8"}`}>
            <div
              className={`flex h-16 items-center justify-between transition-all duration-500 ${
                isScrolled ? "md:h-16" : "md:h-22"
              }`}
            >
              <Link href="/" className="relative group transition-transform duration-200 hover:scale-[1.02]">
                <Image
                  src="/images/logo.png"
                  alt="AERA"
                  width={180}
                  height={72}
                  className={`h-9 w-auto object-contain transition-all duration-500 ${isScrolled ? "md:h-11" : "md:h-16"}`}
                  style={{ width: "auto" }}
                  priority
                />
              </Link>

              <div className={`hidden md:flex items-center transition-all duration-500 ${isScrolled ? "gap-6" : "gap-10"}`}>
                <nav className="flex items-center gap-8">
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

                <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/80 p-1 shadow-sm">
                  {(["fr", "en"] as const).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setLanguage(lang)}
                      aria-label={`${copy.header.languageLabel}: ${lang.toUpperCase()}`}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                        language === lang ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <div
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transition: "opacity 0.5s 0.3s",
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative h-11 w-11 rounded-full md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? copy.header.closeMenu : copy.header.openMenu}
                  aria-expanded={isMenuOpen}
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

            <nav
              className={`fixed inset-x-4 top-[calc(max(0.75rem,env(safe-area-inset-top))+4.6rem)] md:hidden overflow-hidden rounded-[1.15rem] border border-white/35 bg-white/94 shadow-2xl shadow-black/10 backdrop-blur-2xl transition-all duration-300 ease-out ${
                isMenuOpen ? "max-h-[calc(100svh-6rem)] opacity-100" : "pointer-events-none max-h-0 opacity-0"
              }`}
            >
              <div className="p-5">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {copy.header.languageLabel}
                  </span>
                  <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/80 p-1">
                    {(["fr", "en"] as const).map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => setLanguage(lang)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                          language === lang ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

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
                        className="block rounded-xl px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-foreground/5"
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
