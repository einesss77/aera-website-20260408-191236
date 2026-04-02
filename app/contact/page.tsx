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
import { Mail, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react"
import {
  FadeUp,
  HoverScale,
  MagneticWrapper,
  AnimatedOrb,
} from "@/components/animations"

const faqs = [
  {
    question: "Qui sommes-nous ?",
    answer:
      "AERA est le premier producteur de nicotine pouches en Algerie. Nous combinons expertise internationale et savoir-faire local pour creer des produits de haute qualite qui respectent les standards les plus exigeants de l'industrie.",
  },
  {
    question: "Combien de temps dure l'effet d'un pouch ?",
    answer:
      "L'effet d'un pouch AERA dure environ 45 minutes. Cette duree peut varier legerement selon les individus et le dosage choisi.",
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
      "Chaque boite AERA contient 20 pouches au format slim, concu pour un confort optimal sous la levre.",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative">
        <AnimatedOrb className="top-0 left-1/4 w-96 h-96" />
        
        <div className="container mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                Support
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-8 tracking-tight">
                FAQ & Contact
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Trouvez les reponses a vos questions ou contactez-nous directement. 
                Notre equipe est la pour vous accompagner.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  Aide
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight">
                  Questions Frequentes
                </h2>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="transition-all duration-500"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <AccordionItem value={`item-${index}`} className="border-b border-border/50">
                      <AccordionTrigger className="text-left text-base md:text-lg font-medium py-6 hover:no-underline group">
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-foreground" />
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
        
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-background/40 mb-6">
                  Contact
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight text-background">
                  Contactez-nous
                </h2>
              </div>
            </FadeUp>
            
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              {/* Contact Info - Left Side */}
              <div className="lg:col-span-2 space-y-8">
                <FadeUp>
                  <div className="space-y-2">
                    <p className="text-background/60 text-sm uppercase tracking-widest">
                      Parlons ensemble
                    </p>
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-background leading-tight">
                      Une question ? Un partenariat ? Ecrivez-nous.
                    </h3>
                  </div>
                </FadeUp>
                
                <FadeUp delay={0.1}>
                  <div className="space-y-6 pt-4">
                    {/* Address */}
                    <div className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                          <MapPin className="h-5 w-5 text-background" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-background/40 text-xs uppercase tracking-wider mb-1">Adresse</p>
                          <p className="text-background font-medium">Draria El Achour, Alger</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                          <Mail className="h-5 w-5 text-background" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-background/40 text-xs uppercase tracking-wider mb-1">Email</p>
                          <a
                            href="mailto:contact@aeratobacco.com"
                            className="text-background font-medium hover:text-background/80 transition-colors duration-300"
                          >
                            contact@aeratobacco.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
                
                {/* Decorative element */}
                <FadeUp delay={0.2}>
                  <div className="hidden lg:block pt-8">
                    <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
                    <p className="text-background/30 text-sm mt-6 leading-relaxed">
                      Notre equipe repond generalement sous 24 heures ouvrables.
                    </p>
                  </div>
                </FadeUp>
              </div>

              {/* Contact Form - Right Side */}
              <FadeUp delay={0.2} className="lg:col-span-3">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent opacity-50 blur-xl" />
                  
                  <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
                    {isSubmitted ? (
                      <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="h-10 w-10 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-background">
                          Message envoye !
                        </h3>
                        <p className="text-background/60">
                          Nous vous repondrons dans les plus brefs delais.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label 
                              htmlFor="name" 
                              className="text-xs uppercase tracking-wider text-background/50"
                            >
                              Nom
                            </Label>
                            <Input
                              id="name"
                              placeholder="Votre nom"
                              value={formState.name}
                              onChange={(e) =>
                                setFormState({ ...formState, name: e.target.value })
                              }
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="h-14 px-5 rounded-xl bg-white/5 border-white/10 text-background placeholder:text-background/30 focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label 
                              htmlFor="email"
                              className="text-xs uppercase tracking-wider text-background/50"
                            >
                              Email
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="votre@email.com"
                              value={formState.email}
                              onChange={(e) =>
                                setFormState({ ...formState, email: e.target.value })
                              }
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="h-14 px-5 rounded-xl bg-white/5 border-white/10 text-background placeholder:text-background/30 focus:border-white/30 focus:bg-white/10 transition-all duration-300"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label 
                            htmlFor="message"
                            className="text-xs uppercase tracking-wider text-background/50"
                          >
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            placeholder="Comment pouvons-nous vous aider ?"
                            rows={5}
                            value={formState.message}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                message: e.target.value,
                              })
                            }
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="px-5 py-4 rounded-xl bg-white/5 border-white/10 text-background placeholder:text-background/30 focus:border-white/30 focus:bg-white/10 transition-all duration-300 resize-none"
                          />
                        </div>
                        
                        <div className="pt-2">
                          <MagneticWrapper>
                            <Button 
                              type="submit" 
                              className="w-full h-14 rounded-xl text-base bg-background text-foreground hover:bg-background/90 transition-all duration-300" 
                              size="lg"
                            >
                              <Send className="h-4 w-4 mr-3" />
                              Envoyer le message
                              <ArrowRight className="h-4 w-4 ml-3 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </MagneticWrapper>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
