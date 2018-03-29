const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const path = require("path")

const config = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        open: true,
        host: "0.0.0.0"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist")
    }
});

module.exports = config;