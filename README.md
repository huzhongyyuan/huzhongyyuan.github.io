# Zhongyuan Hu — Academic Homepage

A responsive, static academic homepage for GitHub Pages. No build step, external fonts, tracking, or JavaScript dependencies.

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://127.0.0.1:8000/`.

## Main files

- `index.html`: biography, research interests, news, publications, and background
- `styles.css`: responsive layout, keyboard focus styles, and print styles
- `assets/portrait.webp`: optimized profile portrait
- `assets/teasers/*.webp`: optimized publication previews
- `hzy.jpg` and original JPG/PNG teasers: retained source images

## Content updates

Keep publication author lists, equal-contribution markers, venues, and resource links accurate. The homepage intentionally does not host a downloadable résumé. Update the footer date after content changes.

## Deployment

GitHub Pages serves the root of `main`. Preview changes at desktop and mobile widths, check links and images, then commit and push to `main`.
