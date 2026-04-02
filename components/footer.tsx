"use client"

import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { FadeUp } from "@/components/animations"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <FadeUp>
            <h3 className="text-2xl font-semibold mb-5 transition-transform duration-200 hover:scale-[1.02] inline-block cursor-default">
              AERA
            </h3>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Le premier producteur de nicotine pouches en Algerie. 
              Production locale avec des standards internationaux.
            </p>
          </FadeUp>

          {/* Links */}
          <FadeUp delay={0.1}>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-background/80">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                { href: "/", label: "Accueil" },
                { href: "/produits", label: "Produits" },
                { href: "/contact", label: "FAQ / Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300 w-fit group"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-background group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              ))}
            </nav>
          </FadeUp>

          {/* Contact */}
          <FadeUp delay={0.2}>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-background/80">
              Contact
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-background/50" />
                <span className="text-sm text-background/60">
                  Draria El Achour, Alger
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-background/50" />
                <a
                  href="mailto:contact@aeratobacco.com"
                  className="text-sm text-background/60 hover:text-background transition-colors duration-300"
                >
                  contact@aeratobacco.com
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.3}>
          <div className="border-t border-background/10 mt-16 pt-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-background/40">
                &copy; {currentYear} AERA. Tous droits reserves.
              </p>
              <div className="flex items-center gap-2 text-sm text-background/40 transition-transform duration-200 hover:scale-[1.02]">
                <span>Fabrique avec</span>
                <span className="animate-pulse">&hearts;</span>
                <span>en Algerie</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </footer>
  )
}
