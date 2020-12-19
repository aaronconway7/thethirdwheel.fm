module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                brand: `#4ADFB8`,
            },
            fontFamily: {
                brand: [`Kanit`],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
