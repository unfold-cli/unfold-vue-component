module.exports = {
    lintOnSave: false,
    css: {
        extract: false,
    },
    configureWebpack: {
        externals: process.env.NODE_ENV === 'production' ? {
            lodash: {
                commonjs: 'lodash',
                commonjs2: 'lodash',
                root: '_'
            }
        } : {}
    },
    publicPath: ''
};
