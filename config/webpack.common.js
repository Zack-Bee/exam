const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
    entry: {
        app: "./src/index.jsx",
    },
    plugins: [
        new CleanWebpackPlugin("./dist", {
            root: path.resolve(__dirname, "../")
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/html/index.html")
        }),
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: [
                "babel-loader"
            ],
            include: path.resolve(__dirname, "../src")
        }
        ]
    }
}

module.exports = config;