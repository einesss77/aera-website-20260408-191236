"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FadeUp,
  SlideInLeft,
  SlideInRight,
  HoverScale,
  ParallaxImage,
  AnimatedOrb,
} from "@/components/animations"
import { useLanguage } from "@/components/language-provider"

const products = [
  {
    gradient: "from-orange-400 to-red-500",
    bgAccent: "bg-orange-500/10",
    textColor: "text-orange-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34%20%283%29-J5vMBbC5QVgsIgtzYPNHWgA7o3Fc1S.jpeg",
  },
  {
    gradient: "from-teal-400 to-emerald-500",
    bgAccent: "bg-teal-500/10",
    textColor: "text-teal-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.33-MxGm7u37I1Y6Be1NlEe8XEoZhgMCBe.jpeg",
  },
  {
    gradient: "from-amber-400 to-orange-500",
    bgAccent: "bg-amber-500/10",
    textColor: "text-amber-600",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34-7ewz8gQ8P21swTFJbh0kowZ4Sg3r4g.jpeg",
  },
]

export default function ProduitsPage() {
  const { copy } = useLanguage()
  const productCopy = copy.products

  return (
    <div className="min-h-screen pt-24 overflow-hidden">
      <section className="py-20 md:py-32 relative">
        <AnimatedOrb className="top-0 right-0 w-96 h-96" />

        <div className="container mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                {productCopy.eyebrow}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-8 tracking-tight">
                {productCopy.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{productCopy.description}</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <FadeUp key={productCopy.products[index].name} delay={index * 0.2}>
                <HoverScale>
                  <Card className="overflow-hidden border-0 shadow-2xl group h-full">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                        <Image
                          src={product.image}
                          alt={`AERA ${productCopy.products[index].name} - ${productCopy.products[index].strength}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      <div className="absolute top-6 right-6">
                        <Badge className={`${product.bgAccent} ${product.textColor} border-0 text-xs font-medium px-3 py-1`}>
                          {productCopy.products[index].badge}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-semibold mb-1">{productCopy.products[index].name}</h2>
                          <p className={`text-lg font-medium bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                            {productCopy.products[index].strength}
                          </p>
                        </div>
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${product.gradient}`} />
                      </div>

                      <p className="text-muted-foreground mb-6 leading-relaxed">{productCopy.products[index].description}</p>

                      <div className="flex flex-wrap gap-2">
                        {productCopy.products[index].features.map((feature, featureIndex) => (
                          <span
                            key={feature}
                            className="text-xs px-4 py-2 bg-muted rounded-full text-muted-foreground transition-all duration-300"
                            style={{
                              animationDelay: `${featureIndex * 0.1}s`,
                            }}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <div className="relative">
                <ParallaxImage className="rounded-3xl overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34%20%281%29-Vt2mP7pTnnjHC0zv2aNZAFyEnSLspL.jpeg"
                    alt={productCopy.imageAlt}
                    width={600}
                    height={700}
                    className="rounded-3xl shadow-2xl"
                  />
                </ParallaxImage>

                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gradient-to-br from-teal-400/20 to-emerald-500/20 rounded-3xl -z-10 animate-pulse" />
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div>
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  {productCopy.specsEyebrow}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-8 tracking-tight">
                  {productCopy.specsTitle}
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{productCopy.specsDescription}</p>

                <ul className="space-y-5">
                  {productCopy.specs.map((spec, index) => (
                    <li
                      key={spec}
                      className="flex items-center gap-4 transition-all duration-500"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-foreground" />
                      <span className="text-foreground">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <div>
                  <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                    {productCopy.missionEyebrow}
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-8 tracking-tight">
                    {productCopy.missionTitle}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{productCopy.missionParagraph1}</p>
                  <p className="text-muted-foreground leading-relaxed">{productCopy.missionParagraph2}</p>
                </div>
              </FadeUp>

              <FadeUp delay={0.2}>
                <div className="relative">
                  <ParallaxImage className="rounded-3xl overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34%20%284%29-IZhdT2IUNWVPUfWy35b93WgKn7FuHx.jpeg"
                      alt={productCopy.missionImageAlt}
                      width={500}
                      height={600}
                      className="rounded-3xl shadow-2xl w-full h-auto"
                    />
                  </ParallaxImage>

                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full -z-10 animate-pulse" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
