import { VisualDemoSectionClient } from "./VisualDemoSectionClient";

export function VisualDemoSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
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
