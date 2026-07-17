# bp-site

Personal website for Brett Pasula. Static HTML, CSS, and JavaScript — no
framework, no build step, no dependencies.

## Structure

```
index.html      Single-page site (hero, about, gallery, contact)
css/style.css   All styles; light/dark themes via CSS custom properties
js/main.js      Theme toggle + footer year (~20 lines)
assets/img/     Gallery photos (pre-optimized, ~250 KB each)
```

## Development

No tooling required. Open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8123
```

## Deployment

Deploy the repository root as-is to any static host (GitHub Pages, Netlify,
Cloudflare Pages, S3, …). There is no build step.

## Theming

Dark mode follows the OS preference by default; the header toggle overrides it
and persists the choice to `localStorage` under the key `bp-theme`. An inline
script in `<head>` applies the theme before first paint to avoid a flash.
