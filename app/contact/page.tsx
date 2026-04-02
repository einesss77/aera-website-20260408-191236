"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Mail, MapPin, Send, CheckCircle } from "lucide-react"

const faqs = [
  {
    question: "Qui sommes-nous ?",
    answer:
      "ÆERA est le premier producteur de nicotine pouches en Algerie. Nous combinons expertise internationale et savoir-faire local pour creer des produits de haute qualite qui respectent les standards les plus exigeants de l'industrie.",
  },
  {
    question: "Combien de temps dure l'effet d'un pouch ?",
    answer:
      "L'effet d'un pouch ÆERA dure environ 45 minutes. Cette duree peut varier legerement selon les individus et le dosage choisi.",
  },
  {
    question: "Comment utiliser les nicotine pouches ?",
    answer:
      "Placez simplement le pouch sous votre levre superieure. Il liberera progressivement la nicotine sans avoir besoin de macher ou de cracher. Retirez-le apres environ 45 minutes ou lorsque vous le souhaitez.",
  },
  {
    question: "Quels dosages de nicotine proposez-vous ?",
    answer:
      "Nous proposons une gamme complete allant de 3mg (leger) a 50mg (tres fort) pour s'adapter a tous les profils d'utilisateurs. Nos trois produits phares sont Berry (3mg), Fresh Mint (6mg) et Mango (30mg).",
  },
  {
    question: "Combien de pouches contient une boite ?",
    answer:
      "Chaque boite ÆERA contient 20 pouches au format slim, concu pour un confort optimal sous la levre.",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">FAQ & Contact</h1>
            <p className="text-lg text-muted-foreground">
              Trouvez les reponses a vos questions ou contactez-nous directement. 
              Notre equipe est la pour vous accompagner.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Questions Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Contactez-nous
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Nos Coordonnees</h3>
                <div className="space-y-6">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Adresse</h4>
                        <p className="text-muted-foreground">
                          Draria El Achour, Alger
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a
                          href="mailto:contact@aeratobacco.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          contact@aeratobacco.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                          Message envoye !
                        </h3>
                        <p className="text-muted-foreground">
                          Nous vous repondrons dans les plus brefs delais.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nom</Label>
                          <Input
                            id="name"
                            placeholder="Votre nom"
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({ ...formState, name: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="votre@email.com"
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({ ...formState, email: e.target.value })
                            }
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Votre message..."
                            rows={5}
                            value={formState.message}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                message: e.target.value,
                              })
                            }
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full" size="lg">
                          <Send className="h-4 w-4 mr-2" />
                          Envoyer le message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
