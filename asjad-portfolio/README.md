# Asjad Rehman — Portfolio

Same design and code as Hussain Qamar's portfolio (React + Vite, Tailwind CSS, GSAP, Framer Motion), filled in for **Asjad Rehman**.

- WhatsApp: 0302 6009977 (all "Chat on WhatsApp" buttons open a chat with this number)
- Email: asjadrehman977@gmail.com

## ⚠️ Temporary content: replace with your own
| What | Where |
| --- | --- |
| Your photo (placeholder "AR" avatar right now) | Replace `public/asjad-rehman-640.webp`, `-480`, `-400`, `-160` with square photos of the same names |
| Projects (5 sample projects right now) | `projects` in `src/data/content.js`. Add screenshots to `public/projects/`, demo videos via `videoUrl`, live sites via `liveUrl` |
| Prices | `services` in `src/data/content.js` |
| About text, skills, stats | `about`, `skills`, `hero.stats` in `src/data/content.js` |
| Facebook page | `contact.facebook` in `src/data/content.js` (hidden while empty) |
| Social share image | `public/og-image.jpg` (1200×630) |

## Run locally
```bash
cd asjad-portfolio
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Get the live link (Vercel, free)
1. Go to <https://vercel.com/new> and import the `hussain-portfolio` GitHub repository again (a second, separate project).
2. **Project Name:** `asjad-rehman` → the link becomes `https://asjad-rehman.vercel.app`.
3. **Root Directory:** click *Edit* and choose `asjad-portfolio`.
4. Click **Deploy**. Every push to `main` updates the site.

If Vercel gives a different link (name taken), replace `https://asjad-rehman.vercel.app` in `index.html`, `public/robots.txt` and `public/sitemap.xml`.
