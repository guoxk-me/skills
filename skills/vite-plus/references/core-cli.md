---
name: vite-plus-cli
description: Essential Vite+ commands for setup, development, validation, task running, packaging, and dependency management
---

# Vite+ CLI Commands

Vite+ exposes a unified `vp` CLI that replaces a split workflow across Node version managers, package managers, Vite, Vitest, lint tools, and monorepo task runners.

## High-Value Commands

```bash
# Scaffold or migrate projects
vp create
vp migrate

# Dependencies and runtime
vp install
vp add vue
vp remove eslint
vp env pin lts

# Core development loop
vp dev
vp check
vp test
vp build

# Advanced workflows
vp run build
vp pack
vp staged
vp cache clean
```

## Built-In Command vs Script Command

Prefer built-in commands when they exist:

```bash
vp build       # Vite production build
vp test        # Built-in Vitest command
vp check       # Format + lint + type checks
```

Use `vp run` when you want a `package.json` script or a Vite Task definition:

```bash
vp run build
vp run test -- --reporter verbose
vp run @my/app#build
```

- `vp build` is not the same as `vp run build`
- `vp test` is not the same as `vp run test`
- `vp run` is the closest equivalent to `pnpm run`

## Dependency Management

Vite+ wraps the package manager declared by `packageManager` and detected lockfiles.

```bash
vp install
vp add -D typescript
vp update
vp outdated
vp list
vp why vite
vp pm publish --tag next
```

Use `vp pm ...` to forward a raw command to the underlying package manager when you need something outside the Vite+ surface.

## Typical Agent Workflow

```bash
vp install
vp check
vp test
vp build
```

For library repos:

```bash
vp install
vp check
vp test
vp pack
```

<!--
Source references:
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/README.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/index.md
-->
