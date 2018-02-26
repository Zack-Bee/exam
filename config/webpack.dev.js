const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

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
    },
    module: {
        rules: [{
            test: /\.css/,
            use: [
                "style-loader",
                "css-loader"
            ],
            include: path.resolve(__dirname, "../src/css")
        }]
    }
});

module.exports = config;