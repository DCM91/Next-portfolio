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
constants/    # index.js (NAV_LINKS, LANGUAGES), skills.js (SKILL_ICONS, SKILL_CATEGORIES, PROJECT_SKILLS, FILTERABLE_SKILLS)
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

## Works page & Project system (`pages/works.js`)

### Project data pipeline (critical for i18n + skills)
Project entries use `id` which links **three things** via a single pipeline:

```
project.id → getDescKey(id) → t.works[DescKey]       (translation description)
project.id → PROJECT_SKILLS[id]                       (skill tags per project)
project.id → (internal state for expandable cards)    (UI state)
```

`getDescKey` simply capitalizes the first letter: `"jbctools"` → `"Jbctools"`.

**Important**: Project `id` MUST match:
1. A key in `PROJECT_SKILLS` (`constants/skills.js`)
2. A key in all 3 language files under `works:` (e.g. `works.Jbctools`, `works.Sinigual`, etc.)

If an id doesn't match, the project gets **no description** and **no skill tags** in all locales.

### Project categories
- `"experience"` — displayed under `t.works.experience` heading (2-col grid)
- `"projects"` — displayed under `t.works.projects` heading (2-3 col grid)

### Tech Stack display vs Filter pills
Two separate constants control what appears in the Works page:

| Constant | Purpose | Content |
|----------|---------|---------|
| `SKILL_CATEGORIES` | **Tech Stack** section (all 4 category cards) | All 35 skills across all projects, grouped in `web`/`frontend`/`backend`/`tools` |
| `FILTERABLE_SKILLS` | **Filter pills** (interactive toggles) | 17 hand-picked skills |

**How filtering works:**
- `allTechKeys` computes the intersection of `FILTERABLE_SKILLS` with skills actually present across `PROJECT_SKILLS`, sorted by usage count
- Only skills present in both lists appear as filter pills
- Clicking a tech pill filters the project grid (only projects that include that skill)
- Active filter is cleared via "Clear filter" link or re-clicking the tech pill

### Skill icons (`SKILL_ICONS`)
- Maps skill key → `{ icon: JSX, label: string }`. 38 entries including icons for all tools plus extras like `python`, `claude-code`.
- Used by `SkillIcon` component, `ProjectCard` skill tags, and filter pills
- If a skill is in `PROJECT_SKILLS` but NOT in `SKILL_ICONS`, it won't render anywhere

## Key components & patterns

### Colors (CSS variables in `globals.css`)
- `--color-surface` (white / #0b0e14), `--color-surface-alt`, `--color-surface-hover`
- `--color-border`, `--color-border-subtle`
- `--color-text-primary`, `--color-text-secondary`, `--color-text-muted`
- `--color-accent`, `--color-accent-hover`, `--color-accent-subtle`, `--color-accent-glow`
- Use Tailwind classes: `bg-surface`, `text-text-secondary`, `border-border`, `text-accent`, `bg-accent-subtle`, `hover:bg-surface-hover`

### Spacing System (Sistema Medio: 80/48/32px base)
All pages follow a consistent spacing scale for visual harmony:
- Page sections: `py-12 md:py-20` (hero), `py-12 md:py-20` (content sections)
- Grid gaps: `gap-5` (cards), `gap-8` (two-column), `gap-10 lg:gap-12` (large grids)
- Internal component spacing: `gap-4` to `gap-6`
- Cards grid: `gap-5` for projects, `gap-5` for experience

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
- Animated underline on hover (center-out expand)
- Responsive: hamburger menu on mobile (`md:hidden`), full links on desktop (`.hidden.md:flex`)
- Uses `react-icons/hi` (HiMenu, HiX) for toggle button
- Accessibility: `aria-expanded`, `aria-controls`, `focus-ring` on interactive elements

### ProjectCard (`components/ProjectCard.js`)
- Expandable card: click toggles description visibility
- Image with hover scale (`scale-105`), gradient overlay, `role="button"` + keyboard support
- Link pills with `e.stopPropagation()` to prevent card toggle
- Hover effects: border glow, shadow, scale-[1.01], duration-300
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
- `focus-ring` — enhanced focus state with ring offset (opacity 50)
- `focus-ring-subtle` — lighter focus variant for less prominent elements
- Custom scrollbar — webkit styling with accent thumb

## i18n Translation Keys (`languages/en.js`, `es.js`, `cat.js`)

All 3 files export a plain JS object with the same shape. `useTranslation()` returns the object matching `router.locale`.

### Key reference (51 used, 18 orphaned)

| Section | Key | Status |
|---------|-----|--------|
| **home** | `title` | Used (`index.js`) |
| | `description` | Used (meta) |
| | `role` | Used |
| | `webDev`, `frontendDev`, `backendDev` | Used (TypeAnimation) |
| | `codeDesc`, `dataDesc`, `aiDesc` | **Orphaned** |
| **navbar** | `about`, `works`, `contact` | Used (`navbar.js`, via `NAV_LINKS`) |
| **footer** | `text1`, `text2`, `social` | Used (`Footer.js`) |
| **about** | `intro` | Used (hero + meta) |
| | `sectionTitle` | Used (badge) |
| | `trajectory` | Used (timeline heading) |
| | `education` | Used (sub-heading) |
| | `languages` | Used (sub-heading) |
| | `hobbies` | **Orphaned** |
| **contact** | `contact2` | Used (hero subtitle) |
| | `contact3` | Used (description) |
| | `contact1`, `sectionTitle`, `letsWorkTogether`, `getInTouch`, `email`, `location`, `responseTime`, `barcelona`, `within24Hours`, `sendMessage`, `fillForm` | **Orphaned** (hardcoded in `contact.js`) |
| **mail** | `error`, `yourName`, `emailAddress`, `yourMessage`, `success`, `sending`, `sendMessage` | Used (`mail.js`) |
| **works** | `description`, `experience`, `projects`, `portfolio`, `thingsIveBuilt`, `techStack`, `all`, `noProjects`, `clearFilter` | Used |
| | `Sinigual`, `Payf`, `Skuadlack`, `TypedCinema`, `Portfolio`, `I18N`, `Jbctools`, `Aroacarmona`, `Endansa` | Used (dynamic via `getDescKey`) |
| | `Blockbuster`, `Pokedex` | **Orphaned** |
| **skills** | `web`, `frontend`, `backend`, `tools` | Used (`works.js` skill categories) |
| **notFound** | `title`, `message`, `back` | Used (`404.js`) |

### Rules for adding new keys
- Add the key to **all 3 files** (`en.js`, `es.js`, `cat.js`) with the same shape
- For new projects: the project `id` (lowercase) must match `PROJECT_SKILLS[id]` and `t.works[CapitalizedId]`
- The `mail` section is required in all locales (contact form labels)

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
- **Filter pills**: Only skills listed in `FILTERABLE_SKILLS` appear as filter pills in the works page, regardless of what's in `PROJECT_SKILLS`. To add/remove filters, edit the `FILTERABLE_SKILLS` array in `constants/skills.js`. `SKILL_CATEGORIES` contains the full set for the Tech Stack display.
