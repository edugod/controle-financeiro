/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#62B6CB', 
				secondary: '#CDC7E5', 
				tertiary: '#F8F7F9', 
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'], // Define a fonte padrão como Roboto
			},
		},
	},
	plugins: [],
}
