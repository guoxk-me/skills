---
name: vite-plus-run
description: Running workspace scripts and tasks with dependency ordering, caching, filters, and compound commands
---

# Vite+ Task Runner

`vp run` executes `package.json` scripts and tasks defined in `vite.config.ts`. It behaves like a workspace-aware `pnpm run`, but adds caching, dependency ordering, and task targeting.

## Core Patterns

```bash
# Current package
vp run build

# Specific package
vp run @my/app#build

# Entire workspace in dependency order
vp run -r build

# Target one package and its dependencies
vp run -t @my/app#build

# Filter packages like pnpm
vp run --filter "@my/*" build
vp run --filter "@my/app..." build
vp run --filter "...@my/core" test
```

## Defining Tasks

```ts
import { defineConfig } from 'vite-plus'

export default defineConfig({
  run: {
    tasks: {
      build: {
        command: 'vp build',
        dependsOn: ['lint'],
        env: ['NODE_ENV'],
      },
      deploy: {
        command: 'deploy-script --prod',
        cache: false,
        dependsOn: ['build', 'test'],
      },
    },
  },
})
```

## Important Behavior

- Tasks defined in `vite.config.ts` are cached by default
- Plain `package.json` scripts are not cached by default
- A name cannot exist in both `run.tasks` and `package.json` scripts
- `dependsOn` can target workspace tasks with `package#task`

## Compound Commands

Commands joined by `&&` are split into independently cached sub-tasks.

```json
{
  "scripts": {
    "check": "vp lint && vp build"
  }
}
```

This lets `vp run --cache check` reuse cached steps separately.

## Concurrency Controls

```bash
vp run -r --concurrency-limit 8 build
vp run -r --parallel dev
vp run -r --parallel --concurrency-limit 4 dev
```

Use `--parallel` only when you intentionally want to ignore dependency ordering.

<!--
Source references:
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/run.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/run.md
-->
