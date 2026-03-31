---
name: vite-plus-cache
description: Task caching behavior, automatic file tracking, env fingerprints, and cache invalidation for `vp run`
---

# Vite+ Task Caching

Vite Task caches successful command output for `vp run` and replays it when inputs still match.

## What Affects Cache Hits

Vite+ checks:

1. command arguments
2. tracked environment variables
3. files and directories read during execution

If nothing changes, the cached output is replayed instead of rerunning the command.

## Cache Controls

```ts
export default defineConfig({
  run: {
    cache: {
      scripts: false,
      tasks: true,
    },
    tasks: {
      build: {
        command: 'vp build',
        cache: true,
        env: ['NODE_ENV'],
        input: [{ auto: true }, '!**/*.tsbuildinfo', '!dist/**'],
      },
      dev: {
        command: 'vp dev',
        cache: false,
      },
    },
  },
})
```

## Key Rules

- `cache: false` on a task cannot be overridden
- `--cache` enables caching for tasks and scripts for that invocation
- `--no-cache` disables caching for everything
- by default, configured tasks are cached and scripts are not

## Input Tracking Guidance

Automatic tracking is usually enough, but narrow it when noisy files cause misses:

```ts
tasks: {
  build: {
    command: 'tsc',
    input: [{ auto: true }, '!**/*.tsbuildinfo'],
  },
}
```

Use explicit `input` patterns when the auto-discovered set is too broad.

## Environment Variables

- `env`: visible to the task and included in the cache fingerprint
- `untrackedEnv`: visible to the task but ignored by cache invalidation

```ts
tasks: {
  build: {
    command: 'vp build',
    env: ['NODE_ENV'],
    untrackedEnv: ['CI', 'GITHUB_ACTIONS'],
  },
}
```

## Cache Maintenance

```bash
vp cache clean
```

The cache lives in `node_modules/.vite/task-cache`.

<!--
Source references:
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/cache.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/config/run.md
-->
