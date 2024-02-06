module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      letterSpacing: {
        common: '-0.02rem'
      },
      colors: {
        clifford: '#da373d',
        'midnight-blue': '#001F2C',
        'dark-forest-green': '#21422F',
        'forest-green': '#2C6846',
        'green-solid': '#A6CE39',
        'sage-mist': '#92AE85',
        'deep-state-blue':'#1A3642'
      },
      gradientColorStops: (theme) => ({
        'green-solid': '#A6CE39',
        'white-transparent': 'rgba(255, 255, 255, 0.1)'
      })
    }
  }
}
