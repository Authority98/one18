/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-dark': '#16369F', // Royal Blue
                'brand-accent': '#F59E0B', // Vibrant Gold
                'brand-gold': '#FFD54F', // Light Gold
                'brand-cream': '#FFFFFF', // White
                'brand-green': '#16369F', // Indigo
            },
        },
    },
    plugins: [],
}
