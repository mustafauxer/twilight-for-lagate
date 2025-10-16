// webpack.config.cjs
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ThemeWatcher = require('@salla.sa/twilight/watcher.js');
const CopyPlugin = require('copy-webpack-plugin');

const asset = (file = '') => path.resolve(__dirname, 'src/assets', file);
const out   = (file = '') => path.resolve(__dirname, 'public', file);

module.exports = {
  entry: {
    app            : [asset('styles/app.scss'), asset('js/wishlist.js'), asset('js/app.js'), asset('js/blog.js')],
    home           : asset('js/home.js'),
    'product-card' : asset('js/partials/product-card.js'),
    'main-menu'    : asset('js/partials/main-menu.js'),
    'wishlist-card': asset('js/partials/wishlist-card.js'),
    checkout       : [asset('js/cart.js'), asset('js/thankyou.js')],
    pages          : [asset('js/loyalty.js'), asset('js/brands.js')],
    product        : [asset('js/product.js'), asset('js/products.js')],
    order          : asset('js/order.js'),
    testimonials   : asset('js/testimonials.js')
  },

  output: {
    path: out(),                 // public/
    publicPath: '/',             // الروابط تبدأ من الجذر
    filename: '[name].js',
    chunkFilename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]'
  },

  stats: { modules: false, assetsSort: 'size', assetsSpace: 50 },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-runtime', { regenerator: true }]]
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,                      // يطلع CSS كملف
          { loader: 'css-loader', options: { url: false, sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } }, // يعتمد على postcss.config.js الموجود عندك
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      { test: /\.(png|jpe?g|gif|svg|webp)$/i, type: 'asset', generator: { filename: 'images/[name][ext]' } },
      { test: /\.(woff2?|ttf|eot)$/i,        type: 'asset/resource', generator: { filename: 'fonts/[name][ext]' } }
    ]
  },

  plugins: [
    new ThemeWatcher(),
    new MiniCssExtractPlugin({ filename: 'app.css' }),      // ملف CSS النهائي
    new CopyPlugin({ patterns: [{ from: asset('images'), to: out('images') }] })
  ],

  optimization: { minimizer: ['...', new CssMinimizerPlugin()] },

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devtool: 'source-map'
};
