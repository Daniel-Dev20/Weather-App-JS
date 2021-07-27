


const htmlWebpackPlugin    = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    mode: 'development',
    output: {

        filename: 'main.js'
    },

    module: {

        rules: [

    
            {
                test: /styles\.css$/,
                use:[
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options:{

                    sources: false
                    
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [

                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                        
                    }
                ]

                   
                
            }
        ]
    },
    plugins: [

        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),

        new miniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        })

      
        
      
    ]
}