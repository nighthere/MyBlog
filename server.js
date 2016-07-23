/**
 * Created by wukangning on 16/6/12.
 */
var config = require("./webpack.config.js"),
    webpack = require("webpack"),
    WebpackDevServer = require("webpack-dev-server");

config.entry.index.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
    // webpack-dev-server options
    hot: false,
    // Enable special support for Hot Module Replacement
    // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
    // Use "webpack/hot/dev-server" as additional module in your entry point
    // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

    // Set this as true if you want to access dev server from arbitrary url.
    // This is handy if you are using a html5 router.
    historyApiFallback: true,

    // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
    // Use "*" to proxy all paths to the specified server.
    // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
    // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
    proxy: {
        "*": "http://localhost:9090"
    },

    // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
    staticOptions: {
    },

    publicPath: config.output.publicPath,
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true }
});
server.listen(8080, "localhost", function() {
    console.log('http://localhost:8080');
});
