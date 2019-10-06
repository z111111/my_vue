// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'
// 本地环境是否需要使用cdn
const devNeedCdn = true
// cdn链接
const cdn = {
    // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
    externals: {
        vue: 'Vue',
        vuex: 'Vuex',
        'vue-router': 'VueRouter'
    },
    // cdn的css链接
    css: [],
    // cdn的js链接
    js: [
        'https://cdn.staticfile.org/vue/2.6.10/vue.min.js',
        'https://cdn.staticfile.org/vuex/3.0.1/vuex.min.js',
        'https://cdn.staticfile.org/vue-router/3.0.3/vue-router.min.js'
    ]
}

const CompressionWebpackPlugin = require('compression-webpack-plugin')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    productionSourceMap: true,
    chainWebpack: config => {
        // ============压缩图片 start============
        config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({bypassOnDebug: true})
            .end()
        // ============压缩图片 end============
        // ============注入cdn start============
        config.plugin('html').tap(args => {
            // 生产环境或本地需要cdn时，才注入cdn
            if (isProduction || devNeedCdn) args[0].cdn = cdn
            return args
        })
        // ============注入cdn start============
    },
    configureWebpack: config => {
        // 用cdn方式引入，则构建时要忽略相关资源
        if (isProduction || devNeedCdn) config.externals = cdn.externals

        // 生产环境相关配置
        if (isProduction) {
            // 代码压缩
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        //生产环境自动删除console
                        compress: {
                            // warnings: false, // 若打包错误，则注释这行
                            drop_debugger: true,
                            drop_console: true,
                            pure_funcs: ['console.log']
                        }
                    },
                    sourceMap: true,
                    parallel: true
                })
            )
            config.plugins.push(
                new CompressionWebpackPlugin({
                    // 正在匹配需要压缩的文件后缀
                    test: /\.(js|css|svg|woff|ttf|json|html)$/,
                    // 大于10kb的会压缩
                    threshold: 10240
                    // 其余配置查看compression-webpack-plugin
                })
            )
            config.externals = {
                'vue': 'Vue',
                'vuex': 'Vuex',
                'vue-router': 'VueRouter',
                'axios': 'axios'
            }
        }
    },
    devServer: {
        open: true,
        host: "localhost",
        port: "1111",
        proxy:{
            "/api": {
                target: "http://localhost:3000",
                pathRewrite: {"^/api": ""}
            }
        }

    }
}