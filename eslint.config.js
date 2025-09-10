import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import pluginQuasar from '@quasar/app-vite/eslint'
import tseslint from 'typescript-eslint'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import vueParser from 'vue-eslint-parser'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import prettierSkipFormatting from '@vue/eslint-config-prettier/skip-formatting'

const __dirname = dirname(fileURLToPath(import.meta.url))
const TSC_ROOT = resolve(__dirname)

export default [
  ...pluginQuasar.configs.recommended(),
  js.configs.recommended,

  ...pluginVue.configs['flat/essential'],

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: TSC_ROOT,
        extraFileExtensions: ['.vue'],
      },
    },
  },

  ...tseslint.configs.recommendedTypeChecked.map((cfg) => ({
    ...cfg,
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ...(cfg.languageOptions ?? {}),
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: TSC_ROOT,
      },
    },
  })),

  {
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        process: 'readonly',
        ga: 'readonly',
        cordova: 'readonly',
        Capacitor: 'readonly',
        chrome: 'readonly',
        browser: 'readonly',
      },
    },
    rules: {
      'prefer-promise-reject-errors': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  },

  {
    files: ['src-pwa/custom-service-worker.ts'],
    languageOptions: { globals: { ...globals.serviceworker } },
  },

  prettierSkipFormatting,
]
