# AbNi Unified Engineering Website

Frontend website for AbNi Unified Engineering and its PrimeX product line. The app presents company information, product details, service capabilities, and a contact enquiry flow.

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router
- Redux Toolkit
- Tailwind CSS 4

## Pages

- `/` - Home page with hero, product preview, services preview, trust strip, and CTA
- `/products` - Product range with PrimeX Spray Paint details
- `/services` - Fabrication, coating, and press shop service details
- `/contact` - Contact information and enquiry form

## Getting Started

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:5173` by default.

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Type-check and build for production
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

## Project Structure

```text
src/
├── components/
│   ├── Contact/
│   ├── Home/
│   ├── Layout/
│   ├── Products/
│   └── Services/
├── hooks/
├── pages/
├── store/
│   └── slices/
├── App.tsx
├── index.css
└── main.tsx
```

## Production Build

```bash
npm run build
npm run preview
```

Build output is written to `dist/`.

## Docker

The Docker image builds the Vite app and serves it with Nginx. The included Nginx config falls back to `index.html` so direct visits to client-side routes such as `/products` and `/contact` work correctly.

```bash
docker build -t abni-primex .
docker run -p 8080:80 abni-primex
```
