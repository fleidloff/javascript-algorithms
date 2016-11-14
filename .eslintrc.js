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
    strict: "error",
    quotes: ["error", "double", { "avoidEscape": true }],
    "no-console": "off",
    "no-confusing-arrow": "off",
    "arrow-parens": ["error", "always"],
    "no-use-before-define": "off",
    "no-nested-ternary": "off",
    "comma-dangle": ["error", "never"]
  }
}
