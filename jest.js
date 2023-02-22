'use strict';

module.exports = {
  plugins: ['import'],
  extends: ['@fluxys/eslint-config/typescript', 'plugin:jest/recommended'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-internal-modules': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'jest/unbound-method': 'error',
    'jest/consistent-test-it': 'error',
    'jest/prefer-spy-on': 'error',
  },
};
