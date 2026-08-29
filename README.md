# RE-LIFE: piattaforma e-commerce per mobili rigenerati

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**RE-LIFE** è la piattaforma web di una startup dedicata all'upcycling di mobili: pezzi usati vengono rigenerati, rivenduti e consegnati con attenzione alla sostenibilità. Il sito presenta il catalogo di mobili restaurati con foto "prima/dopo", racconta il processo di rigenerazione e la sostenibilità, e permette di richiedere informazioni sui singoli pezzi o un servizio su misura.

**Demo:** [sitogpo.vercel.app](https://sitogpo.vercel.app)

## Caratteristiche

- **Catalogo e-commerce**: vetrina dei prodotti con filtri per categoria, card animate e pagina di dettaglio.
- **Confronto prima/dopo**: nel dettaglio prodotto, toggle per confrontare le foto, con badge (Eco-Friendly, Artigianato, Restaurato), specifiche (provenienza, misure, materiali) e CO₂ risparmiata.
- **Processo di rigenerazione**: timeline a 5 passi e contatori di impatto.
- **Pagina sostenibilità**: contatori di impatto, iniziative, certificazioni e grafici donut animati in SVG.
- **Logistica**: zone e prezzi di consegna per l'Italia, packaging ecosostenibile e guida alla consegna.
- **Servizio su misura**: form di contatto per privati e aziende con workflow in 4 passi.
- **Temi per pagina**: la Navbar usa una palette diversa per ogni sezione (design system Tailwind v4: crema/terracotta/sage/mezzanotte).

## Tecnologie

- **Next.js 16 & React 19** — framework full-stack con App Router e Server/Client Components
- **TypeScript 5** — tipizzazione statica
- **Tailwind CSS v4** — styling con palette colori custom
- **Framer Motion** — animazioni di scroll, reveal e transizioni di pagina
- **Supabase (PostgreSQL)** — database cloud e gestione catalogo prodotti
- **Lucide Icons** — iconografia
- **Vercel** — hosting e deployment continuo

## Uso

1. Avvia il server di sviluppo e visita `http://localhost:3000`.
2. Esplora la home: hero, sezione logistica e "Chi siamo".
3. Apri **Shop**: filtra per categoria, seleziona un prodotto e confronta le foto prima/dopo con il toggle.
4. Premi **Richiedi Informazioni** nel dettaglio prodotto per contattare il team.
5. Visita le pagine **Processo**, **Sostenibilità** e **Logistica**.
6. Usa **Su Misura** per il servizio custom (privati o aziende).

## Installazione

Prerequisiti: Node.js 20+ e npm.

```bash
git clone https://github.com/St0rmosu/sitogpo.git
cd sitogpo
npm install
npm run dev
```

Variabili d'ambiente per l'integrazione Supabase/API. Il sito funziona anche solo con i dati statici:

| Variabile | Uso |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL del progetto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chiave anon pubblica del client |

Applica `SCHEMA.sql` per creare la tabella `products` (id, nome, slug, descrizione, prezzo, misure, provenienza, materiali, co2_risparmiato, categoria, prima, dopo, immagini).

## Architettura

Applicazione Next.js **App Router**: ogni pagina è un client component, i dati provengono da file JSON statici in `lib/`, mentre il database Supabase è collegato ma non ancora consumato dalle pagine:

![Diagramma architettura](docs/architecture.png)

## Documentazione API

Un solo endpoint è esposto (scaffolding, non ancora consumato dalle pagine):

| Metodo | Endpoint | Descrizione |
|---|---|---|
| GET | `/api/products` | Restituisce tutti i prodotti dal database Supabase |

La risposta è un array di oggetti `product` con i campi della tabella `products`. Le pagine leggono `lib/products.json`; l'endpoint è il percorso previsto per passare da dati statici a dati da database.

## Struttura del progetto

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

*Progetto GPO, sviluppato da Lorenzo Recchia, Nicolò Mongelli e Federico Marasciulo.*
