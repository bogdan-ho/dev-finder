module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:functional/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'functional',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'no-console': 0,
    'react/react-in-jsx-scope': 0,
    'functional/no-conditional-statement': 0,
    'functional/no-expression-statement': 0,
    'functional/immutable-data': 0,
    'functional/functional-parameters': 0,
    'functional/no-try-statement': 0,
    'functional/no-throw-statement': 0,
    'no-underscore-dangle': [2, { "allow": ["__filename", "__dirname"] }],
    'react/function-component-definition': [2, { "namedComponents": "arrow-function" }],
    'testing-library/no-debug': 0,
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx"] }],
  },
};
