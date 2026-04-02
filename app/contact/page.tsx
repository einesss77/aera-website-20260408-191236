"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
  StaggerContainer,
  StaggerItem,
  HoverScale,
  MagneticWrapper,
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
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-muted/50 to-transparent rounded-full blur-3xl -z-10"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                Support
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 tracking-tight">
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
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Questions Frequentes
                </h2>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
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
                  </motion.div>
                ))}
              </Accordion>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  Contact
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Contactez-nous
                </h2>
              </div>
            </FadeUp>
            
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <FadeUp>
                  <h3 className="text-xl font-semibold mb-8">Nos Coordonnees</h3>
                </FadeUp>
                
                <StaggerContainer className="space-y-6" staggerDelay={0.15}>
                  <StaggerItem>
                    <HoverScale>
                      <Card className="border-0 shadow-xl bg-background">
                        <CardContent className="p-8 flex items-start gap-6">
                          <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                            className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0"
                          >
                            <MapPin className="h-6 w-6 text-foreground" />
                          </motion.div>
                          <div>
                            <h4 className="font-semibold mb-2">Adresse</h4>
                            <p className="text-muted-foreground">
                              Draria El Achour, Alger
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </StaggerItem>
                  
                  <StaggerItem>
                    <HoverScale>
                      <Card className="border-0 shadow-xl bg-background">
                        <CardContent className="p-8 flex items-start gap-6">
                          <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                            className="w-14 h-14 rounded-2xl bg-foreground/5 flex items-center justify-center shrink-0"
                          >
                            <Mail className="h-6 w-6 text-foreground" />
                          </motion.div>
                          <div>
                            <h4 className="font-semibold mb-2">Email</h4>
                            <a
                              href="mailto:contact@aeratobacco.com"
                              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                            >
                              contact@aeratobacco.com
                            </a>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </StaggerItem>
                </StaggerContainer>
              </div>

              {/* Contact Form */}
              <FadeUp delay={0.3}>
                <Card className="border-0 shadow-2xl bg-background overflow-hidden">
                  <CardContent className="p-10">
                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="text-center py-12"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          >
                            <CheckCircle className="h-20 w-20 text-emerald-500 mx-auto mb-6" />
                          </motion.div>
                          <h3 className="text-2xl font-semibold mb-3">
                            Message envoye !
                          </h3>
                          <p className="text-muted-foreground">
                            Nous vous repondrons dans les plus brefs delais.
                          </p>
                        </motion.div>
                      ) : (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmit}
                          className="space-y-8"
                        >
                          <div className="space-y-3">
                            <Label 
                              htmlFor="name" 
                              className={`text-sm transition-colors duration-300 ${
                                focusedField === 'name' ? 'text-foreground' : 'text-muted-foreground'
                              }`}
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
                              className="h-14 px-5 rounded-xl border-border/50 focus:border-foreground transition-all duration-300"
                            />
                          </div>
                          
                          <div className="space-y-3">
                            <Label 
                              htmlFor="email"
                              className={`text-sm transition-colors duration-300 ${
                                focusedField === 'email' ? 'text-foreground' : 'text-muted-foreground'
                              }`}
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
                              className="h-14 px-5 rounded-xl border-border/50 focus:border-foreground transition-all duration-300"
                            />
                          </div>
                          
                          <div className="space-y-3">
                            <Label 
                              htmlFor="message"
                              className={`text-sm transition-colors duration-300 ${
                                focusedField === 'message' ? 'text-foreground' : 'text-muted-foreground'
                              }`}
                            >
                              Message
                            </Label>
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
                              onFocus={() => setFocusedField('message')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="px-5 py-4 rounded-xl border-border/50 focus:border-foreground transition-all duration-300 resize-none"
                            />
                          </div>
                          
                          <MagneticWrapper className="pt-4">
                            <Button type="submit" className="w-full h-14 rounded-xl text-base" size="lg">
                              <Send className="h-4 w-4 mr-3" />
                              Envoyer le message
                              <ArrowRight className="h-4 w-4 ml-3" />
                            </Button>
                          </MagneticWrapper>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
