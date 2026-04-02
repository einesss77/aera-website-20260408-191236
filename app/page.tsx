"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, Award, Leaf, ArrowRight } from "lucide-react"
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  HoverScale,
  ParallaxImage,
  MagneticWrapper,
  TextReveal,
  AnimatedOrb,
  ScrollIndicator,
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
        <AnimatedOrb className="top-1/4 -right-32 w-96 h-96" />
        
        <div className="container mx-auto px-6 md:px-8 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <FadeUp>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-widest uppercase bg-foreground text-background rounded-full mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Premier en Algerie
                </span>
              </FadeUp>
              
              <div className="mb-8">
                <FadeUp delay={0.1}>
                  <p className="text-sm md:text-base text-muted-foreground uppercase tracking-[0.2em] mb-4">
                    Le premier producteur de
                  </p>
                </FadeUp>
                <h1 className="font-heading font-semibold tracking-tight leading-[0.95]">
                  <FadeUp delay={0.2}>
                    <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                      Nicotine
                    </span>
                  </FadeUp>
                  <FadeUp delay={0.3}>
                    <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-muted-foreground/30">
                      Pouches
                    </span>
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <span className="block text-lg md:text-xl lg:text-2xl font-normal text-muted-foreground mt-4 tracking-normal">
                      en <span className="text-foreground font-medium">Algerie</span>
                    </span>
                  </FadeUp>
                </h1>
              </div>
              
              <FadeUp delay={0.5}>
                <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Decouvrez AERA, une nouvelle ere de satisfaction. Production locale, qualite internationale.
                </p>
              </FadeUp>
              
              <FadeUp delay={0.6}>
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
            
            <FadeUp delay={0.3} className="relative">
              <div className="relative">
                {/* Floating badge */}
                <div className="absolute -top-4 -left-4 md:top-6 md:-left-8 z-20 bg-background/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">100%</p>
                      <p className="text-sm font-medium">Sans Tabac</p>
                    </div>
                  </div>
                </div>
                
                {/* Main image container with gradient border */}
                <div className="relative p-1 rounded-3xl bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5">
                  <ParallaxImage className="rounded-3xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.33%20%281%29-pRv6uk6SYwnhA5v7LDUlPxk1F2BElw.jpeg"
                      alt="AERA nicotine pouches - Berry, Mint, et Mango"
                      width={800}
                      height={600}
                      className="rounded-3xl"
                      priority
                    />
                  </ParallaxImage>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-teal-400/30 to-emerald-500/20 rounded-3xl -z-10 blur-xl" />
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-amber-400/30 to-orange-500/20 rounded-full -z-10 blur-xl" />
                <div className="absolute top-1/2 -right-4 w-20 h-20 bg-gradient-to-br from-rose-400/20 to-pink-500/10 rounded-2xl -z-10 blur-lg" />
                
                {/* Strength indicator badge */}
                <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 z-20 bg-foreground text-background rounded-2xl px-5 py-3 shadow-xl">
                  <p className="text-xs text-background/60 mb-0.5">Disponible en</p>
                  <p className="text-lg font-heading font-semibold">3 Saveurs</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <ScrollIndicator />
      </section>

      {/* About Section */}
      <section className="py-32 md:py-40 relative">
        <div className="container mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                A propos
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-8 tracking-tight">
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
      <section className="py-32 md:py-40 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-foreground" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          {/* Creative Header Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <FadeUp>
              <div>
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-background/40 mb-6">
                  Nos avantages
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-background leading-[1.1]">
                  Pourquoi
                  <span className="block text-background/20">choisir</span>
                  <span className="block">AERA<span className="text-background/30">?</span></span>
                </h2>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <div className="flex items-end lg:pb-4">
                <p className="text-lg md:text-xl text-background/60 leading-relaxed max-w-md">
                  Une experience unique qui allie innovation, qualite et respect de vos attentes. 
                  Decouvrez ce qui fait notre difference.
                </p>
              </div>
            </FadeUp>
          </div>
          
          {/* Feature Cards - Equal Heights */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FadeUp key={feature.title} delay={index * 0.1}>
                <HoverScale scale={1.02}>
                  <div className="group relative h-full">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex flex-col h-full min-h-[280px] p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.06]">
                      {/* Number indicator */}
                      <div className="absolute top-6 right-6 text-7xl font-heading font-bold text-white/[0.04] select-none leading-none">
                        0{index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className="relative mb-6">
                        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/15">
                          <feature.icon className="h-6 w-6 text-background" strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      {/* Content - flex-grow to push content and maintain equal heights */}
                      <div className="flex flex-col flex-grow">
                        <h3 className="text-lg font-heading font-semibold mb-3 text-background">{feature.title}</h3>
                        <p className="text-background/50 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                      
                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </div>
                  </div>
                </HoverScale>
              </FadeUp>
            ))}
          </div>
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6 tracking-tight">
                Nos Produits
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trois saveurs uniques pour satisfaire tous les gouts
              </p>
            </div>
          </FadeUp>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FadeUp key={product.name} delay={index * 0.15}>
                <HoverScale scale={1.03}>
                  <Card className="overflow-hidden border-0 shadow-xl group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <div className="absolute inset-0 transition-transform duration-600 group-hover:scale-105">
                        <Image
                          src={product.image}
                          alt={`AERA ${product.name} - ${product.strength}`}
                          fill
                          className="object-cover"
                        />
                      </div>
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
              </FadeUp>
            ))}
          </div>
          
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
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-br from-amber-500/30 to-amber-700/30 rounded-full blur-2xl animate-pulse" />
              </div>
            </SlideInLeft>
            
            <SlideInRight>
              <div className="text-center lg:text-left">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-background/50 mb-6">
                  Edition Premium
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-8 tracking-tight">
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
