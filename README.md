# RE-LIFE — Piattaforma e-commerce per mobili rigenerati

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**RE-LIFE** è la piattaforma web ufficiale di una startup dedicata all'**upcycling di mobili**: pezzi usati vengono rigenerati, rivenduti e consegnati con un occhio alla sostenibilità. Il sito presenta il catalogo di mobili restaurati con foto "prima/dopo", racconta il processo di rigenerazione e la sostenibilità, e permette di richiedere informazioni sui singoli pezzi o un servizio su misura.

## Caratteristiche

- **Catalogo e-commerce**: vetrina dei prodotti con filtri per categoria, card animate e pagina di dettaglio.
- **Confronto prima/dopo**: nel dettaglio prodotto, toggle per confrontare foto "prima" e "dopo", con badge (Eco-Friendly, Artigianato, Restaurato), specifiche (provenienza, misure, materiali) e CO₂ risparmiata.
- **Storytelling del processo**: timeline a 5 passi del processo di rigenerazione e contatori impatto.
- **Pagina sostenibilità**: contatori di impatto, iniziative, certificazioni e grafici donut animati in SVG.
- **Logistica**: zone e prezzi di consegna per l'Italia, packaging ecosostenibile e guida alla consegna.
- **Servizio su misura**: form di contatto dedicato a privati e aziende con workflow in 4 passi.
- **Temi per pagina**: la Navbar assume palette di colori diverse in base alla sezione, con design system Tailwind v4 personalizzato (palette crema/terracotta/sage/mezzanotte).

## Tech Stack

- **Next.js 16 & React 19** — Framework full-stack con App Router e Server/Client Components
- **TypeScript 5** — Tipizzazione statica per massima affidabilità
- **Tailwind CSS v4** — Styling moderno con palette colori custom
- **Framer Motion** — Animazioni fluide di scroll, reveal e transizioni di pagina
- **Supabase (PostgreSQL)** — Database cloud e gestione catalogo prodotti
- **Lucide Icons** — Iconografia moderna e minimale
- **Vercel** — Piattaforma di hosting e deployment continuo

## Architettura

Applicazione Next.js **App Router**: ogni pagina è un client component, i dati provengono da file JSON statici in `lib/`, mentre il database Supabase è collegato ma non ancora consumato dalle pagine:

```
                    ┌───────────────────────────────────────────┐
                    │                Next.js App                │
                    │  app/  (routing + layout + metadata)      │
                    └──────┬────────────────────────────────────┘
                           │
        ┌──────────────────┼───────────────────────────────────────┐
        ▼                  ▼                  ▼                     ▼
  ┌────────────┐    ┌────────────┐     ┌────────────┐       ┌──────────────┐
  │  /         │    │  /shop     │     │ /processo  │       │ /sostenibilita│
  │  home      │    │ /shop/[slug]│    │ timeline   │       │ impatto      │
  └────────────┘    └────────────┘     └────────────┘       └──────────────┘
        │                  │                                       │
        ▼                  ▼                                       ▼
  ┌─────────────────────────────────────────────────────────────────────┐
  │                       components/  (client)                          │
  │  Navbar · Footer · HeroSection · HeroCarousel · ChiSiamo · Logistica │
  │  ProcessTimeline · ProductCard · SustainabilityCounter · ContactForm │
  └───────────────┬──────────────────────────────────────────────────────┘
                  │
        ┌─────────┴──────────┐
        ▼                    ▼
  ┌───────────────┐   ┌───────────────┐        ┌──────────────────┐
  │  lib/ (JSON)  │   │ lib/supabase  │───────►│    Supabase      │
  │  products     │   │ /api/products │  GET   │    (products)    │
  │  process      │   └───────────────┘        └──────────────────┘
  │  stats/home   │
  └───────────────┘
```

## Project Structure

