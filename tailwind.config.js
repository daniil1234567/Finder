/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        borderRadius: {
            '18': '18px',
            '15': '15px'
        },
        fontSize: {
            '10': '10px',
            '9': '9px'
        },
        spacing: {
            '428': '428px',
            '466': '466px',
            '41': '41px',
            '36': '36px',
            '22': '22px',
            '18': '18px',
            '15': '15px',
            '10': '10px',
        },
        colors: {
            'light': '#F4F4F4',
            'middle': '#7f7f7f',
            'white': '#ffffff',
            'black': '#000000',
        },
        extend: {},
    },
    plugins: [],
}