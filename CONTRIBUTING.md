# Contributing to Minimalist CV

Thanks for taking the time to contribute. This is a Next.js + TypeScript ATS-friendly resume template.

## Development workflow

```bash
git clone https://github.com/thelinuxguy-ssh/cv.git
cd cv
npm install
npm run dev
# open http://localhost:3000
```

### Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Biome lint check |
| `npm run check` | Lint + format check |
| `npm run check:fix` | Lint + format with auto-fix |

## Branching

**All pull requests must target the `dev` branch.** The `main` branch is reserved for stable releases only.

1. Fork the repository
2. Create a feature branch from `dev`:
   ```bash
   git checkout dev
   git checkout -b feat/my-change
   ```
3. Make your changes
4. Run `npm run check` to ensure everything passes
5. Commit and open a pull request against `dev`

## Pull request guidelines

- Keep PRs focused on a single change
- Ensure `npm run check` and `npm run build` pass
- Follow the existing code style (Biome handles most of this)
- If you're adding a new feature, consider adding documentation in the README

## Reporting issues

Please use the issue templates provided. When reporting a bug, include steps to reproduce, expected behavior, and relevant screenshots or logs.

## Style guide

This project uses [Biome](https://biomejs.dev/) for linting and formatting. The configuration is in `biome.json`. Run `npm run check:fix` before committing to auto-format your code.
