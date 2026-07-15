# Pooja Puttaswamy — Portfolio

A personal portfolio site built with Next.js and Tailwind CSS. It introduces
Pooja, showcases selected projects and photography, and provides a way to get
in touch — with support for switchable color themes and bilingual (English /
German) content.

**Live site:** https://pputtaswamy07.github.io

## Features

- **Single source of content** — all copy, links, images, and project/photo
  data live in [`lib/siteData.js`](lib/siteData.js), so the site can be
  re-purposed without touching component code.
- **5 switchable themes** — Rose Quartz, Midnight Ocean, Forest Moss, Sunset
  Ember, and Slate Mono, chosen from the navbar and persisted in
  `localStorage`.
- **English / German** — a language switcher in the navbar translates the
  page copy on the fly, with German strings kept in
  [`lib/translations.js`](lib/translations.js).
- **Static export** — the whole site is prerendered to static HTML/CSS/JS at
  build time, so it can be hosted anywhere, including GitHub Pages.

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com) v4
- [react-icons](https://react-icons.github.io/react-icons/)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

Other scripts:

```bash
npm run build   # static export to ./out
npm run start   # serve the production build
npm run lint    # eslint
```

## Project structure

```
app/                   Root layout, global styles, page entry
components/             Section components (Hero, About, Projects, Photography, Footer, Navbar) + theme/language switchers
context/                Theme and language React context providers
lib/siteData.js         Content: profile, projects, photography, links
lib/translations.js     German copy overrides
public/images/           Project and photography images
```

## Deployment

The site deploys automatically to **GitHub Pages** on every push to `main`
via the workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It builds
the Next.js static export (`next build` with `output: "export"`) and
publishes the `out/` directory using GitHub's official Pages actions.

## Credits

Built by Pooja Puttaswamy, with implementation assistance from
[Claude Code](https://claude.com/claude-code).
