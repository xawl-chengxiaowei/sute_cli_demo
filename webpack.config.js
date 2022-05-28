const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry: path.resolve(__dirname, "src/index.tsx"),
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11",
                                        },
                                        // 指定 corejs 的版本
                                        "corejs": "3",
                                        // 使用 corejs 的方式 "usage" 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ],
                                [
                                    "@babel/preset-typescript",
                                ],
                                [
                                    "@babel/preset-react",
                                    {

                                    }
                                ]
                            ]
                        }
                    },
                    {
                        loader:"ts-loader"
                    }
                ],
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader:"style-loader",
                    },
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                }
            },
            {
                test: /\.svg/,
                type: 'asset/inline'
            },
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html')
        }),
        new CleanWebpackPlugin({
            path: path.join(__dirname, 'build')
        })
    ]
}

