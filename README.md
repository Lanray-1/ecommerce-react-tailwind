# LAUX-2 Frontend

Next.js (App Router) frontend for LAUX-2. For project overview,
current status, and stack rationale, see the
[root README](../README.md).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Typography is not yet decided — `layout.tsx` deliberately uses a
system font stack for now rather than `next/font`, to avoid a
premature design choice. See `DECISIONS.md` (ADR-F007).

## Project Documentation

- `ARCHITECTURE.md` — folder structure and architectural conventions
- `CONTEXT.md` — current state of the frontend and what's next
- `DECISIONS.md` — architecture decision records
- `CODING_CONVENTIONS.md` — naming, formatting, and style rules
- `AGENTS.md` — conventions for AI coding assistants working in this repo
- `../docs/process/` — implementation handoff template and process
  governance for coding-agent tasks
