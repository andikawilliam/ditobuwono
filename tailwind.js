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
        'lg:row-span-1', 'lg:row-span-2', 'lg:row-span-3', 'lg:row-span-4', 'lg:row-span-5',
        'lg:col-span-1', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-4', 'lg:col-span-5'
      ],
    }
  },
  theme: {
    extend: {
      colors: {
        'gray-ivory': "#eee",
        'black-onyx': "#0f0f0f",
        'gray-background': '#121217',
        'gray-dito': '#262626',
        'gray-dito-text': '#767676'
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'oxygen': ['Oxygen', 'sans-serif'],
        'cormorant': ['Cormorant', 'serif'],
        'roboto-slab': ['Roboto-Slab', 'serif'],
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
