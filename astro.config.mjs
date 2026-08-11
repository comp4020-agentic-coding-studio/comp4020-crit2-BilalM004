import { defineConfig } from "astro/config";

// GitHub Pages serves this repo under /<repo-name>/, so `base` must match the
// repo name exactly — get it wrong and every asset 404s on the deployed URL
// while looking fine locally (root-relative paths resolve fine at localhost:4321/).
export default defineConfig({
  site: "https://comp4020-agentic-coding-studio.github.io",
  // Trailing slash matters: BASE_URL reflects this exactly, and every
  // internal link in the site is built as `${BASE_URL}some/path/` — without
  // the trailing slash here those links collapse together (see git history).
  base: "/comp4020-crit2-BilalM004/",
  outDir: "./dist",
  // This repo lives on a Windows-mounted drive under WSL (/mnt/c/...), where
  // inotify events from edits often don't reach chokidar — HMR silently goes
  // stale without this. Polling costs a bit of CPU but is reliable here.
  vite: {
    server: {
      watch: { usePolling: true, interval: 300 },
    },
  },
});
