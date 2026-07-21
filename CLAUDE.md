# CS 283 Course Website

Course website for **CS 283** (Stanford) — a course taught **every fall** to both
**undergraduate and law students**. Built with **Jekyll** and hosted on **GitHub Pages**.

- Repo: `yasikhan/cs-283-website`
- Live URL: https://yasikhan.github.io/cs-283-website/
- Local preview (requires Ruby 3.3 — see below):
  `export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH" && bundle exec jekyll serve`
  → http://localhost:4000/cs-283-website/

## Local Ruby

Use **Ruby 3.3** (`brew install ruby@3.3`), which matches GitHub Pages' build
environment (`github-pages` 232 / Jekyll 3.10). It's keg-only, so prepend
`/opt/homebrew/opt/ruby@3.3/bin` to `PATH` before running bundler. Newer Rubies
(3.4+/4.x) remove stdlib libraries and the `String#tainted?` method that the
Pages-pinned Jekyll still uses, so builds fail there. The `Gemfile` also declares
`csv`/`base64`/`bigdecimal`/`logger` (former default gems) for forward safety.

## Working agreement (IMPORTANT)

- **Design and content are done collaboratively, driven by human input.** Do **not**
  add real content/copy or visual design (CSS, colors, fonts, layout styling) unless
  explicitly asked.
- The current scaffold is intentionally **structure-only**: a shared nav, page stubs,
  and working navigation so the site's operation is visible. Everything else is a
  deliberate blank canvas.

## Structure

- `_config.yml` — site config. `baseurl: /cs-283-website` is required so internal
  links resolve under the project-page URL.
- `_layouts/default.html` — the single shared page shell (head, nav, main, footer).
- `_includes/nav.html` — top navigation; edited once, inherited by every page.
- `_includes/footer.html` — shared footer.
- `assets/css/style.css` — intentionally near-empty; site styling TBD.
- Pages (each a Markdown file with front matter + a `permalink`):
  - `index.md` → `/` — Course (home / overview)
  - `schedule.md` → `/schedule/`
  - `lectures.md` → `/lectures/`
  - `assignments.md` → `/assignments/`
  - `sections.md` → `/sections/`
  - `resources.md` → `/resources/`

## Conventions

- Add a page by copying an existing stub, setting `title` + `permalink`, and adding a
  link in `_includes/nav.html`.
- Internal links must use `{{ '/path/' | relative_url }}` so they work under the
  `/cs-283-website` baseurl.
- Churny, structured data (schedule rows, lecture list) should later live in
  `_data/*.yml` and render via templates rather than hand-written HTML.

## Deployment

- GitHub Pages builds from the `main` branch (root). Push to `main` → the site
  rebuilds automatically.
- The `github-pages` gem pins the same versions GitHub's build uses.

## TODO / placeholders to fill

- [ ] Confirm real course title/number (currently "CS 283").
- [ ] Design system: colors, typography, layout (collaborative).
- [ ] Per-year archiving strategy (e.g. `2026-fall/`) once the first offering is set.
- [ ] Custom domain (e.g. via Stanford IT) — later; github.io for now.
