---
name: vite-plus-config
description: Consolidating Vite+, Vitest, lint, format, task runner, pack, and staged-file config in `vite.config.ts`
---

# Vite+ Configuration

Vite+ keeps project workflow config in a single `vite.config.ts`. Reuse normal Vite fields and extend them with Vite+-specific blocks.

## Base Structure

```ts
import { defineConfig } from 'vite-plus'

export default defineConfig({
  server: {},
  build: {},
  preview: {},

  test: {},
  lint: {},
  fmt: {},
  run: {},
  pack: {},
  staged: {},
})
```

## Recommended Starter Config

```ts
import { defineConfig } from 'vite-plus'

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
  },
  lint: {
    ignorePatterns: ['dist/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    ignorePatterns: ['dist/**'],
    singleQuote: true,
    semi: true,
  },
  run: {
    cache: {
      scripts: false,
      tasks: true,
    },
    tasks: {
      build: {
        command: 'vp build',
        env: ['NODE_ENV'],
      },
    },
  },
  pack: {
    dts: true,
    format: ['esm', 'cjs'],
  },
  staged: {
    '*.{js,ts,tsx,vue,svelte}': 'vp check --fix',
  },
})
```

## Guidance

- Keep Vite app configuration in normal Vite fields like `server`, `build`, and `plugins`
- Put Vitest settings in `test` instead of `vitest.config.ts`
- Put Oxlint settings in `lint` and Oxfmt settings in `fmt`
- Put tsdown settings in `pack` instead of `tsdown.config.ts`
- Put staged file rules in `staged` instead of separate `lint-staged` config

## Agent Rules of Thumb

- Prefer editing `vite.config.ts` first when changing project workflow behavior
- Keep config centralized unless upstream docs require otherwise
- When migrating existing projects, merge scattered tool config into the corresponding Vite+ block

<!--
Source references:
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/README.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/index.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/lint.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/fmt.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/test.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/pack.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/staged.md
-->
