import { defineConfig } from "astro/config";

// GitHub Pages serves this repo under /<repo-name>/, so `base` must match the
// repo name exactly — get it wrong and every asset 404s on the deployed URL
// while looking fine locally (root-relative paths resolve fine at localhost:4321/).
export default defineConfig({
  site: "https://comp4020-agentic-coding-studio.github.io",
  base: "/comp4020-crit2-BilalM004",
  outDir: "./dist",
});
