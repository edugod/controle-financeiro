/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#007bff', // Sua cor primária
				secondary: '#6c757d', // Sua cor secundária
				tertiary: '#28a745', // Sua cor terciária
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'], // Define a fonte padrão como Roboto
			},
		},
	},
	plugins: [],
}
