---
name: vite-plus-build-pack
description: Choosing between `vp build` for apps and `vp pack` for libraries or executables
---

# Build and Pack

Vite+ separates app builds from library packaging.

## Use `vp build` for Applications

`vp build` runs the standard Vite production build.

```bash
vp build
vp build --watch
vp build --sourcemap
vp preview
```

Use normal Vite config for app concerns like plugins, aliases, `build`, `preview`, and environment modes.

## Use `vp pack` for Libraries and Binaries

`vp pack` uses tsdown for libraries and standalone executables.

```bash
vp pack
vp pack src/index.ts --dts
vp pack --watch
```

```ts
import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    dts: true,
    format: ['esm', 'cjs'],
    sourcemap: true,
  },
})
```

For CLIs or other distributable Node tools:

```ts
export default defineConfig({
  pack: {
    entry: ['src/cli.ts'],
    exe: true,
  },
})
```

## Decision Rule

- web app or site -> `vp build`
- publishable package -> `vp pack`
- standalone executable -> `vp pack` with `exe`

<!--
Source references:
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/build.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/pack.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/pack.md
-->
