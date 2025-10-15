import { TestimonialsSectionClient } from "./TestimonialsSectionClient";
import testimonials from "../../../public/review.json";

export function TestimonialsSection() {
  const avgRating =
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "MemoZy",
    applicationCategory: "Productivity",
    operatingSystem: "iOS, Android",
    url: "https://memozy.ai/",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: testimonials.length,
    },
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: { "@type": "Person", name: testimonial.name },
      reviewBody: testimonial.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
        bestRating: 5,
      },
    })),
  };

  return (
    <section
      id="memozy-testimonials"
      aria-label="MemoZy user reviews and testimonials"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TestimonialsSectionClient />
    </section>
  );
}
