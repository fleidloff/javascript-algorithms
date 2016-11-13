module.exports = {
extends: [
    './eslint-rules/best-practices',
    './eslint-rules/errors',
    './eslint-rules/node',
    './eslint-rules/style',
    './eslint-rules/variables',
    './eslint-rules/es6',
    './eslint-rules/imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  }
}
