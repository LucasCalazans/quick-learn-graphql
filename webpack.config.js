const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, args) => {
    const isDev = args.mode === 'development';

    return {
        resolve: {
            extensions: ['.js', '.jsx'],
            alias: {
                '@': path.resolve(__dirname, 'src/'),
            },
        },
        entry: ['@babel/polyfill', './src/index.jsx'],
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /pt-br/),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                inject: 'head',
                template: path.join(__dirname, 'src/index.html'),
            }),
            new ScriptExtHtmlWebpackPlugin({
                defaultAttribute: 'async',
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    MODE: JSON.stringify(args.mode),
                },
            }),
            new CleanWebpackPlugin(),
            new CopyPlugin(['./public']),
        ],
        devtool: isDev ? 'inline-source-map' : 'none',
        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.(jpe?g|ico|png|gif|svg)$/i,
                    loader: 'file-loader?name=img/[name].[ext]',
                },
                {
                    test: /\.(otf|ttf)$/i,
                    loader: 'file-loader?name=fonts/[name].[ext]',
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: { minimize: true },
                        },
                    ],
                },
                {
                    test: /\.(graphql|gql)$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },
            ],
        },
        devServer: {
            historyApiFallback: true,
            watchContentBase: true,
            hot: true,
            stats: 'errors-only',
        },
        output: {
            publicPath: '/',
            path: path.join(__dirname, 'dist'),
            filename: '[name].[hash].js',
        },
    };
};
