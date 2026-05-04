# Aroos al Mohit — Complete Website Revamp Plan
### Ship Chartering & Freight Brokerage | Professional Website Development Guide

---

## 0. Executive Summary

**"Aroos al Mohit"** translates to *"Bride of the Ocean"* — a poetic, powerful name that should define the entire visual identity. The new site should feel like a global maritime powerhouse: dark navy authority, gold precision, animated ocean-grade production values. Think Clarksons meets Apple's design language — serious, trustworthy, modern.

**Reference sites for design cues:**
| Site | What to Borrow |
|------|---------------|
| clarksons.com | Clean authority, data-led hero sections |
| braemar.com | Refined navy/white professional palette |
| aalshipping.com | Service section structure, case studies |
| maersk.com | Large imagery, minimal nav, interactive stats |
| rolls-royce.com/marine | Dark luxury aesthetic, animation quality |
| kuehne-nagel.com | Stats counters, global reach visualization |

---

## 1. Brand Identity & Design Direction

### Color Palette (CSS Variables)
```css
--color-ocean-dark:   #0A1628;   /* Primary background — deep ocean */
--color-navy:         #0D2137;   /* Cards, sections */
--color-navy-mid:     #153152;   /* Borders, subtle surfaces */
--color-gold:         #C9A84C;   /* Primary accent — wealth, precision */
--color-gold-light:   #E8C97A;   /* Hover states */
--color-white:        #F5F7FA;   /* Body text */
--color-muted:        #8A9BB5;   /* Secondary text */
--color-sky:          #2E90D1;   /* CTAs, links */
--color-sky-glow:     #4AADEE;   /* Highlights */
```

### Typography
- **Display / Hero**: `Playfair Display` (serif, editorial authority) — for the brand name and major headings
- **Headlines**: `Josefin Sans` (geometric, nautical precision) — section titles
- **Body**: `DM Sans` (clean, readable) — paragraphs
- **Data / Numbers**: `JetBrains Mono` — stats counters, figures

### Logo Concept
Wordmark with a stylized compass rose integrated into the Arabic crescent motif — the "A" in "Aroos" shaped like a ship's bow cutting through waves. Ship silhouette underlining the full name.

### Visual Motifs
- Animated ocean wave SVG in hero footer
- Rotating compass rose as a loading/section divider element
- World map with animated shipping routes (SVG paths drawn on scroll)
- Cargo ship silhouette parallax hero

---

## 2. Site Architecture & Pages

```
/                    → Home (Hero + Services overview + Stats + CTA)
/about               → Company, Mission, Values, Team
/services/           → Services landing
  /chartering        → Ship Chartering detail
  /freight-brokerage → Freight Brokerage detail
  /consultancy       → Maritime Consultancy
/fleet               → Vessel types we broker (Bulk, Tanker, Container, etc.)
/routes              → Coverage map — Middle East, Indian Ocean, Global
/contact             → Multi-channel contact form + office info
/blog (optional)     → Maritime insights / market news
```

---

## 3. Page-by-Page Content Plan

### 3.1 HOME PAGE

**Hero Section**
```
HEADLINE:    Navigating the World's Oceans.
             With Precision.
SUBHEAD:     Ship chartering intermediary and freight brokerage 
             specialists — connecting cargo owners to the right 
             vessel, on the right route, at the right price.
CTA:         [ Request a Charter Quote ]   [ Our Services ↓ ]
BACKGROUND:  Full-viewport video/parallax of a vessel at sea 
             with slow zoom. Overlay: dark gradient 60% opacity.
```

**Animated Stats Bar** (numbers count up on scroll)
```
[ 500+ ]   Vessels Brokered      
[ 40+ ]    Trade Routes Covered  
[ 20+ ]    Years of Expertise    
[ 98% ]    Client Retention Rate 
```

**Services Teaser** (3-column card grid, hover reveals full description)
```
⚓ Ship Chartering        🚢 Freight Brokerage        🌐 Maritime Advisory
```

**World Routes Section**
Interactive SVG world map — animated dotted lines showing key trade routes (Middle East ↔ South Asia ↔ Africa ↔ Europe).

**Why Choose Us** (alternating image + text)
```
✔ Deep market relationships with shipowners globally
✔ Real-time freight rate intelligence  
✔ Tailored charter party negotiations
✔ End-to-end voyage management support
```

