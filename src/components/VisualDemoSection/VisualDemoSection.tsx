import { VisualDemoSectionClient } from "./VisualDemoSectionClient";

export function VisualDemoSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "MemoZy App Demo",
    description:
      "A demo of Memozy, an AI assistant for meeting setup, smart notes, and AI conversations.",
    thumbnailUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/main.png`,
    uploadDate: "2025-10-15T08:00:00+00:00",
    duration: "PT1M30S",
    contentUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/loop-video.mp4`,
    embedUrl: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/loop-video.mp4`,
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: { "@type": "WatchAction" },
      userInteractionCount: 12345,
    },
    regionsAllowed: "US, CA, GB, AU",
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-violet-200 to-purple-200 dark:from-blue-600/30 dark:via-violet-600/30 dark:to-purple-600/30" />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/30 dark:bg-black/30" />

      <div className="container mx-auto px-4 relative z-10">
        <VisualDemoSectionClient />
      </div>
    </section>
  );
}
