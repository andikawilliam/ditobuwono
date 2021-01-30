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
      safelist: [
        'md:row-span-1', 'md:row-span-2', 'md:row-span-3', 'md:row-span-4', 'md:row-span-5',
        'md:col-span-1', 'md:col-span-2', 'md:col-span-3', 'md:col-span-4', 'md:col-span-5'
      ],
    }
  },
  theme: {
    extend: {
      colors: {
        'gray-ivory': "#e7e7e7",
        'black-onyx': "#0f0f0f",
        'gray-background': '#121217',
        'gray-dito': '#262626',
        'gray-dito-text': '#767676'
      },
      fontFamily: {
        'cormorant': ['Cormorant', 'serif'],
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        'playfair-display': ['"Playfair Display"', 'serif'],
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      fontSize: {
        '1.7vh': '1.7vh',
        '1.8vh': '1.8vh',
      },
      padding: {
        '20vh': '20vh',
        '30vh': '30vh'
      }
    }
  },
  variants: {},
  plugins: []
}