**Testimonials / Partners Logos strip**

**Final CTA Banner**
```
"Ready to move your cargo smarter?"
[ Start a Conversation ] 
```

---

### 3.2 ABOUT PAGE

**Hero**: Split screen — left: moody ocean shot; right: company story text

**Our Story**
> Aroos al Mohit — *Bride of the Ocean* — was founded on a singular conviction: that the maritime world's most complex logistics challenges deserve a partner who combines deep market knowledge with genuine personal commitment. We operate at the intersection of shipowners and cargo interests, ensuring every fixture is matched with precision.

**Mission**
> To be the most trusted ship chartering intermediary and freight broker in the Middle East and Indian Ocean trade lanes — delivering speed, transparency, and reliability on every voyage.

**Values** (icon grid)
- 🧭 Precision — every fixture negotiated with care
- 🤝 Integrity — transparent dealings, always
- 🌊 Expertise — deep market intelligence
- ⚡ Agility — fast response in fast-moving markets

**Team Section** — placeholder cards (name, title, photo, LinkedIn)

---

### 3.3 SERVICES — SHIP CHARTERING

**What We Do**
Aroos al Mohit acts as a professional intermediary between cargo owners/traders and shipowners. We source suitable vessels for your specific cargo, negotiate charter parties, and manage the fixture through to completion.

**Charter Types We Handle**
| Type | Description |
|------|-------------|
| Voyage Charter | Vessel hired for a single voyage, port-to-port |
| Time Charter | Vessel hired for a defined period |
| Bareboat Charter | Full vessel lease without crew |
| COA (Contract of Affreightment) | Series of voyages over time |

**Vessel Categories**
- Bulk Carriers (Handysize to Capesize)
- Tankers (Product / Chemical / Crude)
- General Cargo / MPP Vessels
- Container Feeders
- RORO Vessels
- Offshore Support Vessels

**Process** (animated timeline)
```
01 → Cargo Brief     →  02 → Market Search  →  03 → Owner Negotiations
04 → Charter Party   →  05 → Fixture Recap  →  06 → Post-Fixture Support
```

---

### 3.4 SERVICES — FREIGHT BROKERAGE

**What We Do**
For cargo owners who need freight solutions without full vessel charters, we broker freight on existing services — finding the best rates, routing, and terms across liner and tramp markets.

**Cargo Types**
- Dry Bulk (grain, coal, minerals, fertilizers)
- Break Bulk & Project Cargo
- Liquid Bulk (chemicals, vegetable oils)
- Containerized Cargo
- Heavy Lift & OOG (Out-of-Gauge)

**Our Freight Brokerage Advantage**
- Access to a network of vetted shipowners and operators
- Real-time market rate tracking
- Freight derivatives and hedging advisory
- Laytime/demurrage dispute support

---

### 3.5 CONTACT PAGE

**Hero text**: "Let's Talk About Your Next Voyage"

**Form Fields**:
- Full Name
- Company
- Email
- Phone
- Cargo Type (dropdown: Bulk / Liquid / Container / Project / Other)
- Charter Type (dropdown: Voyage / Time / Bareboat / Freight / Advisory)
- Loading Port / Discharging Port
- Cargo Quantity (MT)
- Laycan Dates
- Message / Additional Requirements
- [ Submit Enquiry ]

**Contact Details block** (with icons)
- 📧 Email
- 📞 Phone / WhatsApp
- 📍 Address
- Social links (LinkedIn, WhatsApp Business)

---

## 4. Free Image Sources & Queries

Use the following sources and search terms for all imagery:

### Unsplash (unsplash.com)
```
Search: "cargo ship ocean"
Search: "container ship port"  
Search: "bulk carrier sea"
Search: "shipping port aerial"
Search: "ocean freighter"
Search: "maritime navigation compass"
Search: "tanker ship sunset"
```

### Pexels (pexels.com)
```
Search: "shipping logistics"
Search: "cargo container"
Search: "sea freight"
Search: "ship bridge navigation"
```

### Pixabay (pixabay.com)
```
Search: "bulk carrier"
Search: "freight ship"
Search: "port crane container"
```

### Recommended hero video (free)
- Pexels Video: search "cargo ship ocean" — 4K available
- Coverr.co: search "ocean" or "ship"

