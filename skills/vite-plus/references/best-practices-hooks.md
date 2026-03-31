---
name: vite-plus-commit-hooks
description: Using `vp config` and `vp staged` for commit hooks and staged-file checks
---

# Vite+ Commit Hooks

Vite+ can manage commit hooks and staged-file checks without separate lint-staged configuration.

## Core Commands

```bash
vp config
vp config --hooks-dir .vite-hooks

vp staged
vp staged --verbose
vp staged --fail-on-changes
```

## Recommended Config

```ts
import { defineConfig } from 'vite-plus'

export default defineConfig({
  staged: {
    '*.{js,ts,tsx,vue,svelte}': 'vp check --fix',
  },
})
```

## Guidance

- keep staged-file rules in `vite.config.ts`
- prefer `vp staged` over separate `lint-staged` config in migrated projects
- use `vp config` when you want Vite+ to own hook setup for the repo

## Migration Note

If `vp migrate` or `vp create` offers hook setup, accepting it is usually the shortest path to a consistent staged-file workflow.

<!--
Source references:
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/commit-hooks.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/staged.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/migrate.md
-->
