'use strict';

module.exports = {
    extends: '@researchgate/eslint-config-rg-node',
    parserOptions: { sourceType: 'module' },
    rules: {
        'node/no-unsupported-features': 'off',
        strict: ['error', 'never'],
    },
};
