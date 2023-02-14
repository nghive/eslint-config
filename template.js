'use strict';

module.exports = {
  extends: ['plugin:@angular-eslint/template/recommended'],
  rules: {
    '@angular-eslint/template/accessibility-alt-text': 'error',
    '@angular-eslint/template/accessibility-label-has-associated-control': [
      'error',
      {
        labelComponents: [
          {
            inputs: ['label'],
            selector: 'flx-form-field-wrapper',
          },
        ],
      },
    ],
    '@angular-eslint/template/accessibility-table-scope': 'error',
    '@angular-eslint/template/accessibility-valid-aria': 'error',
    '@angular-eslint/template/conditional-complexity': 'error',
    '@angular-eslint/template/eqeqeq': [
      'error',
      {
        allowNullOrUndefined: true,
      },
    ],
    '@angular-eslint/template/no-any': 'error',
    '@angular-eslint/template/no-autofocus': 'error',
    '@angular-eslint/template/no-distracting-elements': 'error',
    '@angular-eslint/template/no-duplicate-attributes': 'error',
    '@angular-eslint/template/no-positive-tabindex': 'error',
  },
};
