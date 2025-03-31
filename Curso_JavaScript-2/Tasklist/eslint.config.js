import { defineConfig } from 'eslint';

export default defineConfig({
  languageOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
});
