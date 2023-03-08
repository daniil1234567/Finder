/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            'light': '#F4F4F4',
            'middle': '#7f7f7f',
            'white': '#ffffff',
            'black': '#000000',
            'blue': '#6180B1',
            'accentBlue': '#4186F3',
        },
        fontFamily: {
            montserratRegular: ['Montserat-regular', 'sans-serif'],
            montserratSemibold: ['Montserat-semiBold', 'sans-serif'],
            montserratBold: ['Montserat-bold', 'sans-serif'],

            interRegular: ['Inter-regular', 'sans-serif'],
            interSemibold: ['Inter-semiBold', 'sans-serif'],
            interBold: ['Inter-bold', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
}