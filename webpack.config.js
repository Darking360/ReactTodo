var path = require("path");
var webpack = require('webpack')
module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname,'app/components/Main.jsx'),
      Todo: path.resolve(__dirname,'app/components/Todo.jsx'),
      TodoApp: path.resolve(__dirname,'app/components/TodoApp.jsx'),
      TodoForm: path.resolve(__dirname,'app/components/TodoForm.jsx'),
      TodoList: path.resolve(__dirname,'app/components/TodoList.jsx'),
      TodoSearch: path.resolve(__dirname,'app/components/TodoSearch.jsx'),
      Actions: path.resolve(__dirname,'app/actions/index.jsx'),
      Reducers: path.resolve(__dirname,'app/reducers/index.jsx'),
      Store: path.resolve(__dirname,'app/store/configStore.jsx')
    },
    extensions: ['.js','.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
