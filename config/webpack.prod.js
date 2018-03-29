const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const webpack = require("webpack")
const path = require("path")
const CleanWebpackPlugin = require("clean-webpack-plugin")


const config = merge(common, {
    plugins: [
        new CleanWebpackPlugin("./dist", {
            root: path.resolve(__dirname, "../")
        }),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
        // new webpack.optimize.CommonsChunkPlugin({
            // name: 'common'
        // })
    ],
    devtool: "source-map",
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "../dist")
    }
});

module.exports = config;