# Hussain Qamar — Portfolio

A fast, animated, responsive one-page portfolio built with **React + Vite**, **Tailwind CSS**, **GSAP (ScrollTrigger)**, **Framer Motion** and **Lucide** icons.

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install      # first time only
npm run dev      # start the dev server → http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

## Editing content (no layout code needed)

**Everything you see on the site lives in [`src/data/content.js`](src/data/content.js).** Open it, change the text, and save. The dev server updates instantly.

| What you want to change | Where in `content.js` |
| --- | --- |
| WhatsApp number, email, location, pre-filled WhatsApp message | `contact` |
| Name, tagline, intro text, hero stats | `hero` / `site` |
| Projects (title, description, tech, live link, screenshot) | `projects` |
| Services and prices | `services` |
| Skills grid | `skills` |
| About bio and highlights | `about` |
| Contact section heading and text | `contactSection` |

### Adding project screenshots
1. Save the screenshot in `public/projects/`. `.webp` is best (smallest); aim for about 1200×750px.
2. In `content.js`, set that project's `image`, e.g. `image: '/projects/luxury-store.webp'`.
3. Leave `image: null` to show the styled placeholder.

Images load lazily (`loading="lazy"`), so they don't slow down the first paint.

### Live links, demo videos and features
- `liveUrl: 'https://…'` shows a **View live** link.
- `videoUrl: 'https://www.facebook.com/reel/…'` shows a **Watch demo** link (any video URL works).
- If both are empty, the card shows "Live link coming soon".
- `features: ['…', '…']` shows 2–3 tick-mark bullet points; `[]` hides them.

### Your photo (Hero + About)
The photo files live in `public/`:
- `hussain-qamar-640.webp` / `hussain-qamar-480.webp`: large photo (desktop hero)
- `hussain-qamar-400.webp`: About section
- `hussain-qamar-160.webp`: small face avatar next to "Hi, I'm" on phones

To change the photo, replace these files with square `.webp` images of the same names (or change the paths in `content.js` under `hero.photo*` and `about.photo*`). Set `photo: null` to hide it. The floating badges next to the hero photo are `hero.photoBadges`.

### Skill icons
Skills are matched to icons by keyword in `src/components/Skills.jsx` (`iconMap`). Unknown skills get a ✨ icon automatically.

### SEO, favicon and social preview
- Live site: **https://hussain-portfolio-hazel.vercel.app/**
- Page title, description and Open Graph tags: `index.html`. If you add a custom domain, replace `https://hussain-portfolio-hazel.vercel.app/` with it everywhere in `index.html`.
- Favicon: replace `public/favicon.svg` (currently an "HQ" placeholder).
- Social share image: `public/og-image.jpg` (1200×630).
- `public/robots.txt`, `public/sitemap.xml` and the JSON-LD block in `index.html` also contain the site URL. Update them too if the domain changes.

### Colours and fonts
Navy and amber colour tokens are defined at the top of `src/index.css` under `@theme`.

## Accessibility and motion
- Animations are switched off or reduced when the visitor's OS has **Reduce motion** turned on (GSAP `matchMedia`, Framer `MotionConfig reducedMotion="user"`, plus a CSS fallback).
- Includes a skip link, keyboard focus styles and screen-reader labels on icon buttons.

## Deploy to Vercel (free Hobby plan)

1. Push this folder to a GitHub repository (see the commands below).
2. Go to <https://vercel.com/new>, sign in with GitHub, and **Import** the repository.
3. Vercel detects **Vite** automatically (build command `npm run build`, output folder `dist`). Click **Deploy**.
4. Every later `git push` to `main` redeploys the site automatically.

```bash
git add .
git commit -m "Update content"
git push
```

## Project structure

```
src/
  data/content.js        ← all editable content
  components/            ← Navbar, Hero, Projects, Services, Skills, About, Contact, Footer, FloatingWhatsApp
  index.css              ← Tailwind + theme colours
public/
  favicon.svg, og-image.jpg, projects/
```
