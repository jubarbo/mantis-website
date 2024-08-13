/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main-green': '#56d07d'
			}
		},
		fontFamily:{
			'cronus-round': ['CronusRound', 'sans-serif'],
			'aktiv-grotesk': ["aktiv-grotesk-std", 'sans-serif']
		}
	},
	plugins: [],
}
