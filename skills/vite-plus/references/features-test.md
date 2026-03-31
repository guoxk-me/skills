---
name: vite-plus-test
description: Running Vitest through `vp test` and colocating test config in `vite.config.ts`
---

# Vite+ Testing

`vp test` runs tests with Vitest while keeping test config inside `vite.config.ts`.

## Usage

```bash
vp test
vp test watch
vp test run --coverage
```

Unlike plain Vitest, `vp test` does not stay in watch mode by default. Use `vp test watch` when you explicitly want watch mode.

## Configuration

```ts
import { defineConfig } from 'vite-plus'

export default defineConfig({
  test: {
    include: ['src/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'html'],
    },
  },
})
```

## Guidance

- Prefer the `test` block in `vite.config.ts`
- Avoid separate `vitest.config.ts` unless you have a strong upstream constraint
- Use `vp test` for the built-in test runner, not `vp run test`, unless you intentionally need the package script

<!--
Source references:
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/test.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/test.md
-->
