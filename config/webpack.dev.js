const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        compress: true,
        hot: false,
        inline: false,
        liveReload: false,
        port: 3000,
        host: '0.0.0.0',
        publicPath: '/',
        index: 'index.html',
    },

    module: {
        rules: [
            {
                test: /\.[js]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {},
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: 'public', to: './public' }],
        }),
    ].filter(Boolean),
})
