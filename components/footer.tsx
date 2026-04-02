import Link from "next/link"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ÆERA</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Le premier producteur de nicotine pouches en Algerie. 
              Production locale avec des standards internationaux.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-background/70 hover:text-background transition-colors">
                Accueil
              </Link>
              <Link href="/produits" className="text-sm text-background/70 hover:text-background transition-colors">
                Produits
              </Link>
              <Link href="/contact" className="text-sm text-background/70 hover:text-background transition-colors">
                FAQ / Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-background/70" />
                <span className="text-sm text-background/70">
                  Draria El Achour, Alger
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-background/70" />
                <a 
                  href="mailto:contact@aeratobacco.com" 
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  contact@aeratobacco.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8">
          <p className="text-center text-sm text-background/50">
            &copy; {new Date().getFullYear()} ÆERA. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  )
}
