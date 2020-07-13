const path = require('path')
const getPlugins = require('./webpack-plugins')
const rules = require('./webpack-rules')
const helpers = require('./webpack-helpers')

module.exports = {
  mode: helpers.isProduction ? 'production' : 'development',
  node: {
    fs: 'empty'
  },
  entry: path.resolve(helpers.isProduction ? helpers.sourcePath : helpers.examplePath, 'index.jsx'),
  output: {
    filename: 'index.js',
    path: helpers.isProduction ? helpers.libPath : helpers.exampleBuildPath,
    library: 'Neo4jVisualization',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  plugins: getPlugins(),
  resolve: {
    // symlinks: false,
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'src-root': path.resolve(helpers.sourcePath),
      'project-root': path.resolve(__dirname, '../'),
      services: path.resolve(helpers.sourcePath, 'shared/services'),
      'browser-services': path.resolve(helpers.browserPath, 'services'),
      shared: path.resolve(helpers.sourcePath, 'shared'),
      'browser-components': path.resolve(helpers.browserPath, 'components'),
      'browser-hooks': path.resolve(helpers.browserPath, 'hooks'),
      browser: path.resolve(helpers.browserPath),
      'browser-styles': path.resolve(helpers.browserPath, 'styles'),
      icons: path.resolve(helpers.browserPath, 'icons')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|@firebase|d3|codemirror)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        },
        'cypher-codemirror': {
          test: /[\\/]node_modules[\\/](cypher-codemirror|cypher-editor-support)[\\/]/,
          name: 'cypher-codemirror',
          chunks: 'all',
          enforce: true
        },
        ui: {
          test: /[\\/]node_modules[\\/](@relate-by-ui|semantic-ui-react)[\\/]/,
          name: 'ui',
          chunks: 'all',
          enforce: true
        },
        'neo4j-driver': {
          test: /[\\/]node_modules[\\/](text-encoding|neo4j-driver)[\\/]/,
          name: 'neo4j-driver',
          chunks: 'all',
          enforce: true
        },
        worker: {
          test: /boltWorker/,
          name: 'worker',
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  devtool: helpers.isProduction ? false : 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    hot: !helpers.isProduction
  }
}
