module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [
    './public/**/*.html',
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'gray-ivory': "#F7F7F2",
        'black-onyx': "#0f0f0f",
        'gray-background': '#121217',
        'gray-dito': '#262626',
        'gray-dito-text': '#767676'
      }
    }
  },
  variants: {},
  plugins: []
}
