
const p__path = require('path')

const alias = {
	'//': (id) => {
		return p__path.resolve(id)
	},
	'~/': (id) => {
		return p__path.resolve('styles', id)
	},
}

exports.syntax = 'sugarss'

exports.plugins = {
	'postcss-import': {
		resolve: (id) => {
			for (const key in alias) {
				if (id.startsWith(key)) {
					id = id.slice(key.length)
					id = alias[key](id)
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
	'postcss-simple-vars': {},
	'postcss-url': {},
}
