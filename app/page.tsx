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
                <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase bg-foreground/5 rounded-full border border-border/50 mb-6">
                  Premier en Algerie
                </span>
              </FadeUp>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-balance mb-8 leading-[1.1]">
                <TextReveal text="Le Premier Producteur de Nicotine Pouches en" delay={0.2} />
                <FadeUp delay={0.8}>
                  <span className="block mt-2 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text">
                    Algerie
                  </span>
                </FadeUp>
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
            
            <FadeUp delay={0.3} className="relative">
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
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-2xl -z-10 animate-pulse" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full -z-10 animate-pulse" />
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
      <section className="py-32 md:py-40 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/95" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <FadeUp>
            <div className="text-center mb-20">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-background/40 mb-6">
                Nos avantages
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-background">
                Pourquoi choisir AERA
              </h2>
            </div>
          </FadeUp>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <FadeUp key={feature.title} delay={index * 0.15}>
                <HoverScale scale={1.02}>
                  <div className="group relative h-full">
                    {/* Glow effect on hover */}
                    <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    
                    <div className="relative h-full p-8 lg:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10">
                      {/* Number indicator */}
                      <div className="absolute top-8 right-8 text-6xl font-bold text-white/[0.03] select-none">
                        0{index + 1}
                      </div>
                      
                      {/* Icon with gradient border */}
                      <div className="relative mb-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <feature.icon className="h-7 w-7 text-background" strokeWidth={1.5} />
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-4 text-background">{feature.title}</h3>
                      <p className="text-background/60 leading-relaxed">{feature.description}</p>
                      
                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight">
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
