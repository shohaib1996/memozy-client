import { SecondaryCTASectionClient } from "./SecondaryCTASectionClient";

export function SecondaryCTASection() {
  return (
    <section className="relative py-16 overflow-hidden font-outfit">
      <SecondaryCTASectionClient>
        {/* The static text content is passed as a child to the client component */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-blue-600 to-purple-600 dark:from-violet-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
            Stay Organized. Feel Supported.
            <br />
            Let Memozy Remember for You.
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of users who trust Memozy as their AI companion for
            productivity and emotional support.
          </p>
        </div>
      </SecondaryCTASectionClient>
    </section>
  );
}
