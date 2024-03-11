module.exports = {
    root: true,
    env: {
        'browser': true,
        'amd': true,
        'node': true,
        'es6': true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
        sourceType: 'module'
    },
    rules: {
        'quotes': ['error', 'single'],
        'no-extra-semi': 2
    },
    plugins: [
        '@typescript-eslint'
    ]
   
}