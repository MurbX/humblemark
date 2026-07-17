"use client";

import { useState } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="newsletter" className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-forest px-6 py-14 text-center text-cream sm:px-14">
        <div
          aria-hidden="true"
          className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-amber/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-20 -bottom-24 h-64 w-64 rounded-full bg-leaf/25 blur-3xl"
        />

        <h2 className="relative font-display text-3xl font-semibold sm:text-4xl">
          Join the Humble club
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-cream/75">
          10% off your first order, first dibs on new flavours, and the
          occasional mocktail recipe. No spam — that wouldn’t be very humble.
        </p>

        {submitted ? (
          <p
            role="status"
            className="relative mx-auto mt-8 max-w-md rounded-full bg-cream/10 px-6 py-3.5 font-semibold text-amber"
          >
            You’re in! Watch your inbox for a welcome treat.
          </p>
        ) : (
          <form
            className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-full bg-white/10 px-5 py-3.5 text-cream ring-1 ring-cream/25 outline-none placeholder:text-cream/40 focus:ring-2 focus:ring-amber"
            />
            <button
              type="submit"
              className="rounded-full bg-amber px-6 py-3.5 font-semibold text-pine transition-colors hover:bg-citrus"
            >
              Sign me up
            </button>
          </form>
        )}

        <p className="relative mt-4 text-xs text-cream/50">
          By signing up you agree to receive HumbleMark emails. Unsubscribe
          anytime.
        </p>
      </div>
    </section>
  );
}
