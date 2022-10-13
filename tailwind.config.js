/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-blue-d": "#2b3945",
				"very-dark-blue-d": "#202c37",
				"very-dark-blue-l": "#111517",
				"dark-grey-l": "#858585",
				"very-light-grey-l": "#fafafa",
			},
			fontFamily: {
				nunito: ["Nunito Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
