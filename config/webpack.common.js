const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const config = {
    entry: {
        app: "./src/index.jsx",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/html/index.html")
        })
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [
                "babel-loader"
            ],
            include: path.resolve(__dirname, "../src")
        },
        {
            test: /\.css/,
            use: [
                "style-loader",
                "css-loader"
            ],
            include: path.resolve(__dirname, "../src/css")
        }]
    }
}

module.exports = config;