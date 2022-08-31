const {
    VantResolver
} = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
    productionSourceMap: false, // 生产环境 sourceMap  

    configureWebpack: {
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },
};