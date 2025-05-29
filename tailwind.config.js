/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0070f3',
                secondary: '#1a1a1a',
                danger: '#ff4444',
                success: '#00c853',
                warning: '#ffab00',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}