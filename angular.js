'use strict';

module.exports = {
  extends: [
    '@fluxys/eslint-config/typescript',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
  ],
  rules: {
    '@angular-eslint/component-max-inline-declarations': 'error',
    '@angular-eslint/contextual-decorator': 'error',
    '@angular-eslint/no-attribute-decorator': 'error',
    '@angular-eslint/no-forward-ref': 'error',
    '@angular-eslint/no-input-prefix': 'error',
    '@angular-eslint/no-lifecycle-call': 'error',
    '@angular-eslint/no-pipe-impure': 'error',
    '@angular-eslint/no-queries-metadata-property': 'error',
    '@angular-eslint/prefer-output-readonly': 'error',
    '@angular-eslint/relative-url-prefix': 'error',
    '@angular-eslint/sort-ngmodule-metadata-arrays': 'error',
    '@angular-eslint/use-component-selector': 'error',
    '@angular-eslint/use-component-view-encapsulation': 'error',
  },
};
