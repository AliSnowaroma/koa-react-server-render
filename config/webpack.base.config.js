const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry:path.resolve(__dirname,'../src/client/index.js'),
    output:{
        filename:['hash'].js,
        path:path.resolve(__dirname,'../build'),
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.(jsx|js)$/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ],
                exclude:'/node_modules'
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".css", ".png", ".jpg"]
    },
    plugins: []
}