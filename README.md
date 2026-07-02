# Delta Impex Inc.

Production-ready React implementation of the Delta Impex Inc. industrial machinery website.

## Development

```bash
npm install
npm run dev
```

The website runs at `http://localhost:5173`; the enquiry API runs at
`http://localhost:8787` and is proxied automatically during development.

## Production

```bash
npm run build
npm start
```

The production server serves both the built SPA and `/api/enquiries` on port
`8787` by default. Submitted enquiries are sent to the configured Google Apps
Script web app and saved directly in the linked Google Sheet.

The current Apps Script URL is configured in `server/index.js`. To override it
without editing code, set `GOOGLE_SHEETS_WEBHOOK_URL` in the server environment.

Copy `.env.example` to `.env` when environment overrides are needed.

## Deploying to Vercel

The project includes a Vercel Function at `api/enquiries.js` and SPA fallback
rules in `vercel.json`. Import the repository into Vercel with the Vite preset,
then add this environment variable for Production, Preview, and Development:

```text
GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Use `npm run build` as the build command and `dist` as the output directory.
The frontend submits to the same-origin `/api/enquiries` endpoint in both local
and Vercel environments.
