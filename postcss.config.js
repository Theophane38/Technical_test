module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.APP_ENV === 'production' || process.env.APP_ENV === 'staging' ? { cssnano: {} } : {}),
  },
}