### Photo placement guide
| Section | Image |
|---------|-------|
| Hero | 4K cargo ship at sea, dramatic lighting |
| About split | Port at golden hour / aerial |
| Chartering | Bulk carrier at anchor |
| Freight | Container terminal aerial |
| Contact | Ocean horizon, calm waters |
| Blog cards | Various vessel types |

---

## 5. Animations & Interactions

| Element | Animation |
|---------|-----------|
| Hero heading | Words fade + slide in on load (staggered, 0.3s delay each) |
| Stats counters | Count up from 0 when scrolled into view (IntersectionObserver) |
| World map routes | SVG path `stroke-dashoffset` draw animation on scroll |
| Service cards | 3D tilt on hover (vanilla-tilt.js or CSS transform) |
| Section transitions | Fade + translateY from below (Intersection Observer) |
| Nav | Transparent on hero → solid navy on scroll |
| Compass rose | Slow rotation, used as section divider ornament |
| Wave footer | Animated SVG wave, layered |
| Ocean background | Subtle CSS radial gradient pulse |
| CTA button | Shimmer/shine sweep on hover |
| Page transitions | Smooth scroll-snap between major sections |

**Libraries to use** (all CDN-available, no build required for simple version):
- `AOS.js` — scroll-triggered animations
- `CountUp.js` — stat counters
- `vanilla-tilt.js` — 3D card hover
- `Swiper.js` — testimonials/fleet carousel
- `GSAP` (free tier) — hero timeline animations
- `Leaflet.js` or custom SVG — world routes map

---

## 6. Tech Stack Recommendation

Since you're using Cursor + GitHub Pages:

```
Framework:     Pure HTML5 / CSS3 / Vanilla JS
               (No build tool required — works directly on GitHub Pages)
               OR: Astro (static site generator, excellent for GitHub Pages)

CSS:           Custom CSS with CSS variables (no Tailwind needed for this)
               CSS Grid + Flexbox for layout

Fonts:         Google Fonts CDN
               - Playfair Display
               - Josefin Sans  
               - DM Sans
               - JetBrains Mono

Icons:         Lucide Icons (CDN) or Font Awesome

Form handling: Formspree.io (free tier — handles form submissions without backend)
               OR Netlify Forms if you switch hosting later

Analytics:     Google Analytics 4 (paste snippet)

Contact widget: Tawk.to live chat (free, whatsapp integration)
```

**Folder structure:**
```
aroosalmohit/
├── index.html
├── about.html
├── services/
│   ├── chartering.html
│   └── freight-brokerage.html
├── contact.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── animations.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js
│   │   ├── animations.js
│   │   └── map.js
│   ├── images/
│   │   ├── hero/
│   │   ├── services/
│   │   └── about/
│   └── video/
│       └── hero-loop.mp4
└── README.md
```

---

## 7. GitHub Repository Setup — Step by Step

### Step 1: Create the Repository
```bash
# On GitHub.com:
1. Go to github.com → New Repository
2. Name it exactly: aroosalmohit     (or: aroos-al-mohit)
3. Set to PUBLIC (required for free GitHub Pages)
4. Initialize with README ✓
5. Click "Create repository"
```

### Step 2: Enable GitHub Pages
```bash
# In your new repository:
1. Go to Settings → Pages (left sidebar)
2. Source: "Deploy from a branch"
3. Branch: main  /  Folder: / (root)
4. Click Save
5. Your site will be live at: https://[yourusername].github.io/aroosalmohit/
```

### Step 3: Clone to Local
```bash
git clone https://github.com/[yourusername]/aroosalmohit.git
cd aroosalmohit
```

### Step 4: Set Up Cursor
```bash
# Open in Cursor:
cursor .

# Or from Cursor: File → Open Folder → select the cloned folder
```

### Step 5: Deploy Workflow
```bash
# Every time you want to publish:
git add .
git commit -m "Update: [what you changed]"
git push origin main

# GitHub Pages auto-deploys within 1-2 minutes
```

