const COLUMNS = [
  {
    heading: "Shop",
    links: ["Cold-pressed juices", "Sparkling botanicals", "Zero-proof mocktails", "Gift bundles"],
  },
  {
    heading: "Company",
    links: ["Our story", "Stockists", "Careers"],
  },
  {
    heading: "Help",
    links: ["FAQs", "Shipping & returns", "Contact us", "Privacy"],
  },
];

export default function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-pine text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            <span className="text-cream">Humble</span>
            <span className="text-amber">Mark</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
            Fresh. Natural. Refreshing. Small-batch non-alcoholic drinks made
            from real fruit.
          </p>
        </div>

        {COLUMNS.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="text-xs font-semibold tracking-widest text-cream/50 uppercase">
              {column.heading}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link}>
                  <a
                    href="#top"
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-6 text-xs text-cream/50 sm:px-6">
          <p>© {new Date().getFullYear()} HumbleMark. All rights reserved.</p>
          <p>Made with real fruit.</p>
        </div>
      </div>
    </footer>
  );
}
