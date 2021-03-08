var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: {
        app: './app/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets: ["@babel/preset-env", "@babel/preset-react",{
                        'plugins': ['@babel/plugin-proposal-class-properties']}]   // используемые плагины
                }
            },
            {
                test: /\.(css|styl)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options:{
                                sourceMap: true,
                                importLoaders: 2,
                                modules: {
                                    localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                }
                            }
                        },
                        "stylus-loader"
                    ]
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: "styles.css"}),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}