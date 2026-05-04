# Aroos Al Mohit — Website

**Aroos Al Mohit Ship Charter LLC** | عروس المحيط  
Ship Chartering Intermediary & Freight Brokerage | Deira, Dubai, UAE

---

## Live Site
🌐 [aroosalmohit.com](https://aroosalmohit.com)

---

## Site Structure

```
aroosalmohit/
├── index.html                        → Homepage
├── about.html                        → About Us
├── contact.html                      → Contact & Enquiry Form
├── services/
│   ├── chartering.html               → Ship Chartering
│   └── freight-brokerage.html        → Freight Brokerage
├── assets/
│   ├── css/
│   │   ├── main.css                  → Core styles & components
│   │   ├── animations.css            → All animations & keyframes
│   │   └── responsive.css            → Mobile-first breakpoints
│   ├── js/
│   │   ├── main.js                   → Nav, counters, AOS, Swiper, forms
│   │   └── map.js                    → World routes SVG animation
│   └── images/
│       └── logo.png                  → Company logo
└── favicon.svg                       → Compass rose favicon
```

---

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JS (no build tool)
- [GSAP](https://greensock.com/gsap/) — Hero animations
- [AOS](https://michalsnik.github.io/aos/) — Scroll animations
- [Swiper.js](https://swiperjs.com/) — Vessel & testimonial carousels
- [CountUp.js](https://github.com/inorganik/CountUp.js) — Stats counters
- [vanilla-tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) — 3D card hover
- [Formspree](https://formspree.io) — Contact form backend

---

## ⚠️ One-Time Setup: Formspree

Before deploying, activate the contact form:

1. Go to [formspree.io](https://formspree.io) → Sign up (free)
2. Create a new form → Name it "Aroos Al Mohit Contact"
3. Copy your endpoint: `https://formspree.io/f/abcdefgh`
4. In `contact.html`, find and replace:
   ```
   https://formspree.io/f/XXXXXXXX
   ```
   with your actual endpoint.

---

## Deploy to GitHub Pages

```bash
git add .
git commit -m "Update: [description of changes]"
git push origin main
```

GitHub Pages auto-deploys within 1–2 minutes.

---

## Contact

- **Managing Director:** Anish Abdul Samad
- **Phone / WhatsApp:** +971 55 952 5691
- **Email:** business@aroosalmohit.com
- **Address:** Office M20, Mezzanine Floor, Al Dana Centre, Maktoum Street, Deira, Dubai, UAE

---

*Built with Cursor IDE — dark luxury maritime design*
