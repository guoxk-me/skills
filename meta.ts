export interface VendorSkillMeta {
  official?: boolean
  source: string
  skills: Record<string, string> // sourceSkillName -> outputSkillName
}

/**
 * Repositories to clone as submodules and generate skills from source
 */
export const submodules = {
  vue: 'https://github.com/vuejs/docs',
  nuxt: 'https://github.com/nuxt/nuxt',
  vite: 'https://github.com/vitejs/vite',
  unocss: 'https://github.com/unocss/unocss',
  pnpm: 'https://github.com/pnpm/pnpm.io',
  pinia: 'https://github.com/vuejs/pinia',
  vitest: 'https://github.com/vitest-dev/vitest',
  vitepress: 'https://github.com/vuejs/vitepress',
  nitro: 'https://github.com/nitrojs/nitro',
}

/**
 * Already generated skills, sync with their `skills/` directory
 */
export const vendors: Record<string, VendorSkillMeta> = {
  'slidev': {
    official: true,
    source: 'https://github.com/slidevjs/slidev',
    skills: {
      slidev: 'slidev',
    },
  },
  'vueuse': {
    official: true,
    source: 'https://github.com/vueuse/skills',
    skills: {
      'vueuse-functions': 'vueuse-functions',
    },
  },
  'tsdown': {
    official: true,
    source: 'https://github.com/rolldown/tsdown',
    skills: {
      tsdown: 'tsdown',
    },
  },
  'vuejs-ai': {
    source: 'https://github.com/vuejs-ai/skills',
    skills: {
      'vue-best-practices': 'vue-best-practices',
      'vue-router-best-practices': 'vue-router-best-practices',
      'vue-testing-best-practices': 'vue-testing-best-practices',
    },
  },
  'turborepo': {
    official: true,
    source: 'https://github.com/vercel/turborepo',
    skills: {
      turborepo: 'turborepo',
    },
  },
  'vercel-labs': {
    official: true,
    source: 'https://github.com/vercel-labs/agent-skills',
    skills: {
      'composition-patterns': 'vercel-composition-patterns',
      'deploy-to-vercel': 'deploy-to-vercel',
      'react-best-practices': 'vercel-react-best-practices',
      'react-native-skills': 'vercel-react-native-skills',
      'web-design-guidelines': 'web-design-guidelines',
    },
  },
  'anthropics': {
    official: true,
    source: 'https://github.com/anthropics/skills',
    skills: {
      'algorithmic-art': 'algorithmic-art',
      'brand-guidelines': 'brand-guidelines',
      'canvas-design': 'canvas-design',
      'claude-api': 'claude-api',
      'doc-coauthoring': 'doc-coauthoring',
      'docx': 'docx',
      'frontend-design': 'frontend-design',
      'internal-comms': 'internal-comms',
      'mcp-builder': 'mcp-builder',
      'pdf': 'pdf',
      'pptx': 'pptx',
      'skill-creator': 'skill-creator',
      'slack-gif-creator': 'slack-gif-creator',
      'theme-factory': 'theme-factory',
      'web-artifacts-builder': 'web-artifacts-builder',
      'webapp-testing': 'webapp-testing',
      'xlsx': 'xlsx',
    },
  },
  'agent-browser': {
    official: true,
    source: 'https://github.com/vercel-labs/agent-browser',
    skills: {
      'agent-browser': 'agent-browser',
      'dogfood': 'dogfood',
      'electron': 'electron',
      'slack': 'slack',
      'vercel-sandbox': 'vercel-sandbox',
    },
  },
  'ui-ux-pro-max': {
    source: 'https://github.com/nextlevelbuilder/ui-ux-pro-max-skill',
    skills: {
      'ui-ux-pro-max': 'ui-ux-pro-max',
    },
  },
  'superpowers': {
    source: 'https://github.com/obra/superpowers',
    skills: {
      'brainstorming': 'brainstorming',
      'dispatching-parallel-agents': 'dispatching-parallel-agents',
      'executing-plans': 'executing-plans',
      'finishing-a-development-branch': 'finishing-a-development-branch',
      'receiving-code-review': 'receiving-code-review',
      'requesting-code-review': 'requesting-code-review',
      'subagent-driven-development': 'subagent-driven-development',
      'systematic-debugging': 'systematic-debugging',
      'test-driven-development': 'test-driven-development',
      'using-git-worktrees': 'using-git-worktrees',
      'using-superpowers': 'using-superpowers',
      'verification-before-completion': 'verification-before-completion',
      'writing-plans': 'writing-plans',
      'writing-skills': 'writing-skills',
    },
  },
  'marketingskills': {
    source: 'https://github.com/coreyhaines31/marketingskills',
    skills: {
      'seo-audit': 'seo-audit',
      'copywriting': 'copywriting',
    },
  },
  'ai-image-generation': {
    source: 'https://github.com/inference-sh/skills',
    skills: {
      'ai-image-generation': 'ai-image-generation',
    },
  },
  'squirrelscan': {
    source: 'https://github.com/squirrelscan/skills',
    skills: {
      'audit-website': 'audit-website',
    },
  },
}

/**
 * Hand-written skills with Anthony Fu's preferences/tastes/recommendations
 */
export const manual = [
  'antfu',
]
