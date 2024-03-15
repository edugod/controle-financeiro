/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#62B6CB',
				secondary: '#CDC7E5',
				tertiary: '#fff',
				forth: '#7DC95E',
			},
			fontFamily: {
				sans: ['Roboto', 'sans-serif'], // Define a fonte padrão como Roboto
			},
		},
	},
	plugins: [],
}
