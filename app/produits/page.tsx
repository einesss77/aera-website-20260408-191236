import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    name: "Berry",
    strength: "3mg",
    strengthLabel: "Light",
    color: "bg-orange-500",
    textColor: "text-orange-600",
    description: "Une explosion fruitee de baies rouges pour une experience douce et rafraichissante.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34%20%283%29-J5vMBbC5QVgsIgtzYPNHWgA7o3Fc1S.jpeg",
    features: ["Saveur fruitee", "Dosage leger", "Ideal pour debuter"],
  },
  {
    name: "Fresh Mint",
    strength: "6mg",
    strengthLabel: "Medium",
    color: "bg-teal-500",
    textColor: "text-teal-600",
    description: "La fraicheur intense de la menthe pour une sensation revigorante et durable.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.33-MxGm7u37I1Y6Be1NlEe8XEoZhgMCBe.jpeg",
    features: ["Fraicheur intense", "Dosage equilibre", "Effet longue duree"],
  },
  {
    name: "Mango",
    strength: "30mg",
    strengthLabel: "Strong",
    color: "bg-amber-500",
    textColor: "text-amber-600",
    description: "L&apos;exotisme sucre de la mangue avec une intensite remarquable pour les utilisateurs experimentes.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34-7ewz8gQ8P21swTFJbh0kowZ4Sg3r4g.jpeg",
    features: ["Saveur exotique", "Dosage puissant", "Pour experimentes"],
  },
]

export default function ProduitsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Produits</h1>
            <p className="text-lg text-muted-foreground">
              Decouvrez notre gamme de nicotine pouches, concue pour offrir 
              une experience premium adaptee a chaque preference.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden border-0 shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`AERA ${product.name} - ${product.strength}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold">{product.name}</h2>
                      <p className={`text-lg font-semibold ${product.textColor}`}>
                        {product.strength}
                      </p>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {product.strengthLabel}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34%20%281%29-Vt2mP7pTnnjHC0zv2aNZAFyEnSLspL.jpeg"
                alt="Gamme complete AERA"
                width={600}
                height={700}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Une Gamme Complete
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Chaque produit ÆERA est le resultat d&apos;une recherche approfondie et d&apos;un 
                engagement envers l&apos;excellence. De la selection des ingredients a l&apos;emballage 
                final, chaque detail est pense pour offrir une experience optimale.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>20 pouches par boite</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Format slim confortable</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Duree d&apos;action: environ 45 minutes</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Sans tabac, sans fumee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre Vision</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Chez ÆERA, nous croyons en un avenir ou les consommateurs ont acces a des 
                  alternatives de qualite, produites localement avec des standards internationaux.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Notre mission est de devenir la reference des nicotine pouches en Algerie 
                  et dans la region, en offrant des produits innovants qui respectent a la fois 
                  nos clients et notre environnement.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-02%20at%2016.00.34%20%284%29-IZhdT2IUNWVPUfWy35b93WgKn7FuHx.jpeg"
                  alt="AERA Mint et Berry"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
