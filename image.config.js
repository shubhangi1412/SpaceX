var ImageminPlugin = require('imagemin-webpack-plugin').default
module.exports = {
    plugins: [
      // Copy the images folder and optimize all the images
      new CopyWebpackPlugin([{
        from: 'images/'
      }]),
      new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
    ]
  }