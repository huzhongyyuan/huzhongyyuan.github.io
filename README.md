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
- `script.js`: accessible topic filters; all publications remain visible without JavaScript
- `assets/portrait.webp`: optimized profile portrait
- `assets/logos/`: institution and company logos
- `assets/teasers/*.webp`: optimized publication previews
- `hzy.jpg` and original JPG/PNG teasers: retained source images

## Content updates

Keep publication author lists, equal-contribution markers, venues, and resource links accurate. The homepage intentionally does not host a downloadable résumé. Update the footer date after content changes.

## Deployment

GitHub Pages serves the root of `main`. Preview changes at desktop and mobile widths, check links and images, then commit and push to `main`.

## Design reference

The design is inspired by https://yisuanwang.github.io/: a rounded profile and biography panel, system typography, blue links, a light-gray publication section, white paper cards, topic chips, and education/experience below. The implementation is original and uses Zhongyuan Hu’s own biography and publication metadata. Topic filters are sized for this publication collection.

Logo sources: Tsinghua University mark from the reference homepage; Chongqing University mark from https://www.cqu.edu.cn/images/logo1.png; Tencent Games mark from https://game.gtimg.cn/images/game/web201910/images/logo.png.

SignGPT overview image: https://signgpt-demo.github.io/sign-language-interaction-demo/signgpt-overview.png (optimized WebP); publication metadata and equal-contribution markers verified against arXiv:2609.21709v1.
