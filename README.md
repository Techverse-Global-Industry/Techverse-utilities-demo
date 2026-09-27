# Aurelia Utilities — Front-end Demo

A premium Next.js utility/infrastructure website plus front-end customer and operations platforms. This project is intentionally **demo-only**: there is no backend, authentication service, database, payment gateway, live utility meter, IoT integration, GPS tracking, email/SMS service, or production customer data.

## Stack

- Next.js 15+ App Router
- React + TypeScript
- Tailwind CSS
- Three.js + React Three Fiber + Drei
- GSAP
- Lenis
- Framer Motion
- Lucide React
- next/image

## Routes

- `/` — cinematic marketing site
- `/customer` — customer dashboard
- `/customer/billing`
- `/customer/service-requests`
- `/customer/installations`
- `/customer/maintenance`
- `/customer/notifications`
- `/platform` — operations overview
- `/platform/monitoring`
- `/platform/service-requests`
- `/platform/billing`
- `/platform/installations`
- `/platform/maintenance`
- `/platform/field-service`
- `/platform/notifications`
- `/platform/reporting`

## Demo behavior

User-created service requests, maintenance updates, technician states, notification read/dismiss states, and language selection are stored in `localStorage`. Invoice/report downloads are created client-side as demo text artifacts. WhatsApp links are centralized in `lib/config.ts` and currently use a placeholder number.

## Assets

The brief refers to stock images supplied by the user, but no image files accompanied the specification in this workspace. Local vector fallback art is included under `public/images/utility/` so there are no broken image references. Replace those files with licensed stock assets using the same paths when the real images are available.

`public/videos/` is intentionally empty. The cinematic R3F smart-city scene is used as the hero visual fallback; a compressed MP4/WebM can be added later without changing the app architecture.

## Run locally

```bash
npm install
npm run dev
```

Then validate:

```bash
npm run lint
npm run build
```

## Configuration

Update `lib/config.ts` before deployment, especially the WhatsApp number, phone and email placeholders.
