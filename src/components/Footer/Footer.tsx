import { FooterClient } from "./FooterClient"

export function Footer() {
  const quickLinks = [
    { name: "How to Use", href: "https://memozy.ai/how-to-use-memozy.html" },
    {
      name: "Second Brain",
      href: "https://www.memozy.ai/memozy_second_brain.html",
    },
    { name: "Support", href: "https://www.memozy.ai/app-feedback.html" },
    { name: "Privacy Policy", href: "https://www.memozy.ai/privacy-policy.html" },
    { name: "Delete Account", href: "https://www.memozy.ai/delete-account.html" },
    { name: "Company", href: "https://agenteex.com/" },
  ]

  const features = [
    "Natural AI Conversations",
    "AI Roleplay & Emotional Support",
    "Smart Organization",
    "Voice Messages",
    "Calendar Sync",
    "Weekly Journal Summaries",
  ]

  return <FooterClient quickLinks={quickLinks} features={features} />
}
