export type Language = "fr" | "en"

export const translations = {
  fr: {
    header: {
      nav: [
        { href: "/", label: "Accueil" },
        { href: "/produits", label: "Produits" },
        { href: "/contact", label: "FAQ / Contact" },
      ],
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      languageLabel: "Langue",
    },
    footer: {
      description:
        "Le premier producteur de nicotine pouches en Algérie. Production locale avec des standards internationaux.",
      navigation: "Navigation",
      contact: "Contact",
      address: "Draria El Achour, Alger",
      rights: "Tous droits réservés.",
      madeWith: "Fabriqué avec",
      madeIn: "en Algérie",
    },
    home: {
      badge: "Premier en Algérie",
      intro: "Le premier producteur de",
      country: "Algérie",
      heroDescription: "Découvrez AERA, une nouvelle ère de satisfaction. Production locale, qualité internationale.",
      heroPrimaryCta: "Voir nos produits",
      heroSecondaryCta: "Nous contacter",
      infoTobaccoFree: "Sans Tabac",
      infoFlavors: "3 Saveurs",
      heroImageAlt: "AERA nicotine pouches - Berry, Mint, et Mango",
      aboutEyebrow: "À propos",
      aboutTitle: "Qui sommes-nous",
      aboutDescription:
        "AERA est née d'une vision simple mais audacieuse : offrir aux consommateurs algériens une alternative moderne, discrète et de haute qualité aux produits traditionnels du tabac. En tant que premier producteur local de nicotine pouches en Algérie, nous combinons expertise internationale et savoir-faire local pour créer des produits qui répondent aux standards les plus exigeants.",
      advantagesEyebrow: "Nos avantages",
      advantagesTitleTop: "Pourquoi",
      advantagesTitleMiddle: "choisir",
      advantagesTitleBottom: "AERA",
      advantagesDescription:
        "Une expérience unique qui allie innovation, qualité et respect de vos attentes. Découvrez ce qui fait notre différence.",
      collectionEyebrow: "Collection",
      collectionTitle: "Nos Produits",
      collectionDescription: "Trois saveurs uniques pour satisfaire tous les goûts",
      collectionCta: "Voir tous les produits",
      premiumEyebrow: "Édition Premium",
      premiumTitle: "L'Excellence à l'État Pur",
      premiumDescription:
        "Notre édition premium incarne le raffinement absolu. Conçue pour les connaisseurs les plus exigeants, elle offre une expérience incomparable grâce à son design élégant et à sa formulation sophistiquée.",
      premiumCta: "Découvrir",
      premiumImageAlt: "AERA Premium Edition - 8mg",
      features: [
        {
          title: "Production Locale",
          description: "Fabriqué avec fierté en Algérie, en soutenant l'économie locale et en garantissant la fraîcheur.",
        },
        {
          title: "Standards Internationaux",
          description: "Une qualité supérieure, conforme aux normes les plus strictes de l'industrie.",
        },
        {
          title: "Sans Fumée ni Tabac",
          description: "Une alternative moderne et discrète, sans combustion ni produits du tabac.",
        },
      ],
      products: [
        { name: "Berry", strength: "3mg" },
        { name: "Fresh Mint", strength: "6mg" },
        { name: "Mango", strength: "30mg" },
      ],
    },
    products: {
      eyebrow: "Notre collection",
      title: "Nos Produits",
      description: "Découvrez notre gamme de nicotine pouches, conçue pour offrir une expérience premium adaptée à chaque préférence.",
      imageAlt: "Gamme complète AERA",
      specsEyebrow: "Spécifications",
      specsTitle: "Une Gamme Complète",
      specsDescription:
        "Chaque produit AERA est le résultat d'une recherche approfondie et d'un engagement envers l'excellence. De la sélection des ingrédients à l'emballage final, chaque détail est pensé pour offrir une expérience optimale.",
      missionEyebrow: "Notre mission",
      missionTitle: "Notre Vision",
      missionParagraph1:
        "Chez AERA, nous croyons en un avenir où les consommateurs ont accès à des alternatives de qualité, produites localement selon des standards internationaux.",
      missionParagraph2:
        "Notre mission est de devenir la référence des nicotine pouches en Algérie et dans la région, en offrant des produits innovants qui respectent à la fois nos clients et notre environnement.",
      missionImageAlt: "AERA Mint et Berry",
      products: [
        {
          name: "Berry",
          strength: "3mg",
          badge: "Light",
          description: "Une explosion fruitée de baies rouges pour une expérience douce et rafraîchissante.",
          features: ["Saveur fruitée", "Dosage léger", "Idéal pour débuter"],
        },
        {
          name: "Fresh Mint",
          strength: "6mg",
          badge: "Medium",
          description: "La fraîcheur intense de la menthe pour une sensation revigorante et durable.",
          features: ["Fraîcheur intense", "Dosage équilibré", "Effet longue durée"],
        },
        {
          name: "Mango",
          strength: "30mg",
          badge: "Strong",
          description: "L'exotisme sucré de la mangue, avec une intensité remarquable pour les utilisateurs expérimentés.",
          features: ["Saveur exotique", "Dosage puissant", "Pour les expérimentés"],
        },
      ],
      specs: [
        "20 pouches par boîte",
        "Format slim confortable",
        "Durée d'action : environ 45 minutes",
        "Sans tabac, sans fumée",
      ],
    },
    contact: {
      heroEyebrow: "Support",
      heroTitle: "FAQ & Contact",
      heroDescription: "Trouvez les réponses à vos questions ou contactez-nous directement. Notre équipe est là pour vous accompagner.",
      faqEyebrow: "Aide",
      faqTitle: "Questions Fréquentes",
      contactEyebrow: "Contact",
      contactTitle: "Contactez-nous",
      talkLabel: "Parlons ensemble",
      talkTitle: "Une question ? Un partenariat ? Écrivez-nous.",
      addressLabel: "Adresse",
      address: "Draria El Achour, Alger",
      emailLabel: "Email",
      replyTime: "Notre équipe répond généralement sous 24 heures ouvrables.",
      successTitle: "Message envoyé !",
      successDescription: "Nous vous répondrons dans les plus brefs délais.",
      name: "Nom",
      email: "Email",
      message: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "votre@email.com",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      submit: "Envoyer le message",
      faqs: [
        {
          question: "Qui sommes-nous ?",
          answer:
            "AERA est le premier producteur de nicotine pouches en Algérie. Nous combinons expertise internationale et savoir-faire local pour créer des produits de haute qualité qui respectent les standards les plus exigeants de l'industrie.",
        },
        {
          question: "Combien de temps dure l'effet d'un pouch ?",
          answer:
            "L'effet d'un pouch AERA dure environ 45 minutes. Cette durée peut varier légèrement selon les individus et le dosage choisi.",
        },
        {
          question: "Comment utiliser les nicotine pouches ?",
          answer:
            "Placez simplement le pouch sous votre lèvre supérieure. Il libérera progressivement la nicotine, sans avoir besoin de mâcher ni de cracher. Retirez-le après environ 45 minutes ou lorsque vous le souhaitez.",
        },
        {
          question: "Quels dosages de nicotine proposez-vous ?",
          answer:
            "Nous proposons une gamme complète allant de 3 mg (léger) à 50 mg (très fort) pour s'adapter à tous les profils d'utilisateurs. Nos trois produits phares sont Berry (3 mg), Fresh Mint (6 mg) et Mango (30 mg).",
        },
        {
          question: "Combien de pouches contient une boîte ?",
          answer:
            "Chaque boîte AERA contient 20 pouches au format slim, conçu pour un confort optimal sous la lèvre.",
        },
      ],
    },
  },
  en: {
    header: {
      nav: [
        { href: "/", label: "Home" },
        { href: "/produits", label: "Products" },
        { href: "/contact", label: "FAQ / Contact" },
      ],
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageLabel: "Language",
    },
    footer: {
      description:
        "The first producer of nicotine pouches in Algeria. Local production with international standards.",
      navigation: "Navigation",
      contact: "Contact",
      address: "Draria El Achour, Algiers",
      rights: "All rights reserved.",
      madeWith: "Made with",
      madeIn: "in Algeria",
    },
    home: {
      badge: "First in Algeria",
      intro: "The first producer of",
      country: "Algeria",
      heroDescription: "Discover AERA, a new era of satisfaction. Local production, international quality.",
      heroPrimaryCta: "View our products",
      heroSecondaryCta: "Contact us",
      infoTobaccoFree: "Tobacco-Free",
      infoFlavors: "3 Flavors",
      heroImageAlt: "AERA nicotine pouches - Berry, Mint, and Mango",
      aboutEyebrow: "About",
      aboutTitle: "Who are we",
      aboutDescription:
        "AERA was born from a simple yet bold vision: to offer Algerian consumers a modern, discreet, high-quality alternative to traditional tobacco products. As the first local producer of nicotine pouches in Algeria, we combine international expertise with local know-how to create products that meet the highest standards.",
      advantagesEyebrow: "Our strengths",
      advantagesTitleTop: "Why",
      advantagesTitleMiddle: "choose",
      advantagesTitleBottom: "AERA",
      advantagesDescription:
        "A unique experience that combines innovation, quality, and respect for your expectations. Discover what makes us different.",
      collectionEyebrow: "Collection",
      collectionTitle: "Our Products",
      collectionDescription: "Three distinctive flavors designed to satisfy every preference",
      collectionCta: "View all products",
      premiumEyebrow: "Premium Edition",
      premiumTitle: "Excellence in Its Purest Form",
      premiumDescription:
        "Our premium edition embodies absolute refinement. Designed for the most demanding connoisseurs, it offers an unmatched experience through elegant design and a sophisticated formulation.",
      premiumCta: "Discover",
      premiumImageAlt: "AERA Premium Edition - 8mg",
      features: [
        {
          title: "Local Production",
          description: "Proudly made in Algeria, supporting the local economy while ensuring freshness.",
        },
        {
          title: "International Standards",
          description: "Superior quality aligned with the strictest standards in the industry.",
        },
        {
          title: "Smoke-Free and Tobacco-Free",
          description: "A modern and discreet alternative, without combustion or tobacco products.",
        },
      ],
      products: [
        { name: "Berry", strength: "3mg" },
        { name: "Fresh Mint", strength: "6mg" },
        { name: "Mango", strength: "30mg" },
      ],
    },
    products: {
      eyebrow: "Our collection",
      title: "Our Products",
      description: "Discover our nicotine pouch range, designed to deliver a premium experience tailored to every preference.",
      imageAlt: "Full AERA range",
      specsEyebrow: "Specifications",
      specsTitle: "A Complete Range",
      specsDescription:
        "Every AERA product is the result of in-depth research and a commitment to excellence. From ingredient selection to final packaging, every detail is designed to deliver an optimal experience.",
      missionEyebrow: "Our mission",
      missionTitle: "Our Vision",
      missionParagraph1:
        "At AERA, we believe in a future where consumers have access to quality alternatives produced locally to international standards.",
      missionParagraph2:
        "Our mission is to become the benchmark for nicotine pouches in Algeria and across the region by offering innovative products that respect both our customers and our environment.",
      missionImageAlt: "AERA Mint and Berry",
      products: [
        {
          name: "Berry",
          strength: "3mg",
          badge: "Light",
          description: "A fruity burst of red berries for a soft and refreshing experience.",
          features: ["Fruity flavor", "Light dosage", "Ideal for beginners"],
        },
        {
          name: "Fresh Mint",
          strength: "6mg",
          badge: "Medium",
          description: "An intense mint freshness for a revitalizing and long-lasting sensation.",
          features: ["Intense freshness", "Balanced dosage", "Long-lasting effect"],
        },
        {
          name: "Mango",
          strength: "30mg",
          badge: "Strong",
          description: "Sweet mango exoticism with remarkable intensity for experienced users.",
          features: ["Exotic flavor", "Strong dosage", "For experienced users"],
        },
      ],
      specs: [
        "20 pouches per can",
        "Comfortable slim format",
        "Effect duration: around 45 minutes",
        "Tobacco-free, smoke-free",
      ],
    },
    contact: {
      heroEyebrow: "Support",
      heroTitle: "FAQ & Contact",
      heroDescription: "Find answers to your questions or contact us directly. Our team is here to help you.",
      faqEyebrow: "Help",
      faqTitle: "Frequently Asked Questions",
      contactEyebrow: "Contact",
      contactTitle: "Get in touch",
      talkLabel: "Let's talk",
      talkTitle: "A question? A partnership? Write to us.",
      addressLabel: "Address",
      address: "Draria El Achour, Algiers",
      emailLabel: "Email",
      replyTime: "Our team usually replies within 24 business hours.",
      successTitle: "Message sent!",
      successDescription: "We will get back to you as soon as possible.",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "How can we help you?",
      submit: "Send message",
      faqs: [
        {
          question: "Who are we?",
          answer:
            "AERA is the first producer of nicotine pouches in Algeria. We combine international expertise with local know-how to create high-quality products that meet the industry's most demanding standards.",
        },
        {
          question: "How long does the effect of a pouch last?",
          answer:
            "The effect of an AERA pouch lasts around 45 minutes. This duration may vary slightly depending on the individual and the dosage chosen.",
        },
        {
          question: "How do you use nicotine pouches?",
          answer:
            "Simply place the pouch under your upper lip. It gradually releases nicotine without the need to chew or spit. Remove it after around 45 minutes or whenever you want.",
        },
        {
          question: "What nicotine strengths do you offer?",
          answer:
            "We offer a full range from 3 mg (light) to 50 mg (very strong) to suit all user profiles. Our three flagship products are Berry (3 mg), Fresh Mint (6 mg), and Mango (30 mg).",
        },
        {
          question: "How many pouches are in one can?",
          answer: "Each AERA can contains 20 slim-format pouches designed for optimal comfort under the lip.",
        },
      ],
    },
  },
} as const

export type Translations = typeof translations
