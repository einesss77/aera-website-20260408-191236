"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, Award, Leaf, ArrowRight } from "lucide-react"
import {
  FadeUp,
  FadeIn,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  HoverScale,
  ParallaxImage,
  MagneticWrapper,
  TextReveal,
} from "@/components/animations"

const products = [
  {
    name: "Berry",
    strength: "3mg",
    color: "from-orange-400 to-red-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34%20%283%29-J5vMBbC5QVgsIgtzYPNHWgA7o3Fc1S.jpeg",
  },
  {
    name: "Fresh Mint",
    strength: "6mg",
    color: "from-teal-400 to-emerald-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.33-MxGm7u37I1Y6Be1NlEe8XEoZhgMCBe.jpeg",
  },
  {
    name: "Mango",
    strength: "30mg",
    color: "from-amber-400 to-orange-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34-7ewz8gQ8P21swTFJbh0kowZ4Sg3r4g.jpeg",
  },
]

const features = [
  {
    icon: Factory,
    title: "Production Locale",
    description: "Fabrique avec fierte en Algerie, soutenant l'economie locale et garantissant la fraicheur.",
  },
  {
    icon: Award,
    title: "Standards Internationaux",
    description: "Qualite superieure respectant les normes les plus strictes de l'industrie.",
  },
  {
    icon: Leaf,
    title: "Sans Fumee ni Tabac",
    description: "Une alternative moderne et discrete, sans combustion ni produits du tabac.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
        
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-muted/40 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        
        <div className="container mx-auto px-6 md:px-8 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase bg-foreground/5 rounded-full border border-border/50">
                  Premier en Algerie
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-balance mb-8 leading-[1.1]">
                <TextReveal text="Le Premier Producteur de Nicotine Pouches en" delay={0.2} />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="block mt-2 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text"
                >
                  Algerie
                </motion.span>
              </h1>
              
              <FadeUp delay={0.6}>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Decouvrez AERA, une nouvelle ere de satisfaction. Production locale, qualite internationale.
                </p>
              </FadeUp>
              
              <FadeUp delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <MagneticWrapper>
                    <Button asChild size="lg" className="text-base h-14 px-8 rounded-full">
                      <Link href="/produits">
                        Voir nos produits
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticWrapper>
                  <MagneticWrapper>
                    <Button asChild variant="outline" size="lg" className="text-base h-14 px-8 rounded-full">
                      <Link href="/contact">Nous contacter</Link>
                    </Button>
                  </MagneticWrapper>
                </div>
              </FadeUp>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative"
            >
              <div className="relative">
                <ParallaxImage className="rounded-3xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.33%20%281%29-pRv6uk6SYwnhA5v7LDUlPxk1F2BElw.jpeg"
                    alt="AERA nicotine pouches - Berry, Mint, et Mango"
                    width={800}
                    height={600}
                    className="rounded-3xl shadow-2xl"
                    priority
                  />
                </ParallaxImage>
                {/* Decorative elements */}
                <motion.div
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-2xl -z-10"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full -z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 bg-foreground/40 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 md:py-40 relative">
        <div className="container mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                A propos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 tracking-tight">
                Qui sommes-nous
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                AERA est ne d&apos;une vision simple mais audacieuse : offrir aux consommateurs algeriens 
                une alternative moderne, discrete et de haute qualite aux produits traditionnels du tabac. 
                En tant que premier producteur local de nicotine pouches en Algerie, nous combinons 
                expertise internationale et savoir-faire local pour creer des produits qui repondent 
                aux standards les plus exigeants.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 md:py-40 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="text-center mb-20">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                Nos avantages
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
                Pourquoi choisir AERA
              </h2>
            </div>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <HoverScale scale={1.02}>
                  <Card className="border-0 shadow-xl bg-background h-full">
                    <CardContent className="p-10 text-center">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-foreground/5 mb-8"
                      >
                        <feature.icon className="h-7 w-7 text-foreground" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="text-center mb-20">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                Collection
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight">
                Nos Produits
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trois saveurs uniques pour satisfaire tous les gouts
              </p>
            </div>
          </FadeUp>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {products.map((product) => (
              <StaggerItem key={product.name}>
                <HoverScale scale={1.03}>
                  <Card className="overflow-hidden border-0 shadow-xl group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <motion.div
                        className="absolute inset-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                      >
                        <Image
                          src={product.image}
                          alt={`AERA ${product.name} - ${product.strength}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{product.name}</h3>
                          <p className="text-muted-foreground">{product.strength}</p>
                        </div>
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${product.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <FadeUp delay={0.4}>
            <div className="text-center mt-16">
              <MagneticWrapper>
                <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8">
                  <Link href="/produits">
                    Voir tous les produits
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MagneticWrapper>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Premium Product Section */}
      <section className="py-32 md:py-40 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <div className="relative">
                <ParallaxImage className="rounded-3xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34%20%282%29-PaAgbKZN20laqRS3KvuAQVc35bH0tz.jpeg"
                    alt="AERA Premium Edition - 8mg"
                    width={600}
                    height={500}
                    className="rounded-3xl"
                  />
                </ParallaxImage>
                {/* Gold accent */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-br from-amber-500/30 to-amber-700/30 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </SlideInLeft>
            
            <SlideInRight>
              <div className="text-center lg:text-left">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-background/50 mb-6">
                  Edition Premium
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 tracking-tight">
                  L&apos;Excellence a l&apos;Etat Pur
                </h2>
                <p className="text-lg text-background/70 leading-relaxed mb-10">
                  Notre edition premium incarne le raffinement absolu. Concue pour les connaisseurs 
                  les plus exigeants, elle offre une experience incomparable avec son design elegant 
                  et sa formulation sophistiquee.
                </p>
                <MagneticWrapper>
                  <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-8">
                    <Link href="/produits">
                      Decouvrir
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </MagneticWrapper>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>
    </div>
  )
}
