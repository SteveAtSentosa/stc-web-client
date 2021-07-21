module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    debug: {
      sourceMap: 'inline',
      retainLines: true
    }
  },
  plugins: ['recharts']
}
