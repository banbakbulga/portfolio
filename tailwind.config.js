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
                secondary: '#64ffda',
                accent: '#bb86fc',
                'text-main': '#ffffff',
                'text-sub': '#b0b0b0',
                'text-light': '#808080',
                'bg-main': '#121212',
                'bg-sub': '#1e1e1e',
                'bg-third': '#2a2a2a',
                'bg-warm': '#1a1a1a',
                'border-main': '#333333',
            },
            boxShadow: {
                'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
                'md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
