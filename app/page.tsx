import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Factory, Award, Leaf } from "lucide-react"

const products = [
  {
    name: "Berry",
    strength: "3mg",
    color: "bg-orange-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34%20%283%29-J5vMBbC5QVgsIgtzYPNHWgA7o3Fc1S.jpeg",
  },
  {
    name: "Fresh Mint",
    strength: "6mg",
    color: "bg-teal-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.33-MxGm7u37I1Y6Be1NlEe8XEoZhgMCBe.jpeg",
  },
  {
    name: "Mango",
    strength: "30mg",
    color: "bg-amber-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34-7ewz8gQ8P21swTFJbh0kowZ4Sg3r4g.jpeg",
  },
]

const features = [
  {
    icon: Factory,
    title: "Production Locale",
    description: "Fabrique avec fierte en Algerie, soutenant l&apos;economie locale et garantissant la fraicheur.",
  },
  {
    icon: Award,
    title: "Standards Internationaux",
    description: "Qualite superieure respectant les normes les plus strictes de l&apos;industrie.",
  },
  {
    icon: Leaf,
    title: "Sans Fumee ni Tabac",
    description: "Une alternative moderne et discrete, sans combustion ni produits du tabac.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
                Le Premier Producteur de Nicotine Pouches en{" "}
                <span className="text-primary">Algerie</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Decouvrez ÆERA, une nouvelle ere de satisfaction. Production locale, qualite internationale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="text-base">
                  <Link href="/produits">Voir nos produits</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.33%20%281%29-pRv6uk6SYwnhA5v7LDUlPxk1F2BElw.jpeg"
                alt="AERA nicotine pouches - Berry, Mint, et Mango"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Qui sommes-nous</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ÆERA est ne d&apos;une vision simple mais audacieuse : offrir aux consommateurs algeriens 
              une alternative moderne, discrete et de haute qualite aux produits traditionnels du tabac. 
              En tant que premier producteur local de nicotine pouches en Algerie, nous combinons 
              expertise internationale et savoir-faire local pour creer des produits qui repondent 
              aux standards les plus exigeants.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Pourquoi choisir ÆERA
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-lg bg-card">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Produits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trois saveurs uniques pour satisfaire tous les gouts
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden border-0 shadow-lg group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`AERA ${product.name} - ${product.strength}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-muted-foreground">{product.strength}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full ${product.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/produits">Voir tous les produits</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Product Section */}
      <section className="py-20 md:py-28 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34%20%282%29-PaAgbKZN20laqRS3KvuAQVc35bH0tz.jpeg"
                alt="AERA Premium Edition - 8mg"
                width={600}
                height={500}
                className="rounded-2xl"
              />
            </div>
            <div className="text-center lg:text-left">
              <span className="text-sm uppercase tracking-widest text-background/60 mb-4 block">
                Edition Premium
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                L&apos;Excellence a l&apos;Etat Pur
              </h2>
              <p className="text-lg text-background/80 leading-relaxed mb-8">
                Notre edition premium incarne le raffinement absolu. Concue pour les connaisseurs 
                les plus exigeants, elle offre une experience incomparable avec son design elegant 
                et sa formulation sophistiquee.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/produits">Decouvrir</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
