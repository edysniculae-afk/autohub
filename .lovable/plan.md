# Restructurare completă Autohub Service Pipera

## Ce se schimbă

### 1. Culori: de la albastru electric la portocaliu

- `--primary` devine portocaliu (aprox. `30 90% 55%` HSL — matching logo-ul uploadat `#F5A623`-like)
- `--accent` la fel portocaliu
- Background rămâne dark, text alb

### 2. Logo — înlocuire text cu imaginea uploadată

- Copiere `Logo_Autohub_color.png` în `src/assets/`
- Folosire în Header (navbar) și Footer ca `<img>` în loc de text

### 3. Secțiuni noi (înlocuiesc About + WhyUs cu conținut mult mai bogat)

Pagina va avea structura:

1. **Header** — cu logo imagine
2. **Hero Section** — păstrat, culori actualizate
3. **Despre Noi** (nou) — text extins cu 3 paragrafe despre Autohub
4. **Procesul Nostru** (nou) — 5 pași vizuali (timeline/stepper): Programare → Diagnoză → Ofertă → Execuție → Control
5. **Servicii** — păstrat (7 servicii), dar culorile se actualizează automat prin CSS vars
6. **Garanție & Calitate** (nou) — 4 bullet points + text
7. **Tipuri de Clienți** (nou) — B2C + B2B, 5 categorii cu iconuri
8. **Timp & Eficiență** (nou) — 3 puncte
9. **Consultanță Auto** (nou) — 4 puncte
10. **Transparență Totală** (nou) — 4 puncte
11. **Dotări & Tehnologie** (nou) — 4 puncte echipamente
12. **Acoperire & Accesibilitate** (nou) — adresă + zone deservite
13. **Testimoniale** (nou) — hook text + placeholder review-uri
14. **Diferențiator** (nou) — "De ce Autohub nu este un service obișnuit" — 4 puncte
15. **CTA Final / Contact** — upgraded cu text nou
16. **Footer** — cu logo imagine

### 4. Imagini AI

- Regenerare imagini mai realiste (service auto real, nu futuristic)
- Focus pe conținutul secțiunii (mecanici la lucru, echipamente reale, nu hale SF)
- Imagini generate cu prompt-uri care cer "realistic photograph, actual auto repair shop, natural lighting"

## Fișiere modificate

- `src/index.css` — schimbare primary color la portocaliu
- `src/components/Header.tsx` — logo imagine
- `src/components/Footer.tsx` — logo imagine
- `src/components/HeroSection.tsx` — text actualizat
- `src/components/AboutSection.tsx` — conținut complet nou
- `src/components/WhyUsSection.tsx` — înlocuit cu secțiune Diferențiator
- `src/components/ContactSection.tsx` — CTA upgraded
- **Componente noi**: `ProcessSection.tsx`, `GuaranteeSection.tsx`, `ClientTypesSection.tsx`, `TimeEfficiencySection.tsx`, `ConsultingSection.tsx`, `TransparencySection.tsx`, `EquipmentSection.tsx`, `CoverageSection.tsx`, `TestimonialsSection.tsx`, `DifferentiatorSection.tsx`
- `src/pages/Index.tsx` — import și ordonare toate secțiunile noi
- Regenerare imagini assets cu prompt-uri realiste
- `mem://` — actualizare culori la portocaliu

## Detalii tehnice

- Secțiunile noi vor folosi aceleași pattern-uri: `useScrollReveal`, layout-uri cu grid, iconuri Lucide, Space Grotesk headings
- Multe secțiuni sunt text + bullet points — le grupăm vizual câte 2-3 pe ecran pentru a nu fi prea lung (secțiunile mici precum Timp, Consultanță, Transparență pot fi combinate în grid-uri 2-col)
- Portocaliu logo: ~`hsl(33, 90%, 55%)` derivat din logo
- Tot continutul va fi imbinat bine in pagina, la fel si graficile 