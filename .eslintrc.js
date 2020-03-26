module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    camelcase: 'warn',
    'no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^__', varsIgnorePattern: '^__' },
    ],
    'no-case-declarations': 'warn',
    'no-undef': 'off',
    'no-useless-escape': 'warn',
    'no-redeclare': 'warn',
    'no-prototype-builtins': 'warn',
    'no-empty': 'warn',
    'no-constant-condition': 'warn',
    'no-func-assign': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^__', varsIgnorePattern: '^__' },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        arrowParens: 'always',
        bracketSpacing: true,
        printWidth: 80,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'lf',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
