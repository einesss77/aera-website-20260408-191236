# aera-website

## Private access

The whole site, including images, Next.js assets and API routes, requires HTTP
Basic authentication. Use `aera` as the username (any username works) and the
shared password configured in the server-only `SITE_PASSWORD` environment variable.
Use HTTPS in production. Never prefix this variable with `NEXT_PUBLIC_`.

For local development, copy `.env.example` to `.env.local` and set a password.
For hosting, set `SITE_PASSWORD` for every applicable environment and redeploy.
If it is unset or empty, access stays closed with HTTP 503. Changing the password
invalidates the previous credentials on subsequent requests.

All responses carry `X-Robots-Tag: noindex, nofollow, noarchive` and cannot be
stored in shared caches. Page metadata also disables indexing; the sitemap is
empty. `robots.txt` deliberately allows crawling so search engines can revisit
previously indexed URLs and see their HTTP 401 status rather than retaining URLs
blocked by robots.txt. No page content is exposed to unauthenticated crawlers.

Existing search results disappear after recrawling, not immediately on deployment.
To accelerate removal, request a site-wide URL-prefix removal in Google Search
Console for each indexed domain/URL variant, and keep the password protection in
place after that temporary removal expires.

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_07r4XxDcvpkY6VDy7m3R0ChPYiJC)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/Affi-Amine/aera-website" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
