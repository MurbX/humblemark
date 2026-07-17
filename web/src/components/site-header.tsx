"use client";

import { useState } from "react";
import { IconCart, IconMenu, IconX } from "@/components/icons";

const NAV = [
  { label: "Shop", href: "#shop" },
  { label: "Best sellers", href: "#best-sellers" },
  { label: "Our story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <p className="bg-pine px-4 py-2 text-center text-xs font-medium tracking-wide text-cream sm:text-sm">
        Free shipping on orders over $50 · Fresh. Natural. Refreshing.
      </p>

      <div className="border-b border-forest/10 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a href="#top" className="font-display text-2xl font-bold tracking-tight">
            <span className="text-forest">Humble</span>
            <span className="text-citrus">Mark</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-forest"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-pine"
              aria-label="Open cart (0 items)"
            >
              <IconCart className="h-4.5 w-4.5" />
              <span className="hidden sm:inline">Cart</span>
              <span className="rounded-full bg-citrus px-1.5 text-xs font-bold text-white">
                0
              </span>
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-forest/10 md:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-forest/10 bg-cream px-4 py-3 md:hidden"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-sm font-medium text-ink/80 hover:bg-forest/10 hover:text-forest"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
