# Repository Guidelines

## Project Structure & Module Organization
- `src/index.tsx` instantiates the Hono app and wires the shared JSX renderer defined in `src/renderer.tsx`.
- `src/style.css` holds global styles; Vite serves it directly, so keep additional assets in `public/` if they must bypass the bundler.
- `vite.config.ts` enables the Cloudflare and SSR plugins; adjust build behaviour there instead of ad hoc flagging scripts.
- `wrangler.jsonc` points Workers to `src/index.tsx`; update `compatibility_date` and bindings here when environments change.

## Build, Test, and Development Commands
- `npm install` installs dependencies; keep `bun.lock` checked in but prefer npm for consistency with CI.
- `npm run dev` starts the hot-reloading Vite dev server on the local Worker runtime.
- `npm run build` creates the production bundle consumed by Wrangler deploys.
- `npm run preview` rebuilds then serves the static preview; use it for smoke checks before releasing.
- `npm run deploy` rebuilds then publishes to Cloudflare via `wrangler`.
- `npm run cf-typegen` syncs Worker bindings to `CloudflareBindings`; rerun after editing `wrangler.jsonc`.

## Coding Style & Naming Conventions
- TypeScript is strict; keep modules `.tsx` and prefer named exports for shared utilities.
- Use two-space indentation, single quotes, and trailing newlines, matching existing files.
- JSX lives under `src/`; colocate renderer-specific helpers next to their consumers to avoid deep trees until the surface grows.
- Validate formatting with Vite’s TypeScript emit; add Prettier only if the codebase expands.

## Testing Guidelines
- No automated tests exist yet. When adding them, place unit suites in `tests/` and use Vitest for parity with Vite.
- Name specs after the module under test (e.g. `index.spec.tsx`) and cover each route handler plus renderer output states.
- Run future suites with `vitest run --coverage` and gate deploys on a green report.

## Commit & Pull Request Guidelines
- Git history is unavailable here, so follow Conventional Commits (e.g. `feat: add article route`) to stay predictable.
- Keep PRs focused, describe user-facing changes, list manual verification, and link Cloudflare preview URLs when relevant.
- Flag any Worker binding updates and include updated `CloudflareBindings` types in the diff.

## Cloudflare Worker Tips
- Configure secrets through `wrangler secret` instead of hard-coding in `wrangler.jsonc`.
- Always regenerate types and re-run `npm run preview` before requesting deploy approval to catch breaking schema shifts.