```
sitogpo/
├── app/
│   ├── page.tsx              # Home (Hero, Logistica, ChiSiamo)
│   ├── shop/page.tsx         # Catalogo con filtri categoria
│   ├── shop/[slug]/page.tsx  # Dettaglio prodotto (prima/dopo)
│   ├── processo/page.tsx     # Timeline del processo di rigenerazione
│   ├── sostenibilita/page.tsx# Impatto, iniziative, certificazioni
│   ├── logistica/page.tsx    # Zone di consegna e prezzi
│   ├── su-misura/page.tsx    # Servizio su misura + form contatto
│   ├── api/products/route.ts # API GET dei prodotti (non ancora consumata)
│   ├── globals.css           # Design system Tailwind v4 + font Google
│   └── layout.tsx
├── components/               # Componenti client (Navbar, card, counter, form...)
├── lib/
│   ├── products.json         # Dati catalogo (statici)
│   ├── process.json          # Dati timeline
│   ├── stats.json / home.json
│   ├── supabase.ts           # Client Supabase
│   └── db.ts                 # Helper Vercel Postgres (scaffolding)
├── public/                   # Asset statici
├── SCHEMA.sql                # Schema del database
├── next.config.ts / tsconfig.json / postcss.config.mjs
└── package.json
```

## Installation & Setup

Prerequisiti: Node.js 20+ e npm.

```bash
git clone https://github.com/St0rmosu/sitogpo.git
cd sitogpo
npm install
npm run dev
```

Variabili d'ambiente (per l'integrazione Supabase/API; il sito funziona anche solo con i dati statici):

| Variabile | Uso |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del progetto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chiave anon pubblica del client |

Database: applicare `SCHEMA.sql` per creare la tabella `products` (id, nome, slug, descrizione, prezzo, misure, provenienza, materiali, co2_risparmiato, categoria, prima, dopo, immagini).

## Usage

1. Avvia il server di sviluppo e visita `http://localhost:3000`.
2. Esplora la home: hero, sezione logistica e "Chi siamo".
3. Apri **Shop**: filtra per categoria, seleziona un prodotto e confronta le foto prima/dopo con il toggle.
4. Premi **Richiedi Informazioni** nel dettaglio prodotto per contattare il team.
5. Visita le pagine **Processo**, **Sostenibilità** e **Logistica** per il racconto dell'impatto.
6. Usa **Su Misura** per il servizio custom (privati o aziende).

## Screenshots / Demo

Demo live disponibile su: [sitogpo.vercel.app](https://sitogpo.vercel.app)

## API Documentation

Un solo endpoint è esposto (scaffolding, non ancora consumato dalle pagine):

| Metodo | Endpoint | Descrizione |
|---|---|---|
| GET | `/api/products` | Restituisce tutti i prodotti dal database Supabase |

Risposta: array di oggetti `product` con i campi della tabella `products`. Le pagine attualmente leggono `lib/products.json`; l'endpoint è il percorso previsto per passare da dati statici a dati da database.

## Engineering Decisions

- **Dati JSON statici come default**: il catalogo vive in `lib/products.json`, rendendo il sito immediatamente deployabile senza servizi esterni. Il database Supabase e l'API route sono già predisposti ma non collegati: il passaggio al DB è un lavoro in corso (trade-off: semplicità vs. dinamicità).
- **Client components con Framer Motion**: tutte le pagine sono client component per supportare animazioni fluide di scroll e reveal, a scapito della serializzazione SSR dei contenuti.
- **Design system CSS-first (Tailwind v4)**: palette e font definiti in CSS, con temi per pagina tramite la Navbar.
- **Form di contatto front-end only**: il form è validato lato client ma non invia dati a un backend; scelta temporanea in attesa di un endpoint di submit.
- **No autenticazione/carrello**: la piattaforma è attualmente vetrina/showcase; carrello, ordini e utenti sono fuori scope per questa versione.

## Limitations & Future Improvements

- I dati dei prodotti sono statici: collegare le pagine all'API `/api/products` per un catalogo gestito da CMS.
- Form di contatto non invia dati a backend.
- Nessun carrello, checkout o autenticazione utente.
- Nomi di dominio/brand discordanti (repo `sitogpo` vs brand "RE-LIFE" vs footer "L'Impatto Visivo"): uniformare l'identità.
- Dipendenze non utilizzate presenti in `package.json` (`@chenglou/pretext`, `motion`, `clsx`, `tailwind-merge`): da ripulire.
- Prossimi passi: integrazione completa Supabase, form funzionante, SEO/meta completi, modalità i18n (IT/EN).

---

*Progetto GPO — Sviluppato da Lorenzo Recchia, Nicolò Mongelli e Federico Marasciulo.*
