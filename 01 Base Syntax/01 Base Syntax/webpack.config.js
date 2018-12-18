var config = {
    entry: './main.js',
    mode: 'development',
    output: {
       path:'/',
       filename: 'index.js',
    },
    devServer: {
       inline: true,
       port: 4040
    },
    module: {
       rules: [
          {
             test: /\.js?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
                presets: ['es2015', 'react','stage-0']
             }
          },
          {
            test: /\.css?$/,
            exclude: /node_modules/,
            use:[
              'style-loader',
              'css-loader'
            ]
          }
       ]
    }
 }
 module.exports = config;