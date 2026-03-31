---
name: vite-plus-env
description: Managing Node.js versions and runtime shims with `vp env`
---

# Vite+ Runtime Management

`vp env` manages Node.js versions globally and per project. Managed mode is on by default, so Vite+ shims resolve the right runtime for the current project.

## Common Commands

```bash
# Setup shims
vp env setup
vp env print

# Managed mode
vp env on
vp env off

# Project pinning
vp env pin lts
vp env unpin
vp env install

# Global or session selection
vp env default lts
vp env use 20
vp env use --unset

# Inspection
vp env current
vp env doctor
vp env which node
vp env list
vp env list-remote --lts
```

## Recommended Project Workflow

- Pin the expected Node.js version with `.node-version`
- Run `vp install`, `vp dev`, `vp test`, and `vp build` normally
- Let Vite+ resolve the correct runtime from the project context

## Managed vs System-First

- `vp env on`: always prefer Vite+-managed Node.js
- `vp env off`: prefer system Node.js first, then fall back to managed runtime

## Useful for Agents

When a repo depends on a specific Node version, use:

```bash
vp env install
vp env current
```

This is safer than assuming the system Node version is correct.

<!--
Source references:
- https://github.com/voidzero-dev/vite-plus/blob/bf39b756ae038af3d34bbceeedc9ecf60afdd9a8/docs/guide/env.md
-->
