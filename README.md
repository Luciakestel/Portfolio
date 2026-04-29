# Portfolio — Lucía Kestel

Mi web personal. Sitio estático construido con Gulp, SCSS y HTML partials.

## Stack

- **Gulp 4** — task runner
- **Sass (dart-sass)** — estilos
- **gulp-html-tag-include** — includes para HTML
- **Browser-sync** — dev server con live reload

## Desarrollo

```bash
npm install
npm start
```

Abre `http://localhost:3000`.

## Build de producción

```bash
npm run docs
```

Genera el sitio en `docs/`, que es lo que sirve GitHub Pages.

## Deploy

```bash
npm run deploy
```

Hace el build y empuja `docs/` a `main`.