### Step 6: Custom Domain (after site is ready)
```bash
# Create a CNAME file in root:
echo "aroosalmohit.com" > CNAME
git add CNAME && git commit -m "Add custom domain" && git push

# Then in your DNS provider (GoDaddy/Namecheap/etc):
# Add these DNS records:
# A Record:    @  →  185.199.108.153
# A Record:    @  →  185.199.109.153
# A Record:    @  →  185.199.110.153
# A Record:    @  →  185.199.111.153
# CNAME:       www → [yourusername].github.io

# In GitHub Settings → Pages → Custom Domain: aroosalmohit.com
# Enable "Enforce HTTPS" ✓
```

---

## 8. Complete Cursor Prompt (Copy-Paste This)

```
You are building a professional, world-class website for "Aroos al Mohit" 
(Arabic: عروس المحيط — "Bride of the Ocean"), a ship chartering intermediary 
and freight brokerage company serving the Middle East and global maritime markets.

═══════════════════════════════════════
DESIGN BRIEF
═══════════════════════════════════════

AESTHETIC: Dark luxury maritime — inspired by sites like clarksons.com, 
braemar.com, and maersk.com. Deep ocean dark (#0A1628) primary background, 
gold (#C9A84C) as the precision accent, white text for body. 
Think: authority, trustworthiness, global reach.

TYPOGRAPHY:
- Display/Hero: Playfair Display (Google Fonts) — for brand name and H1s
- Headlines: Josefin Sans — for section titles and nav
- Body: DM Sans — for paragraphs
- Data: JetBrains Mono — for stats and numbers

COLORS:
--ocean-dark: #0A1628
--navy:       #0D2137
--navy-mid:   #153152
--gold:       #C9A84C
--gold-light: #E8C97A
--sky:        #2E90D1
--white:      #F5F7FA
--muted:      #8A9BB5

═══════════════════════════════════════
SITE STRUCTURE — BUILD IN THIS ORDER
═══════════════════════════════════════

Build the following files:
1. assets/css/main.css        — All styles, CSS variables, components
2. assets/css/animations.css  — All animation keyframes and classes
3. assets/js/main.js          — Scroll behavior, nav, counters, interactions
4. index.html                 — Homepage (full)
5. about.html                 — About page
6. services/chartering.html   — Ship Chartering service page
7. services/freight-brokerage.html — Freight Brokerage service page
8. contact.html               — Contact page with Formspree form

═══════════════════════════════════════
INDEX.HTML — HOMEPAGE SECTIONS
═══════════════════════════════════════

SECTION 1: NAVIGATION
- Fixed/sticky navbar, transparent on hero, solid --navy on scroll
- Logo: "AROOS AL MOHIT" in Playfair Display, gold color, with a small 
  compass SVG icon beside it
- Nav links: Home | About | Services ▾ | Contact
- Services dropdown: Ship Chartering, Freight Brokerage
- Right side: "Request a Quote" button (gold, rounded-sm)
- Mobile: hamburger menu → full-screen overlay nav

SECTION 2: HERO
- Full-viewport height
- Background: CSS gradient overlay (dark ocean to transparent) over a 
  large background image. Use this free Unsplash image as placeholder:
  https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920
- Animated particles or subtle CSS noise texture overlay
- Content (centered, left-aligned on large screens):
  - Small uppercase label: "SHIP CHARTERING · FREIGHT BROKERAGE"
  - H1: "Navigating the World's Oceans." (Playfair Display, 72px desktop)
       "With Precision." (on second line, with --gold color)
  - Subheading: "Connecting cargo owners to the right vessel, on the right 
    route, at the right price — across the Middle East and beyond."
  - Two CTA buttons: 
    Primary: "Request a Charter Quote" (gold fill)
    Secondary: "Explore Our Services" (outline, white)
  - Animate: hero text fades in with staggered delay (GSAP or CSS)
- Bottom of hero: animated scroll indicator (bouncing chevron)
- Bottom-left: animated SVG wave element

SECTION 3: STATS BAR
- Full-width dark bar (#0D2137)
- 4 columns: 
  500+ Vessels Brokered | 40+ Trade Routes | 20+ Years Expertise | 98% Client Retention
- Numbers use JetBrains Mono, large, --gold color
- Labels in DM Sans, --muted color
- Numbers COUNT UP using IntersectionObserver + vanilla JS when scrolled into view

SECTION 4: SERVICES OVERVIEW
- Section title: "What We Do" (Josefin Sans, centered)
- 3-column card grid
- Each card:
  - Top: large icon (SVG anchor, ship, globe respectively)
  - Card has subtle border-top in --gold on hover
  - Title: Ship Chartering / Freight Brokerage / Maritime Advisory
  - Description: 2-3 sentences
  - Link: "Learn More →"
  - Hover: card lifts (translateY -8px, box-shadow), icon color turns gold
  - 3D tilt effect using vanilla-tilt.js

SECTION 5: WORLD ROUTES
- Background: very dark (#0A1628)
- Title: "Our Global Reach"
- Subtitle: "Covering the world's most active shipping lanes"
- SVG world map (simplified, Ocean-relevant regions highlighted)
  OR an image-based world map with CSS-animated dashed lines
- Key routes shown with animated dots traveling along paths:
  Middle East Gulf → India → East Africa
  Middle East → Europe → Americas
  Asia → Middle East → Mediterranean
- Below map: 6 region badges in a flex row:
  🌊 Arabian Gulf | Indian Ocean | Red Sea | Mediterranean | East Africa | South Asia

SECTION 6: WHY AROOS AL MOHIT
- Alternating layout (image left, text right; then text left, image right)
- Block 1: 
  Image: bulk carrier at sea
  Text: "Deep Market Relationships" — explanation of owner network
- Block 2:
  Image: port aerial
  Text: "Precision Fixture Negotiations" — charter party expertise
- Each point has a --gold check icon

SECTION 7: VESSEL TYPES WE BROKER
- Dark section with card carousel (Swiper.js)
- Vessel type cards: Bulk Carrier | Tanker | General Cargo | Container | RORO | Offshore
- Each card: vessel type image (from Unsplash), name, DWT range, typical routes

SECTION 8: HOW IT WORKS
- Title: "From Enquiry to Fixture in 6 Steps"
- Horizontal timeline (scrollable on mobile):
  01 Cargo Brief → 02 Market Search → 03 Owner Negotiations → 
  04 Charter Party → 05 Fixture Recap → 06 Voyage Support
- Each step has icon, number in --gold, short description
- Animated line connecting steps (CSS or SVG stroke animation)

SECTION 9: TESTIMONIALS
- Swiper.js carousel
- Card: quote, company name, role, logo placeholder
- Background: #0D2137, subtle gold quote mark decoration

SECTION 10: FINAL CTA BANNER
- Full-width, --gold background (or gradient gold)
- Text: "Ready to move your cargo smarter?" in dark color
- Button: "Start a Conversation" (dark, filled)

SECTION 11: FOOTER
- 4-column layout: 
  Col 1: Logo + tagline + social icons (LinkedIn, WhatsApp)
  Col 2: Services links
  Col 3: Company links  
  Col 4: Contact (email, phone, address)
- Bottom bar: © 2025 Aroos al Mohit. All rights reserved.
- Animated SVG ocean wave at top of footer

═══════════════════════════════════════
ABOUT PAGE
═══════════════════════════════════════

- Hero: "The Bride of the Ocean" — full-width section with port image overlay
- Our Story: 3-paragraph narrative (see content plan)
- Mission statement in a large blockquote style
- 4 Values in icon cards (Precision, Integrity, Expertise, Agility)
- Team section: 3 placeholder cards (image, name, title, LinkedIn icon)
- CTA → Contact

═══════════════════════════════════════
SERVICES — CHARTERING PAGE
═══════════════════════════════════════

- Hero: "Ship Chartering" with bulk carrier image
- What is ship chartering (intro text)
- Charter Types table (Voyage / Time / Bareboat / COA) — styled dark table
- Vessel Categories we handle (icon grid, 6 types)
- Process timeline (01–06)
- CTA: "Get a Charter Quote"

═══════════════════════════════════════
SERVICES — FREIGHT BROKERAGE PAGE  
═══════════════════════════════════════

- Hero: "Freight Brokerage" with container terminal image
- Service explanation
- Cargo types we handle (icon cards: Bulk, Break Bulk, Liquid, Container, Heavy Lift)
- Our Advantage (4 bullet points)
- CTA: "Request Freight Rates"

═══════════════════════════════════════
CONTACT PAGE
═══════════════════════════════════════

- Hero: "Let's Talk About Your Next Voyage"
- Two-column: Left = contact details (Email, Phone, WhatsApp, Address, map embed)
- Right = Form:
  Full Name | Company | Email | Phone
  Cargo Type (dropdown) | Charter Type (dropdown)  
  Loading Port | Discharging Port | Cargo Quantity (MT)
  Laycan From | Laycan To
  Message/Requirements (textarea)
  [ Submit Enquiry ] button (--gold)
- Form action: use Formspree endpoint (placeholder: https://formspree.io/f/XXXXXXXX)
- Success state: animated tick + "We'll be in touch within 24 hours."

═══════════════════════════════════════
TECHNICAL REQUIREMENTS
═══════════════════════════════════════

LIBRARIES (use CDN in HTML head, no npm/build needed):
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Josefin+Sans:wght@300;400;600&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.8.1/dist/vanilla-tilt.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.8.0/countUp.umd.min.js"></script>

RESPONSIVE:
- Mobile-first CSS
- Breakpoints: 768px (tablet), 1024px (desktop), 1440px (wide)
- Nav collapses to hamburger at 768px
- Service cards: 3-col desktop → 2-col tablet → 1-col mobile
- Hero font scales: 72px → 52px → 36px

PERFORMANCE:
- Lazy load all images: loading="lazy"
- Minified external libraries from CDN only
- SVG icons inline (not icon fonts)
- Preconnect to Google Fonts

ACCESSIBILITY:
- Semantic HTML5 (nav, main, section, article, footer)
- ARIA labels on icon buttons
- Focus states visible
- Alt text on all images
- Sufficient color contrast (WCAG AA)

SEO:
- Each page has unique <title> and <meta name="description">
- Open Graph tags (og:title, og:description, og:image)
- Canonical URLs
- Structured data: Organization schema (JSON-LD) on index.html

═══════════════════════════════════════
PLACEHOLDER IMAGES — USE THESE URLS
═══════════════════════════════════════

Hero:         https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80
About:        https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1200&q=80
Chartering:   https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200&q=80
Freight:      https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=1200&q=80
Bulk carrier: https://images.unsplash.com/photo-1574169208507-84376144848b?w=800&q=80
Container:    https://images.unsplash.com/photo-1494412574643-ff11b0a5716d?w=800&q=80
Port aerial:  https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1200&q=80

═══════════════════════════════════════
IMPLEMENTATION ORDER
═══════════════════════════════════════

Build in this order:
1. main.css — full stylesheet with all variables, resets, components
2. animations.css — all keyframes
3. index.html — complete homepage
4. about.html
5. services/chartering.html
6. services/freight-brokerage.html
7. contact.html
8. main.js — all interactivity (nav scroll, counters, AOS init, GSAP hero)

Make every page fully functional, all links working between pages.
Use relative paths for all assets (./assets/css/, ./assets/js/).
Include a favicon: use a simple compass emoji SVG as favicon.
```

