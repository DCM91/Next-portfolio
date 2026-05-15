# AGENTS.md — DCM91 Portfolio

## Stack
- **Next.js 15.5** Pages Router (`pages/`, NOT `app/`)
- **React 19**, **Tailwind CSS 3.4** (NO DaisyUI)
- **Node.js**: 24.x (specified in `package.json` `engines`)
- **Fonts**: DM Sans (body), Plus Jakarta Sans (headings), JetBrains Mono (mono) via Google Fonts in `_document.js`
- **Design system**: 11 CSS custom properties on `:root` / `.dark` controlling surface, border, text, and accent colors. Dark mode toggled via `darkMode: "class"` with localStorage persistence.
- **i18n**: Built-in Next.js `i18n` config in `next.config.js` (`en`/`es`/`cat`). Custom `useTranslation` hook — NOT `i18next`.
- **Contact form**: EmailJS via `@emailjs/browser` (credentials via `NEXT_PUBLIC_EMAILJS_*` env vars in `.env.local`)
- **No TypeScript** (only `jsconfig.json` for path aliases)

## Commands
```sh
npm run dev    # dev server on localhost:3000
npm run build  # production build + lint
npm run start  # start production server
npm run lint   # uses deprecated `next lint`
```

## Project structure
```
pages/        # index, about, skills, works, contact, 404, _app.js, _document.js
components/   # Layout, Navbar, Footer, ProjectCard, SkillIcon, mail.js, selector.js
constants/    # index.js — NAV_LINKS, LANGUAGES
languages/    # en.js, es.js, cat.js — plain JS objects
hooks/        # useTranslation.js
styles/       # globals.css — Tailwind directives + CSS variables for light/dark
public/       # Static assets (projects images, favicon)
```

## Key components & patterns

### Colors (CSS variables in `globals.css`)
- `--color-surface` (white / #0b0e14), `--color-surface-alt`, `--color-surface-hover`
- `--color-border`, `--color-border-subtle`
- `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`
- `--color-accent`, `--color-accent-hover`, `--color-accent-subtle`, `--color-accent-glow`
- Use Tailwind classes: `bg-surface`, `text-text-secondary`, `border-border`, `text-accent`, `bg-accent-subtle`, `hover:bg-surface-hover`

### Dark mode
- Classes: add `.dark` to `<html>` to activate dark variables
- Toggle: `localStorage.getItem("theme")` → "dark" | "light" (default: `prefers-color-scheme`)
- Component: `Layout.js` reads on mount, toggles `document.documentElement.classList`

### Layout (`components/Layout.js`)
- Single-column flex layout (`min-h-screen flex flex-col`)
- `<Navbar />` (sticky top, glass morphism)
- Sub-bar: "Full Stack Developer" + `<Selector />` + dark/light toggle button
- `<Footer />` (2-column grid with social links)
- All pages wrapped in `<Layout>` via `_app.js`

### Navbar (`components/navbar.js`)
- Sticky, `backdrop-blur-xl`, border-bottom
- Logo "DCM91" with accent span
- Nav links from `NAV_LINKS` constant, active state via `pathname`
- Responsive: hamburger menu on mobile (`md:hidden`), full links on desktop (`.hidden.md:flex`)
- Uses `react-icons/hi` (HiMenu, HiX) for toggle button

### ProjectCard (`components/ProjectCard.js`)
- Expandable card: click toggles description visibility
- Image with hover scale, gradient overlay, `role="button"` + keyboard support
- Link pills with `e.stopPropagation()` to prevent card toggle
- Used in `pages/works.js` for experience + projects

### SkillIcon (`components/SkillIcon.js`)
- Small chip: icon + label in a bordered card
- Hover: accent color + border glow

### Selector (`components/selector.js`)
- Language switcher via `router.push` with `locale`
- Icon + minimal select

### mail.js
- Contact form using EmailJS (env vars: `NEXT_PUBLIC_EMAILJS_*`)
- Custom Tailwind styles (no DaisyUI), focus rings, clean layout

### Custom animations (in `tailwind.config.js`)
- `animate-fade-in` — opacity 0→1 in 0.6s
- `animate-slide-up` — translateY(24px)→0 + fade in 0.6s
- `animate-scale-in` — scale(0.95)→1 + fade in 0.4s
- Delay classes: `.animate-delay-100` through `.animate-delay-500` (in `globals.css`)

## Available skills (`.agents/skills/`)
- `react-best-practices` — React/Next.js performance optimization
- `next-best-practices` — Next.js file conventions, data patterns, image/font
- `composition-patterns` — Compound components, context, React 19 APIs
- `tailwind-css-patterns` — Utility-first styling, responsive design
- `frontend-design` — Production-grade UI/UX design
- `nodejs-backend-patterns` — Express/Fastify, middleware, auth
- `nodejs-best-practices` — Node.js architecture decisions
- `seo` — Meta tags, structured data, sitemaps
- `accessibility` — WCAG 2.2, screen reader, keyboard nav
- `next-upgrade` — Upgrade Next.js version
- `next-cache-components` — PPR, cacheLife, cacheTag (Next.js 16+)

## Caveats
- `next lint` is deprecated in Next.js 15. If a clean lint run is needed, install `eslint` + `@next/eslint-plugin-next`.
- No test framework set up.
- `outputFileTracingRoot: __dirname` is set in `next.config.js` to suppress workspace lockfile warnings.
- EmailJS env vars: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_API_KEY`.
- Google Fonts are loaded via `<link>` in `_document.js` (not `next/font`).
- Dark mode state is persisted in localStorage under key `"theme"`.
