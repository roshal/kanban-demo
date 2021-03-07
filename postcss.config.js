
const r__path = require('path')

const alias = {
	'//': (id) => {
		return r__path.resolve(id)
	},
	'~/': (id) => {
		return r__path.resolve('styles', id)
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
					id = [id, 'pcss'].join('.')
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
