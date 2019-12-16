//Entry point -> output file

module.exports = {
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  //source map - error tracing
  devtool: 'cheap-module-eval-source-map',
  //dev server - live servers replacement
  devServer: {
    contentBase: __dirname + '/public',
    //making sure we are using client side routing
    historyApiFallback: true
  }
}
