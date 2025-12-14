/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#1E3A8A', // Royal Blue
                'brand-accent': '#F59E0B', // Vibrant Gold
                'brand-gold': '#FFD54F', // Light Gold
                'brand-cream': '#FFFFFF', // White
                'brand-green': '#3949AB', // Indigo
            },
        },
    },
    plugins: [],
}
