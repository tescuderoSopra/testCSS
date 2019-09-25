const path = require('path');
const merge = require('webpack-merge');
const { createDefaultConfig } = require('@open-wc/building-webpack');

const defaultConfig = createDefaultConfig({
    input: path.resolve(__dirname, './index.html'),
  });
  
module.exports = merge(defaultConfig, {
    module: {
        rules: [
            {
                test: /\.css|\.s(c|a)ss$/,
                use: [{
                    loader: 'lit-scss-loader',
                    options: {
                        minify: true, // defaults to false
                    },
                }, 'extract-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
});