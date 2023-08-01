module.exports = {
  important: true,
  content: ['./app/**/*.js'],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 500ms linear',
      },
      keyframes: (theme) => ({
        wiggle: {
          '0%': {transform: 'translateX(0)'},
          '10%': {transform: 'translateX(-20px)'},
          '20%': {transform: 'translateX(0)'},
          '30%': {transform: 'translateX(20px)'},
          '40%': {transform: 'translateX(0)'},
          '50%': {transform: 'translateX(-20px)'},
          '60%': {transform: 'translateX(0)'},
          '70%': {transform: 'translateX(20px)'},
          '80%': {transform: 'translateX(0)'},
          '90%': {transform: 'translateX(-20px)'},
          '200%': {transform: 'translateX(0)'},
        },
      }),
    }
  },
}
