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
    umdNamedDefine: true,
  },
  plugins: getPlugins(),
  resolve: {
    symlinks: false,
    alias: {
      'react-dom': '@hot-loader/react-dom',
      'react': path.resolve(helpers.sourcePath, '../node_modules/react'),
      'neo4j-driver': path.resolve(helpers.sourcePath, '../node_modules/neo4j-driver'),
      'd3': path.resolve(helpers.sourcePath, '../node_modules/d3'),
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
  externals: {
    // Don't bundle react or react-dom
    react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React"
    },
    "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM"
    },
    "neo4j-driver": {
        commonjs: "neo4j-driver",
        commonjs2: "neo4j-driver",
        amd: "neo4j-driver",
        root: "neo4j-driver"
    },
    "d3": {
        commonjs: "d3",
        commonjs2: "d3",
        amd: "d3",
        root: "d3"
    }
  },
  module: {
    rules
  },
  devtool: 'inline-source-map', // helpers.isProduction ? false : 'inline-source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true,
    hot: !helpers.isProduction
  }
}
