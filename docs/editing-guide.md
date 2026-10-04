# Keeping your portfolio current

The portfolio is a static Astro site. There is no admin dashboard, database or CMS login. Regular updates are Markdown edits; GitHub Actions checks and publishes them after they reach `dev`.

## A quick correction from GitHub

1. Open `DonnC/donnc.github.io` and select **dev**.
2. Open an article under `src/content/posts/`, or case study under `src/content/projects/`.
3. Click the pencil, change the text, then use **Preview** to check Markdown formatting.
4. Commit to a new branch and open a pull request into **dev**.
5. Wait for the build check, review and merge. Deployment publishes the update at `https://donnc.github.io`.

GitHub's Markdown preview shows the writing, not the full portfolio layout. Use local preview for layout changes. For a tiny correction you can commit directly to `dev`; that starts publication immediately, so a pull request is the safer default. If a build fails, the previously published site remains available.

## Add an article

Copy `docs/article-template.md` into `src/content/posts/your-article-name.md`. Keep the YAML between the `---` lines at the top, then write Markdown below it:

```md
---
title: "Building a reliable payment flow"
description: "What I learned about retries and uncertain outcomes."
published: "2026-10-04"
topic: "Payments"
draft: true
---

Your introduction goes here.

## The problem

Describe the problem, your choices and what you learned.
```

Set `draft: false` when ready. The page, writing list, reading time and RSS feed update automatically. The filename becomes `/writing/your-article-name/`. Avoid renaming published files because that changes their URLs.

For an article first published elsewhere, add `canonical: "https://..."` with the original article URL. For portfolio-first writing, omit it. You can keep writing on Hashnode and republish here, or make this your primary archive and use other platforms for distribution. There is no automatic synchronization.

Put images in `public/images/`, then use `![Meaningful description](/images/example.webp)`. Publish only client material you have permission to share.

## Edit a project

Edit its file in `src/content/projects/`. For a new story, copy `docs/project-template.md` there. `featured` controls homepage selection, `order` controls sorting, and `draft: true` hides it. Optional repository, client and store links can be omitted.

`lastWorked` records your last substantive contribution. Projects outside the three-year window are excluded on the next build. Do not refresh that date just to keep an old project visible. Articles remain an archive.

## Change other parts

| Change | File |
| --- | --- |
| Homepage introduction and section copy | `src/pages/index.astro` |
| Biography, experience and PMP | `src/pages/about.astro` |
| Contact information | `src/pages/contact.astro` and `src/components/Footer.astro`; search for the old address to update the copy-email handler too |
| Navigation | `src/components/Nav.astro` |
| Colours, spacing and typography | `src/styles/global.css` |
| Social metadata and shared layout | `src/layouts/BaseLayout.astro` |

Text changes in `.astro` files are straightforward, but preserve tags, imports and braces. Design changes require frontend development. The site makes frequent writing and case-study updates easy; it is not a drag-and-drop website builder.

## Local editing flow

Use the Git checkout `github-pages-migration`, connected to your repository. The sibling `portfolio` folder is the earlier development copy; editing it will not push updates to GitHub.

With Node.js 24 installed, open a terminal in the checkout:

```sh
git switch dev
git pull --ff-only
git switch -c content/my-update
npm ci
npm run dev
```

Open the local URL shown in the terminal. Edit and inspect the result. Before committing:

```sh
npm run build
git add src/content/posts/your-article-name.md
git commit -m "Add payment engineering article"
git push -u origin content/my-update
```

Stage the actual files you changed. Open a pull request into `dev`, wait for its check and merge. Run `npm ci` on first setup or after dependency changes; ordinary text edits do not need a reinstall. Stop the local server with Ctrl+C.

## Fix a mistake

Revert the offending commit or merge and let deployment run again. For original-site rollback, see `deployment-plan.md`. Your GitHub profile is separate: edit `README.md` in `DonnC/DonnC` on `main`. It does not need an Astro build.
