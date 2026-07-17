import { IconArrowRight } from "@/components/icons";

const CATEGORIES = [
  {
    name: "Cold-Pressed Juices",
    blurb: "Real fruit, pressed the slow way.",
    card: "bg-linear-to-br from-amber/70 via-citrus/40 to-citrus/15 text-pine",
    arrow: "bg-white/70 text-pine",
  },
  {
    name: "Sparkling Botanicals",
    blurb: "Light, bright and gently fizzy.",
    card: "bg-linear-to-br from-leaf/60 via-leaf/30 to-forest/10 text-pine",
    arrow: "bg-white/70 text-pine",
  },
  {
    name: "Zero-Proof Mocktails",
    blurb: "All the ritual, none of the proof.",
    card: "bg-linear-to-br from-pine to-forest text-cream",
    arrow: "bg-cream/20 text-cream",
  },
];

export default function Categories() {
  return (
    <section id="shop" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-semibold text-pine sm:text-4xl">
          Shop by mood
        </h2>
        <p className="mt-3 text-lg text-ink/60">
          Whatever the moment calls for, there’s a bottle for it.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((category) => (
          <a
            key={category.name}
            href="#best-sellers"
            className={`group relative flex h-56 flex-col justify-end overflow-hidden rounded-3xl p-7 transition-shadow hover:shadow-lg hover:shadow-forest/10 ${category.card}`}
          >
            <h3 className="font-display text-2xl font-semibold">{category.name}</h3>
            <p className="mt-1 text-sm opacity-80">{category.blurb}</p>
            <span
              className={`absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:translate-x-1 ${category.arrow}`}
            >
              <IconArrowRight className="h-4.5 w-4.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
