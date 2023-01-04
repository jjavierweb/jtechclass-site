const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: 'rgb(var(--color-primary-50))',
					100: 'rgb(var(--color-primary-100))',
					200: 'rgb(var(--color-primary-200))',
					300: 'rgb(var(--color-primary-300))',
					400: 'rgb(var(--color-primary-400))',
					500: 'rgb(var(--color-primary-500))',
					600: 'rgb(var(--color-primary-600))',
					700: 'rgb(var(--color-primary-700))',
					800: 'rgb(var(--color-primary-800))',
					900: 'rgb(var(--color-primary-900))'
				},
				secondary: {
					50: 'rgb(var(--color-secondary-50))',
					100: 'rgb(var(--color-secondary-100))',
					200: 'rgb(var(--color-secondary-200))',
					300: 'rgb(var(--color-secondary-300))',
					400: 'rgb(var(--color-secondary-400))',
					500: 'rgb(var(--color-secondary-500))',
					600: 'rgb(var(--color-secondary-600))',
					700: 'rgb(var(--color-secondary-700))',
					800: 'rgb(var(--color-secondary-800))',
					900: 'rgb(var(--color-secondary-900))'
				},
				tertiary: {
					50: 'rgb(var(--color-tertiary-50))',
					100: 'rgb(var(--color-tertiary-100))',
					200: 'rgb(var(--color-tertiary-200))',
					300: 'rgb(var(--color-tertiary-300))',
					400: 'rgb(var(--color-tertiary-400))',
					500: 'rgb(var(--color-tertiary-500))',
					600: 'rgb(var(--color-tertiary-600))',
					700: 'rgb(var(--color-tertiary-700))',
					800: 'rgb(var(--color-tertiary-800))',
					900: 'rgb(var(--color-tertiary-900))'
				},
				success: {
					50: 'rgb(var(--color-success-50))',
					100: 'rgb(var(--color-success-100))',
					200: 'rgb(var(--color-success-200))',
					300: 'rgb(var(--color-success-300))',
					400: 'rgb(var(--color-success-400))',
					500: 'rgb(var(--color-success-500))',
					600: 'rgb(var(--color-success-600))',
					700: 'rgb(var(--color-success-700))',
					800: 'rgb(var(--color-success-800))',
					900: 'rgb(var(--color-success-900))'
				},
				warning: {
					50: 'rgb(var(--color-warning-50))',
					100: 'rgb(var(--color-warning-100))',
					200: 'rgb(var(--color-warning-200))',
					300: 'rgb(var(--color-warning-300))',
					400: 'rgb(var(--color-warning-400))',
					500: 'rgb(var(--color-warning-500))',
					600: 'rgb(var(--color-warning-600))',
					700: 'rgb(var(--color-warning-700))',
					800: 'rgb(var(--color-warning-800))',
					900: 'rgb(var(--color-warning-900))'
				},
				error: {
					50: 'rgb(var(--color-error-50))',
					100: 'rgb(var(--color-error-100))',
					200: 'rgb(var(--color-error-200))',
					300: 'rgb(var(--color-error-300))',
					400: 'rgb(var(--color-error-400))',
					500: 'rgb(var(--color-error-500))',
					600: 'rgb(var(--color-error-600))',
					700: 'rgb(var(--color-error-700))',
					800: 'rgb(var(--color-error-800))',
					900: 'rgb(var(--color-error-900))'
				},
				surface: {
					50: 'rgb(var(--color-surface-50))',
					100: 'rgb(var(--color-surface-100))',
					200: 'rgb(var(--color-surface-200))',
					300: 'rgb(var(--color-surface-300))',
					400: 'rgb(var(--color-surface-400))',
					500: 'rgb(var(--color-surface-500))',
					600: 'rgb(var(--color-surface-600))',
					700: 'rgb(var(--color-surface-700))',
					800: 'rgb(var(--color-surface-800))',
					900: 'rgb(var(--color-surface-900))'
				},
				'theme-font-color-dark': 'var(--theme-font-color-dark)',
				'theme-font-color-base': 'var(--theme-font-color-base)'
			},
			fontFamily: 'var(--theme-font-family-base)'
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		plugin(function ({ addComponents }) {
			addComponents({
				'.btn': {
					'border-radius': 'var(--theme-rounded-base)',
					padding: '9px 1.25rem',
					'font-size': '1rem',
					'line-height': '1.5rem',
					'white-space': 'nowrap',
					'text-align': 'center',
					display: 'inline-flex',
					'align-items': 'center',
					'justify-content': 'center',
					'transition-propery': 'all',
					'transition-timing-funciton': 'cubic-bezier(.4,0,.2,1)',
					'transition-duration': '.15s',
					'&:hover': {
						'--tw-brightness': 'brightness(1.1)',
						filter:
							'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
					}
				},
				'.btn-sm': {
					padding: '0.375rem 0.75rem',
					'font-size': '0.875rem',
					'line-height': '1.25rem'
				}
			});
		})
	]
};
