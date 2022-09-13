module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:promise/recommended',
    'prettier',
  ],
  plugins: ['node', 'jest', 'promise', 'import'],
  parserOptions: {
    ecmaVersion: 'es2021',
    sourceType: 'module',
  },
  env: {
    es2021: true,
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        '@typescript-eslint/consistent-type-assertions': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-array-constructor': 'warn',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_+', varsIgnorePattern: '^_+' }],
        '@typescript-eslint/no-use-before-define': ['error', { typedefs: false, enums: false }],
        '@typescript-eslint/prefer-optional-chain': 'warn',
      },
    },
    {
      files: ['**/test/**/*'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
  rules: {
    'func-names': ['warn', 'as-needed'],
    'no-console': 'warn',
    'no-duplicate-imports': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'warn',
    'no-lonely-if': 'warn',
    'no-loop-func': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-param-reassign': 'error',
    'no-process-exit': 'off',
    'no-return-await': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'warn',
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-concat': 'warn',
    'no-var': 'warn',
    'node/exports-style': 'error',
    'node/no-unpublished-import': 'off',
    'node/no-missing-import': 'off',
    'node/no-unsupported-features/es-syntax': [
      'warn',
      {
        ignores: ['modules'],
      },
    ],
    'import/no-restricted-paths': ['error', { zones: [{ target: './src', from: './test' }] }],
    'import/no-absolute-path': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/test/**/*', '**/webpack.*.js'],
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          ['sibling', 'parent'],
        ],
        'newlines-between': 'always-and-inside-groups',
      },
    ],
    'import/newline-after-import': 'warn',
  },
};
