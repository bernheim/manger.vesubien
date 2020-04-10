module.exports = {
  theme: {
    extend: {
      colors: {
        'pale-yellow': '#FBE5D3',
        'cambridge': '#AAC0AA',
        'english': {
          'pale': '#C0D0D3',
          'full': '#19535F',
        },
        'crimson': '#DB3A34',
        'rifle': {
          '500': '#3E463E',
          '400': '#616761',
        }
      }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.25rem',
      'xl': '1.5rem',
      '2xl': '1.875rem',
      '3xl': '2.25rem',
      '4xl': '3rem',
      '5xl': '4rem',
      '6xl': '6rem',
    },
    screens: {
      'md': '750px',
      // => @media (min-width: 640px) { ... }

      'lg': '1000px',
      // => @media (min-width: 1024px) { ... }
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
  }
}