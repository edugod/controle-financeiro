/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#62B6CB',
				secondary: '#CDC7E5',
				tertiary: '#fff',
				forth: 'rgba(0, 212, 255, 1)',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'], // Define a fonte padrão como Roboto
			},
		},
	},
	plugins: [],
}
