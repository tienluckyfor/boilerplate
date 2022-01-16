module.exports = {
	purge: [],
	theme: {
		extend: {
			maxHeight: {
				'32': '8rem',
			}
		},
	},
	variants: {
		display: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		padding: ['responsive'],
		inset: ['responsive']
	},
	plugins: [],
	future: {
		removeDeprecatedGapUtilities: true,
	},
}