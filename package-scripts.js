
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
	analyze: 'webpack --env analyze',
	develop: 'webpack --env develop',
	produce: 'webpack --env produce',
}

nps.watch = {
	analyze: 'webpack --env analyze --watch',
	develop: 'webpack --env develop --watch',
	produce: 'webpack --env produce --watch',
}

nps.serve = {
	analyze: 'webpack serve --env analyze --hot',
	develop: 'webpack serve --env develop --hot',
	produce: 'webpack serve --env produce --hot',
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
	default: 'eslint source webpack',
	fix: 'eslint --fix source webpack',
}

nps.stylelint = {
	default: 'stylelint styles source/**/*.pcss',
	fix: 'stylelint --fix styles source/**/*.pcss',
}

nps.jest = {
	default: 'jest source',
	watch: 'jest --watch source',
}
