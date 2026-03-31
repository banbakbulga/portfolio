/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ffffff',
                'primary-dark': '#e0e0e0',
                secondary: '#a3a3a3',     // neutral 400
                accent: '#e5e5e5',        // neutral 200
                'text-main': '#f5f5f5',   // neutral 100
                'text-sub': '#a3a3a3',    // neutral 400
                'text-light': '#737373',  // neutral 500
                'bg-main': '#121212',     // neutral dark
                'bg-sub': '#1e1e1e',      // neutral dark lighter
                'bg-third': '#2a2a2a',    // neutral dark lighter 2
                'bg-warm': '#171717',     // warm neutral
                'border-main': '#333333', // neutral border
            },
            boxShadow: {
                'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
                'md': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.5)',
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
            },
            animation: {
                blob: 'blob 7s infinite',
            },
        },
    },
    plugins: [],
}
