//Entry point -> output file
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {
    //entry file
    entry: './src/app.js',
    //compiled file
    output: {
      filename: 'bundle.js',
      path: __dirname + '/public',
      publicPath: '/'
    },
    //module adding
    module: {
      rules: [
        //jsx rule
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        //css & scss rule
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              },
              {
                loader: 'sass-loader',
                options: { sourceMap: true }
              }
            ]
          })
        }
      ]
    },
    plugins: [CSSExtract],
    //source map - error tracing
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    //dev server - live servers replacement
    devServer: {
      contentBase: __dirname + '/public',
      //making sure we are using client side routing
      historyApiFallback: true
    }
  }
}
