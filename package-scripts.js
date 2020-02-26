
const p__nps_utils = require('nps-utils')

const {
	series: {
		nps: series,
	},
	concurrent: {
		nps: concurrent,
	},
} = p__nps_utils

const nps = {}

exports.scripts = nps

nps.analyze = series('serve.analyze')
nps.develop = series('serve.develop')
nps.produce = series('serve.produce')

nps.release = series('clean', 'build.produce', 'firebase.deploy')

nps.clean = 'rimraf public/*'

nps.lint = concurrent('eslint', 'stylelint')
nps.test = series('jest')

nps.build = {
	analyze: 'webpack --analyze',
	develop: 'webpack --develop',
	produce: 'webpack --produce',
}

nps.watch = {
	analyze: 'webpack --watch --analyze',
	develop: 'webpack --watch --develop',
	produce: 'webpack --watch --produce',
}

nps.serve = {
	analyze: 'webpack-dev-server --hot --analyze',
	develop: 'webpack-dev-server --hot --develop',
	produce: 'webpack-dev-server --hot --produce',
}

nps.firebase = {
	deploy: 'firebase deploy',
	login: {
		default: 'firebase login',
		reauth: 'firebase login --reauth',
	},
	serve: 'firebase serve',
}

nps.eslint = {
	default: 'eslint webpack source',
	fix: 'eslint --fix webpack source',
}

nps.stylelint = {
	default: 'stylelint styles source/**/*.sss',
	fix: 'stylelint --fix styles source/**/*.sss',
}

nps.jest = {
	default: 'jest source',
	watch: 'jest --watch source',
}
