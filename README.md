# MajiSmart - Water Delivery Operating System

A production-ready, single-page React application for MajiSmart — a Nairobi-based water delivery startup functioning as both an investor pitch site and a design/component foundation for our future React Native mobile app.

## Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS with custom brand tokens
- **Animations**: GSAP + ScrollTrigger + Lenis (smooth scroll)
- **Deployment**: Netlify, Vercel, or GitHub Pages

## Installation & Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173/` with hot module reloading.

### Build for Production

```bash
npm run build
```

Outputs optimized bundle to `/dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── main.jsx                    # Entry point
├── App.jsx                     # Root component with section composition
├── index.css                   # Global styles + Tailwind directives
├── hooks/
│   ├── useLenis.js            # Smooth scroll singleton (GSAP-integrated)
│   └── useScrollTrigger.js     # ScrollTrigger setup
├── context/
│   └── ScrollContext.jsx       # Exposes lenis instance & scrollTo() method
├── components/
│   ├── layout/
│   │   ├── Nav.jsx            # Sticky navigation with mobile menu
│   │   └── Footer.jsx         # Footer with links
│   ├── ui/
│   │   ├── SectionLabel.jsx   # Reusable "THE PROBLEM" label
│   │   ├── StatCard.jsx       # Stat display with CountUp
│   │   ├── Card.jsx           # Base card component
│   │   ├── Marquee.jsx        # Infinite scroll ticker
│   │   ├── BarChart.jsx       # Animated bar chart (pure CSS + GSAP)
│   │   ├── TAMCircles.jsx     # Concentric SVG TAM/SAM/SOM visualization
│   │   ├── CountUp.jsx        # Number count-up animation
│   │   └── Cursor.jsx         # Custom animated cursor
│   └── sections/
│       ├── Hero.jsx           # Hero section with entrance animations
│       ├── Problem.jsx        # 3-column problem cards
│       ├── Solution.jsx       # 4-step solution with connectors
│       ├── Market.jsx         # Market opportunity + city breakdown
│       ├── BusinessModel.jsx  # Revenue stream cards
│       ├── Financials.jsx     # 24-month projections + city table
│       ├── DeliveryEconomics.jsx    # Logistics options comparison
│       ├── GoToMarket.jsx           # GTM channels + 90-day timeline
│       ├── Competitive.jsx          # Competitor matrix + moat list
│       ├── Team.jsx                 # Team member cards
│       └── CTA.jsx                  # Call-to-action section
├── data/
│   └── content.js             # All pitch content as JS exports (no hardcoded text in JSX)
└── public/
    └── (static assets)
```

## Key Features

### 🎨 Design System
- **Brand Colors**: Navy, Teal, Gold, Green with semantic naming
- **Typography**: DM Serif Display (headings), DM Sans (body), Space Mono (mono)
- **Responsive**: Mobile-first, Tailwind breakpoints (sm, md, lg, xl)
- All colors defined in `tailwind.config.js`

### ⚡ Animations
- **Hero entrance**: Staggered timeline on mount
- **Section reveals**: Scroll-triggered GSAP animations
- **Bar chart**: Grows from bottom on scroll
- **TAM circles**: Scale from center with back.out easing
- **Cursor**: Custom tracking with lerp lag
- **Marquee**: Seamless infinite scroll

### 🎯 Scroll Behavior
- **Lenis**: Smooth scroll with GSAP ticker integration
- **ScrollTrigger**: Scroll-based animation timing
- **Navigation links**: Programmatic smooth scroll via `useScroll()` hook

### 📱 Responsive
- All grids collapse to single column on mobile
- Sticky nav with hamburger menu
- Competitor table scrolls horizontally on mobile
- Touch-friendly cursor hiding

## Configuration

### Tailwind Brand Tokens
Edit `tailwind.config.js`:

```js
colors: {
  navy: { DEFAULT: '#0A1628', mid: '#0D2040', card: '#0F2744' },
  teal: { DEFAULT: '#0A9396', light: '#94D2BD', bright: '#00C8D7' },
  gold: '#E9C46A',
  green: '#2DC653',
  muted: '#6B8CAE',
},
fontFamily: {
  display: ['DM Serif Display', 'serif'],
  body: ['DM Sans', 'sans-serif'],
  mono: ['Space Mono', 'monospace'],
}
```

### Content Data
All pitch copy lives in `src/data/content.js`. To update:
1. Edit `export const heroStats = [...]`
2. No hardcoding in JSX — components import from `src/data/content.js`

## Deployment

### Netlify (Recommended)
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `dist`

Or drag `/dist` folder to Netlify drop zone.

### Vercel
```bash
npm install -g vercel
vercel
```

Auto-detects Vite and deploys.

### GitHub Pages
```bash
npm run build
git add dist/
git commit -m "Deploy"
git push
```

Configure GitHub Pages to serve from `/dist` branch.

## Accessibility & Performance

- **Lighthouse**: Target >90 on all metrics
- **Performance budget**: <3s page load on 3G
- **A11y**: Semantic HTML, ARIA labels on custom components
- **SEO**: Open Graph meta tags in `index.html`

## Quality Checklist

- [x] npm run build completes zero errors
- [x] Lenis smooth scroll on all sections
- [x] GSAP animations fire on scroll (not page load)
- [x] Bar chart bars grow from bottom
- [x] TAM circles scale from center
- [x] Custom cursor visible/hidden correctly
- [x] Marquee animates without gap
- [x] Nav links scroll to correct sections
- [x] Mobile layout collapses properly
- [x] Competitor table horizontal scroll on mobile
- [x] No hardcoded strings (all from content.js)
- [x] gsap.context() cleanup in every useEffect
- [x] Tailwind purge configured correctly

## React Native Bridge

This codebase is structured for React Native porting:

- All content in `src/data/content.js` (can be symlinked to RN monorepo)
- Clean prop-based components (no DOM-specific APIs outside hooks)
- `src/hooks/useAnimation.js` abstraction pattern for RN/Web divergence:
  - Web: GSAP animations
  - RN: Animated or Reanimated 2
- Tailwind colors mirror future `theme.js` for RN
- Section IDs double as React Navigation route names

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile: iOS 12+, Android 6+

## License

Proprietary — MajiSmart, 2026

## Support

hello@majismart.co.ke
