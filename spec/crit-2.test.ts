import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";

// Crit 2 ("Unsolicited redesign") spec: this redesigns a real organisation's
// site, so the page has to point back at the thing it's redesigning.
// https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/crits/02-unsolicited-redesign/
const home = new JSDOM(
  readFileSync(resolve("dist/index.html"), "utf8"),
).window.document;

describe("crit 2: unsolicited redesign", () => {
  it("links to the real organisation's own site", () => {
    const links = [...home.querySelectorAll("a[href]")].map((a) =>
      a.getAttribute("href"),
    );
    const external = links.filter((href) => /^https?:\/\//.test(href ?? ""));
    expect(
      external.length,
      "no external link found — add a link to the organisation's real site",
    ).toBeGreaterThan(0);
  });
});
