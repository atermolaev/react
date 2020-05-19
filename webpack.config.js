var path = require('path');

module.exports = {
    entry: './app/index.jsx',
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
                test: /\.m?(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            },
        ]
    }
}