const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const path = require("path");


const config = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ],
    devtool: "source-map",
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "../dist")
    }
});

module.exports = config;