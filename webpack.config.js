const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports ={
    entry:'./src/index.js',
    output:{
        path: path.join(__dirname),
        filename:'index_bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }

}
