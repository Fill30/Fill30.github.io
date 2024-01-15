/** @type {import("prettier").Config} */
module.exports = {
    plugins: ['prettier-plugin-astro'],
    tabWidth: 4,
    semi: false,
    singleQuote: true,
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
}
