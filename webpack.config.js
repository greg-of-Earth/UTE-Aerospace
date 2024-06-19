// not currently in use

const path = require('path');

module.exports = {
    entry: './frontend/src/script.js',  
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'frontend', 'public'),  // Adjust path to resolve correctly
        publicPath: '/'  // Public URL path for assets (optional, adjust as needed)
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development',  // Change to 'production' for production build
};
