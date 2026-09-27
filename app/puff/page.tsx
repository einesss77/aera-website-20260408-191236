"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BatteryCharging, Gauge, Layers, Sparkles, Wind, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FadeUp, HoverScale, MagneticWrapper, ParallaxImage, SlideInLeft, SlideInRight } from "@/components/animations"

const heroImage = "/images/puffs/hero-aera-puff-red-green.png"

const puffProducts = [
  {
    name: "AERA Puff 10K",
    puffs: "10K bouffées",
    nicotine: "5%",
    liquid: "18 ml",
    battery: "Rechargeable USB-C",
    coil: "Résistance Mesh",
    image: "/images/puffs/mango-peach-10k.png",
    flavors: ["Mangue pêche", "Fraise glacée", "Raisin glacé", "Menthe fraîche", "Pastèque menthe", "Myrtille bubble gum"],
    accent: "from-orange-400 to-red-500",
  },
  {
    name: "AERA Puff 30K",
    puffs: "30K bouffées",
    nicotine: "5%",
    liquid: "30 ml",
    battery: "Batterie haute capacité",
    coil: "Dual Mesh",
    image: "/images/puffs/watermelon-ice-30k.png",
    flavors: ["Pastèque glacée", "Myrtille glacée", "Menthe fraîche", "Mangue pêche", "Fraise glacée"],
    accent: "from-emerald-400 to-cyan-500",
  },
  {
    name: "AERA Puff 60K",
    puffs: "60K bouffées",
    nicotine: "5%",
    liquid: "Grande capacité",
    battery: "Rechargeable USB-C",
    coil: "Technologie Dual Mesh",
    image: "/images/puffs/blueberry-ice-60k.png",
    flavors: ["Fraise kiwi", "Raisin glacé", "Myrtille glacée", "Mangue"],
    accent: "from-blue-500 to-violet-600",
  },
]

const performanceItems = [
  { label: "BOUFFÉES", value: "10K / 30K / 60K+", icon: Gauge },
  { label: "BATTERIE HAUTE CAPACITÉ", value: "Autonomie durable", icon: BatteryCharging },
  { label: "TECHNOLOGIE DUAL MESH", value: "Chauffe précise", icon: Layers },
  { label: "RECHARGEABLE USB-C", value: "Recharge rapide", icon: Zap },
  { label: "SAVEURS INTENSES", value: "Arômes riches", icon: Sparkles },
  { label: "VAPEUR DENSE", value: "Tirage fluide", icon: Wind },
]

const flavorCards = [
  { name: "Myrtille glacée", image: "/images/puffs/blueberry-ice-30k.png", color: "from-blue-500/25 to-indigo-500/10" },
  { name: "Raisin glacé", image: "/images/puffs/grape-ice-10k.png", color: "from-violet-500/25 to-purple-500/10" },
  { name: "Mangue pêche", image: "/images/puffs/mango-peach-30k.png", color: "from-orange-400/25 to-amber-500/10" },
  { name: "Pastèque glacée", image: "/images/puffs/watermelon-ice-30k.png", color: "from-rose-500/20 to-emerald-500/10" },
  { name: "Fraise glacée", image: "/images/puffs/strawberry-ice-30k.png", color: "from-red-500/20 to-pink-500/10" },
  { name: "Menthe fraîche", image: "/images/puffs/fresh-mint-30k.png", color: "from-emerald-500/20 to-teal-500/10" },
]

const experiencePoints = [
  { title: "Chauffe Mesh", text: "Température plus stable pour une restitution régulière des arômes." },
  { title: "Airflow équilibré", text: "Tirage fluide, sensation dense et confort d'utilisation." },
  { title: "Batterie intégrée", text: "Autonomie pensée pour accompagner les modèles longue durée." },
  { title: "Arômes précis", text: "Profil fruité net, vapeur généreuse et goût constant." },
]

