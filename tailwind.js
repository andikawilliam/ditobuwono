module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: {
    content: [
      './public/**/*.html',
      './src/**/*.html',
      './src/**/*.vue',
    ],
    // These options are passed through directly to PurgeCSS
    options: {
      whitelist: [
        'row-span-1', 'row-span-2', 'row-span-3', 'row-span-4', 'row-span-5',
        'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5'
      ],
    }
  },
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
