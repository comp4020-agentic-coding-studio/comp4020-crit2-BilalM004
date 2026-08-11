# Process overview

## What I built

The Aerre website (Australian Owned Perfume Company - https://aerre.co/) remade. Loading into the orignal home page, I felt it was cluttered with advertisements, and less on the actual products available - this remake addresses that. A key feature added was, as I found the perfume types hard to navigate / find, I added tiles to the front for scent families. The product reviews/ads about it, I made smaller, and added to the top, cycling through, yet, keeping the product types/access clearly visible from the home page. (note video reviews/footage of people uploaded, were not added on this site)

## The moments that mattered

Three or four for an assignment; fewer is fine for a weekly prototype. Keep the
list short so each moment has room to do all four jobs:

1. **what happened** --- the problem, or the thing the agent got wrong
2. **what you did instead of the obvious thing** --- the call you made, and why
   it beat the obvious one
3. **how you knew it was right** --- the check you ran, the viewport you looked
   at, what you read before accepting the diff
4. **the citation** --- a commit or commit range, a `CLAUDE.md` change, a check
   that went from red to green, a prompt paired with the commit it produced

Originally, when I told claude to add the images, it transformed the images, without keeping the ratio (i.e. caused images to squeeze, and look inconsistent). I had to point this out and reprompt it to make sure all images were their orignal ratios (and resized appropriately).

The commit for this: [`488b35d`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-BilalM004/commit/488b35d)

The reviews/info on the home page in the square tile, had a bug where the increment time did not stay consistent, despite asking for it. After testing causes of issues (e.g. trying the arrow keys and then observing the behaviour of the increments after), i shared my findings with claude to fix the issue.

The commit for this: [`cb79da1...cb996ed`](https://github.com/comp4020-agentic-coding-studio/comp4020-crit2-BilalM004/compare/cb79da1...cb996ed)


