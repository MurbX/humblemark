import Image from "next/image";
import { IconArrowRight, IconLeaf } from "@/components/icons";

const HIGHLIGHTS = ["No added sugar", "Vegan friendly", "Recyclable packaging"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-leaf/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-leaf/15 px-3 py-1 text-xs font-semibold tracking-widest text-forest uppercase">
            <IconLeaf className="h-3.5 w-3.5" />
            Non-alcoholic drinks
          </p>

          <h1 className="mt-5 font-display text-5xl leading-[1.05] font-semibold text-pine sm:text-6xl">
            Fresh. Natural.{" "}
            <span className="text-citrus">Refreshing.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
            Small-batch juices, sparkling botanicals and zero-proof sips —
            pressed from real fruit, with no added sugar and nothing
            artificial.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#shop"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-semibold text-cream transition-colors hover:bg-pine"
            >
              Shop drinks
              <IconArrowRight className="h-4.5 w-4.5" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center rounded-full px-7 py-3.5 font-semibold text-forest ring-1 ring-forest/25 transition-colors hover:bg-forest/5 ring-inset"
            >
              Our story
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="rounded-full border border-forest/15 bg-white/60 px-3 py-1.5 text-xs font-medium text-ink/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex justify-center">
          <div className="rotate-1 rounded-[2.5rem] bg-white p-10 shadow-xl shadow-forest/10 ring-1 ring-forest/10 transition-transform duration-300 hover:rotate-0 sm:p-14">
            <Image
              src="/logo.png"
              alt="HumbleMark logo — Fresh. Natural. Refreshing. Non-alcoholic drinks"
              width={866}
              height={900}
              priority
              sizes="(min-width: 1024px) 20rem, 70vw"
              className="h-auto w-60 sm:w-72 lg:w-80"
            />
          </div>
          <p className="absolute -bottom-4 left-4 rounded-2xl bg-amber px-4 py-3 text-sm font-bold text-pine shadow-lg sm:left-10">
            100% real fruit
          </p>
        </div>
      </div>
    </section>
  );
}
