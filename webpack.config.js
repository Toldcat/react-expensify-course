//Entry point -> output file
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' })
}

module.exports = env => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {
    //entry file
    entry: ['@babel/polyfill', './src/app.js'],
    //compiled file
    output: {
      filename: 'bundle.js',
      path: __dirname + '/public' + '/dist',
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
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(
          process.env.FIREBASE_API_KEY
        ),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN
        ),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(
          process.env.FIREBASE_DATABASE_URL
        ),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
          process.env.FIREBASE_PROJECT_ID
        ),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET
        ),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
          process.env.FIREBASE_MESSAGING_SENDER_ID
        )
      })
    ],
    //source map - error tracing
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    //dev server - live servers replacement
    devServer: {
      contentBase: __dirname + '/public',
      //making sure we are using client side routing
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}
