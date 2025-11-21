/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#2C1810',
                'brand-accent': '#E07A5F',
                'brand-gold': '#F2CC8F',
                'brand-cream': '#F4F1DE',
                'brand-green': '#3D405B',
            },
        },
    },
    plugins: [],
}
