import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'spotify-green': '#1DB954',
				'spotify-green-dark': '#169c46'
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
