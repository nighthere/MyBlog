/**
 * Created by 永夜 on 2016/7/23.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var path = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
    entry:{
        index:['./src/index.html'],
        commons:['jquery','angular','angular-ui-router'],
    },
    output:{
        path: path.join(__dirname, './dist'),
        filename: 'js/build.js',
        chunkFilename: 'js/chunks/[name].chunks.js',
        publicPath: ''
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loader: "ng-annotate-loader"
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader", "css-loader!postcss-loader", { publicPath: "../" })
            }, {
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader?limit=10000&name=images/[name].[ext]"
            }, {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }, {
                test: /\.(json|geojson)$/,
                loader: 'json-loader'
            }, {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    resolve: {
        extension: ['', '.js']  /*自动扩展后缀名*/
    },
    postcss: [ autoprefixer(['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'ff 17', 'opera 12.1', 'ios 6', 'android 4']) ],  /*自动添加样式的前缀*/
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new CommonsChunkPlugin('commons', 'js/lib/commons.js'),  // 公共库生成到一个.js文件里面
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            favicon: './src/favicon.ico',
            hash: true,
            chunks: ['index', 'commons']
        }),
        new ExtractTextPlugin('css/[name].css', {allChunks: true}),
    ],
};