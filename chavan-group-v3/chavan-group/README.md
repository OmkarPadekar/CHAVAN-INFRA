# Chavan Group — Official Website

> Your Trusted Partner in Safety & Infrastructure Solutions

Built with **React 18 + TypeScript + Vite + Tailwind CSS**. Production-ready, deployable to Vercel or any static host.

---

## Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite 5 | Build tool / dev server |
| Tailwind CSS 3 | Utility-first styling |
| Lucide React | Icons |

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

---

## Build for Production

```bash
npm run build
# Output in /dist — ready to deploy
```

---

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel        # follow prompts, select "Vite" framework
```

### Option B — GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the GitHub repo
4. Framework: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy** ✅

---

## Deploy to GitHub Pages (alternative)

```bash
npm run build
# Then push /dist to gh-pages branch
```

---

## Project Structure

```
chavan-group/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AnimatedHeading.tsx   # Character-by-character hero heading animation
│   │   ├── ChavanLogo.tsx        # SVG logo + wordmark
│   │   ├── FadeIn.tsx            # Delay-based opacity reveal
│   │   ├── Navbar.tsx            # Sticky navbar + mobile menu
│   │   └── useScrollReveal.ts    # IntersectionObserver hook
│   ├── views/
│   │   ├── Hero.tsx              # Full-screen video hero
│   │   ├── About.tsx             # Corporate summary + doc index
│   │   ├── Sectors.tsx           # Three division cards
│   │   ├── Projects.tsx          # Real estate projects + clients
│   │   ├── Careers.tsx           # Job listings
│   │   ├── Contact.tsx           # HQ contact details
│   │   ├── Footer.tsx            # Footer + nav links
│   │   ├── WaterView.tsx         # STP division dossier
│   │   ├── SolarView.tsx         # Solar EPC division dossier
│   │   └── SafetyView.tsx        # Fire & Parking dossier
│   ├── App.tsx                   # View router + layout
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Tailwind + liquid-glass CSS
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── vercel.json                   # SPA rewrite rules
└── package.json
```

---

## Contact

📍 912 A, Centrum Business Square, Road No. 16, Wagle Industrial Area, Thane (West) — 400604  
📞 +91 86559 44707 / 08  
✉️ chavangreenenergies001@gmail.com
