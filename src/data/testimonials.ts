// Real customer pull-quotes and press mentions from the aerre.co homepage
// (see src/data/perfumes.ts for the same real-sourced-data approach). We
// reuse the factual content — the words themselves — but not their video
// footage or logo artwork, which stays theirs.
export const QUOTES: string[] = [
  "Smells exactly like the Tom Ford version.",
  "Exceptional quality.",
  "Extremely close.",
  "The finest ingredients.",
  "Smells like the real deal.",
  "Try three... or more!",
];

// One mention per QUOTES entry, in the same order — mirrors the real
// carousel, where each press logo is the "author" of the quote next to it.
export const PRESS_MENTIONS: string[] = [
  "7NEWS",
  "Women's Weekly",
  "Who",
  "Marie Claire",
  "Mamamia",
  "Harper's Bazaar",
];

// One wordmark treatment per PRESS_MENTIONS entry, in the same order — a
// typographic approximation of each masthead's look, not a copy of their
// logo artwork (which stays theirs). Shared by ReviewsBar and HeroRotator.
export const PRESS_STYLES: string[] = ["news", "weekly", "who", "marie-claire", "mamamia", "bazaar"];

// aerre.co's homepage rating badge (Loox reviews app), read on 2026-08-12.
export const RATING = {
  value: 4.8,
  count: 26268,
};

// The "Familiar fragrance, safe for your body." trust section on the
// aerre.co homepage.
export const CRUELTY_FREE = {
  headline: "Familiar fragrance, safe for your body.",
  claim: "100% vegan, cruelty free and made using the highest quality ingredients.",
};

// Other homepage trust stats (delivery counter, customer count).
export const STATS: string[] = ["1,000,000+ perfumes delivered", "200,000+ happy customers"];
