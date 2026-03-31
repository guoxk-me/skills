---
name: vite-plus
description: Unified web toolchain that combines runtime management, package management, dev, check, test, build, pack, and monorepo task execution behind the `vp` CLI. Use when adopting Vite+, configuring `vite.config.ts`, or running multi-package workflows.
metadata:
  author: Anthony Fu
  version: "2026.3.31"
  source: Generated from https://github.com/voidzero-dev/vite-plus, scripts located at https://github.com/antfu/skills
---

Vite+ is a unified entry point for local web development. It keeps runtime management, package manager delegation, Vite app development, Vitest testing, Oxlint/Oxfmt checks, tsdown packaging, and Vite Task execution behind one `vp` command surface and one `vite.config.ts` file.

**Important:** Prefer the built-in `vp` commands when the workflow maps to Vite+ directly. Use `vp run <script>` only when you intentionally want to execute a `package.json` script rather than the built-in Vite+ command with the same name.

> The skill is based on Vite+ docs at commit `bf39b756ae038af3d34bbceeedc9ecf60afdd9a8`, generated at 2026-03-31.

## Core

| Topic | Description | Reference |
|-------|-------------|-----------|
| CLI Commands | `vp` command surface for create, install, dev, check, test, build, pack, run, and dependency management | [core-cli](references/core-cli.md) |
| Configuration | Single-file `vite.config.ts` setup for Vite, test, lint, fmt, run, pack, and staged rules | [core-config](references/core-config.md) |

## Features

| Topic | Description | Reference |
|-------|-------------|-----------|
| Task Runner | `vp run`, workspace selection, dependencies, caching defaults, and compound commands | [features-run](references/features-run.md) |
| Task Caching | Automatic file tracking, env fingerprints, cache controls, and cache cleanup | [features-cache](references/features-cache.md) |
| Runtime Management | `vp env` for Node.js pinning, managed mode, and runtime diagnostics | [features-env](references/features-env.md) |
| Static Checks | `vp check` as the default validation loop with shared lint and format config | [features-check](references/features-check.md) |
| Testing | `vp test` with Vitest config colocated in `vite.config.ts` | [features-test](references/features-test.md) |
| Build and Pack | When to use `vp build` for apps vs `vp pack` for libraries and binaries | [build-pack](references/build-pack.md) |

## Best Practices

| Topic | Description | Reference |
|-------|-------------|-----------|
| Migration | Moving existing projects onto Vite+, config consolidation, and command mapping | [best-practices-migration](references/best-practices-migration.md) |
| CI | Recommended GitHub Actions setup with `voidzero-dev/setup-vp` | [best-practices-ci](references/best-practices-ci.md) |
| Commit Hooks | `vp config`, `vp staged`, and keeping staged-file rules in `vite.config.ts` | [best-practices-hooks](references/best-practices-hooks.md) |
