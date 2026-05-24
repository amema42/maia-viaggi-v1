# MAIA Viaggi

Sito vetrina di MAIA 4.0 SRL, agenzia di viaggi con sede a Roma.
Lead generation via WhatsApp, 20 destinazioni, 4 consulenti.

## Stack

- Vite 5 + React 18 + TypeScript strict
- Tailwind CSS v4 + shadcn/ui (Radix primitives)
- Framer Motion (ridotto: solo modali e mount)
- Fraunces + Inter + JetBrains Mono (caricati via Google Fonts CDN)
- i18n: 5 lingue (IT, EN, ES, FR, DE) via Zustand persist
- Hosting: Vercel

## Requisiti

- Node >= 22 (vedi `.nvmrc`)
- pnpm 11.2.2 (vedi `packageManager` in package.json)

## Comandi

```bash
pnpm install              # installa dipendenze
pnpm dev                  # dev server http://localhost:8080
pnpm typecheck            # tsc --noEmit
pnpm lint                 # eslint
pnpm build                # build produzione in dist/
pnpm preview              # preview build locale
```

## Deploy

Vercel auto-deploy da `main`. Dominio: `maiaviaggi.it` (DNS via Aruba).

CI: GitHub Actions su push/PR a `main` (install, typecheck, lint, build).

## Branch strategy

- `main` = produzione stabile. Nessun push diretto.
- `dev` = sviluppo. Feature branch da `dev`, merge via PR.
- Merge verso `main` solo dopo build/lint/typecheck OK.

## Note

**Dati societari:** ragione sociale, REA, PEC, SCIA e polizza garanzia vanno validati su visura camerale prima del go-live definitivo. I dati attuali in `src/lib/legal.ts` sono quelli forniti dal cliente ma non verificati su fonte camerale.

**Asset esterni:** il sito carica font da Google Fonts CDN e alcune immagini da Unsplash. Entrambi sono dichiarati nella Privacy Policy. Per massimo controllo privacy/performance, valutare self-hosting in futuro.

**Pagamenti:** la sezione pagamenti nel footer e' "coming soon". Nessun pagamento online e' attivo.
