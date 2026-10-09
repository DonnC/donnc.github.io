# Donald Chinhuru — Portfolio

Static Astro website for **https://donnc.github.io**. No database, CMS account or API keys are needed. Project and article content lives in Markdown.

## Run locally

Use Node.js 24 or newer.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`build` checks Astro/TypeScript, generates the static site and checks internal links. Entries marked `draft: true` stay unpublished. `dist/` is the publishable output. The reviewed earlier scaffold is backed up outside this folder in `../scaffold-backup-2026-10-03/`.

## Update content

See [the editing guide](docs/editing-guide.md) for browser-only edits, new articles, local previews and rollback.

- Projects: `src/content/projects/*.md`. Edit the description and story without touching layout. Copy `docs/project-template.md` for a new case.
- Articles: `src/content/posts/*.md`. Copy `docs/article-template.md`, write Markdown, set `draft: false` when ready. New articles automatically receive a page, reading time and RSS entry.
- Home, biography and contact: `src/pages/index.astro`, `about.astro`, `contact.astro`.
- Visual design: `src/styles/global.css`. Architecture illustrations: `src/components/ProjectVisual.astro`.
- Contact addresses are in the contact page, footer and copy-email handler. Change all references together.

Projects are visible only if `lastWorked` falls within three years of the build date. It means the last substantive contribution, **not** a cosmetic edit or a repository update by another contributor. Deployment rebuilds that rule; a static published site cannot age content automatically between builds. Dates identify activity, not employment start dates. Writing is a separate archive and remains available after three years.

Optional repository, client and app-store URLs can be omitted. Case-study navigation always works locally. Missing optional URLs resolve to `/`; the visible fallback is labelled **Portfolio overview** rather than masquerading as an app/client link. No private repository URL is published.

## Writing here and elsewhere

You can publish full articles here. Use a `canonical` URL when republishing an existing Hashnode article; omit it for portfolio-first articles. The imported articles preserve your writing, with editorial media placeholders removed and a grammar correction. Both have their original publication dates and source links. Hashnode and Medium remain optional distribution channels, not required infrastructure.

GitHub Pages has no private admin panel or server-side form handler. Editing Markdown locally or in GitHub and pushing is the publication workflow. For easier editing, a Git-based content editor can be added later without redesigning the site.

## Deploy

1. Put **this folder's contents at the root** of the `DonnC/donnc.github.io` repository. Preserve any existing custom-domain setting if applicable.
2. Commit `package-lock.json` with the source. Do not commit `node_modules/`, `.astro/` or `dist/`.
3. In repository Settings → Pages, choose **GitHub Actions** as Source.
4. Push to `dev`, the repository's existing default branch, or run the deploy workflow manually. The workflow builds/checks before deploying.

The Astro source is on `dev`, published through GitHub Actions. `master` retains the previous Gatsby output for rollback. See `docs/deployment-plan.md` for the migration record and rollback steps.

This implementation is configured for a user Pages site at the domain root. A different repository name needs a `base` setting **and every internal route/asset URL updated**. See [Astro’s GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

The migration was merged through pull request #3 on 4 October 2026. Future edits publish when they reach `dev`.

## Content judgment

Nine project stories balance four featured stories across payments, banking, automation and creative tooling with ERP, tooling, messaging and creative work. Professional titles and sole ownership are based on your confirmation; numerical outcomes and deployment status are not inferred from commits. PMP is presented as active, earned in 2024. Baobab has its own framework case study, a verified synthetic Task portal screenshot and a homepage link. Its working capabilities are separated from production validation still required; Kinetiframe and the compliance roadmap also carry development qualifications. Vant Flow retains the existing /work/vant-flow-baobab/ URL to preserve published links. Kafka support is accurately described as optional in the current messaging setup.

The next meaningful improvement is evidence: approved screenshots, a redacted architecture example, or one substantiated before/after result for each leading case. Update the prose as those become available. Generic numerical claims would weaken rather than improve it.

See `docs/content-review.md` for the remaining assumptions and `docs/profile-readme-draft.md` for a matching GitHub profile draft.

## Client-neutral case studies

Professional work is described by engineering role and industry, without client names. Mobile banking uses `/work/mobile-banking/`. Kinetiframe and mPOS + mTMS describe current implemented capabilities separately from planned work and deployment requirements. The build verification rejects client-identifying names in rendered pages.
