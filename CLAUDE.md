# CS283 Course Website

Course website for **CS283: Governing Artificial Intelligence: Law, Policy, and
Institutions** (Stanford) — taught **every fall** to both **undergraduate and
law students**. Built with **Jekyll** and hosted on **GitHub Pages**.
(`site.title` holds the full title; `site.short_title` = `CS283` for tab
suffixes.)

- Repo: `yasikhan/cs-283-website`
- Live URL: https://yasikhan.github.io/cs-283-website/
- Local preview (requires Ruby 3.3 — see below):
  `export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH" && bundle exec jekyll serve`
  → http://localhost:4000/cs-283-website/

## Design basis & license (IMPORTANT)

- **Site design** is adapted from MIT's **Missing Semester**
  (`github.com/missing-semester/missing-semester`, CC BY-NC-SA 4.0): the Jekyll
  layouts, includes, `assets/css/main.css` + `syntax.css` (re-themed), lecture
  template, sidenotes, and nav.
- **Course calendar** (the Schedule page) is adapted from **Just the Class**
  (`github.com/kevinlin1/just-the-class`, MIT): the `_modules` collection + a
  definition-list `date : topic : materials` format. Its CSS was re-implemented
  standalone (`assets/css/calendar.css`) — we do **not** depend on Just the Docs.
- Because Missing Semester is ShareAlike, **this site is licensed CC BY-NC-SA 4.0**
  (`LICENSE`), with attributions in `NOTICE`, the `/license/` page, and the footer.
  Keep those intact.

## Working agreement (IMPORTANT)

- **Content and bespoke design are done collaboratively, driven by human input.**
  Apply only design changes the user explicitly requests; do not invent content or
  extra styling. Collection docs (`_modules/*`, `_2026/*`) are clearly-labeled
  **placeholders**, not real course content.

## Theme tokens (defined in `assets/css/theme.css`)

- `--cardinal: #8C1515` (Stanford Cardinal) — nav bar, links, accents.
- `--cardinal-tint: rgba(140,21,21,.15)` — highlights, tinted labels.
- `--cardinal-light: #E8746F` — dark-mode accents.
- `--cream: #FEFFED` — page background.
- Fonts (loaded in `_includes/head.html`): **Courier Prime** (nav bar), **Lato**
  (all headings/titles — bold, cardinal-colored — plus body), Source Code Pro
  (code — TBD). Playfair Display is no longer used. `main.css`/`calendar.css`
  reference the tokens above.

## Structure

- `_config.yml` — `baseurl: /cs-283-website`; `title` (full course title) +
  `short_title: CS283`; `current_year: 2026`; kramdown/GFM; `future: true`
  (lecture/module dates are in the future at build time — required or their pages
  are not written); collections + layout defaults.
- `_layouts/` — `default` (shell), `page`, `lecture` (MS), `module` (JtC calendar).
- `_includes/` — `head`, `nav`, `footer` (attribution), `video`/`scaled_*` helpers.
- `assets/css/` — `theme` (tokens), `main` (adapted MS), `syntax` (Rouge), `calendar`
  (JtC modules). `assets/js/sidenotes.js`. (Renamed from `static/`.)
- Pages (`layout: page`) live in `pages/` — each declares its own `permalink`, so
  the folder is cosmetic (Jekyll renders front-matter files by permalink from any
  dir, no collection needed): `pages/assignments.md`, `sections.md`, `resources.md`,
  `lectures.md` (lists the `_2026` collection), `license.md`, `schedule.md`. The
  home page `index.md` (`/`) and `404.html` stay at the repo root.
- `pages/schedule.md` (`/schedule/`) renders the calendar from
  `site.modules | where: "year", site.current_year`.
- Collections: `_modules/` (weekly calendar, `output: false`, needs `year` + `order`),
  `_2026/` (lecture pages, `output: true`, `layout: lecture`).

## Conventions

- **All internal links must use `{{ '/path' | relative_url }}`** (and `doc.url |
  relative_url`). MS/JtC upstream used root-absolute paths that 404 under our
  `/cs-283-website` baseurl — always route through `relative_url`.
- New offering next fall: add a `_2027/` collection (mirror the `_2026` config +
  defaults), give new `_modules` docs `year: 2027`, and bump `current_year`.
- Calendar labels use kramdown IAL: `**HW 1 due**{: .label .label-due }`,
  `**Section**{: .label .label-section }` (styled in `calendar.css`).
- CSS/JS `<link>`/`<script>` tags in `head.html` carry a `?v={{ site.time | date:
  '%s' }}` cache-buster so each Pages build serves fresh assets (Pages sets
  `max-age=600` on assets). Keep new local assets on that pattern.

## Local Ruby

Use **Ruby 3.3** (`brew install ruby@3.3`, keg-only) to match GitHub Pages'
build (`github-pages` 232 / Jekyll 3.10). Prepend `/opt/homebrew/opt/ruby@3.3/bin`
to `PATH` before bundler. Newer Rubies (3.4+/4.x) drop stdlib libs and
`String#tainted?` that the Pages-pinned Jekyll needs. The `Gemfile` also declares
`csv`/`base64`/`bigdecimal`/`logger` for forward safety.

## Deployment

GitHub Pages builds from `main` (root). Push → auto rebuild. Poll with
`gh api /repos/yasikhan/cs-283-website/pages/builds/latest -q .status`.

## TODO / placeholders to fill

- [ ] Real favicon / branding assets under `assets/` (head has a TODO).
- [ ] Real schedule weeks, lectures, assignments, section info (collaborative).
- [ ] Code/monospace font choice; custom Stanford domain — later.