---

## 9. Formspree Setup (Contact Form)

1. Go to **formspree.io**
2. Create a free account
3. New Form → name it "Aroos al Mohit Contact"
4. Copy your endpoint URL (looks like: `https://formspree.io/f/abcdefgh`)
5. Replace `XXXXXXXX` in the contact form's `action` attribute
6. Free tier: 50 submissions/month. Upgrade for more.

---

## 10. Post-Launch Checklist

- [ ] All pages load without 404 errors
- [ ] Contact form submits correctly (test it)
- [ ] Mobile nav works on iOS Safari
- [ ] Images load on GitHub Pages (check relative paths)
- [ ] CNAME file added for custom domain
- [ ] GitHub Pages settings updated with custom domain
- [ ] DNS records set at your registrar
- [ ] HTTPS enforced in GitHub Settings
- [ ] Google Analytics installed
- [ ] Google Search Console verified
- [ ] Submit sitemap.xml to Google Search Console
- [ ] LinkedIn company page updated with new URL
- [ ] Test load speed: pagespeed.web.dev

---

## 11. Future Enhancements (Phase 2)

- Blog / Maritime Market Insights section
- Live freight index widget (Baltic Dry Index API)
- Client portal / document exchange
- WhatsApp Business direct chat button
- Arabic language toggle (RTL layout)
- Interactive vessel tracker integration

---

*Plan prepared for: Aroos al Mohit | Ship Chartering & Freight Brokerage*  
*Development: Cursor IDE + GitHub Pages | Domain: aroosalmohit.com*
