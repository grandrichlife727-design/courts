# CourtFlow

CourtFlow is a public court booking platform built as a pnpm monorepo.

## Project Structure

```
courts/
├── apps/
│   └── web/          # Next.js 14 app (public booking, admin, staff)
└── packages/
    └── db/           # Prisma schema + generated client
```

## Local Development

### Prerequisites

- **Node.js** 18+ (or 20+)
- **pnpm** 9 — install with `npm i -g pnpm@9`
- **PostgreSQL** (optional for UI-only dev; required for DB features)

### 1. Install dependencies

```bash
pnpm install
```

### 2. Run the web app (UI only — no DB required)

```bash
pnpm -C apps/web dev
```

Open [http://localhost:3000](http://localhost:3000) — pages available:

| Path | Description |
|------|-------------|
| `/` | Public booking home |
| `/admin` | Admin console |
| `/staff` | Staff tools |

### 3. Build the web app

```bash
pnpm -C apps/web build
```

### 4. Set up the database (optional)

Copy the env file and set your Postgres connection string:

```bash
cp packages/db/.env.example packages/db/.env
# Edit packages/db/.env and set DATABASE_URL
```

Generate the Prisma client:

```bash
pnpm -C packages/db generate
```

Run migrations (requires a running Postgres instance):

```bash
pnpm -C packages/db migrate:dev
```

## GitHub Codespaces (one-click preview)

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/grandrichlife727-design/courts)

Click the badge (or **Code → Codespaces → Create codespace** on GitHub).  
The devcontainer will automatically:
1. Install Node 20 + pnpm 9
2. Run `pnpm install`
3. Start `next dev` on port 3000
4. Open a browser preview tab

Pages available in the preview:

| Path | Description |
|------|-------------|
| `/` | Public booking home |
| `/admin` | Admin console |
| `/staff` | Staff tools |

## License

This project is licensed under the MIT License.