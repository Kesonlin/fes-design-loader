const path = require('path')

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        path: path.resolve(__dirname, './dist'),
        libraryTarget: 'umd',
        library: 'fes-design-loader'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: '/node_modules'
            }
        ],
    },
    resolve: {
        extensions: ['.ts']
    }
}