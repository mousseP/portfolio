# portfolio-kit

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Preview the Production Build

```sh
npm run build
npm run preview
```

Files in `public/projects/` are served as `projects/...`, without `public/`
in the URL. In TypeScript, prefix these paths with `import.meta.env.BASE_URL`
so they also work when GitHub Pages hosts the site under a repository path.
Keep filename capitalization exact, including `Recruits.png` and `MARCH.png`.

### Deploy

For Vercel, use `npm run build` as the build command and `dist` as the output
directory. Deploy the latest commit containing the corrected image paths.

For GitHub Pages, run:

```sh
npm run deploy
```

The `predeploy` script builds the current source before publishing `dist`.
The relative `base: './'` in `vite.config.ts` supports both Vercel and
GitHub Pages repository URLs.
