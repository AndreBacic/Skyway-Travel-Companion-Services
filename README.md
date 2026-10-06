# Skyway Travel Companion Services

A minimal, professional one-page website for **Sharon Peterson**'s private
travel companion service. Entirely client-side — no backend required.

## Tech

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org), built by [Vite 8](https://vite.dev)
- [Sass (Dart)](https://sass-lang.com) for styling (`src/index.scss` + per-component `.scss`, shared tokens in `src/styles/_tokens.scss`)
- [EmailJS](https://www.emailjs.com/docs) (`@emailjs/browser`) for the client-side contact form
- [Playwright](https://playwright.dev) for visual QA (see `scripts/screenshot.mjs`)

No unit tests by design — the site was validated visually with Playwright
screenshots (`shots/`).

## Getting started

```bash
npm install
npm run dev        # local dev server (http://localhost:5199 if that port is taken → see log)
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Structure

```
assets/                     source images (portrait cropped from the flyer, CC0 wing photo)
public/favicon.svg          site icon
src/
  App.tsx                   page composition
  main.tsx                  entry point
  index.scss                design system (reset, tokens, buttons, section shells)
  styles/_tokens.scss      shared Sass tokens (colors, radii, fonts, shadows)
  config/emailjs.ts        EmailJS credentials (placeholders!)
  components/
    Navbar.tsx/.scss       fixed blur navbar, mobile hamburger
    Hero.tsx/.scss         headline, CTAs, portrait, wing backdrop
    TrustBar.tsx/.scss     safety / CPR / TSA strip
    About.tsx/.scss        "Meet Sharon" story + stats + quote
    Services.tsx/.scss     the five companion services
    Contact.tsx/.scss      phone/email info + EmailJS form
    Footer.tsx/.scss       brand, links, legal line
scripts/screenshot.mjs     Playwright visual-QA screenshots
shots/                     captured screenshots
```

## Imagery

- `assets/sharon-peterson.png` — Sharon's portrait, cropped from her flyer
  (used with her permission for this site).
- `assets/hero-wing.jpg` — "Airplane Wing" by JESHOOTS.com via StockSnap,
  licensed **CC0 1.0**, free for any use.
