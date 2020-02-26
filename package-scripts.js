
const p__nps_utils = require('nps-utils')

const {
	series: {
		nps: series,
	},
	concurrent: {
		nps: concurrent,
	},
} = p__nps_utils

const object = {}

exports.scripts = object

object.analyze = series('serve.analyze')
object.develop = series('serve.develop')
object.produce = series('serve.produce')

object.release = series('clean', 'build.produce', 'firebase.deploy')

object.clean = 'rimraf public/*'

object.lint = concurrent('eslint', 'stylelint')
object.test = series('jest')

object.build = {
	analyze: 'webpack --analyze',
	develop: 'webpack --develop',
	produce: 'webpack --produce',
}

object.watch = {
	analyze: 'webpack --watch --analyze',
	develop: 'webpack --watch --develop',
	produce: 'webpack --watch --produce',
}

object.serve = {
	analyze: 'webpack-dev-server --hot --analyze',
	develop: 'webpack-dev-server --hot --develop',
	produce: 'webpack-dev-server --hot --produce',
}

object.firebase = {
	deploy: 'firebase deploy',
	login: {
		default: 'firebase login',
		reauth: 'firebase login --reauth',
	},
	serve: 'firebase serve',
}

object.eslint = {
	default: 'eslint webpack source',
	fix: 'eslint --fix webpack source',
}

object.stylelint = {
	default: 'stylelint styles source/**/*.sss',
	fix: 'stylelint --fix styles source/**/*.sss',
}

object.jest = {
	default: 'jest source',
	watch: 'jest --watch source',
}
