module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/components', './src/components'],
          ['@/styles', './src/styles'],
          ['@/lib', './src/lib'],

        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
};