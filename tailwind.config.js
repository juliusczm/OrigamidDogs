/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx}'],
    theme: {
        extend: {
            backgroundImage: {
                login: "url('./src/Assets/usuario.svg')",
            },
        },
    },
    plugins: [],
};
