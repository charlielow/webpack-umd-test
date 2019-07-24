const path = require('path');

withoutImportConfig = {

  mode: 'development',
  
  entry: './public/src/testWithoutImport.js',

  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'testWithoutImport.js',
    libraryTarget: 'umd'
  },

};

withImportConfig = {

  mode: 'development',
  
  entry: './public/src/testWithImport.js',

  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'testWithImport.js',
    libraryTarget: 'umd'
  },

};

module.exports = [withoutImportConfig, withImportConfig]