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
  ScrollIndicator,
} from "@/components/animations"
import { useLanguage } from "@/components/language-provider"

const products = [
  {
    color: "from-orange-400 to-red-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34%20%283%29-J5vMBbC5QVgsIgtzYPNHWgA7o3Fc1S.jpeg",
  },
  {
    color: "from-teal-400 to-emerald-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.33-MxGm7u37I1Y6Be1NlEe8XEoZhgMCBe.jpeg",
  },
  {
    color: "from-amber-400 to-orange-500",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34-7ewz8gQ8P21swTFJbh0kowZ4Sg3r4g.jpeg",
  },
]

const featureIcons = [Factory, Award, Leaf]

export default function HomePage() {
  const { language, copy } = useLanguage()
  const home = copy.home
  const countryPrefix = language === "fr" ? "en " : "in "
  const puffIntro =
    language === "fr"
      ? {
          eyebrow: "Nouvelle expérience",
          title: "AERA Puff",
          description:
            "Une extension plus intense de l'univers AERA: des puffs au design premium, pensées pour la saveur, la performance et une utilisation simple.",
          cta: "Découvrir AERA Puff",
          stats: ["10K / 30K / 60K+", "Dual Mesh", "USB-C"],
          imageAlt: "AERA Puff premium rouge et vert",
        }
      : {
          eyebrow: "New experience",
          title: "AERA Puff",
          description:
            "A more intense extension of the AERA universe: premium disposable vapes designed for flavor, performance, and simple everyday use.",
          cta: "Discover AERA Puff",
          stats: ["10K / 30K / 60K+", "Dual Mesh", "USB-C"],
          imageAlt: "Red and green premium AERA Puff",
        }

  return (
    <div className="min-h-screen overflow-hidden">
      <section className="relative flex items-start overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 px-0 pb-3 pt-24 md:min-h-[100svh] md:items-center md:pt-28 lg:pb-16">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 md:px-8">
          <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-8">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <FadeUp>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-foreground/70 md:mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {home.badge}
                </span>
              </FadeUp>

              <div className="mb-5 md:mb-8">
                <FadeUp delay={0.1}>
                  <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted-foreground sm:text-sm md:mb-4">
                    {home.intro}
                  </p>
                </FadeUp>
                <h1 className="font-heading font-semibold tracking-tight leading-[0.95]">
                  <FadeUp delay={0.2}>
                    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Nicotine</span>
                  </FadeUp>
                  <FadeUp delay={0.3}>
                    <span className="block text-4xl text-muted-foreground/30 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                      Pouches
                    </span>
                  </FadeUp>
                  <FadeUp delay={0.4}>
                    <span className="mt-3 block text-base font-normal tracking-normal text-muted-foreground md:mt-4 md:text-xl lg:text-2xl">
                      {countryPrefix}
                      <span className="text-foreground font-medium">{home.country}</span>
                    </span>
                  </FadeUp>
                </h1>
              </div>

              <FadeUp delay={0.5}>
                <p className="mx-auto mb-7 max-w-[21rem] text-base leading-7 text-muted-foreground md:mb-10 md:max-w-md md:text-lg lg:mx-0">
                  {home.heroDescription}
                </p>
              </FadeUp>

              <FadeUp delay={0.6}>
                <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
                  <MagneticWrapper>
                    <Button asChild size="lg" className="h-13 rounded-full px-7 text-base md:h-14 md:px-8">
                      <Link href="/produits">
                        {home.heroPrimaryCta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticWrapper>
                  <MagneticWrapper>
                    <Button asChild variant="outline" size="lg" className="h-13 rounded-full px-7 text-base md:h-14 md:px-8">
                      <Link href="/contact">{home.heroSecondaryCta}</Link>
                    </Button>
                  </MagneticWrapper>
                </div>
              </FadeUp>

              <FadeUp delay={0.7}>
                <div className="mt-6 flex flex-wrap justify-center gap-4 md:mt-12 md:gap-6 lg:justify-start">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Leaf className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span>{home.infoTobaccoFree}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <Award className="w-4 h-4 text-amber-600" />
                    </div>
                    <span>{home.infoFlavors}</span>
                  </div>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.3} className="relative order-1 lg:order-2">
              <div className="relative flex items-center justify-center">
                <div className="absolute hidden aspect-square w-[90%] rounded-full border border-foreground/5 animate-[spin_30s_linear_infinite] sm:block" />
                <div className="absolute hidden aspect-square w-[75%] rounded-full border border-foreground/5 animate-[spin_25s_linear_infinite_reverse] sm:block" />
                <div className="absolute hidden aspect-square w-[60%] rounded-full border border-dashed border-foreground/10 sm:block" />

                <div className="relative z-10 w-full max-w-[21.5rem] animate-[float_6s_ease-in-out_infinite] sm:max-w-md lg:max-w-lg">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-amber-500/20 rounded-full blur-3xl scale-75" />

                    <div className="premium-frame relative overflow-hidden rounded-[1.5rem] shadow-2xl shadow-black/10 md:rounded-[2rem]">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.33%20%281%29-pRv6uk6SYwnhA5v7LDUlPxk1F2BElw.jpeg"
                        alt={home.heroImageAlt}
                        width={600}
                        height={500}
                        className="premium-media aspect-[1.28/1] h-auto w-full object-cover"
                        priority
                      />
                    </div>

                    <div className="absolute -top-4 -right-4 hidden bg-background shadow-xl rounded-2xl px-4 py-3 border border-border/50 animate-[float_4s_ease-in-out_infinite_0.5s] sm:block">
                      <p className="text-xs text-muted-foreground">{home.products[1].name}</p>
                      <p className="text-sm font-semibold">{home.products[1].strength}</p>
                    </div>

                    <div className="absolute -bottom-2 -left-4 hidden bg-background shadow-xl rounded-2xl px-4 py-3 border border-border/50 animate-[float_4s_ease-in-out_infinite_1s] sm:block">
                      <p className="text-xs text-muted-foreground">{home.products[2].name}</p>
                      <p className="text-sm font-semibold">{home.products[2].strength}</p>
                    </div>

                    <div className="absolute top-1/2 -right-8 hidden bg-foreground text-background shadow-xl rounded-2xl px-4 py-3 animate-[float_4s_ease-in-out_infinite_1.5s] sm:block">
                      <p className="text-xs text-background/60">{home.products[0].name}</p>
                      <p className="text-sm font-semibold">{home.products[0].strength}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-10 left-10 w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                <div className="absolute bottom-20 right-10 w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              </div>
            </FadeUp>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
          <ScrollIndicator />
        </div>
      </section>

      <section className="relative pb-16 pt-0 md:py-40">
        <div className="container mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="max-w-4xl mx-auto text-center">
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-muted-foreground md:mb-6">
                {home.aboutEyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-8 tracking-tight">
                {home.aboutTitle}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{home.aboutDescription}</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-32 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            <FadeUp>
              <div>
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-background/40 mb-6">
                  {home.advantagesEyebrow}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-background leading-[1.1]">
                  {home.advantagesTitleTop}
                  <span className="block text-background/20">{home.advantagesTitleMiddle}</span>
                  <span className="block">
                    {home.advantagesTitleBottom}
                    <span className="text-background/30">?</span>
                  </span>
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex items-end lg:pb-4">
                <p className="text-lg md:text-xl text-background/60 leading-relaxed max-w-md">{home.advantagesDescription}</p>
              </div>
            </FadeUp>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {home.features.map((feature, index) => {
              const Icon = featureIcons[index]
              return (
                <FadeUp key={feature.title} delay={index * 0.1}>
                  <HoverScale scale={1.02}>
                    <div className="group relative h-full">
                      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative flex flex-col h-full min-h-[280px] p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.06]">
                        <div className="absolute top-6 right-6 text-7xl font-heading font-bold text-white/[0.04] select-none leading-none">
                          0{index + 1}
                        </div>

                        <div className="relative mb-6">
                          <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/15">
                            <Icon className="h-6 w-6 text-background" strokeWidth={1.5} />
                          </div>
                        </div>

                        <div className="flex flex-col flex-grow">
                          <h3 className="text-lg font-heading font-semibold mb-3 text-background">{feature.title}</h3>
                          <p className="text-background/50 text-sm leading-relaxed">{feature.description}</p>
                        </div>

                        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </div>
                    </div>
                  </HoverScale>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="text-center mb-20">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                {home.collectionEyebrow}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6 tracking-tight">
                {home.collectionTitle}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{home.collectionDescription}</p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <FadeUp key={home.products[index].name} delay={index * 0.15}>
                <HoverScale scale={1.03}>
                  <Card className="premium-border overflow-hidden border-0 shadow-xl shadow-black/[0.08] group cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/[0.12]">
                    <div className="premium-frame relative aspect-[4/5] overflow-hidden">
                      <div className="absolute inset-0 transition-transform duration-600 group-hover:scale-105">
                        <Image
                          src={product.image}
                          alt={`AERA ${home.products[index].name} - ${home.products[index].strength}`}
                          fill
                          className="premium-media object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">{home.products[index].name}</h3>
                          <p className="text-muted-foreground">{home.products[index].strength}</p>
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
                    {home.collectionCta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MagneticWrapper>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-32 md:py-40 bg-foreground text-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-8 pb-24 md:pb-32">
          <FadeUp>
            <div className="premium-border premium-grain relative overflow-hidden rounded-[1.75rem] border border-background/10 bg-[#120303] text-white shadow-2xl shadow-black/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(244,63,94,0.28),transparent_30%),radial-gradient(circle_at_55%_76%,rgba(92,180,35,0.12),transparent_25%),linear-gradient(135deg,#070303_0%,#210607_55%,#3b0909_100%)]" />
              <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] [background-size:56px_56px]" />

              <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-2 lg:items-center">
                <div className="max-w-xl">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-red-100/45">
                    {puffIntro.eyebrow}
                  </p>
                  <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-6xl">{puffIntro.title}</h2>
                  <p className="mt-6 text-base leading-8 text-white/62 md:text-lg">{puffIntro.description}</p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {puffIntro.stats.map((stat) => (
                      <span
                        key={stat}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/65"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  <MagneticWrapper className="mt-9 inline-flex">
                    <Button asChild size="lg" variant="secondary" className="h-14 w-full rounded-full px-5 text-sm sm:w-auto sm:px-7">
                      <Link href="/puff">
                        {puffIntro.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticWrapper>
                </div>

                <div className="relative">
                  <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-red-500/22 via-white/5 to-lime-400/12 blur-xl" />
                  <div className="premium-frame relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-black">
                    <Image
                      src="/images/puffs/hero-aera-puff-red-green.png"
                      alt={puffIntro.imageAlt}
                      width={1672}
                      height={941}
                      className="premium-media animate-slow-pan aspect-[16/9] h-auto w-full object-cover object-[58%_50%]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <div className="relative">
                <ParallaxImage className="premium-frame rounded-3xl overflow-hidden shadow-2xl shadow-black/25">
                  <Image
                    src="/images/premium-edition.png"
                    alt={home.premiumImageAlt}
                    width={600}
                    height={500}
                    className="premium-media rounded-3xl"
                  />
                </ParallaxImage>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gradient-to-br from-amber-500/30 to-amber-700/30 rounded-full blur-2xl animate-pulse" />
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="text-center lg:text-left">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-background/50 mb-6">
                  {home.premiumEyebrow}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-8 tracking-tight">
                  {home.premiumTitle}
                </h2>
                <p className="text-lg text-background/70 leading-relaxed mb-10">{home.premiumDescription}</p>
                <MagneticWrapper>
                  <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-8">
                    <Link href="/produits">
                      {home.premiumCta}
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
