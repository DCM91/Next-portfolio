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
npm run dev    # dev server on localhost:3000 (with --turbo)
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
public/
  assets/     # networking.jpg, clase esade.jpg, mefoto.jpg, foto_blanconegro.jpeg, contactame.jpg
  projects/   # Project screenshots
  favicon.ico
```

## About page (`pages/about.js`)

### Structure (3 sections, no images on mobile except hero)
1. **Hero** — Image background (`networking.jpg`) with `bg-gradient-to-r from-surface via-surface/95 to-surface/60` overlay. Short intro text (`t.about.intro`).
2. **Timeline (Mi trayectoria)** — Vertical timeline with dots + gradient connecting line. On `md+`: 2-column grid with timeline on left, `clase esade.jpg` card on right (sticky, hover glow, scale effect).
3. **Education + Languages** — 2-column grid. Education cards with conditional year rendering. Language rows with name + level.

### Data pattern
```js
// Hardcoded in component (same for all locales — company names & roles in English)
const milestones = [
  { year, company, role, current?: boolean }
]

const education = [
  { title, school, year }  // year: "" hides the year badge
]

const languagesList = [
  { name, level }
]
```

### Spacing
- Sections use `py-12 md:py-16`
- Timeline items use `pb-6`
- Grid gap: `gap-8` (edu/lang), `gap-10 md:gap-16` (timeline section)

### Animations
- Hero: `animate-fade-in`
- Timeline: `animate-slide-up`
- Image card: `animate-scale-in animate-delay-200`
- Edu/Lang: `animate-slide-up animate-delay-100`

### i18n keys (`languages/*.js` → `about:`)
- `intro` — Hero paragraph (short, present-focused, no years of experience)
- `trajectory` — Timeline section title
- `education` — Education section title
- `languages` — Languages section title
- `hobbies` — Hobbies text (not rendered in about.js, kept for potential future use)

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
- Small chip: icon + label in a bordered card (`min-w-[80px]`)
- Hover: accent color + border glow + scale icon

### Selector (`components/selector.js`)
- Language switcher via `router.push` with `locale`
- Icon + minimal select

### mail.js (`components/mail.js`)
- Contact form using EmailJS (env vars: `NEXT_PUBLIC_EMAILJS_*`)
- Floating label pattern: labels animate on focus, transition from placeholder
- Focus states: accent border + ring effect
- Submit button: gradient background, hover glow, icon animation
- Inline feedback: success (green) and error (red) messages
- Loading state with spinner icon
- States: `idle`, `loading`, `success`, `error`

### Contact page (`pages/contact.js`)

#### Structure (2 sections, matches about page pattern)
1. **Hero** — Image background (`contactame.jpg`) with `bg-gradient-to-r from-surface via-surface/95 to-surface/60` overlay. Heading + subtitle text (`t.contact.contact2`).
2. **Content** — Asymmetric 2-column grid. Left: contact info pills. Right: form card.

#### Layout
- Left column (2/5): Contact pills with icon + label + value
- Right column (3/5): Elevated form card with hover glow effect
- Background: `gradient-mesh` utility for atmospheric depth

#### Contact Pills
- Email: clickable `mailto:` link, hover scale on icon
- Location: Barcelona, Spain
- Response time: "Usually within 24 hours"

#### Form Container
- Relative wrapper with gradient blur on hover (`group-hover:opacity-100`)
- Border styling matches design system
- Title + description above form fields

#### Animations
- Hero: `animate-fade-in`
- Left column: `animate-slide-up`
- Right column: `animate-slide-up animate-delay-200`

### Custom animations (in `tailwind.config.js` + `globals.css`)
- `animate-fade-in` — opacity 0→1 in 0.6s
- `animate-slide-up` — translateY(24px)→0 + fade in 0.6s
- `animate-scale-in` — scale(0.95)→1 + fade in 0.4s
- Delay classes: `.animate-delay-100` through `.animate-delay-500` (in `globals.css`)
- `gradient-mesh` — atmospheric background with radial gradients (in `globals.css`)
- `focus-ring` — enhanced focus state with ring offset (in `globals.css`)

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
- Dev server runs with `--turbo` flag for faster HMR.
- About page data (milestones, education, languages) is hardcoded in the component, not in i18n files. Company names and role titles are in English across all locales.
