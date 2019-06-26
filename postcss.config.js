
const p__path = require('path')

module.exports = {
	syntax: 'sugarss',
	plugins: {
		//
		'postcss-import': {
			resolve: (id) => {
				if (id.startsWith('/')) {
					id = [id.slice(1), 'sss'].join('.')
					return p__path.resolve('source', id)
				}
				if (id.startsWith('~/')) {
					id = [id.slice(2), 'sss'].join('.')
					return p__path.resolve('source', 'styles', id)
				}
				return id
			},
		},
		//
		'postcss-preset-env': {},
		//
		'postcss-mixins': {},
		//
		'postcss-extend': {},
		'postcss-hexrgba': {},
		'postcss-short': {},
		'postcss-url': {},
	},
}
