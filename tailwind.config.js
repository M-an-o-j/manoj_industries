// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      // subtle scale for micro-animation
      transitionTimingFunction: {
        'in-out-quad': 'cubic-bezier(.4,0,.2,1)'
      }
    }
  },
  plugins: [],
}
