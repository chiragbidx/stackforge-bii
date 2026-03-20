import { type HomeContent } from "./home";

export const homeContent: HomeContent = {
  hero: {
    badgeInner: "Simple e-signatures",
    badgeOuter: "Now with SignPilot",
    titleBefore: "Fast, Secure Digital Signatures for",
    titleHighlight: "Modern Businesses",
    titleAfter: "",
    subtitle: "SignPilot makes sending, signing, and managing documents easy, efficient, and legally binding.",
    primaryCta: { label: "Start Free Trial", href: "#pricing" },
    secondaryCta: { label: "Learn More", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "SignPilot digital signature dashboard preview",
  },
  sponsors: {
    heading: "Trusted for secure e-signatures",
    items: [
      { icon: "BadgeCheck", name: "Legally Binding" },
      { icon: "Cloud", name: "Cloud Secure" },
      { icon: "Users", name: "Team Collaboration" },
      { icon: "ShieldCheck", name: "Compliance" }
    ]
  },
  benefits: {
    eyebrow: "Why SignPilot",
    heading: "Simple, secure, and professional e-signature workflows",
    description: "Provide your business with an easy, global-compliant solution for digital document signing and status tracking.",
    items: [
      {
        icon: "Upload",
        title: "Upload and Request Signatures",
        description: "Upload any document and request signatures in seconds.",
      },
      {
        icon: "ShieldCheck",
        title: "Legally Binding",
        description: "E-signature workflows are compliant with global standards for peace of mind.",
      },
      {
        icon: "LayoutDashboard",
        title: "Central Dashboard",
        description: "Track status and manage documents from a single dashboard.",
      },
      {
        icon: "Users",
        title: "Effortless Collaboration",
        description: "Collaborate with your team and clients easily.",
      },
    ],
  },
  features: {
    eyebrow: "Features",
    heading: "Everything you need to get documents signed",
    subtitle: "SignPilot combines a professional workflow with intuitive simplicity, empowering teams to move faster.",
    items: [
      {
        icon: "Upload",
        title: "Universal Document Upload",
        description: "Supports all major document formats and instant cloud access.",
      },
      {
        icon: "PencilLine",
        title: "Quick Signature Requests",
        description: "Send signature requests in just a few clicks.",
      },
      {
        icon: "ShieldCheck",
        title: "Compliance & Security",
        description: "Industry-standard e-signature compliance and encryption.",
      },
      {
        icon: "Users",
        title: "Team & Client Collaboration",
        description: "Invite teammates or clients to sign and track status.",
      },
    ],
  },
  services: {
    eyebrow: "Get More Done",
    heading: "Designed for busy professionals",
    subtitle: "From solo founders to enterprise teams, SignPilot helps you close deals and contracts securely.",
    items: [
      { title: "Fast Onboarding", description: "Get started in minutes with no complex setup.", pro: false },
      { title: "Real-time Status", description: "Track every document and signature at a glance.", pro: true },
      { title: "Templates", description: "Create and reuse signing templates for common workflows.", pro: true },
      { title: "Cloud Secure", description: "Your documents are always safe and encrypted.", pro: true },
    ],
  },
  testimonials: {
    eyebrow: "Trusted by Businesses",
    heading: "Join hundreds of businesses that trust SignPilot for document signing",
    reviews: [
      {
        image: "/team1.jpg",
        name: "Ava Lindstrom",
        role: "COO, NextGen Legal",
        comment: "SignPilot streamlined our contract process—we send out NDAs and agreements in minutes.",
        rating: 5,
      },
      {
        image: "/team2.jpg",
        name: "Martin Cruz",
        role: "Founder, EliteHR",
        comment: "Simple and secure. Our team never misses a signature now.",
        rating: 5,
      },
      {
        image: "/team3.jpg",
        name: "Priya Singh",
        role: "Operations Lead, TrueVitals",
        comment: "It’s a game changer for onboarding and closing deals rapidly.",
        rating: 4.9,
      },
    ],
  },
  team: {
    eyebrow: "Meet the Team",
    heading: "Behind SignPilot",
    members: [],
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Start free, scale as you grow",
    subtitle: "Upgrade anytime for more advanced workflows and team features.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Free Trial",
        popular: false,
        price: 0,
        description: "Everything you need to start sending documents for signature.",
        buttonText: "Start Free Trial",
        benefits: ["Unlimited signature requests", "Email support", "Basic dashboard"],
      },
      {
        title: "Pro",
        popular: true,
        price: 24,
        description: "For teams and professionals managing workflows at scale.",
        buttonText: "Start Free Trial",
        benefits: [
          "All Free features",
          "Team management",
          "Advanced tracking",
          "Template workflows",
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 99,
        description: "Custom integrations, white-labeling, and compliance support.",
        buttonText: "Contact sales",
        benefits: [
          "Dedicated onboarding",
          "Priority support",
          "White-labeling",
          "SSO / Compliance",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Connect with SignPilot",
    description: "Questions? Contact us for a walkthrough or help integrating SignPilot into your business.",
    mailtoAddress: "simon@bidx.ai",
    info: {
      address: { label: "Find us", value: "Remote • Worldwide" },
      phone: { label: "Call us", value: "" },
      email: { label: "Email us", value: "simon@bidx.ai" },
      hours: { label: "Hours", value: ["Monday - Friday", "9AM - 7PM"] },
    },
    formSubjects: ["Partnership", "Demo", "Support", "Enterprise Quote"],
    formSubmitLabel: "Send message",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "Are SignPilot signatures legally binding?",
        answer: "Yes. SignPilot signatures comply with global e-signature laws like ESIGN and eIDAS.",
      },
      {
        question: "Can I collaborate on documents with my team?",
        answer: "Absolutely! Invite your team and clients for shared workflows and status tracking.",
      },
      {
        question: "Is my data secure?",
        answer: "We use advanced encryption and security protocols to keep your documents safe.",
      },
    ],
  },
  footer: {
    brandName: "SignPilot",
    columns: [
      {
        heading: "Support",
        links: [
          { label: "simon@bidx.ai", href: "mailto:simon@bidx.ai" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Legal",
        links: [
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} SignPilot. All rights reserved.`,
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },
  navbar: {
    brandName: "SignPilot",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/hero-image-light.jpeg", alt: "SignPilot dashboard preview" },
    features: [
      { title: "Upload Documents", description: "Upload PDFs and popular formats for e-signature" },
      { title: "Signature Workflow", description: "Prepare, assign, and send signature requests" },
      { title: "Status Tracking", description: "See who’s signed, pending, and completed" },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Start Free Trial",
    dashboardLabel: "Dashboard",
    githubLink: { href: "#", ariaLabel: "View on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return homeContent;
}