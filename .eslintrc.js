module.exports = {
    root: true,
    env: {
        'browser': true,
        'amd': true,
        'node': true
    },
    extends: [
        'eslint:recommended',
    ],
    rules: {
        'quotes': ['error', 'single'],
        'no-extra-semi': 2
    },
   
}