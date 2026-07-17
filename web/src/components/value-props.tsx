import {
  IconLeaf,
  IconShield,
  IconSnowflake,
  IconTruck,
} from "@/components/icons";

const PROPS = [
  {
    icon: IconTruck,
    title: "Free shipping",
    text: "On all orders over $50",
  },
  {
    icon: IconLeaf,
    title: "Nothing artificial",
    text: "Real fruit, no added sugar",
  },
  {
    icon: IconSnowflake,
    title: "Cold & fresh",
    text: "Chilled from press to porch",
  },
  {
    icon: IconShield,
    title: "Freshness guarantee",
    text: "Not happy? We’ll make it right",
  },
];

export default function ValueProps() {
  return (
    <section className="border-y border-forest/10 bg-white/50">
      <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {PROPS.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-leaf/15 text-forest">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-semibold text-pine">{title}</p>
              <p className="text-sm text-ink/60">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
