
const p__nps_utils = require('nps-utils')

const {
	series: {
		nps: series,
	},
	concurrent: {
		nps: concurrent,
	},
} = p__nps_utils

const scripts = {

	analyze: series('serve.analyze'),
	develop: series('serve.develop'),
	produce: series('serve.produce'),

	release: series('clean', 'build.produce', 'firebase.deploy'),

	lint: concurrent('eslint', 'stylelint'),
	test: series('jest'),

	clean: 'rm -fr public/*',

	build: {
		analyze: 'webpack --analyze',
		develop: 'webpack --develop',
		produce: 'webpack --produce',
	},
	watch: {
		analyze: 'webpack --watch --analyze',
		develop: 'webpack --watch --develop',
		produce: 'webpack --watch --produce',
	},
	serve: {
		analyze: 'webpack-dev-server --hot --analyze',
		develop: 'webpack-dev-server --hot --develop',
		produce: 'webpack-dev-server --hot --produce',
	},

	firebase: {
		deploy: 'firebase deploy',
		login: {
			default: 'firebase login',
			reauth: 'firebase login --reauth',
		},
		serve: 'firebase serve',
	},

	eslint: {
		default: 'eslint webpack source',
		fix: 'eslint --fix webpack source',
	},
	stylelint: {
		default: 'stylelint styles source/**/*.sss',
		fix: 'stylelint --fix styles source/**/*.sss',
	},

	jest: {
		default: 'jest source',
		watch: 'jest --watch source',
	},

}

module.exports = {
	scripts,
}
