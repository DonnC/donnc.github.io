# Migration to the new portfolio

Pre-migration configuration verified on 3 October 2026:

- Repository: `https://github.com/DonnC/donnc.github.io`
- Default source branch: `dev`
- Live GitHub Pages source: `master`, root directory, Deploy from a branch
- Custom domain: none; HTTPS is enforced on `donnc.github.io`
- Previous deployment command: `gatsby build && gh-pages -d public -b master`
- Reviewed source baseline: `15dcd5bd72b61334003109787f191e3ce1ef74a4`

## Prepared locally

Published on 4 October 2026: pull request #3 merged into `dev` at `25765520bec375335242a2c45947595c86fbacbf`; Pages Source changed to GitHub Actions. The first production workflow completed successfully. The profile refresh was merged separately in `DonnC/DonnC` through pull request #1. The steps below record the completed migration, rather than a pending task.

`../github-pages-migration/` is an isolated clone. Its `portfolio-refresh` branch replaces the Gatsby source with the reviewed Astro website. The existing LICENSE and repository history are preserved. No private project repository is modified. `../portfolio-refresh.patch` is a complete binary-capable patch against the source baseline.

The workflow triggers on `dev`, installs Node 24 dependencies using the committed npm lockfile, checks and builds, then deploys via the GitHub Pages artifact API. It does not overwrite `master`.

## Publish the reviewed replacement

1. Review the migration commits against `origin/dev` in the migration clone. Confirm `origin` is the repository above and the source baseline has not changed remotely.
2. Push the prepared `portfolio-refresh` branch. Open a pull request targeting `dev`.
3. Merge the reviewed change into `dev`.
4. In Settings → Pages, set Source to **GitHub Actions**. Keep the domain and HTTPS configuration.
5. Run the portfolio workflow on `dev` if the push-triggered run occurred before the Pages source change.
6. Wait for successful deployment, then verify the live homepage, work collection, a case study, an article and contact page.

Pushing a preparation branch alone does not replace the live site: deployment is restricted to `dev`.

## Roll back

Disable the new deployment workflow first to prevent a later push from redeploying the new version. Set Pages Source back to **Deploy from a branch**, choose `master` and `/ (root)`, then save. The previous published files remain in that branch. Verify the restored homepage after the Pages build completes. The source migration can also be reverted through Git history.

## Repository history

The old repository began as a fork of Brittany Chiang’s Gatsby portfolio. The new Astro implementation was built independently. The previous license notice remains in the repository and historical commits remain available.
