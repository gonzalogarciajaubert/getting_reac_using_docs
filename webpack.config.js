module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.js.$/,
                exclude: 'node_modules',
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                },
            },
        ],
    },
};
