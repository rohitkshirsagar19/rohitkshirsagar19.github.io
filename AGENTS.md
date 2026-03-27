# Repository Guidelines

## Project Structure & Module Organization
The site is a Vite + React + TypeScript portfolio. Main frontend code lives in `src/`: page-level routes are in `src/pages`, reusable UI lives in `src/components` and `src/components/ui`, and static content is kept in `src/data`. Public assets such as `favicon.ico` and `rohit_resume.pdf` live in `public/`. The optional chatbot backend is isolated in `chatbot/` with FastAPI entrypoints (`main.py`, `rag_pipeline.py`) and its own Python dependencies.

## Build, Test, and Development Commands
Use `npm install` to install frontend dependencies. Key scripts from `package.json`:

- `npm run dev`: start the Vite dev server.
- `npm run build`: create the production bundle in `dist/` and copy `index.html` to `404.html` for GitHub Pages routing.
- `npm run build:dev`: run a development-mode build for debugging.
- `npm run lint`: run ESLint across the TypeScript codebase.
- `npm run preview`: serve the built app locally.
- `npm run deploy`: publish `dist/` with `gh-pages`.

For the chatbot, create a virtual environment in `chatbot/`, install `requirements.txt`, then run the FastAPI app with your preferred ASGI server.

## Coding Style & Naming Conventions
Follow the existing style: TypeScript components use PascalCase file names such as `ProjectCard.tsx`; hooks use `use-*` naming in `src/hooks`; data modules are lower-case (`projects.ts`). Use 2-space indentation in frontend config files and 4 spaces in Python files. Prefer functional React components, path aliases like `@/components/...`, and Tailwind utility classes over ad hoc CSS when possible. Run `npm run lint` before opening a PR.

## Testing Guidelines
There is currently no automated frontend test suite and no `npm test` script. Treat `npm run lint` and a local `npm run build` as the minimum verification gate. For UI changes, manually test the affected route and responsive behavior. If you add tests, keep them close to the feature and use clear names such as `ComponentName.test.tsx`.

## Commit & Pull Request Guidelines
Recent history uses short `chore:` commits, for example `chore: updated resume`. Keep commit subjects imperative, lower-case, and scoped when possible (`feat: add contact form validation`). PRs should include a short summary, note any environment or content updates, link related issues, and attach screenshots for visible UI changes.

## Security & Configuration Tips
Do not commit secrets. GitHub Actions writes `VITE_API_URL` into `.env.local` during deploy, so keep local API settings in untracked env files. Avoid editing generated output in `dist/`; rebuild instead.
