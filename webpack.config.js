const path = require('path');
var vueLoaderConfig = require('./vue-loader.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './index.js',
    view: './view.js'
  },
  node: { fs: 'empty' },
  output: {
    filename: 'bundle.[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: '.',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
        {
            test: /\.vue$/,
            loader: "vue-loader",
            options: vueLoaderConfig
        }
    ]
  },
    plugins: [

        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          chunks: ['index'],
          inject: true
      }),
      new HtmlWebpackPlugin({
        filename: 'view.html',
        template: 'view.html',
        chunks: ['view'],
        inject: true
    })
]

};

