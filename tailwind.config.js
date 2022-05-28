module.exports = {
    darkMode: "class",
    mode: 'jit',
    content: ['*.html', './retete/*.html', './index.css', './index.js', './tailwind.config.js'],
    theme: {
        extend: {
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                10: '10',
              },
            colors: {
                'verde': '#4fd675',
                'gri': '#3E4242' 
            },
            keyframes: {
                wiggle: {
                    '0%': { transform: 'translateX(0rem)' },
                    '49%': { opacity: '1' },
                    '50%': { transform: 'translateX(10rem)', opacity: '0' },
                    '51%': { transform: 'translateX(-10rem)', opacity: '0' },
                    '52%': { opacity: '1' },
                    '100%': { transform: 'translateX(0rem)', opacity: '1' },
                },
                wiggle2: {
                    '0%': { transform: 'translateX(-10rem)', opacity: '1' },
                    '50%': { transform: 'translateX(0rem)' },
                    '100%': { transform: 'translateX(10rem)' },
                },
                blob: {
                    "0%": {
                        transform: " scale(1)",
                    },
                    "33%": {
                        transform: "scale(1.2)",
                    },
                    "66%": {
                        transform: " scale(0.9)",
                    },
                    "100%": {
                        transform: " scale(1)",
                    },
                },
            },
            animation: {
                wiggle1: 'wiggle 4s linear infinite',
                wiggle2: 'wiggle2 4s linear infinite',
                blob: 'blob 7s infinite',
            },
            fontFamily: {
                'source': ["'Source Serif Pro'", "'serif'"],
                'lato': ["'Lato'", "'sans-serif'"],
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),        
    ],
}