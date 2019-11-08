
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
	test: concurrent('jest'),

	clean: 'rm -fr public/*',

	build: {
		analyze: 'webpack --analyze',
		develop: 'webpack --develop',
		produce: 'webpack --produce',
	},
	watch: {
		analyze: 'webpack --analyze --watch',
		develop: 'webpack --develop --watch',
		produce: 'webpack --produce --watch',
	},
	serve: {
		analyze: 'webpack-dev-server --analyze --hot',
		develop: 'webpack-dev-server --develop --hot',
		produce: 'webpack-dev-server --produce --hot',
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
		default: 'stylelint source/**/*.sss',
		fix: 'stylelint --fix source/**/*.sss',
	},

	jest: {
		default: 'jest source',
		watch: 'jest --watch source',
	},

}


module.exports = {
	scripts,
}
