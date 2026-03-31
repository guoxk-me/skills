---
name: vite-plus-migration
description: Migrating existing projects onto Vite+ and consolidating split tool configuration
---

# Migrating to Vite+

Use `vp migrate` when moving an existing project from separate tools onto the unified Vite+ workflow.

## Recommended Sequence

Before migration:

1. upgrade to Vite 8+ and Vitest 4.1+
2. understand existing lint, format, test, and packaging behavior

Run migration:

```bash
vp migrate
vp migrate --no-interactive
vp migrate my-app
```

After migration:

```bash
vp install
vp check
vp test
vp build
```

## What `vp migrate` Does

- updates dependencies
- rewrites imports where needed
- merges tool-specific config into `vite.config.ts`
- updates scripts to the Vite+ command surface
- can set up commit hooks, agent files, and editor files

## Manual Follow-Up Checklist

- confirm `vite` imports were rewritten to `vite-plus`
- confirm `vitest` imports were rewritten to `vite-plus/test`
- move remaining config into `test`, `lint`, `fmt`, `pack`, and `staged`
- delete obsolete `vitest.config.ts`, `tsdown.config.ts`, and lint-staged config when fully migrated

## Important Command Mapping

- `vp run <script>` -> package script execution
- `vp test` -> built-in test runner
- `vp install` / `vp add` / `vp remove` -> package manager delegation
- `vp check` -> preferred validation loop

<!--
Source references:
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/migrate.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/README.md
-->
