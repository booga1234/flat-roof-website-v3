/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			fontSize: {
				button: ['15px', { lineHeight: 'normal', fontWeight: '600' }],
			},
			colors: {
				brand: {
					primary: '#222222',
					secondary: '#F2F2F2',
					white: '#F2F2F2',
					background: '#F7F7F7'
				},
			},
			borderRadius: {
				button: '0.625rem',
			},
		},
	},
	plugins: [],
}

