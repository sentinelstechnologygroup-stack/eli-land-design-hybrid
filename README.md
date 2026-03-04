# ELI Land Design — Next.js (App Router) Parity Port

This is a parity-focused port of the existing Vite/React-Router ELI Hybrid build to Next.js.
Goals:
- Same URL structure
- Same /public/images paths
- Same components/tokens (no redesign)

## Local
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Notes
- Route files live in `src/app/**/page.jsx` and import the existing page components from `src/pages/*`.
- Legacy URL aliases are handled in `next.config.js` redirects.
# eli-land-design-hybrid-nextjs
"# eli-land-design-hybrid" 
# eli-land-design-hybrid
