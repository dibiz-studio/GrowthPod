# Growth Pod — Next.js landing page

Next.js 16 (App Router) + React 19 + TypeScript — same setup as the Dibiz Studio project.
Design, content and behaviour match the approved HTML preview exactly.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Production

```bash
npm run build
npm run start
```

Deploys to Vercel as-is (the home page is prerendered as static HTML).

## Where things live

| What | File |
| --- | --- |
| All text, client links, contact details | `lib/site-data.ts` |
| All styles (colours, fonts, layout) | `app/globals.css` — colour tokens at the top in `:root` |
| Fonts + page title/description | `app/layout.tsx` |
| Photos | `public/images/` |
| Header + Footer | `components/Header.tsx`, `components/Footer.tsx` |
| Home sections | `components/home/` — Hero, Gap, Services, HowWeWork, Familiar, Work, About |
| Active service tab (shared by hero cards + Services) | `components/home/ServiceTabContext.tsx` |

To set the booking link or Instagram URL, edit `contact.bookingUrl` and `contact.instagram` in `lib/site-data.ts`.
