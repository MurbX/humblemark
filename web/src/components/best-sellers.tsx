import { IconBottle } from "@/components/icons";

const PRODUCTS = [
  {
    name: "Sunrise Squeeze",
    note: "Cold-pressed orange, mango & a pinch of turmeric",
    price: "$6.50",
    badge: "Best seller",
    tile: "bg-linear-to-br from-amber to-citrus",
  },
  {
    name: "Garden Fizz",
    note: "Sparkling cucumber, mint & lime",
    price: "$5.00",
    tile: "bg-linear-to-br from-leaf to-forest",
  },
  {
    name: "Berry Hibiscus Cooler",
    note: "Hibiscus, raspberry & a whisper of rose",
    price: "$5.50",
    badge: "New",
    tile: "bg-linear-to-br from-rose-300 to-rose-500",
  },
  {
    name: "Ginger Root Revival",
    note: "Fiery ginger & cold-pressed lemon",
    price: "$4.00",
    tile: "bg-linear-to-br from-amber to-yellow-600",
  },
];

export default function BestSellers() {
  return (
    <section id="best-sellers" className="scroll-mt-24 border-y border-forest/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold text-pine sm:text-4xl">
              Crowd pleasers
            </h2>
            <p className="mt-3 text-lg text-ink/60">
              Our most re-ordered drinks, straight from the press.
            </p>
          </div>
          <a
            href="#shop"
            className="text-sm font-semibold text-forest transition-colors hover:text-pine"
          >
            View all drinks →
          </a>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <li
              key={product.name}
              className="group overflow-hidden rounded-3xl bg-cream ring-1 ring-forest/10 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-forest/10"
            >
              <div className={`relative flex h-44 items-center justify-center ${product.tile}`}>
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_55%)]"
                />
                <IconBottle className="relative h-20 w-20 text-white/40 transition-transform duration-300 group-hover:scale-105" />
                {product.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-xs font-semibold text-pine">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-pine">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-ink/60">{product.note}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-semibold text-ink">{product.price}</p>
                  <button
                    type="button"
                    aria-label={`Add ${product.name} to cart`}
                    className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-pine"
                  >
                    Add
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
