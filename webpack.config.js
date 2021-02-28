var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        polyfill: 'babel-polyfill',
        app: './app/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
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
                    use: ["css-loader", "stylus-loader"]
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({filename: "styles.css"}),
    ]
}