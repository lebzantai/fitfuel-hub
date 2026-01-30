# FitFuel — Next.js App

Premium, WhatsApp-first website for FitFuel Hub + Forge + Threads + Games.

## Tech Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- next/font for typography

## File Tree (key paths)
```
src/
  app/
    layout.tsx
    page.tsx
    about/page.tsx
    apply/page.tsx
    contact/page.tsx
    faq/page.tsx
    forge/page.tsx
    games/page.tsx
    pricing/page.tsx
    programs/page.tsx
    policies/page.tsx
    results/page.tsx
    sponsors/page.tsx
    threads/page.tsx
    robots.ts
    sitemap.ts
  components/
    Analytics.tsx
    Button.tsx
    Card.tsx
    Divider.tsx
    FAQAccordion.tsx
    FitFuelLogo.tsx
    Footer.tsx
    GridBackground.tsx
    Hero.tsx
    LeadForm.tsx
    MobileDrawer.tsx
    Navbar.tsx
    OfferCards.tsx
    PricingTable.tsx
    TestimonialSlider.tsx
    WhatsAppFloatingButton.tsx
  content/
    site.ts
  lib/
    utils.ts
public/
  og-placeholder.svg
```

## Local Run
```bash
npm install
npm run dev
```

## Edit Content
All copy, pricing, FAQs, testimonials, links, and policy text live in a single config file:
- `src/content/site.ts`

## Edit Brand Elements
- Logo placeholder: `src/components/FitFuelLogo.tsx`
- OpenGraph image placeholder: `public/og-placeholder.svg`
- Analytics toggle: `src/components/Analytics.tsx` (`analyticsEnabled`)

## Notes
- WhatsApp link generation lives in `src/lib/utils.ts`.
- Each page uses Next.js Metadata for SEO and social cards.
