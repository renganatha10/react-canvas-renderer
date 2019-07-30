module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-var': 2,
    'prefer-destructuring': 2,
    'prefer-spread': 2,
    'no-useless-constructor': 2,
  },
};
