import { IconCheck } from "@/components/icons";

const PROMISES = [
  "Pressed in small batches, never from concentrate",
  "No added sugar, colourings or preservatives",
  "Bottles and cans that recycle clean",
];

const STATS = [
  { value: "0%", label: "alcohol" },
  { value: "0g", label: "added sugar" },
  { value: "100%", label: "real fruit" },
];

export default function Story() {
  return (
    <section id="story" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-xs font-semibold tracking-widest text-citrus uppercase">
            Our story
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-pine sm:text-4xl">
            Why “Humble”?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Because good drinks don’t need to shout. We started HumbleMark with
            one rule: if the fruit wouldn’t be proud of it, it doesn’t go in
            the bottle.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            Every batch is pressed in small runs, poured cold and shipped
            fresh — no concentrates, no shortcuts. Just fruit, botanicals and a
            little patience.
          </p>

          <ul className="mt-7 space-y-3">
            {PROMISES.map((promise) => (
              <li key={promise} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-forest">
                  <IconCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-ink/80">{promise}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-pine p-10 text-cream sm:p-12">
          <div
            aria-hidden="true"
            className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-amber/20 blur-2xl"
          />
          <blockquote className="relative font-display text-2xl leading-snug font-medium sm:text-3xl">
            “All the ritual, none of the proof.”
          </blockquote>
          <p className="relative mt-4 text-cream/70">
            Every HumbleMark drink is fully non-alcoholic — made for slow
            mornings, long lunches and designated drivers with good taste.
          </p>
          <dl className="relative mt-8 grid grid-cols-3 gap-4 border-t border-cream/15 pt-8 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-2xl font-semibold text-amber sm:text-3xl">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-xs tracking-wider text-cream/60 uppercase">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
