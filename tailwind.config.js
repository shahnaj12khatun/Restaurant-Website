/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: { // Extending with our existing variables if needed, or just let them coexist
                primary: '#d4a373',
                secondary: '#faedcd',
                dark: '#1a1a1a',
            }
        },
    },
    plugins: [],
}
