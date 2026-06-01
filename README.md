# Sakthivel S Portfolio

Premium full-stack portfolio built with Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js, and modern reusable components.

## Features

- Dark glassmorphism UI
- Responsive hero landing page with 3D gear animation
- Recruiter-focused sections for About, Skills, Experience, Projects, Achievements, Certifications, and Contact
- Smooth scrolling and animated reveal effects
- Dark/Light mode toggle
- Downloadable resume
- SEO metadata and optimized project structure
- Backend contact API route for form submissions

## Project Structure

- `pages/` — Next.js page routes
- `components/` — reusable UI components
- `sections/` — structured page sections
- `hooks/` — custom hooks
- `lib/` — shared utilities
- `public/` — static assets and generated resume
- `styles/` — global Tailwind CSS styles

## Requirements

- Node.js 24.x
- npm (bundled with Node.js)

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

```bash
npm run build
npm run start
```

## Quality & Formatting

```bash
npm run lint
```

## Deployment

This project can be deployed to Vercel or any Node.js-compatible hosting provider.

1. Build the application with `npm run build`.
2. Start the production server with `npm run start`.
3. Set environment variables via your hosting provider if you add runtime configuration.

## Environment Template

Use `.env.example` as the base for any environment-specific keys.

## Notes

- `package-lock.json` is committed for reproducible installs.
- The project was validated with a successful `npm run build` and `npm run lint`.
