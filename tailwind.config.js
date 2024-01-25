module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
        keyframes: {
            scroll: {
                '0%, 100%': { transform: 'translateX(0)' },
                '50%': { transform: 'translateX(-800%)' },
              }
        },
        animation: {
            scroll: 'scroll 60s linear infinite'
        }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
