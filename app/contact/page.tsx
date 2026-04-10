"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Mail, MapPin, Send, CheckCircle, ArrowRight } from "lucide-react"
import {
  FadeUp,
  MagneticWrapper,
  AnimatedOrb,
} from "@/components/animations"
import { useLanguage } from "@/components/language-provider"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const { copy } = useLanguage()
  const contactCopy = copy.contact

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen pt-24 overflow-hidden">
      <section className="py-20 md:py-32 relative">
        <AnimatedOrb className="top-0 left-1/4 w-96 h-96" />

        <div className="container mx-auto px-6 md:px-8">
          <FadeUp>
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                {contactCopy.heroEyebrow}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold mb-8 tracking-tight">
                {contactCopy.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{contactCopy.heroDescription}</p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  {contactCopy.faqEyebrow}
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight">
                  {contactCopy.faqTitle}
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                {contactCopy.faqs.map((faq, index) => (
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

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="inline-block text-xs font-medium tracking-widest uppercase text-background/40 mb-6">
                  {contactCopy.contactEyebrow}
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-semibold tracking-tight text-background">
                  {contactCopy.contactTitle}
                </h2>
              </div>
            </FadeUp>

            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-8">
                <FadeUp>
                  <div className="space-y-2">
                    <p className="text-background/60 text-sm uppercase tracking-widest">{contactCopy.talkLabel}</p>
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-background leading-tight">
                      {contactCopy.talkTitle}
                    </h3>
                  </div>
                </FadeUp>

                <FadeUp delay={0.1}>
                  <div className="space-y-6 pt-4">
                    <div className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                          <MapPin className="h-5 w-5 text-background" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-background/40 text-xs uppercase tracking-wider mb-1">{contactCopy.addressLabel}</p>
                          <p className="text-background font-medium">{contactCopy.address}</p>
                        </div>
                      </div>
                    </div>

                    <div className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
                          <Mail className="h-5 w-5 text-background" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-background/40 text-xs uppercase tracking-wider mb-1">{contactCopy.emailLabel}</p>
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

                <FadeUp delay={0.2}>
                  <div className="hidden lg:block pt-8">
                    <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
                    <p className="text-background/30 text-sm mt-6 leading-relaxed">{contactCopy.replyTime}</p>
                  </div>
                </FadeUp>
              </div>

              <FadeUp delay={0.2} className="lg:col-span-3">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent opacity-50 blur-xl" />

                  <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10">
                    {isSubmitted ? (
                      <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                        <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="h-10 w-10 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3 text-background">{contactCopy.successTitle}</h3>
                        <p className="text-background/60">{contactCopy.successDescription}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label
                              htmlFor="name"
                              className="text-xs uppercase tracking-wider text-background/50"
                            >
                              {contactCopy.name}
                            </Label>
                            <Input
                              id="name"
                              placeholder={contactCopy.namePlaceholder}
                              value={formState.name}
                              onChange={(e) =>
                                setFormState({ ...formState, name: e.target.value })
                              }
                              onFocus={() => setFocusedField("name")}
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
                              {contactCopy.email}
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder={contactCopy.emailPlaceholder}
                              value={formState.email}
                              onChange={(e) =>
                                setFormState({ ...formState, email: e.target.value })
                              }
                              onFocus={() => setFocusedField("email")}
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
                            {contactCopy.message}
                          </Label>
                          <Textarea
                            id="message"
                            placeholder={contactCopy.messagePlaceholder}
                            rows={5}
                            value={formState.message}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                message: e.target.value,
                              })
                            }
                            onFocus={() => setFocusedField("message")}
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
                              {contactCopy.submit}
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
