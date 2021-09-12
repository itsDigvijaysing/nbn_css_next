// const path = require('path');

// module.exports = {
//     output: {
//         filename: 'my-first-webpack.bundle.js',
//     },
//     module: {
//         rules: [{ test: /\.txt$/, use: 'raw-loader' }],
//     },
// };


module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
}