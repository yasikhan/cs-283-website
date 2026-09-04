# CS283 Course Website

Jekyll site for **CS283: Governing Artificial Intelligence: Law, Policy, and
Institutions** (Stanford), hosted on GitHub Pages:
https://cs-ai-governance.github.io/cs-283-website/

The design is adapted from MIT's [Missing Semester](https://missing.csail.mit.edu/)
(CC BY-NC-SA 4.0) with a Just the Class-style course calendar
([Just the Class](https://github.com/kevinlin1/just-the-class), MIT), re-themed in
Stanford Cardinal. This site is licensed **CC BY-NC-SA 4.0** — see `LICENSE`,
`NOTICE`, and the [/license/](https://cs-ai-governance.github.io/cs-283-website/license/) page.

## Local development

Use **Ruby 3.3** to match the version GitHub Pages builds with (installed via
`brew install ruby@3.3`). It's keg-only, so put it first on `PATH` for this project:

```sh
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/cs-283-website/

> Note: newer Rubies (3.4+/4.x) drop libraries and methods the Pages-pinned
> Jekyll relies on, so builds fail there. Stick with 3.3 locally.

See `CLAUDE.md` for architecture, theme tokens, and conventions.
