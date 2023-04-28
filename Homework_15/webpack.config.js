const path = require('path')

module.exports = {
    entry: './index.js',
    /*output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },*/
    mode: 'production',
    module: {
        rules: [{
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                },
            ],
        },
        {
            test: /\.css$/i,
            use: ["css-loader"],
          },
        ]
    }
    

}


//"build": "webpack build", // is from package.json
