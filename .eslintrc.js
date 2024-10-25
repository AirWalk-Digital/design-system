module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components']
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};