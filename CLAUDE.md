# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the build
```

There is no test suite, no linter, and no formatter configured. `npm run build` is the
only automated check — it catches unresolved imports and syntax errors. Verify
everything else in the browser.

## Stack

Vite 5 + React 18 SPA. Plain JSX, no TypeScript. Routing via `react-router-dom` v6.
No CSS framework, no state library, no backend — all content is hardcoded in JSX or
`src/data/*.js`.

Runtime dependencies are exactly `react`, `react-dom`, `react-router-dom`. Everything
else — motion libraries, 3D — is planned but **not installed**; see *Animation &
motion* below before reaching for one.

## Two specs, one per landing page

Both are live source-of-truth documents, not history. Read the one that governs the
page you're touching:

- **`struktur-homepage-sep-shekinah.md`** → the new page at `/new`. Defines its
  14-section storytelling order, the copy for each section, and per-section visual
  direction. This is the active spec for current work.
- **`version_beta.md`** → the old page at `/`. Defines the palette, typography, and
  the original seven-section order. Its §1 style guide and §3 requirements still bind
  the whole site, including the new page.

The constraints that are easy to violate by accident:

- **Maroon may never be a dominant colour.** The page should read warm amber over
  `#FEFDF9`, which must hold ~70% of the surface area.
- **No sticky CTA anywhere** (§Section 1).
- **Never change the stat labels** `KEP`, `BLKEP`, `SEP`, `Seminar` in
  `src/data/stats.js` — they're rigid strings from a legacy database. Explanatory
  copy must live *outside* the component that renders them (§3 requirement 2).
- **Program detail belongs on `/program/:slug`, not the landing page** — no parish
  lists, no 17–20 session breakdowns, no module theory (§3 requirement 1).

All user-facing copy is Indonesian. Write new copy in Indonesian; `index.html` is
`lang="id"`.

## Two landing pages run side by side

A redesign is in progress, so the app currently ships both designs and a toggle:

| Route | Renders | Notes |
|---|---|---|
| `/` | `pages/LandingOld.jsx` | the current design |
| `/new` | `pages/LandingNew.jsx` | the replacement, where active work happens |
| `/prototype` | `pages/LandingOld.jsx` | alias kept for shared links |
| `/legacy` | `pages/Home.jsx` | an older superseded design, reference only |
| `/program/:slug` | `pages/ProgramPage.jsx` | mostly a stub |
| `*` | `pages/LandingOld.jsx` | no 404 page |

`components/DesignSwitcher.jsx` renders the floating "Lama / Baru" pill, mounted
**outside `<Routes>`** in `App.jsx` so it survives the switch. The URL is the only
source of truth for which design is showing; there is deliberately no stored
preference, so a reload or shared link always lands where it says. It hides itself on
`/legacy` and `/program/*`. Delete the component and its one line in `App.jsx` when
the new design ships.

**Naming history:** `LandingOld.jsx` was `Prototype.jsx`, and `Home.jsx` — despite the
name — has not been the homepage for some time. Don't assume `Home.jsx` is live.

Three component directories mirror this split. **Which one you edit is decided by the
route you're working on:**

| Directory | Used by | Contents |
|---|---|---|
| `components/new/` | `/new` | the 14 sections of the active redesign, plus its own `Navbar` and `Hero` |
| `components/proto/` | `/` | `CredibilityBand`, `ProgramStrip`, `EventCountdown`, `ActivityCards` |
| `components/` (top level) | `/legacy` | the original seven sections, plus the shared `Navbar`/`Hero` used by `/` and `/legacy` |

`components/new/` is deliberately self-contained — it shares nothing with the other
two, not even `Navbar` or `Hero`, so the redesign can evolve without regressing the
live page. Don't introduce imports across that boundary; duplicate instead.

Each new section component keeps its copy in constants at the top of its own file.
For day-to-day content changes edit those constants, not the JSX layout.

## Styling

One hand-written `.css` file per component, imported by its `.jsx` sibling. Global
tokens and utilities live in `src/styles.css`.

- **Import order is load-bearing.** `main.jsx` imports `./styles.css` *before* `App`
  so per-component CSS wins on equal specificity. Don't reorder those lines.
- Use the `:root` tokens in `styles.css` (`--amber`, `--deep-blue`, `--bg-warm`,
  `--cream`, `--font-display/accent/body`, `--shell`, `--ease`) rather than literal
  hex values.
- Shared utility classes already exist: `.shell`, `.proto-shell`, `.section`,
  `.grid-12`, `.headline`, `.subhead`, `.body-text`, `.btn` and variants, `.kicker`,
  `.rule`. Check `styles.css` before writing new layout CSS.
- Breakpoints are 1024px and 768px; `prefers-reduced-motion` is already handled
  globally.
- Fonts (Amiri, Balthazar, Inter) are linked in `index.html`, not imported via CSS.

## Animation & motion

**Nothing is installed yet.** Every animation currently in the codebase is hand-written
CSS — `transition`, `@keyframes`, and transforms driven by props from the scroll hook.
Check whether CSS can do the job before adding a dependency; most section reveals and
the navbar morph don't need one.

The intended direction, in order:

1. **Motion layer first.** When CSS stops being enough — staggered reveals, the Hero's
   rotating headline with proper enter/exit, orchestrated sequences — add **Framer
   Motion** (`npm i motion`, imported as `motion/react`). It's declarative and matches
   how these components are already written, and `AnimatePresence` is the natural fit
   for the rotating headline in `struktur-homepage-sep-shekinah.md` §1.
   Reach for **GSAP + ScrollTrigger** instead only if scroll choreography gets complex
   enough that pinning and scrubbed timelines are the point.
2. **three.js later.** 3D is a planned future addition, deliberately deferred — it is
   not approved yet. When it lands, the expected shape is `three` +
   `@react-three/fiber` + `@react-three/drei`, so scenes stay JSX like everything else.

If you add either, confirm with the user first — this is a stack decision, not an
implementation detail.

### Rules for whatever gets added

- **`prefers-reduced-motion` is already handled globally** in `styles.css` and must
  stay honoured. CSS-based animation inherits that for free; JS-driven animation does
  not — gate it on `window.matchMedia('(prefers-reduced-motion: reduce)')` yourself.
- **Reuse `useScrollPosition`.** Don't attach a second scroll listener (see below).
  GSAP ScrollTrigger and Lenis both install their own — that's a real cost to weigh,
  not a reason to avoid them outright.
- **Watch the bundle.** `src/assets/hero.png` is already ~2.3 MB, so the page has no
  weight budget to spare. `three` adds ~600 KB min before any scene code. Lazy-load 3D
  behind `React.lazy` + `<Suspense>` rather than shipping it in the main chunk.
- **Vite needs no config for any of this.** `three` and R3F work out of the box. Only
  raw GLSL files would need a plugin (`vite-plugin-glsl`).
- **Large 3D assets belong in `public/`**, not `src/assets/` — imported assets get
  hashed and inlined into the build graph, which is wrong for models and textures
  fetched at runtime.
- **React 18 pins R3F to v8.** `@react-three/fiber` v9 requires React 19. Either pin
  `@react-three/fiber@^8` or upgrade React first — don't let npm resolve v9 silently.
- The site is a client-only SPA, so SSR/hydration concerns don't apply.

## Scroll architecture

`hooks/useScrollPosition.js` is a single rAF-throttled scroll listener for the whole
app. Adding a second listener doubles work on every frame — reuse this one.

Pages derive their state from it: `scrolled = scrollY > 80` drives the navbar morph,
`fade = min(scrollY / (innerHeight * 0.75), 1)` drives the hero.

The hero is `position: fixed` behind the content, with a 100vh spacer holding the
window open while content scrolls over it. Below 768px this is disabled — fixed
backgrounds are unstable in iOS Safari — and the hero becomes static.

Both landing pages use this technique with separate, duplicated CSS: `.hero-spacer` in
`pages/Home.css` for `/`, and `.new-hero-spacer` in `pages/LandingNew.css` for `/new`.
The duplication is deliberate — `/new` doesn't import `Home.css`, keeping the redesign
independent.

`App.jsx`'s `ScrollToTop` resets scroll on navigation and honours
`location.state.scrollTo` (an element id) for cross-page anchor jumps.

New floating UI must clear `z-index: 100` (the navbar). `DesignSwitcher` uses 200.

## Known rough edges

Don't "fix" these silently — they're known and some are intentional placeholders.

- `pages/Home.css` is imported by **both** `Home.jsx` and `LandingOld.jsx`. Editing it
  changes the live page.
- The **shared** `components/Navbar.jsx` (used by `/` and `/legacy`) hardcodes
  `window.location.pathname !== '/'` in `goToSection` and redirects to `/`. The new
  `components/new/Navbar.jsx` deliberately doesn't — it only ever scrolls within the
  current page. Don't "unify" them; the redirect is wrong for `/new`.
- Anchor ids collide across designs — `#program` and `#kegiatan` exist in
  `components/proto/` *and* `components/new/`, `#pengumuman` in `components/` and
  `components/proto/`. Ids are only unique within a single rendered page.
- Dead anchors on the **old** page only: `#pengajar` matches no element anywhere, the
  shared `Hero`'s scroll-down button targets `#mengapa` (which exists only on
  `/legacy`), and CTA hrefs `#daftar` / `#masuk` are placeholders pending real
  destinations.
- `public/logo_neutral.png` is only 56×73px and looks blurry on retina; it needs a
  ≥140×184px replacement at the same filename. `logo_negative.png` is fine.
- Logos are served from `public/` rather than imported, so a missing file 404s
  gracefully into the wordmark-only fallback instead of breaking the build.

## Planning Behavior

- Everytime I asked you to show me a plan, give me a visualization in ASCII.
- the visualization can be before and after, or visualization of the screen hiearchy