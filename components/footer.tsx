"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  return (
    <footer className="bg-foreground text-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 md:px-8 py-16 md:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-semibold mb-5"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              AERA
            </motion.h3>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Le premier producteur de nicotine pouches en Algerie. 
              Production locale avec des standards internationaux.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
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
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
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
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-background/10 mt-16 pt-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/40">
              &copy; {currentYear} AERA. Tous droits reserves.
            </p>
            <motion.div
              className="flex items-center gap-2 text-sm text-background/40"
              whileHover={{ scale: 1.02 }}
            >
              <span>Fabrique avec</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                &hearts;
              </motion.span>
              <span>en Algerie</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
