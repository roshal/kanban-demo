
const p__path = require('path')

const object = {
	'//': (id) => {
		return p__path.resolve(id)
	},
	'~/': (id) => {
		return p__path.resolve('styles', id)
	},
}

module.exports = {
	syntax: 'sugarss',
	plugins: {
		//
		'postcss-import': {
			resolve: (id) => {
				for (const key in object) {
					if (id.startsWith(key)) {
						id = id.slice(key.length)
						id = object[key](id)
						id = [id, 'sss'].join('.')
						break
					}
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
