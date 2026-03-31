---
name: vite-plus-check
description: Using `vp check` as the main validation loop for format, lint, and type checks
---

# Vite+ Static Checks

`vp check` is the default fast validation command in Vite+. It combines formatting, linting, and type checks into a single pass.

## Usage

```bash
vp check
vp check --fix
```

## Why Prefer It

- faster than running formatter, linter, and type checker separately
- reuses shared config from `vite.config.ts`
- works well as the default local verification command and staged-file action

## Recommended Config

```ts
import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    singleQuote: true,
    semi: true,
  },
})
```

Enable both `typeAware` and `typeCheck` so `vp check` becomes the single command for static validation.

## Typical Loop

```bash
vp check --fix
vp test
vp build
```

<!--
Source references:
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/check.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/lint.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/fmt.md
-->
