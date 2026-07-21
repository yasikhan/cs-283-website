# CS 283 Course Website

Jekyll site for Stanford CS 283, hosted on GitHub Pages:
https://yasikhan.github.io/cs-283-website/

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

See `CLAUDE.md` for structure and conventions.