export default function PuffPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f6f2] text-[#111111]">
      <section className="premium-grain relative min-h-screen overflow-hidden bg-[#120303] px-6 pb-16 pt-32 text-white md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(248,47,64,0.42),transparent_32%),radial-gradient(circle_at_56%_70%,rgba(99,183,28,0.18),transparent_24%),linear-gradient(115deg,#080505_0%,#190505_46%,#350909_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#f7f6f2] via-[#f7f6f2]/45 to-transparent" />

        <div className="container relative z-10 mx-auto">
          <div className="grid min-h-[calc(100vh-10rem)] items-center gap-12 lg:grid-cols-2">
            <div className="max-w-2xl">
              <FadeUp>
                <Badge className="mb-8 rounded-full border border-red-200/20 bg-red-500/15 px-4 py-2 text-[11px] font-semibold tracking-[0.28em] text-white shadow-[0_0_40px_rgba(239,68,68,0.18)] backdrop-blur">
                  CIGARETTE ÉLECTRONIQUE JETABLE
                </Badge>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h1 className="font-heading text-6xl font-semibold leading-[0.86] tracking-tight md:text-8xl lg:text-9xl">
                  AERA
                  <span className="block text-red-100/30">PUFF</span>
                </h1>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="mt-8 text-2xl font-semibold tracking-wide text-white md:text-3xl">
                  Puissance. Saveur. Liberté.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/65 md:text-lg">
                  Découvrez la nouvelle génération de cigarettes électroniques jetables AERA, conçues pour offrir une
                  expérience intense, des saveurs riches et une utilisation simple.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="mt-10">
                  <MagneticWrapper className="inline-flex">
                    <Button asChild size="lg" className="h-14 w-full rounded-full bg-white px-5 text-xs font-semibold tracking-[0.1em] text-[#1a0505] shadow-[0_18px_50px_rgba(255,70,70,0.2)] hover:bg-red-50 sm:w-auto sm:px-8 sm:tracking-[0.18em]">
                      <Link href="#collection">
                        DÉCOUVRIR LA COLLECTION
                        <ArrowRight className="ml-3 h-4 w-4" />
                      </Link>
                    </Button>
                  </MagneticWrapper>
                </div>
              </FadeUp>
            </div>

            <FadeUp delay={0.2}>
              <div className="relative mx-auto w-full max-w-[780px]">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-red-500/24 via-white/5 to-lime-400/14 blur-xl" />
                <div className="premium-frame premium-border relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-black shadow-[0_45px_100px_rgba(0,0,0,0.55)]">
                  <Image
                    src={heroImage}
                    alt="Visuel premium AERA Puff rouge et vert"
                    width={1672}
                    height={941}
                    priority
                    className="premium-media animate-slow-pan aspect-[16/10] h-auto w-full object-cover object-[58%_50%]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/18 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 left-10 right-10 h-10 rounded-full bg-black/70 blur-2xl" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section id="collection" className="px-6 py-24 md:px-8 md:py-32">
        <div className="container mx-auto">
          <FadeUp>
            <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/45">Collection</p>
                <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-6xl">
                  LA COLLECTION AERA PUFF
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-black/55">
                Une gamme pensée pour présenter chaque niveau de performance avec une identité visuelle claire et des
                saveurs facilement lisibles.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-7 lg:grid-cols-3">
            {puffProducts.map((product, index) => (
              <FadeUp key={product.name} delay={index * 0.12}>
                <HoverScale>
                  <Card className="premium-border group h-full overflow-hidden rounded-[1.4rem] border-black/10 bg-white shadow-2xl shadow-black/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-black/[0.12]">
                    <div className={`premium-frame relative aspect-[4/5] overflow-hidden bg-gradient-to-br ${product.accent}`}>
                      <div className="absolute inset-0 bg-white/78" />
                      <Image src={product.image} alt={product.name} fill className="premium-media object-contain p-5" />
                    </div>
                    <CardContent className="p-7">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight">{product.name}</h3>
                          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-black/45">{product.puffs}</p>
                        </div>
                        <span className={`h-3 w-3 rounded-full bg-gradient-to-r ${product.accent}`} />
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <Spec label="Nicotine" value={product.nicotine} />
                        <Spec label="E-liquide" value={product.liquid} />
                        <Spec label="Batterie" value={product.battery} />
                        <Spec label="Résistance" value={product.coil} />
                      </div>

                      <div className="mt-6">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-black/40">Saveurs</p>
                        <div className="flex flex-wrap gap-2">
                          {product.flavors.map((flavor) => (
                            <span key={flavor} className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/60">
                              {flavor}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-grain bg-[#121212] px-6 py-24 text-white md:px-8 md:py-32">
        <div className="container mx-auto">
          <FadeUp>
            <div className="mb-14 max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/35">Performance</p>
              <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-6xl">CONÇUE POUR LA PERFORMANCE</h2>
            </div>
          </FadeUp>

          <div className="grid gap-px overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/10 md:grid-cols-3">
            {performanceItems.map((item, index) => {
              const Icon = item.icon
              return (
                <FadeUp key={item.label} delay={index * 0.06}>
                  <div className="min-h-[220px] bg-[#121212] p-8 transition-all duration-300 hover:bg-white/[0.06] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                    <Icon className="mb-8 h-8 w-8 text-white/65" strokeWidth={1.5} />
                    <p className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl">{item.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/38">{item.label}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="container mx-auto">
          <FadeUp>
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/45">Saveurs</p>
              <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-6xl">TROUVEZ VOTRE SAVEUR</h2>
            </div>
          </FadeUp>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {flavorCards.map((flavor, index) => (
              <FadeUp key={flavor.name} delay={index * 0.07}>
                <div className={`premium-border group relative overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${flavor.color} p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10`}>
                  <div className="relative aspect-[4/3]">
                    <Image src={flavor.image} alt={`AERA Puff ${flavor.name}`} fill className="premium-media object-contain" />
                  </div>
                  <h3 className="mt-4 text-center text-lg font-semibold tracking-tight">{flavor.name}</h3>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="premium-grain relative overflow-hidden bg-[#120303] px-6 py-24 text-white md:px-8 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(244,63,94,0.28),transparent_28%),radial-gradient(circle_at_78%_62%,rgba(255,255,255,0.08),transparent_26%),linear-gradient(135deg,#080404_0%,#220606_52%,#4b0b0c_100%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute left-1/2 top-16 h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-red-200/35 to-transparent" />

        <div className="container relative z-10 mx-auto grid gap-12 lg:grid-cols-2 lg:items-center">
          <SlideInLeft>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-red-100/45">Technologie</p>
              <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-6xl">
                PENSÉE POUR L'EXPÉRIENCE
              </h2>
              <p className="mt-8 text-lg leading-9 text-white/62">
                Les Puff AERA utilisent une chauffe Mesh ou Dual Mesh selon les modèles pour stabiliser la température
                et restituer les arômes de manière plus régulière. La batterie haute capacité, l'airflow équilibré et
                le système de réservoir sont calibrés pour garder une sensation dense, fluide et constante.
              </p>

              <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {experiencePoints.map((point, index) => (
                  <FadeUp key={point.title} delay={index * 0.06}>
                    <div className="premium-border group relative min-h-[142px] overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.085]">
                      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-red-400/15 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-red-100/45">
                        0{index + 1}
                      </p>
                      <h3 className="text-lg font-semibold tracking-tight">{point.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/50">{point.text}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </SlideInLeft>
          <SlideInRight>
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-red-500/24 via-white/5 to-black blur-xl" />
              <div className="absolute -left-8 top-16 hidden h-[72%] w-px bg-gradient-to-b from-transparent via-red-200/45 to-transparent lg:block" />
              <div className="absolute -right-5 bottom-24 hidden h-28 w-28 rounded-full border border-red-100/20 lg:block" />
              <ParallaxImage className="premium-frame premium-border relative overflow-hidden rounded-[1.6rem] border border-white/12 bg-black shadow-[0_50px_110px_rgba(0,0,0,0.55)]">
                <Image
                  src="/images/puffs/experience-strawberry-ice-10k.png"
                  alt="AERA Puff Strawberry Ice 10K"
                  width={941}
                  height={1672}
                  className="premium-media h-auto max-h-[720px] w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/32 via-transparent to-white/0" />
              </ParallaxImage>
              <div className="absolute -bottom-5 left-12 right-12 h-12 rounded-full bg-red-950/70 blur-2xl" />
            </div>
          </SlideInRight>
        </div>
      </section>

      <section className="premium-grain bg-[#111] px-6 py-24 text-white md:px-8 md:py-32">
        <div className="container mx-auto">
          <FadeUp>
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/35">AERA</p>
              <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-6xl">UNE MARQUE. DEUX EXPÉRIENCES.</h2>
            </div>
          </FadeUp>

          <div className="grid gap-6 md:grid-cols-2">
            <BrandCard
              title="AERA POCHES DE NICOTINE"
              description="Discret. Moderne. Maîtrisé."
              href="/produits"
              image="/images/premium-edition.png"
            />
            <BrandCard
              title="AERA PUFF"
              description="Saveur. Performance. Intensité."
              href="/puff"
              image="/images/puffs/blueberry-ice-box-60k.png"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-black/[0.035] p-3">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/35">{label}</p>
      <p className="mt-1 text-sm font-semibold leading-5 text-black/75">{value}</p>
    </div>
  )
}

function BrandCard({
  title,
  description,
  href,
  image,
}: {
  title: string
  description: string
  href: string
  image: string
}) {
  return (
    <FadeUp>
      <Link href={href} className="group grid min-h-[360px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.04] md:grid-cols-2">
        <div className="flex flex-col justify-between p-8">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-3 text-white/55">{description}</p>
          </div>
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Découvrir <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
        <div className="relative min-h-[260px] bg-white/[0.04]">
          <Image src={image} alt={title} fill className="object-contain p-6 transition-transform duration-700 group-hover:scale-105" />
        </div>
      </Link>
    </FadeUp>
  )
}
