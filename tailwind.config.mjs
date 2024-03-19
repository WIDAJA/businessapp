/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#16132C',
				'secondary': '#2E294E',
				'accent': '#DB90FF'
			}
		},
	},
	plugins: [animations],
}
