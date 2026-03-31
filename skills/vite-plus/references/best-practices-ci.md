---
name: vite-plus-ci
description: Recommended CI setup for Vite+ using `voidzero-dev/setup-vp`
---

# Vite+ CI Setup

For GitHub Actions, prefer `voidzero-dev/setup-vp` instead of assembling separate Node, package-manager, and cache steps yourself.

## Recommended Workflow

```yaml
- uses: actions/checkout@v4

- uses: voidzero-dev/setup-vp@v1
  with:
    node-version: '22'
    cache: true

- run: vp install
- run: vp check
- run: vp test
- run: vp build
```

## Why Prefer `setup-vp`

- installs Vite+
- sets up the required Node.js version
- configures package manager access
- handles dependency caching when `cache: true`

## Migration Pattern

When converting an existing Actions workflow, you can often replace:

- `actions/setup-node`
- `pnpm/action-setup` or similar
- manual dependency cache steps

with a single `setup-vp` step.

## Library Projects

For libraries, replace the last step with `vp pack` if packaging is the main output:

```yaml
- run: vp install
- run: vp check
- run: vp test
- run: vp pack
```

<!--
Source references:
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/ci.md
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/README.md
-->
