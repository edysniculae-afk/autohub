# Autohub Service Pipera - autohubservice.ro

## Ce e
Site service auto pentru **Autohub Service Pipera** (Șos. Petricani 86A, București, sector 2). 7 servicii: mecanica, electrica, tinichigerie+vopsitorie, daune asigurare, vulcanizare, ITP, piese auto. Tel: 0748 018 401. Program Lu-Vi 08:00-18:00.

## Stack
- **Vite 5 + React 18 + TypeScript** (SPA, NU SSR/SSG)
- **shadcn/ui + Tailwind 3 + framer-motion + react-helmet-async**
- **react-router-dom 6** cu BrowserRouter
- **Lovable**: proiectul a fost initiat in Lovable (`.lovable/` + `lovable-tagger` in vite plugins). Atentie cand modifici - Lovable poate suprascrie schimbarile.

## Hosting
- **Vercel** - production pe **`autohubservice.ro`** + `www.` redirect.
- **`vercel.json`** - SPA rewrites: tot ce nu e `/assets`, `/favicon`, `/sitemap`, `/robots`, `/llms` cade pe `index.html`.
- **Auto-deploy** activ pe push `main` din `git@github.com:edysniculae-afk/autohub.git` (HTTPS la fel, gh credential helper configurat).

## Comenzi
```bash
npm run dev          # vite, port 8080
npm run build        # vite build
npm run preview      # preview build
npm run lint
npm run test         # vitest
```

## Structura
- `src/pages/` - Home, About, Services, ServiceDetail (`/servicii/:slug`), ServicePiperaLanding (`/service-auto-pipera`), Contact, FAQ, NotFound
- `src/components/` - Header, Footer, Layout, SEO (cu Helmet), Breadcrumbs, sectiuni Hero/About/Process/Services/Guarantee/Testimonials etc
- `src/data/business.ts` - **single source of truth** pt NAP, geo, ore, areasServed, googleMapsUrl, sameAs (gol, completam cand avem GBP/FB/IG)
- `src/data/services.ts` - 7 servicii cu slug, metaTitle, metaDescription, descriere, items, FAQ, related

## SEO local - status (2026-05-06)
- **Title cu cuvant cheie principal** in fata pe toate paginile, cu "Pipera" puternic
- **3 schemas JSON-LD server-side in index.html** (vede Google fara JS): `AutoRepair` complet (NAP, geo, ore, 11 areaServed, makesOffer 7 servicii, hasMap, paymentAccepted), `Organization`, `WebSite`
- **`/service-auto-pipera`** - landing locala 1100+ cuvinte cu FAQ specific zonei, embed Google Maps, schema `AutoRepair` + `FAQPage` + `BreadcrumbList`. Singura pagina noua creata in 2026-05-06.
- **`/servicii/:slug`** - fiecare are schema `Service` + `FAQPage` + `BreadcrumbList` injectate via Helmet
- **Sitemap** `public/sitemap.xml` - 13 URL-uri, lastmod 2026-05-06, pagina noua priority 0.95
- **Robots.txt** - Allow / pt toti, AI crawlers permisi (GPTBot, Claude-Web, PerplexityBot etc)

### Ce mai poate creste rankingul (depinde de elph, NU de cod)
1. **Google Business Profile** - claim/optimizat (categorii, 30+ poze, descriere, intrebari)
2. **Recenzii Google** - tinta 30+ in 60 zile, peste 4.5 stele
3. **Citations** - listari NAP identic in autovit, 4tuning, paginiaurii, anuntul, cylex, Bing Places, Apple Maps
4. **Backlink-uri locale** - forumuri auto, bloguri locale Bucuresti

### Ce poate creste pe site (refactor mai mare, cand cere elph)
1. **Prerendering SSG** - `vite-prerender-plugin` sau `vite-react-ssg` ca paginile sa aiba HTML static per ruta (acum doar `index.html` are schema; restul prinde meta via Helmet dupa JS)
2. **Pagini per serviciu × locatie** - `/vopsitorie-pipera`, `/itp-pipera`, `/electrica-auto-pipera`, `/mecanica-auto-pipera`, `/tinichigerie-pipera` (continut UNIC, NU duplicat din `/servicii/:slug`)
3. **`aggregateRating` schema** - dupa ce avem >5 recenzii reale
4. **`sameAs`** in `business.ts` - cu URL GBP, FB, IG cand le avem

## GOTCHA-uri
- **Lovable poate suprascrie** modificari la sectiuni/componente daca elph deschide proiectul in Lovable Studio. Verifica inainte de iteratii mari.
- **`vercel.json` SPA rewrites** sunt esentiale: orice URL nou trebuie sa pice pe `index.html`. NU adauga `cleanUrls: true` fara sa testezi.
- **Em dashes** sunt blocate de guardian hook (L-010). Foloseste " - " sau reformuleaza.
- **`react-helmet-async`** schimba meta DUPA hidratare. Pentru indexare server-side, schema/meta importante trebuie in `index.html`.
- **GBP nu e accesibil prin WebSearch (Bing)** - ca sa-l auditezi, cere lui elph link direct din Google Maps share.

## Coding reports
`docs/coding-reports/YYYY-MM-DD-titlu.md` - de generat la sfarsit de sesiune cand s-au facut schimbari relevante.
