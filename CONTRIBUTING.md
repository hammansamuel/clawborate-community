# Contributing to Clawborate Community Edition

Thank you for your interest in contributing. This guide covers how to get set up, what you can change in this repository, and how to submit work upstream.

## What is open source here

The community edition splits the stack into open and closed components:

| Component | Location | Notes |
|-----------|----------|-------|
| Frontend | `frontend/` | Next.js 15 app — primary contribution surface |
| Agent definitions | `agent-arch/` | Agent identities, team templates, PAF partials |
| Infrastructure | `docker/`, `nginx/`, `docker-compose.yml` | Compose stack, Postgres init, proxy config |
| Backend | Pre-built Docker image | `clawborate/clawborate-community` on Docker Hub — source not in this repo |

Bug reports and feature ideas for the backend are still welcome via GitHub issues, but code changes for backend behavior need to go through the maintainers.

## Getting started

### Fork and clone

```bash
git clone https://github.com/<your-username>/clawborate-community.git
cd clawborate-community
git remote add upstream https://github.com/clawborate/clawborate-community.git
git fetch upstream
```

Keep your fork current:

```bash
git checkout main
git merge upstream/main
git push origin main
```

### Run the full stack

```bash
cp .env.example .env
# Edit .env — set APP_DB_PASSWORD, JWT_SECRET, and LLM settings (see README)
docker compose up -d
```

Open http://localhost:3000 (default credentials in README).

### Frontend-only development

For UI work without rebuilding the whole stack:

```bash
cd frontend
npm install
npm run dev
```

The dev server proxies API calls to the backend. Set `BACKEND_URL` if your backend is not at `http://localhost:8001`.

Useful commands:

```bash
npm run build    # production build
npm run lint     # ESLint (Next.js)
npm run test     # Vitest
```

## Where to contribute

Good first contributions often include:

- **Documentation** — README improvements, setup troubleshooting, agent-arch guides
- **Frontend** — UI fixes, i18n (see `frontend/src/lib/locales/`), accessibility, tests
- **Agent content** — improve `SOUL.md`, `IDENTITY.md`, `MEMORY.md`, or add team templates under `agent-arch/openclaw/`
- **Dev tooling** — ESLint config, Vitest tests, CI workflows
- **Infrastructure** — Docker Compose, nginx, seccomp hardening

Before starting larger work, open an issue on [clawborate/clawborate-community](https://github.com/clawborate/clawborate-community/issues) to confirm scope — the issue tracker is new and maintainers appreciate a quick heads-up.

## Pull request workflow

1. Create a branch from an up-to-date `main`:
   ```bash
   git checkout -b fix/my-change
   ```
2. Make focused changes — one logical change per PR when possible.
3. Test what you touched:
   - Frontend: `npm run build` (and `npm run test` when tests exist for your area)
   - Agent or Docker changes: `docker compose up -d --build` and smoke-test affected flows
4. Push to your fork and open a PR against `clawborate/clawborate-community:main`.
5. Describe what changed, why, and how you verified it.

## Code conventions

### Frontend

- **TypeScript** throughout `frontend/src/`
- **i18n**: shared strings live in `frontend/src/lib/locales/en.ts` and `zh.ts`. Prefer adding keys there over inline `lang === 'zh' ? ... : ...` checks.
- **Styling**: Tailwind CSS and CSS variables defined in `globals.css` — match existing patterns in nearby components.
- Keep changes minimal; avoid unrelated refactors in the same PR.

### Agent architecture

Agent definitions follow the [Pluggable Agent Framework](https://github.com/sammyhuang/pluggable-agent-framework). See [agent-arch/README.md](agent-arch/README.md) for structure and customization.

## Reporting bugs

Open an issue with:

- Steps to reproduce
- Expected vs actual behavior
- Environment (OS, Docker version, `VERSION` tag if not `latest`)
- Relevant logs (`docker compose logs backend`, `docker compose logs frontend`)

## License

By contributing, you agree that your contributions will be licensed under the [Apache License 2.0](LICENSE), consistent with the rest of the project.